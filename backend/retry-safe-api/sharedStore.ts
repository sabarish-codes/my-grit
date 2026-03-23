import type { Item, IdempotencyRecord, ApiResponseBody } from "./types";
import { createHash } from 'crypto';

// Items
const items = new Map<string, Item>(); // uuid: item 

export function createItem(id: string, item: Item){
    items.set(id, item);
}

export function readItem(id: string){
    return items.get(id);
}

export function deleteItem(id: string){
    items.delete(id);
}



// Idempotency Records
const idempotencyRecord = new Map<string, IdempotencyRecord>(); // uuid: record


// To handle concurrency race conditions - make the claim idempotency key as atomic
// check, set should be one operation to bypass toctou (NON_EXISTENT to setting IN_PROGRESS should be atomic)
// here js internally handles this because the code is synchronous so eventloop executes this fully and then move on to next
// in real systems usually Database is used since the insert operation is atomic
export function claimIdempotencyKey(idempotencyKey: string, bodyHash: string, resourceId: string): 
                                    {success: boolean, record?: IdempotencyRecord}
{

    if(idempotencyRecord.has(idempotencyKey)){ // same idempotency key exists in record
        const record = idempotencyRecord.get(idempotencyKey)!;
        return {success: false, record};
    }

    const record: IdempotencyRecord = {
        status: 'IN_PROGRESS',
        bodyHash,
        resourceId
    }
    idempotencyRecord.set(idempotencyKey, record);
    return {success: true};
}

export function completeIdempotencyKey(idempotencyKey: string, responseStatus: number, responseBody: ApiResponseBody){

    const record: IdempotencyRecord = idempotencyRecord.get(idempotencyKey)!;
    if(!record){ // handling record=undefined, updating undefined value will throw run-time error
        return;
    }

    record.responseStatus = responseStatus;
    record.responseBody = responseBody;
    record.status = 'COMPLETED';
}


// hash the body of the request
export function hashBody(body: any){
    return createHash('sha256').update(JSON.stringify(body)).digest('hex');
}

export function itemsSize(){
    console.log(`Items: ${items.size} , Process: ${process.pid}`);
}