var isLegal = function (user) {
    if (user.age > 18) {
        return true;
    }
    return false;
};
console.log(isLegal({ name: 'Ram', age: 25 }));
var Todo = function (_a) {
    var todo = _a.todo;
    //just consoling it without return
    console.log("Title: ".concat(todo.title));
    console.log("Description: ".concat(todo.description));
    console.log("Done: ".concat(todo.done));
};
var todoWrapper1 = {
    todo: {
        title: '100 lines of code',
        description: 'Write 100 lines of code everyday to master coding',
        done: true
    }
};
Todo(todoWrapper1);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, ", ").concat(this.name));
    };
    return Person;
}());
var p = new Person('Ram', 30);
p.greet('Hello');
