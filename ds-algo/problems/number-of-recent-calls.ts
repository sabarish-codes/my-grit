class RecentCounter {

    requests: number[];
    front: number;
    
    constructor() {
        this.requests = [];
        this.front = 0;
    }

    ping(t: number): number {
        this.requests.push(t);
        while(this.requests[this.front] < t-3000)
            this.front++;
        return this.requests.length-this.front;
    }
}

/*
Time complexity - Amortized O(1), not O(n) eventhough worst case per ping call is O(n)
                  because each request is pushed once and popped once , so overall 2O(n) => O(n)
                  for 'n' operations, so on average O(1) per ping call 
Space complexity - O(n) , didnt use .shift()
Time taken - 20m
*/