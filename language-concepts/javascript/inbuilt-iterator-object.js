class Iterable{
    constructor(data){
        this.data = data;
    }

    [Symbol.iterator](){
        let index = 0;
        return {
            next: () => {
                if(index < this.data.length)
                    return {value: this.data[index++], done: false};
                else
                    return {value: undefined, done: true};
            }
        }
    }

    values(){
        return this[Symbol.iterator]();
    }
}

const iterator = new Iterable([10, 20, 30]);
console.log(iterator);
console.log(typeof iterator);
console.log(Object.keys(iterator));
console.log(Object.getOwnPropertyNames(iterator));
console.log(Object.getOwnPropertySymbols(iterator));
console.log([...iterator.values()]);
