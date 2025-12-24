function removeStars(s: string): string {
    const stack: string[] = [];
    for(const char of s){
        if(char === '*') stack.pop();
        else stack.push(char);
    }
    return stack.join('');
};
/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - around 2m

Note:
    -> Typescript return undefined if we use .pop() on empty array, doesn't throw error so safe to use
    -> More efficient than stack is two pointers with O(1) space

Two pointers approach:
let j = 0
for(let i=0; i<s.length; i++){
    if(s[i] === '*') j--;
    else s[j++] = s[i];
}
return s.substring(0, j);
*/