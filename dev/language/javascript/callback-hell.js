// Coding callback-hell for fetching todo-tasks, user-info, posts, comments

function fetchTodo(callback){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(todo => callback(null, todo))
        .catch(err => callback(err));
}

function fetchUser(userId, callback){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => callback(null, user))
        .catch(err => callback(err));
}

function fetchPosts(userId, callback){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => callback(null, posts))
        .catch(err => callback(err));
}

function fetchComments(postId, callback){
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(comments => callback(null, comments))
        .catch(err => callback(err));
}

// Variables to access the data outside the function
let outerTodo, outerUser, outerPosts, outerComments;


function startTodo(finalCallback){

    // Calling fetchTodo
    fetchTodo((err, todo) => {
    if(err){
        console.error('Error in fetchTodo: ',err.message); return;
    }
    console.log('Todo: ', todo);

        // Calling fetchUser
        fetchUser(todo.userId, (err, user) => {
            if(err){
                console.error('Error in fetchUser: ', err.message); return;
            }
            console.log('User: ', user);
            
            //Calling fetchPost
            fetchPosts(todo.userId, (err, posts) => {
                if(err){
                    console.error('Error in fetchPosts: ', err.message); return;
                }
                console.log('Posts: ', posts[0]);

                //Calling fetchComments
                fetchComments(posts[0].id, (err, comments) => {
                    if(err){
                        console.error('Error in fetchComments: ', err.message); return;
                    }
                    console.log('Comments: ', comments[0]);
                    // If we want to use this data outside this function, use variables
                    outerTodo = todo;
                    outerUser = user;
                    outerPosts = posts;
                    outerComments = comments;
                    console.log('End of callback hell...');

                    // Final callback
                    if(finalCallback) finalCallback();
                });
            });
        });
    });
}

function displayOuterData(){
    console.log('Todo: ', outerTodo);
    console.log('User: ', outerUser);
    console.log('Post:', outerPosts[0]);
    console.log('Comment: ', outerComments[0]);
}

startTodo(displayOuterData);





/*
Promised version

// fetchTodo
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json());
}

// fetchUser
function fetchUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json());
}

// fetchPosts
function fetchPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json());
}

// fetchComments
function fetchComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json());
}

// Sequential chaining
fetchTodo()
    .then(todo => {
        console.log("Todo:", todo);
        return fetchUser(todo.userId);    // use todo.userId
    })
    .then(user => {
        console.log("User:", user);
        return fetchPosts(user.id);       // use user.id
    })
    .then(posts => {
        console.log("First Post:", posts[0]);
        return fetchComments(posts[0].id); // use post.id
    })
    .then(comments => {
        console.log("First Comment:", comments[0]);
        console.log("End of promise chain...");
    })
    .catch(err => {
        console.error("Error:", err);
    });
*/