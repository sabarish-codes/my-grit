class CircularQueue<T> {
    private items: (T | undefined)[];
    private front: number = 0;
    private rear: number = 0;
    private capacity: number;

    constructor(size: number){
        this.capacity = size;
        this.items = new Array<T | undefined>(size+1); 
        // size+1 because we keep one spot unused
        // circular queue property to clear ambiguity when front===rear
    }

    isEmpty(): boolean{
        return this.front===this.rear;
    }

    isFull(): boolean{
        return (this.rear+1)%this.capacity === this.front;
    }

    size(): number{
        return (this.rear-this.front+this.capacity)%this.capacity;
    }

    enqueue(value: T): boolean{
        if(this.isFull()){
            console.log('Queue is full');
            return false;
        }
        this.items[this.rear] = value;
        this.rear = (this.rear + 1)%this.capacity;
        return true;
    }

    dequeue(): T | undefined{
        if(this.isEmpty()){
            console.log('Queue is empty');
            return undefined;
        }
        const element: T | undefined = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front+1)%this.capacity;
        return element;
    }

    print(): void{
        if(this.isEmpty()) return;
        let start: number = this.front;
        let list: (T | undefined)[] = [];
        while(start != this.rear){
            list.push(this.items[start]);
            start = (start+1)%this.capacity;
        }
        console.log(list.join(' '));
    }
}

const c = new CircularQueue(5);
c.enqueue(10);
c.enqueue(20);
c.enqueue(30);
c.print();
console.log(c.dequeue());
console.log(c.dequeue());
c.print();
c.enqueue(40);
c.print();