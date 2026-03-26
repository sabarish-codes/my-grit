class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]) {
        const encodedArray: string[] = [];
        
        for(const str of strs){
            const encoded = `${str.length}#${str}`;
            encodedArray.push(encoded);
        }

        return encodedArray.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string) {

        const result: string[] = [];

        let i = 0;
        while(i < str.length){
            let lengthString = '';
            while(str[i] !== '#'){
                lengthString += str[i];
                i++;
            }
        
            const length = Number(lengthString);
            i++; // to skip #

            const decodedStr = str.slice(i, i+length);
            result.push(decodedStr);

            i += length;
        }

        return result;
    }
}
