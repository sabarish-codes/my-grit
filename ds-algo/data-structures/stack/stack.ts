class Stack<T> {
	
	private items: T[] = [];

	push(value: T): void {
		this.items.push(value);
	}

	pop(): T | undefined {
		return this.items.pop();
	}

	peek(): T | undefined {
		return this.items[this.items.length-1];
	}

	isEmpty(): boolean {
		return this.items.length===0;
	}

	size(): number {
		return this.items.length;
	}

	print(): void {
		console.log(this.items.join(' '));
	}
}

const stack = new Stack<number>();
stack.push(5);
stack.push(10);
stack.push(15);
stack.print();
console.log(stack.peek());
console.log(stack.pop());
stack.print();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

