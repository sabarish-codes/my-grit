import { TreeNode } from "./tree-node";

function goodNodes(root: TreeNode | null): number {
    let count = 0;

    function dfs(node: TreeNode | null, max: number) {
        if(!node) return;
        if(node.val >= max){
            count++;
            max = node.val;
        }
        dfs(node.left, max);
        dfs(node.right, max);
    }

    dfs(root, -Infinity);
    return count;
};
/*
time - O(n)
space - O(h)
*/