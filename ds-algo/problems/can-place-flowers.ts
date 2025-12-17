function canPlaceFlowers(f: number[], n: number): boolean {
    const l = f.length;
    let i=0;
    //checking for zeroth index
    if(i+1<l){
        if(f[i]===0 && f[i+1]===0 && n>0){
            f[i] = 1;
            n--;
        }
    }
    else{
        if((n>0 && f[i]===0) || (n===0))
            return true;
        return false;
    }
    i++;
    while(i < l-1){
        if(f[i]===0 && f[i-1]===0 && f[i+1]===0 && n>0){
            f[i] = 1;
            n--;
        }
        i++;
    }
    //checking last index
    if(i === l-1){
        if(f[i]===0 && f[i-1]===0 && n>0){
            f[i] = 1;
            n--;
        }
    }
    return n<=0 ? true : false;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 13m

Even i hate this code, i don't know why i coded like this, refer this editorial one
public class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int count = 0;
        for (int i = 0; i < flowerbed.length; i++) {
            // Check if the current plot is empty.
            if (flowerbed[i] == 0) {
                // Check if the left and right plots are empty.
                boolean emptyLeftPlot = (i == 0) || (flowerbed[i - 1] == 0);
                boolean emptyRightPlot = (i == flowerbed.length - 1) || (flowerbed[i + 1] == 0);
                
                // If both plots are empty, we can plant a flower here.
                if (emptyLeftPlot && emptyRightPlot) {
                    flowerbed[i] = 1;
                    count++;
                    if (count >= n) {
                        return true;
                    }
                }
            }
        }
        return count >= n;
    }
}
*/