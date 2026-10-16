import {TreeNode} from './tree-node';

function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let result = 0;
    function dfs(node: TreeNode | null){
        if(!node || count>=k) return;
        dfs(node.left);
        count++;
        if(count === k) result = node.val;
        dfs(node.right);
    }
    dfs(root);
    return result;
};
/*
time - O(h + k)
space - O(h)
*/