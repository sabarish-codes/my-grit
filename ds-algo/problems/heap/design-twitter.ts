type Tweet = {tweetId: number, timer: number};
type Entry = Tweet & {userId: number, idx: number};

class Twitter {
    private counter: number;
    private tweets: Map<number, Tweet[]>;
    private followees: Map<number, Set<number>>;

    constructor() {
        this.counter = 0;
        this.tweets = new Map<number, Tweet[]>();
        this.followees = new Map<number, Set<number>>();
    }

    postTweet(userId: number, tweetId: number): void {
        if(!this.tweets.has(userId)) this.tweets.set(userId, []);
        this.tweets.get(userId)!.push({tweetId, timer: this.counter++});
    }

    getNewsFeed(userId: number): number[] {
        const feed: number[] = [];
        const followees = Array.from(new Set<number>([userId, ...(this.followees.get(userId) || [])]));
        const entries: Entry[] = [];

        for(const f of followees){
            const tweets = this.tweets.get(f);
            if(!tweets || !tweets.length) continue;
            const idx = tweets.length-1;
            const tweet = tweets[idx];
            const initialEntry: Entry = {
                ...tweet,
                idx,
                userId: f
            };
            entries.push(initialEntry);
        }
        const heap = new MaxHeap<Entry>((entry: Entry): number => entry.timer, entries);
        while(feed.length<10 && heap.size()){
            const topEntry = heap.extractRoot();
            feed.push(topEntry.tweetId);
            const idx = topEntry.idx - 1;
            if(idx > -1){
                const nextTweet = this.tweets.get(topEntry.userId)![idx];
                const nextEntry = {
                    ...nextTweet,
                    userId: topEntry.userId,
                    idx
                };
                heap.insert(nextEntry);
            }
        }
        return feed;
    }

    follow(followerId: number, followeeId: number): void {
        if(!this.followees.has(followerId)) this.followees.set(followerId, new Set<number>());
        this.followees.get(followerId)!.add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        this.followees.get(followerId)?.delete(followeeId);
    }
}
/*
build followees array:  O(F)
build entries array:    O(F)
heapify:                O(F)
10 extract + insert:    O(10 log F)
                  total = O(F)
space = O(F)
*/
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */