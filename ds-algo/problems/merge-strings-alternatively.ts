function mergeAlternately(word1: string, word2: string): string {
    const l1 = word1.length, l2 = word2.length;
    const minLength = l1<l2 ? l1 : l2;
    let i=0;
    let result = [];
    while(i < minLength){
        result.push(word1[i]);
        result.push(word2[i]);
        i++;
    }
    if(l1 !== l2){ // if both are equal length, then no left over substring
        let j = i;
        if(minLength === l1){
            while(j < l2){
                result.push(word2[j]);
                j++;
            }
        }
        else{
            while(j < l1){
                result.push(word1[j]);
                j++;
            }
        }
    }
    return result.join('');
};

/*
Time complexity - O(n + m)
Space complexity - O(n + m)
Time taken - 6m

Note:
    -> String concatenation is usually slower, result += word[i]
    -> Push strings in array, and finally join(''), this is fast
*/