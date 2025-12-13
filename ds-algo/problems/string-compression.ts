function compress(chars: string[]): number {
    
    let index = -1;
    let letter = 0;
    let count = 1;
    let i = 0, n = chars.length;
    while(i < n){
        if((i+1 < n) && (chars[i+1] === chars[letter])){
            count++;
            i++;
        }
        else if(((i+1 < n) && (chars[i+1] !== chars[letter])) || (i===n-1)){
            chars[++index] = chars[letter];
            if(count >= 10){
                const countString = String(count);
                for(let j=0; j<countString.length; j++)
                    chars[++index] = countString[j];
            }
            else if(count > 1){
                chars[++index] = String(count);
            }
            count = 1;
            letter = i+1;
            i = letter;
        }
    }
    return index+1;
};

/*
Time complexity - O(n)
Space complexity - O(1)
Time taken - 39m 52s

Note:
    -> division operator returns decimal values for integer division use Math.floor()
    -> To find length of string use variable.length not length() method
*/