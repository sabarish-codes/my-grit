import type { Item, IdempotencyRecord, ApiResponseBody } from "./types";

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


const idempotencyRecord = new Map<string, IdempotencyRecord>(); // uuid: record

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
