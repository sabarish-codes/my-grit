function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set<string>(wordList);
    if(!wordSet.has(endWord)) return 0;
    return bfs();

    function bfs(): number {
        let level = 1;
        let queue = [beginWord];
        while(queue.length){
            const nextQueue = [];
            for(const word of queue){
                if(word === endWord) return level;
                for(const w of findAdjacent(word)){
                    nextQueue.push(w);
                    wordSet.delete(w);
                }
            }
            queue = nextQueue;
            level++;
        }
        return 0;
    }

    function findAdjacent(word: string): string[] {
        const adjacent = [];
        for(let i=0; i<word.length; i++){
            for(let j=97; j<=122; j++){
                const char = String.fromCharCode(j);
                const newWord = word.slice(0, i) + char + word.slice(i+1);
                if(wordSet.has(newWord) && newWord!==word) adjacent.push(newWord);
            }
        }
        return adjacent;
    }
};

/*
n - number of words
m - length of words
time - O(m^2 * n)
space - O(m * n)
*/
