
const todoModule = (function (){

    const todos = [];

    function addTodo(task){
        const type = typeof task;
        if(type!=='string' || task===''){
            console.log('Task should be a non empty string');
            return;
        }
        todos.push(task);
    }

    function getTodos(){
        return [...todos];
    }

    function getCount(){
        return todos.length;
    }

    return {
        addTodo, getTodos, getCount
    }
})();

console.log(todoModule);
console.log(todoModule.getTodos());
todoModule.addTodo('Adada');
todoModule.addTodo(1);
todoModule.addTodo('');
console.log(todoModule.getTodos());
console.log(todoModule.getCount());