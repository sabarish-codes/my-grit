export interface User{
    name: string,
    age: number
}

const isLegal = (user: User) => {
    if(user.age > 18){
        return true;
    }
    return false;
}

console.log(isLegal({name: 'Ram', age: 25}));


// example of simple component

interface TodoType{
    title: string,
    description: string,
    done: boolean
}

interface TodoInput{
    todo: TodoType
}

const Todo = ({todo}: TodoInput) => {
    //just consoling it without return
    console.log(`Title: ${todo.title}`);
    console.log(`Description: ${todo.description}`);
    console.log(`Done: ${todo.done}`);
}

const todoWrapper1 = {
    todo: {
        title: '100 lines of code',
        description: 'Write 100 lines of code everyday to master coding',
        done: true
    }
    
}
Todo(todoWrapper1);


// example of interface using implements

interface Person{
    name: string,
    age: number,
    greet(phrase: string): void
}

class Person implements Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(phrase: string){
        console.log(`${phrase}, ${this.name}`);
    }
}

const p = new Person('Ram', 30);
p.greet('Hello');