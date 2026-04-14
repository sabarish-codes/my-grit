class MinStack {

    valStack: number[] = [];
    minStack: number[] = [];

    constructor() {
    }

    push(val: number): void {
        if(!this.minStack.length || val<=this.minStack.at(-1)!)
            this.minStack.push(val);
        this.valStack.push(val);
    }

    pop(): void {
        if(this.valStack.at(-1) === this.minStack.at(-1))
            this.minStack.pop();
        this.valStack.pop();
    }

    top(): number {
        return this.valStack.at(-1)!;
    }

    getMin(): number {
        return this.minStack.at(-1)!;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*
Space complexity - O(n)
*/