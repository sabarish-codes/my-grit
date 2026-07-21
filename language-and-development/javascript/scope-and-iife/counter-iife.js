
const counterModule = (function() {

    let count = 0;

    function getCount(){
        return count;
    }

    function increment(){
        count += 1;
    }

    return {
        getCount, increment
    }
})();

console.log(counterModule);
console.log(counterModule.getCount());
counterModule.increment();
counterModule.increment();
console.log(counterModule.getCount());
console.log(counterModule.count);