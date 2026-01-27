
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let leaves1: number[] = leafSequence(root1, []);
    let leaves2: number[] = leafSequence(root2, []);
    return JSON.stringify(leaves1)===JSON.stringify(leaves2);
};

function leafSequence(root: TreeNode | null, leaves: number[]): number[] {
    if(!root) return leaves;

    const stack: TreeNode[] = [root];
    let lastVisited: TreeNode | null| undefined = undefined;

    while(stack.length){
        const top = stack[stack.length-1];
        if(top.left && lastVisited!==top.left && lastVisited!==top.right)
            stack.push(top.left);
        else if(top.right && lastVisited!==top.right)
            stack.push(top.right);
        else{
            lastVisited = stack.pop();
            if(!lastVisited?.left && !lastVisited?.right)
                leaves.push(lastVisited!.val);
        }
    }
    return leaves;
}
/*
Time complexity - O(n+m)
Space complexity - O(n+m) , max leaves a tree with 'n' nodes is ceil of (n/2) so n/2 + m/2
Time taken - 6m
*/