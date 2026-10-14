import { TreeNode } from "./tree-node";

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
	while(root){
        if(root.val>p.val && root.val>q.val) root = root.left!;
        else if(root.val<p.val && root.val<q.val) root = root.right!;
        else break;
    }
    return root;
};
/*
time - O(h)
space - O(1)
*/