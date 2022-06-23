/*
 * @Description: 【较难】二叉树中和为某一值的路径
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-12 22:01:00
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-12 22:01:45
 */


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function FindPath (root, expectNumber) {
  // write code here
  let result = [];
  function dfs (root, target, temp_res) {
    // 处理空树
    if (root === null) {
      return;
    }
    // 根结点，进数组
    temp_res.push(root.val);

    // 当前结点为叶子结点
    if (root.left === null && root.right === null && target === root.val) {
      result.push(temp_res)
    }

    // 不是叶子结点，向左向右子树递归
    dfs(root.left, target - root.val, [...temp_res])
    dfs(root.right, target - root.val, [...temp_res])
  }
  dfs(root, expectNumber, [])
  return result;

}



module.exports = {
  FindPath: FindPath
};