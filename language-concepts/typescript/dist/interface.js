"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isLegal = (user) => {
    if (user.age > 18) {
        return true;
    }
    return false;
};
console.log(isLegal({ name: 'Ram', age: 25 }));
const Todo = ({ todo }) => {
    //just consoling it without return
    console.log(`Title: ${todo.title}`);
    console.log(`Description: ${todo.description}`);
    console.log(`Done: ${todo.done}`);
};
const todoWrapper1 = {
    todo: {
        title: '100 lines of code',
        description: 'Write 100 lines of code everyday to master coding',
        done: true
    }
};
Todo(todoWrapper1);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase}, ${this.name}`);
    }
}
const p = new Person('Ram', 30);
p.greet('Hello');
