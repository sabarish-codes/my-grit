var displayProfile = function (user) {
    console.log("User name: ".concat(user.name, "\n email: ").concat(user.email));
};
displayProfile({ name: 'Ram', email: 'ram@gmail.com' });
var displayShare = function (user) {
    console.log("User name: ".concat(user.name, "\n email: ").concat(user.email, "\n age: ").concat(user.age));
};
displayShare({ name: 'Ram', email: 'ram@gmail.com', age: 45 });
var updateUser = function (user) {
    // updating the user info
};
var readonlyUser = {
    id: '1',
    name: 'Ram',
    email: 'ram@gmail.com',
    age: 45,
    password: '1234'
};
var handleExcludeScroll = function (e) {
    console.log("Event: ".concat(e));
};
handleExcludeScroll('click');
