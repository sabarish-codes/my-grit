var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
        this.front = -1;
        this.rear = -1;
    }
    Queue.prototype.enqueue = function (value) {
        this.items.push(value);
        if (this.items.length === 1) {
            this.front++;
        }
        this.rear++;
    };
    Queue.prototype.dequeue = function () {
        var element = this.items[this.front];
        this.front++;
        return element;
    };
    Queue.prototype.peek = function () {
        return this.items[this.front];
    };
    Queue.prototype.isEmpty = function () {
        return this.front >= this.rear;
    };
    Queue.prototype.size = function () {
        return this.rear - this.front + 1;
    };
    Queue.prototype.print = function () {
        console.log(this.items.slice(this.front).join(' '));
    };
    return Queue;
}());
var q = new Queue();
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
