class Queue<T> {
	private items: T[] = [];
	private front: number = 0;
	private rear: number = 0;

	enqueue(value: T): void {
		this.items[this.rear] = value;
		this.rear++;
	}

	dequeue(): T | undefined {
		if(this.isEmpty()) return undefined;
		
		const element: T | undefined = this.items[this.front];
		this.items[this.front] = undefined;
		this.front++;
		return element;
	}

	peek(): T | undefined {
		return this.items[this.front];
	}

	isEmpty(): boolean {
		return this.front === this.rear;
	}

	size(): number {
		return this.rear-this.front;
	}

	print(): void {
		console.log(this.items.slice(this.front).join(' '));
	}
}

const q = new Queue<number>();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print();
console.log(q.peek());
console.log(q.dequeue());
q.print();
console.log(q.dequeue());
q.print();
console.log(q.isEmpty());
console.log(q.dequeue());
q.print();
console.log(q.dequeue());
console.log(q.isEmpty());

