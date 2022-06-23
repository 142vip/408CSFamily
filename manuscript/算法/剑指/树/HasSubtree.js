/*
 * @Description: 【较难】树的子结构
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-11 16:07:54
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-11 16:08:40
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree (pRoot1, pRoot2) {
  // write code here
  // 空树的情况
  if (pRoot1 === null || pRoot2 === null) {
    return false;
  }
  // 1.假设子结构从根结点开始；
  const is_root = isSubTreeWithRoot(pRoot1, pRoot2);
  // 2 子结构从左、右子树开始；
  const in_left = HasSubtree(pRoot1.left, pRoot2);
  const in_right = HasSubtree(pRoot1.right, pRoot2);

  // 三种满足一种，就是子结构了
  return is_root || in_left || in_right;
}

// 判断root2是否为root1的子集【递归实现】
function isSubTreeWithRoot (root1, root2) {

  // root2 自己为叶子结点,此时递归来看,就是子集
  if (root2 === null) {
    return true;
  }
  // 递归来看，root1为空了，就是非子集
  if (root1 === null) {
    return false;
  }

  // 判断两者元素是否匹配
  if (root1.val !== root2.val) {
    // 其中某个元素不配,递归断了
    return false;
  }
  // 当前结点相同，继续递归校验后续左右子树结点，两树同时向左或者向右
  return isSubTreeWithRoot(root1.left, root2.left) && isSubTreeWithRoot(root1.right, root2.right)
}

module.exports = {
  HasSubtree: HasSubtree
};