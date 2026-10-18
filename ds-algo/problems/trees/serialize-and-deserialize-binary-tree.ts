import { TreeNode } from "./tree-node";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if(!root) return '';
    const preorder: number[] = [];
    function dfs(root: TreeNode | null) {
        if(!root){
            preorder.push(-Infinity);
            return;
        }
        preorder.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return preorder.join(',');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if(data === '') return null;
    const preorder = data.split(',');
    let i = 0;
    function build(): TreeNode | null {
        const value = Number(preorder[i++]);
        if(value === -Infinity) return null;
        const root = new TreeNode(value);
        root.left = build();
        root.right = build();
        return root;
    }
    return build();
};

/*
time - O(n)
space - O(n)
*/

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */