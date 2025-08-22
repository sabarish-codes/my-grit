// simulate fetch-todo
function fetchTodo(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let todoExists = true;
            if(todoExists)
                resolve({id:1, userId:101, title:'Learn Promises'});
            else
                reject(new Error('No todo exists, so can\'t fetch'));
        },1000);
    })
}

// simulate fetch-user
function fetchUser(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userExists = true;
            if(userExists)
                resolve({id:userId, name:'Aladdin'});
            else
                reject(new Error('User doesn\'t exist, so can\'t fetch'));
        },2000);
    })
}

fetchTodo()
    .then(todo => {
        console.log('Fetch todo executed: ', todo);
        return fetchUser(todo.userId);
    })
    .then(user => {
        console.log('Fetch user executed: ', user);
    })
    .catch(err => {
        console.error('Error: ', err.message);
    })

// parallel execution of promises, it takes longest time
Promise.all([fetchTodo(), fetchUser(101)])
    .then(([todo, user]) => {  // inside then the data passes on resolve is in array, so [todo, user] same order as functions
        console.log('Parallel fetch todo executed: ', todo);
        console.log('Parallel fetch user executed: ', user);
    })
    .catch(err => console.error('Error: ', err.message));