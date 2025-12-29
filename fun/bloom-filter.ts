class BloomFilter<T>{
    private bitArray: boolean[];
    private size: number;
    private numHashFunctions: number;
    private hashFunctions: ((element: T) => number)[];

    constructor(size: number, numHashFunctions: number){
        this.size = size;
        this.numHashFunctions = numHashFunctions;
        this.bitArray = new Array(size).fill(false);
        this.hashFunctions = this.createHashFunctions();
    }

    private createHashFunctions(): ((element: T) => number)[]{
        const hashFunctions: ((element: T) => number)[] = [];
        for(let i=0; i<this.numHashFunctions; i++){
            const seed = i;
            const hashFunction = (element: T) => Math.abs(this.hashCode(element) ^ seed) % this.size;
            hashFunctions.push(hashFunction);
        }
        return hashFunctions;
    }

    private hashCode(element: T): number{
        return String(element).split('').reduce((hash, char) => hash + 31 * char.charCodeAt(0), 0);
    }

    public add(element: T): void{
        for(const hashFunction of this.hashFunctions){
            const index = hashFunction(element);
            this.bitArray[index] = true;
        }
    }

    public contains(element: T): boolean{
        for(const hashFunction of this.hashFunctions){
            const index = hashFunction(element);
            if(!this.bitArray[index])
                return false;
        }
        return true;
    }

    public getSize(): number{
        return this.size;
    }

    public getNumHashFunctions(): number{
        return this.numHashFunctions;
    }

    public print(): string{
        const indexArray: number[] = [];
        for(let i=0; i<this.bitArray.length; i++){
            if(this.bitArray[i])
                indexArray.push(i);
        }
        return indexArray.join(' ');
    }
}

const bloomFilter = new BloomFilter<string>(100, 5);
bloomFilter.add('sabarish');
bloomFilter.add('backend');
bloomFilter.print();
console.log(bloomFilter.contains('engineer'));
console.log(bloomFilter.contains('sabaris'));