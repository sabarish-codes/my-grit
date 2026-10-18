import {TreeNode} from './tree-node';

function maxPathSum(root: TreeNode | null): number {
    let maxPathSum = -Infinity;
    function dfs(node: TreeNode | null): number {
        if(!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        const subTreeMaxPathSum = Math.max(node.val, node.val+left, node.val+right, node.val+left+right);
        maxPathSum = Math.max(maxPathSum, subTreeMaxPathSum);
        return Math.max(node.val, node.val+left, node.val+right);
    }
    dfs(root);
    return maxPathSum;
};
/*
time - O(n)
space - O(h)
*/