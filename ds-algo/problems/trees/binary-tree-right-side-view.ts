import {TreeNode} from './tree-node';

function rightSideView(root: TreeNode | null): number[] {
    if(!root) return [];
    const result = [];
    const queue = [root];
    let i=0;
    while(i < queue.length){
        const size = queue.length-i;
        let node;
        for(let k=0; k<size; k++){
            node = queue[i++];
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(node!.val);
    }
    return result;
};

/*
time - O(n)
space - O(n)
*/