/*
 * @Description: 【简单】二叉搜索树的第K个结点
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-12 19:51:41
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-12 20:26:21
 */

function ListNode (x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

// {8,6,10,5,7,9,11},1
const root = {
  val: 8,
  left: {
    val: 6,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  },
  right: {
    val: 10,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 11,
      left: null,
      right: {
        val: 12,
        left: null,
        right: null
      }
    }
  }
}

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 注意，是返回结点
function KthNode (pRoot, k) {
  //   console.log(inOrder(pRoot))
  return inOrder(pRoot)[k - 1]
}

// 中序遍历
function inOrder (root) {
  // console.log(root)
  if (root === null) {
    return []
  }

  return inOrder(root.left).concat([root]).concat(inOrder(root.right))

}
module.exports = {
  KthNode: KthNode
};