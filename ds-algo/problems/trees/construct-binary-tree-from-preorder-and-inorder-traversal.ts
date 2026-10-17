import {TreeNode} from './tree-node';

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const map = new Map<number, number>();
    for(let i=0; i<inorder.length; i++) map.set(inorder[i], i);
    let i = 0;

    function dfs(left: number, right: number): TreeNode | null {
        if(left === right) return null;
        const root = new TreeNode(preorder[i++]);
        const rootIndex = map.get(root.val)!;
        root.left = dfs(left, rootIndex);
        root.right = dfs(rootIndex+1, right);
        return root;
    }
    return dfs(0, inorder.length);
};
/*
time - O(n)
space - O(n)
*/