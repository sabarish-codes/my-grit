export default class Comparator{

    constructor(compareFunction){
        this.compare = compareFunction || Comparator.defaultCompareFunction;
        this.originalCompare = this.compare;
    }

    static defaultCompareFunction(a, b){
        if(a == b){
            return 0;
        }
        return a>b ? 1 : -1;
    }

    equal(a, b){
        return this.compare(a,b) === 0;
    }

    lessThan(a, b){
        return this.compare(a,b) < 0;
    }

    greaterThan(a, b){
        return this.compare(a,b) > 0;
    }

    lessThanOrEqual(a, b){
        return this.lessThan(a,b) || this.equal(a,b);
    }

    greaterThanOrEqual(a, b){
        return this.greaterThan(a,b) || this.equal(a,b);
    }

    // reverse function adds a wrapper arrow function and changes the argument order
    // in the object it will be as {compare: function(a,b){} }
    // it just does {compare: (a,b) => function(b,a)} , so all methods know it
    reverse(){
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }

    // if we have to take the reverse effect, we have to call reverse() again
    // leading to another wrapper, so how many times we call reverse -> that much wrappers
    // so a clean and predictable way to have only 1 wrapper atmost, while restoring original fn
    restoreOriginal(){
        this.compare = this.originalCompare;
    }
}