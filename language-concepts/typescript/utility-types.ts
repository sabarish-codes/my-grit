interface User{
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

// Pick<Type, Keys> - utility which is used to select subset of properties from existing type
type UserProfile = Pick<User, 'name' | 'email'>
const displayProfile = (user: UserProfile) => {
    console.log(`User name: ${user.name}\n email: ${user.email}`);
}
displayProfile({name: 'Ram', email: 'ram@gmail.com'});


// Omit<Type, Keys> - utility which is opposite of Pick, it removes certain properties
type UserShare = Omit<User, 'id' | 'password'>
const displayShare = (user: UserShare) => {
    console.log(`User name: ${user.name}\n email: ${user.email}\n age: ${user.age}`);
}
displayShare({name: 'Ram', email: 'ram@gmail.com', age: 45});


//Partial<Type> - it makes all the properties optional, useful in scenarios like updating data in forms where all
// fields are not necessary, adds ?. optional chaining operator to all properties
type UserPartial = Partial<User>  
const updateUser = (user: UserPartial) => {
    // updating the user info
}


// Readonly<Type> - it makes all the properties in object immutable, unlike const it checks in compile time itself
// or we can do by adding readonly to all properties in objects like
/* interface User{
    readonly name: string,
    readonly age: number
}
*/
type UserReadonly = Readonly<User>
const readonlyUser: UserReadonly = {
    id: '1',
    name: 'Ram',
    email: 'ram@gmail.com',
    age: 45,
    password: '1234'
}
// readonlyUser.name = 'Hari' - throws error


// Exclude<Type, keys> - used to exclude or remove some members from types which have union
// omit is used to ignore some properties generally in objects, whereas exclude is used to ignore some types or literals in union
type Events = 'scroll' | 'click' | 'mousemove';
type ExcludeScroll = Exclude<Events, 'scroll'>
const handleExcludeScroll = (e: ExcludeScroll) => {
    console.log(`Event: ${e}`);
}
//handleExcludeScroll('scroll'); - throws error


// Index signatures - lets object have any number of keys or certain type (String, number, symbol)
interface index{
    [key: number]: string
}
const indexObject: index = {
    1: 'Ram',
    2: 'Hari',
    3: 'Rajesh'
}
// Its easier instead of defining as interface index{ number: string, number: string, number: string}
// It also let to add new keys, good when keys are not known in advance 
// But it is very loose, not stricter



// Record - builds a type with fixed set of keys , more stricter than index signature
// we cannot add new keys in records like english added below, but in index signatures we can
type Subject = 'math' | 'science' | 'social';
type Score = Record<Subject, number>
const marks: Score = {
    math: 80,
    science: 80,
    social: 80,
    //english: 80 - adding this will throw error
}



// Map - a js runtime data structure, keys can be anything not only bound to string,number,symbols like record
// can add dynamic keys, update and delete, inbuilt methods support
// only type of keys,value is checked, but record checks for exact keys
// map cannot directly converted to json, map -> object -> json only works
const map = new Map<number, string>();
map.set(1, 'Ram');
//map.set('2', 'Hari'); - thorws error