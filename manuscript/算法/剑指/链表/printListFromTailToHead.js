/*
 * @Description: 【较难】从尾到头打印链表
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-01 20:49:28
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-01 21:24:40
 */

function ListNode (x) {
  this.val = x;
  this.next = null;
}


// 偷懒写法
function printListFromTailToHead (head) {
  // write code here

  // 只有单个指针，从头出链表，按序放入数组，最后翻转数组
  let result = [];
  while (head !== null) {
    result.push(head.val);
    // 下一个元素
    head = head.next;
  }
  // 翻转并返回
  return result.reverse()
}

// 先翻转链表【采用头插法】，再按序输入到数组中 
function printListFromTailToHead01 (head) {

  let reverseHead = new ListNode(-1);
  // 头插法
  while (head !== null) {
    let pre = head;
    // 下一个结点
    head = head.next;
    pre.next = reverseHead.next;
    reverseHead.next = pre
  }
  // 重新整理 去掉val=-1的点
  reverseHead = reverseHead.next
  let result = []
  // 遍历链表
  while (reverseHead !== null) {
    result.push(reverseHead.val);
    // 下一个结点
    reverseHead = reverseHead.next;
  }
  // 返回
  return result;
}

// 相比链表的头插，这里对数组array进行头插unshift()即可
function printListFromTailToHead02 (head) {

  let result = [];
  while (head !== null) {
    result.unshift(head.val);

    // 下一个结点
    head = head.next;
  }

  // 返回，输出
  return result;
}

module.exports = {
  printListFromTailToHead: printListFromTailToHead
};