function hanoi(n: number, source: string, auxiliary: string, destination: string): void {
    
    if(n === 1){
        console.log(`Move disk 1 from ${source} to ${destination}`);
    }
    else{
        hanoi(n-1, source, destination, auxiliary);
        console.log(`Move disk ${n} from ${source} to ${destination}`);
        hanoi(n-1, auxiliary, source, destination);
    }
}

hanoi(4, 'A', 'B', 'C');