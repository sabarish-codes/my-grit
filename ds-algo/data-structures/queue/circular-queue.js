var CircularQueue = /** @class */ (function () {
    function CircularQueue(size) {
        this.front = 0;
        this.rear = 0;
        this.capacity = size;
        this.items = new Array(size + 1);
        // size+1 because we keep one spot unused
        // circular queue property to clear ambiguity when front===rear
    }
    CircularQueue.prototype.isEmpty = function () {
        return this.front === this.rear;
    };
    CircularQueue.prototype.isFull = function () {
        return (this.rear + 1) % this.capacity === this.front;
    };
    CircularQueue.prototype.size = function () {
        return (this.rear - this.front + this.capacity) % this.capacity;
    };
    CircularQueue.prototype.enqueue = function (value) {
        if (this.isFull()) {
            console.log('Queue is full');
            return false;
        }
        this.items[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        return true;
    };
    CircularQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return undefined;
        }
        var element = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        return element;
    };
    CircularQueue.prototype.print = function () {
        if (this.isEmpty())
            return;
        var start = this.front;
        var list = [];
        while (start != this.rear) {
            list.push(this.items[start]);
            start = (start + 1) % this.capacity;
        }
        console.log(list.join(' '));
    };
    return CircularQueue;
}());
var c = new CircularQueue(5);
c.enqueue(10);
c.enqueue(20);
c.enqueue(30);
c.print();
console.log(c.dequeue());
console.log(c.dequeue());
c.print();
c.enqueue(40);
c.print();
