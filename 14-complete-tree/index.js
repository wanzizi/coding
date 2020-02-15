// 判断是否是完全二叉树
// 完全二叉树：所有节点偏左
// null节点之后还有非空值就不是完全二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
  if (root === null) {
    return false;
  }
  var cur = root;
  var queue = [];
  while (cur !== null) {
    queue.push(cur.left);
    queue.push(cur.right);
    cur = queue.shift();
  }
  return !queue.filter(item => item).length;
};
