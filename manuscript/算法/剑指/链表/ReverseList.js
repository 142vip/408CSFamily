/*
 * @Description: 【中等】反转链表
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-02 16:13:46
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-02 16:36:52
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 头插法
function ReverseList (pHead) {
  // write code here
  // 定义反转后链表
  let result = null;
  //     let result=new ListNode(-1)
  // 使用头插法
  while (pHead) {
    let currentNode = pHead;
    pHead = pHead.next;
    // 当前结点的后继结点为修改前的反转后的链表
    currentNode.next = result;
    // 翻转的链表的头结点指向头插法插入的结点
    result = currentNode;
  }
  return result;
}

// 递归
function ReverseList01 (pHead) {
  if (pHead === null || pHead.next === null) {
    return pHead;
  }

  // head为当前链表的头结点
  // 定义当前链表头结点的后继结点 【前提是前面判断其后继结点存在】
  let nextNode = pHead.next;

  // 此时将链表分为头结点+ 后继结点为头结点的子链表
  // 对子链表进行反转，得到新的链表【这里是递归，先考虑一层，考虑其他容易乱】
  let result = ReverseList01(nextNode);
  // 在反转链表的result中，原来是head后继结点当头结点的nextNode，现在是result链表的尾结点
  // 对原来的pHead的后继结点置null 此时的head应该为result的尾结点，避免递归陷入死循环
  pHead.next = null;
  // 只需要将result的尾结点与head链接起来，就是反转链表了
  nextNode.next = pHead;

  return result;

}

module.exports = {
  ReverseList: ReverseList01
};