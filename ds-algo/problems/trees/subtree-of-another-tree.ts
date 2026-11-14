import { TreeNode } from './tree-node';

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    function serialize(root: TreeNode | null): string {
        if(!root) return 'N';
        return `(${root.val},${serialize(root.left)},${serialize(root.right)})`;
    }
    const rootSerialized = serialize(root);
    const subRootSerialized = serialize(subRoot);
    return rootSerialized.includes(subRootSerialized);
};
/*
time - O(m + n) based on string searching algorithm
space - O(n + m)
*/
