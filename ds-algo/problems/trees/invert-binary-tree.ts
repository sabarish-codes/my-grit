import { TreeNode } from "./tree-node";

function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) return null;

    const right = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(right);

    return root;
};

/*
time - O(n)
space - O(h) height of tree, worst case skewed O(n), best case balanced O(log n)
*/