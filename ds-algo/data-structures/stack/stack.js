var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (value) {
        this.items.push(value);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.print = function () {
        console.log(this.items.join(' '));
    };
    return Stack;
}());
var stack = new Stack();
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
