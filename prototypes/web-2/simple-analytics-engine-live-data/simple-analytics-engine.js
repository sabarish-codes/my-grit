export class SimpleAnalyticsEngine{
    constructor(windowSize){
        this.windowSize = windowSize;
        this.count = 0;
        this.sum = 0;
        this.data = [];
        this.window = [];
        this.min = null;
        this.max = null;
    }

    add(element){

        this.count++;
        this.sum += element;
        this.data.push(element);
        this.window.push(element);

        if(this.window.length === 1){ // if window is empty
            this.min = element;
            this.max = element;
        }
        else if(this.window.length <= this.windowSize){ // if window is less than window size
            this.min = element<this.min ? element : this.min;
            this.max = element>this.max ? element : this.max;
        }
        else{  // if window size is reached, we have to drop the first element and add new one
            const removedElement = this.window.shift();
            this.sum -= removedElement;
            if(this.min === removedElement){
                this.min = Number.MAX_VALUE;
                this.window.forEach((n) => {if(n < this.min) this.min = n;})
            }
            if(this.max === removedElement){
                this.max = Number.MIN_VALUE;
                this.window.forEach((n) => {if(n > this.max) this.max = n;});
            }
        }
    }

    getSum(){
        return this.sum;
    }

    getAvg(){
        return this.sum / this.window.length;
    }

    getMax(){
        return this.max;
    }

    getMin(){
        return this.min;
    }

    getSize(){
        return this.count;
    }

    getWindowSize(){
        return this.window.length;
    }
}