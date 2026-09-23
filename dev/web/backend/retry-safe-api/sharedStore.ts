import type { Item, IdempotencyRecord, ApiResponseBody } from "./types";
import { createHash } from 'crypto';

// Items
const items = new Map<string, Item>(); // uuid: item 

export function createItem(id: string, item: Item){
    //console.log('create item called'); in-flight request ownership expired, retry takes ownership and calls. Owner can also call.
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

const EXPIRY_TIME = 2 * 60 * 1000; // 2 minutes ownership for a request

// To handle concurrency race conditions - make the claim idempotency key as atomic
// check, set should be one operation to bypass toctou (NON_EXISTENT to setting IN_PROGRESS should be atomic)
// here js internally handles this because the code is synchronous so eventloop executes this fully and then move on to next
// in real systems usually Database is used since the insert operation is atomic
export function claimIdempotencyKey(ownerId: string, idempotencyKey: string, bodyHash: string, resourceId: string): 
                                    {success: boolean, record?: IdempotencyRecord}
{

    if(idempotencyRecord.has(idempotencyKey)){ // same idempotency key exists in record
        const record = idempotencyRecord.get(idempotencyKey)!;
        return {success: false, record};
    }

    const record: IdempotencyRecord = {
        ownerId,
        status: 'IN_PROGRESS',
        bodyHash,
        resourceId,
        createdAt: Date.now() // numeric datatype, shows milliseconds elapsed form Jan 1, 1970
    }
    idempotencyRecord.set(idempotencyKey, record);
    return {success: true};
}

export function completeIdempotencyKey(ownerId: string, idempotencyKey: string, responseStatus: number, responseBody: ApiResponseBody){

    const record: IdempotencyRecord = idempotencyRecord.get(idempotencyKey)!;
    if(!record){ // handling record=undefined, updating undefined value will throw run-time error
        return;
    }
    const expired = isOwnershipExpired(idempotencyKey);
    if(record.ownerId!==ownerId && !expired){ // only owner can write until expiry
        return;
    }

    record.responseStatus = responseStatus;
    record.responseBody = responseBody;
    record.status = 'COMPLETED';
}

// change the record ownership
export function takeOwnership(idempotencyKey: string, ownerId: string){
    const record = idempotencyRecord.get(idempotencyKey);
    if(!record){
        return;
    }
    record.ownerId = ownerId;
    record.createdAt = Date.now();
}

// check ownership expired or not
export function isOwnershipExpired(idempotencyKey: string){
    const record = idempotencyRecord.get(idempotencyKey);
    if(!record){
        return false;
    }
    const expired = (Date.now() - record.createdAt) > EXPIRY_TIME;
    return expired;
}

// hash the body of the request
export function hashBody(body: any){
    return createHash('sha256').update(JSON.stringify(body)).digest('hex');
}

export function itemsSize(){
    console.log(`Items: ${items.size} , Process: ${process.pid}`);
}