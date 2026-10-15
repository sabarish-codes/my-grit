import {TreeNode} from './tree-node';

function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];

    const result: number[][] = [];
    let level: TreeNode[] = [root];
    while(level.length){
        result.push(level.map(n => n.val));
        const next: TreeNode[] = [];
        for(const n of level){
            if(n.left) next.push(n.left);
            if(n.right) next.push(n.right);
        }
        level = next;
    }
    return result;
};
/*
time - O(n)
space - O(w) maximum width, worst case O(n), best case O(1) for skewed tree

std version - omega(1), theta(w), bigO(n)
omega - lower found of function (floor)
theta - tight bound of function (precise)
bigO - upper bound of function (ceiling)
*/