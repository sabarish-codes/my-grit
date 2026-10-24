function leastInterval(tasks: string[], n: number): number {
    const freq = new Array<number>(26).fill(0);
    for(const t of tasks) freq[t.charCodeAt(0) - 65]++;

    const heap = new MaxHeap<number>();
    for(let i=0; i<26; i++) if(freq[i]) heap.insert(freq[i]);

    let interval = 0;
    while(heap.size()){
        const pendingTasks = [];
        let ran = 0;
        for(let i=0; i<=n && heap.size(); i++){
            const count = heap.extractRoot();
            ran++;
            if(count > 1) pendingTasks.push(count - 1);
        }
        for(const p of pendingTasks) heap.insert(p);
        interval += heap.size() ? n+1 : ran
    }
    return interval;
};

/*
time - O(max(t, n*maxFreq))
space - O(1)

function leastInterval(tasks: string[], n: number): number {
  const freq = new Array<number>(26).fill(0);
  for (const t of tasks) freq[t.charCodeAt(0) - 65]++;

  let maxF = 0;
  for (const f of freq) maxF = Math.max(maxF, f);

  let maxCount = 0;
  for (const f of freq) if (f === maxF) maxCount++;

  return Math.max(tasks.length, (maxF - 1) * (n + 1) + maxCount);
}
// time O(t), space O(1)
*/