/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-02 15:47:20
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-02 15:55:43
 */


/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
function FindKthToTail (pHead, k) {
  // write code here
  // 结点不存在返回空
  if (pHead === null) {
    return null;
  }
  // 遍历链表，
  let count = 0;
  let pre = pHead;
  while (pHead) {
    // 将数组进行头插
    count++
    pHead = pHead.next;
  }
  // 链表长度小于k,返回空
  if (count < k) {
    return null;
  }
  // 再对链表进行遍历
  while (count > k) {
    count--
    pre = pre.next;
  }
  // 返回倒数k个结点
  return pre;
}

// 上面是有两次while一次计数，一次移动指针找到目标结点
// 可以利用数组，不能是头插入，还是尾插都行，存储的元素为链表的结点，也就是链表的子链表的头指针
function FindKthToTail01 (pHead, k) {

  let result = []
  while (pHead !== null) {
    // 头插
    result.unshift(pHead);

    // 指针后移
    pHead = pHead.next;
  }
  // k不合法
  if (result.length < k) {
    return null
  }
  // 用尾插的话，返回 result[result.length-k]
  return result[k - 1]
}

module.exports = {
  FindKthToTail: FindKthToTail01
};