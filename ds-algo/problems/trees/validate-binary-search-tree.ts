import {TreeNode} from './tree-node'

function isValidBST(root: TreeNode | null): boolean {
    
    function dfs(node: TreeNode | null, floor: number, ceil: number): boolean {
        if(!node) return true;
        if(!(node.val>floor && node.val<ceil)) return false;
        return dfs(node.left, floor, node.val) && dfs(node.right, node.val, ceil)
    }

    return dfs(root, -Infinity, Infinity);
};

/*
time - O(n)
space - O(h)
*/