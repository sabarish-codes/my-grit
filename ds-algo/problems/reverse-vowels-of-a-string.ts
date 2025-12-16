function reverseVowels(s: string): string {
    const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    let str: string[] = s.split('');
    let left = 0, right = s.length-1;
    while(left < right){
        if((vowels.indexOf(str[left])!==-1) && (vowels.indexOf(str[right])!==-1)){
            let temp = str[left];
            str[left] = str[right];
            str[right] = temp;
            left++;
            right--;
        }
        else if(vowels.indexOf(str[left]) === -1) left++;
        else right--;
    }
    return str.join('');
};

/*
Time complexity - O(n)
Space complexity - O(n)
Time taken - around 6m
*/