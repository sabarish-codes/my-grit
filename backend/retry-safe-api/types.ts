
export interface ItemParams {
    id: string
}

export interface Item {
    id: string,
    name: string,
    createdAt: Date
}

export interface ApiResponseBody {
    data: Item,
    message: string
}

export interface IdempotencyRecord {
    status: 'IN_PROGRESS' | 'COMPLETED',
    bodyHash: string,
    resourceId: string,
    responseStatus?: number,
    responseBody?: ApiResponseBody
}