function carFleet(target: number, position: number[], speed: number[]): number {
    
    const n = position.length;
    const cars: [number, number][] = [];
    for(let i=0; i<n; i++){
        cars.push([position[i], speed[i]]);
    }
    cars.sort((a, b) => b[0] - a[0]);
    
    let lastFleetTime = 0, fleets = 0;

    for(let i=0; i<n; i++){
        const time = (target-cars[i][0]) / cars[i][1];
        if(time > lastFleetTime){
            lastFleetTime = time;
            fleets++;
        }
    }
    return fleets;
};

/*
Time complexity -O(n logn)
Space complexity - O(n)
*/