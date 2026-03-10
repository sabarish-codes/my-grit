function subarraysDivByK(nums: number[], k: number): number {
    const map = new Map<number, number>(); // remainder: frequency
    map.set(0, 1);
    let prefix = 0;
    nums.forEach((num) => {
        prefix += num;
        const remainder = ((prefix % k) + k) % k;
        map.set(remainder, (map.get(remainder) || 0) + 1);
    })
    let result = 0;
    for(const values of map.values()){
        result += (values * (values-1))/2;
    }
    return result;
};