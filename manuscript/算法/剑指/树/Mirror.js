/*
 * @Description: 【简单】二叉树的镜像
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-11 16:42:42
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-11 16:43:17
 */

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pRoot TreeNode类 
 * @return TreeNode类
 */
function Mirror (pRoot) {
  // write code here
  // 空树
  if (pRoot === null) {
    return pRoot;
  }

  // 处理根节点，交换左右子树【建议封装函数】
  [pRoot.left, pRoot.right] = [pRoot.right, pRoot.left]


  // 左子树镜像
  Mirror(pRoot.left)
  // 右子树镜像
  Mirror(pRoot.right)

  return pRoot;

}


module.exports = {
  Mirror: Mirror
};