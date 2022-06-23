/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-18 21:59:54
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-18 22:00:33
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
  if (!pHead) {
    return null;
  }

  let arr = [];
  // 结点遍历,将结点存放在数组中
  while (pHead) {
    arr.push(pHead)
    pHead = pHead.next;
  }

  return arr[arr.length - k]
}
module.exports = {
  FindKthToTail: FindKthToTail
};