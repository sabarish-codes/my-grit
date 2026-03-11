import express from 'express';
import type { Request, Response } from 'express';
import { randomUUID } from 'crypto';

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


const items = new Map<string, Item>();

// create item
app.post('/items', (req: Request, res: Response) => {
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
    console.log('Items: ', items);

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



app.listen(3000, () => {
    console.log('Server listening on PORT 3000');
})