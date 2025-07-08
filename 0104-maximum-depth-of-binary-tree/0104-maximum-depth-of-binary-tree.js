/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    // 이진트리의 구조를 알고 순회하는 방법에 대해서!
    // 재귀 방법으로..!

    if(root === null) return 0;
    
    const leftDepth = maxDepth(root.left); 
    const rightDepth = maxDepth(root.right); 
    // console.log(root, leftDepth, rightDepth);
    // 9 -> 15 -> 7 -> 20,15,7 -> 3,9,20,null,null,15,7

// maxDepth(3)
//  ├─ maxDepth(9)
//  │   ├─ maxDepth(null) → 0
//  │   └─ maxDepth(null) → 0
//  │   → console.log(9, 0, 0) → 반환 1
//  └─ maxDepth(20)
//      ├─ maxDepth(15)
//      │   ├─ maxDepth(null) → 0
//      │   └─ maxDepth(null) → 0
//      │   → console.log(15, 0, 0) → 반환 1
//      └─ maxDepth(7)
//          ├─ maxDepth(null) → 0
//          └─ maxDepth(null) → 0
//          → console.log(7, 0, 0) → 반환 1
//      → console.log(20, 1, 1) → 반환 2
// → console.log(3, 1, 2) → 반환 3    


    return Math.max(leftDepth, rightDepth) + 1;
};