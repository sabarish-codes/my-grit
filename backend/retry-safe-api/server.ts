import express from 'express';
import type { Request, Response } from 'express';
import { randomUUID, createHash } from 'crypto';

const app = express();

app.use(express.json()); // middleware which parses the HTTP request body (JSON) to usable JS object

interface Item {
    id: string,
    name: string,
    createdAt: Date
}

type ItemParams = {
    id: string
}

type ApiResponseBody = {
    data: Item,
    message: string
}

type IdempotencyRecord = {
    status: number,
    body: ApiResponseBody,
    bodyHash: string
}


const items = new Map<string, Item>();

const idempotencyStore = new Map<string, IdempotencyRecord>(); // key: item

// create item
app.post('/items', (req: Request, res: Response) => {

    const idempotencyKey = req.headers['idempotency-key'] as string | undefined; // express converts all http headers to lowercase
                                                                                 // 'idempotency-key' works but 'Idempotency-Key' didn't
    console.log(idempotencyKey);
    if(idempotencyKey && idempotencyStore.has(idempotencyKey)){
        const stored = idempotencyStore.get(idempotencyKey);
        const currentBodyHash = hashPayload(req.body);
        if(currentBodyHash !== stored?.bodyHash){
            return res.status(409).json({message: 'Conflict - Idempotency key used with different payload'})
        }
        return res.status(stored?.status || 201).json(stored?.body)
    }

    const name: string = req.body.name;
    if(!name){
        return res.status(400).json({message: 'name required'});
    }

    const id = randomUUID();
    const item: Item = {
        id,
        name,
        createdAt: new Date()
    }
    items.set(id, item);

    if(idempotencyKey){ // store only when the key exists, to prevent undefined: response
        const bodyHash = hashPayload(req.body);
        idempotencyStore.set(idempotencyKey, {
            status: 201,
            body: {
                data: item,
                message: 'Item created successfully'
            },
            bodyHash
        });
    }
    console.log('Items: ', items.size);

    return res.status(201).json({data: item, message: 'Item created successfully'});
})

// read item
app.get('/items/:id', (req: Request<ItemParams>, res: Response) => {
    const item = items.get(req.params.id);
    if(!item){
        return res.status(404).json({message: 'Item not found'});
    }
    return res.json({data: item, message: 'Item fetched successfully'});
})

// update item
app.patch('/items/:id', (req: Request<ItemParams>, res: Response) => {
    const item = items.get(req.params.id);
    if(!item){
        return res.status(404).json({message: 'Item not found'});
    }
    const name: string = req.body.name;
    if(!name){
        return res.status(400).json({message: 'Name required'});
    }
    item.name = name ?? item.name;
    items.set(item.id, item);
    return res.json({data: item, message: 'Item updated successfully'});
})

// delete item
app.delete('/items/:id', (req: Request<ItemParams>, res: Response) => {
    const item = items.get(req.params.id);
    if(!item){
        return res.status(404).json({message: 'Item not found'});
    }
    items.delete(item.id);
    return res.status(204).json({message: 'Item deleted successfully'});
})

function hashPayload(body: any){
    return createHash('sha256').update(JSON.stringify(body)).digest('hex');
}

app.listen(3000, () => {
    console.log('Server listening on PORT 3000');
})