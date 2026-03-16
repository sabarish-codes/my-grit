import express from 'express';
import type {Request, Response} from 'express';
import { readItem, createItem, deleteItem, hashBody, claimIdempotencyKey, completeIdempotencyKey, itemsSize } from './sharedStore';
import { ItemParams, Item } from './types';
import { randomUUID } from 'crypto';

const app = express();
app.use(express.json());

//create item
app.post('/items', (req: Request<ItemParams>, res: Response) => {

    const RESPONSE_STATUS = 201;
    const RESPONSE_MESSAGE = 'Item created successfully';

    const name: string = req.body.name;
    if(!name){
        return res.status(400).json({message: 'Name field is required'});
    }

    const idempotencyKey = req.headers['idempotency-key'] as string | undefined; // express converts all http headers to lowercase
    if(!idempotencyKey){
        return res.status(400).json({message: 'Missing idempotency key header'});
    }
    console.log('Idempotency key: ', idempotencyKey);

    const bodyHash = hashBody(req.body);
    const itemId = randomUUID(); // resource id acts as metadata of sideeffect to handle partial failure scenarios(pre-store crash)

    const claim = claimIdempotencyKey(idempotencyKey, bodyHash, itemId);

    // idempotency key exists in record
    if(!claim.success){
        const record = claim.record!;

        // body mismatch
        if(bodyHash !== record.bodyHash){
            return res.status(409).json({message: 'Conflict - Different payload detected'});
        }

        // In progress 
        const item = readItem(record.resourceId);
        const resourceExists: boolean = item ? true : false;

        if(record.status==='IN_PROGRESS' && resourceExists){ // partial failure, pre-store crash happenend so recover and store
            record.responseStatus = RESPONSE_STATUS;
            record.responseBody = {
                data: item!,
                message: RESPONSE_MESSAGE
            };
            record.status = 'COMPLETED';
            return res.status(record.responseStatus).json(record.responseBody);
        }

        if(record.status==='IN_PROGRESS' && !resourceExists){ // the request is in process , resource not created
            return res.status(409).json({message: 'Request in in progress'});
        }

        // completed request - happy path
        if(record.status === 'COMPLETED'){
            return res.status(record.responseStatus!).json(record.responseBody);
        }
    }

    const item: Item = {
        id: itemId,
        name,
        createdAt: new Date()
    }
    createItem(itemId, item);

    completeIdempotencyKey(idempotencyKey, RESPONSE_STATUS, {data: item, message: RESPONSE_MESSAGE});
    itemsSize();
    return res.status(RESPONSE_STATUS).json({data: item, message: RESPONSE_MESSAGE});

})

//read item
app.get('/items/:id', (req: Request<ItemParams>, res: Response) => {
    const item = readItem(req.params.id);
    if(!item){
        return res.status(404).json({message: 'Item not found'});
    }
    return res.json({data: item, message: 'Item fetched successfully'});
})

//update item
app.patch('/items/:id', (req: Request<ItemParams>, res: Response) => {
    const name: string = req.body.name;
    if(!name){
        return res.status(400).json({message: 'Name field is required'});
    }
    const item = readItem(req.params.id);
    if(!item){
        return res.status(404).json({message: 'Item not found'});
    }
    item.name = name;
    return res.json({data: item, message: 'Item updated successfully'});
})

//delete item
app.delete('/items/:id', (req: Request<ItemParams>, res: Response) => {
    const item = readItem(req.params.id);
    if(!item){
        return res.status(404).json({message: 'Item not found'});
    }
    deleteItem(item.id);
    return res.status(204).json({message: 'Item deleted successfully'});
})


const app2 = app;
export default app2;