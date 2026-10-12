import { TreeNode } from "./tree-node";

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function dfs(root: TreeNode | null): number {
        if(!root) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        diameter = Math.max(diameter, left+right);
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return diameter;
};

/*
time - O(n)
space - O(h)
*/