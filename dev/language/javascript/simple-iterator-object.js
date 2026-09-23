const iterableObject = (arr) => {
    let i = 0;

    return {
        next: function(){
            if(i<arr.length)
                return {value: arr[i++], done: false}
            else
                return {value: undefined, done: true}
        }
    };
}

const nonEnumerableIterableObject = (arr) => {
    let i = 0;
    const obj = {};
    Object.defineProperty(obj, 'next', {
        value: function(){
            if(i < arr.length)
                return {value: arr[i++], done: false};
            else
                return {value: undefined, done: true};
        },
        enumerable: false
    })
    return obj;
}

const nums = [10, 20, 30, 40];

console.log('Iterator object: ')
const iteratorObject = iterableObject(nums);
console.log(iteratorObject.next()) 
console.log(iteratorObject.next())
console.log(iteratorObject.next())
console.log(iteratorObject.next())
console.log(typeof iteratorObject);
console.log(Object.keys(iteratorObject));
console.log(Object.getOwnPropertyNames(nums));

console.log('\n');

console.log('Non Enumerable Iterator object: ')
const nonEnumerableiteratorObject = nonEnumerableIterableObject(nums);
console.log(nonEnumerableiteratorObject.next()) 
console.log(nonEnumerableiteratorObject.next())
console.log(nonEnumerableiteratorObject.next())
console.log(nonEnumerableiteratorObject.next())
console.log(typeof nonEnumerableiteratorObject);
console.log(Object.keys(nonEnumerableiteratorObject));
console.log(Object.getOwnPropertyNames(nums));

/*
Output: 

Iterator object: 
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: 40, done: false }
object
[ 'next' ]
[ '0', '1', '2', '3', 'length' ]


Non Enumerable Iterator object:
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: 40, done: false }
object
[]
[ '0', '1', '2', '3', 'length' ]
*/



