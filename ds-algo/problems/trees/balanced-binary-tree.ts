import {TreeNode} from './tree-node'

function isBalanced(root: TreeNode | null): boolean {

    function dfs(root: TreeNode | null): number {
        if(!root) return 0;
        const left = dfs(root.left);
        if(left === -1) return -1;
        const right = dfs(root.right);
        if(right === -1) return -1;
        if(Math.abs(right-left) > 1) return -1;
        return 1 + Math.max(left, right);
    }

    return dfs(root) !== -1;
};
/*
time - O(n)
space - O(h)
*/