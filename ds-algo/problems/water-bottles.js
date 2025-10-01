/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    return numBottles + Math.floor((numBottles-1) / (numExchange-1))
};
/*
See the solution section for explanation
Time complexity - O(1)
Space complexity - O(1)
*/



/*
var numWaterBottles = function(numBottles, numExchange) {
    
    let total = numBottles;
    
    // consider numBottles as empty bottles
    while(numBottles >= numExchange){
        let refilled = Math.floor(numBottles / numExchange);
        total += refilled;
        numBottles = numBottles % numExchange; // remaining empty bottles, not exchanged
        numBottles += refilled; // refilled bottles which will again be empty
    }
    return total;
};
Time complexity - O(log n)
Space complexity - O(n)
*/