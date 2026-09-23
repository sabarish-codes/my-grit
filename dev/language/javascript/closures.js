// Closure patterns

// Counter pattern
const counter = () => {
    let x = 0;
    return function(){
        return ++x;
    }
}
const increment1 = counter();
console.log(increment1());
console.log(increment1());
const increment2 = counter();
console.log(increment2());

// Singleton or execute only once
const singleton = () => {
    let called = false, value;
    return function(){
        if(called){
            return value;
        }
        //compute or do the logic only one
        console.log('Computing...');
        value = 42;
        called = true;
        return value;
    }
}
const init = singleton();
console.log(init());
console.log(init());
const init2= singleton();
console.log(init());

// Memoization or cache
const cache = () => {
    const cache = {};
    return function(...args){
        const key = args.toString();
        if(cache[key]){
            return cache[key];
        }
        //compute the value and store
        console.log('Computing...');
        const value = 100;
        cache[key] = 100;
        return cache[key];
    }
}
const c1 = cache();
console.log(c1(2,3));
console.log(c1(2,3,4));
console.log(c1(2,3));

// Factory function pattern
const factory = (args) => {
    return function(message){
        return `[${args}]: ${message}`;
    }
}
const errorLogger = factory('error');
const logger = factory('log');
console.log(errorLogger('DB crashed'));
console.log(logger('Simple log'));

// Module or private variables pattern
const createAccount = (bal) => {
    let balance = bal;
    return function(){
        return {
            getBalance: function(){ return balance; },
            deposit: function(amount){ balance+=amount; return balance; },
            withdraw: function(amount){ balance-=amount; return balance;}
        };
    }
}
const a1 = createAccount(1000);
const a2 = createAccount(2000);
const A = a1();
console.log(A.getBalance());
console.log(A.deposit(234));
console.log(A.withdraw(500));