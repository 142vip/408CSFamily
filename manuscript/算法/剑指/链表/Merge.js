/*
 * @Description: 【简单】合并两个排序的链表
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-02 17:18:36
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-02 17:30:18
 */


function ListNode (x) {
  this.val = x;
  this.next = null;
}

// 注意 两个链表都是单调递增
function Merge (pHead1, pHead2) {
  // write code here
  let pre = new ListNode(-1);
  let result = pre
  while (pHead1 !== null && pHead2 !== null) {
    if (pHead1.val >= pHead2.val) {
      // 前者大，用后者
      result.next = pHead2;
      pHead2 = pHead2.next;
    } else if (pHead1.val < pHead2.val) {
      // 后者大，用前者
      result.next = pHead1;
      pHead1 = pHead1.next;
    }
    // 后移指针
    result = result.next;
  }
  if (pHead1 !== null) {
    // 链表1没有走完
    result.next = pHead1
  }

  if (pHead2 !== null) {
    // 链表2没有走完
    result.next = pHead2;
  }
  // 返回 注意去掉头结点
  return pre.next;
}

// 思考递归的做法 没有上面迭代好理解
function Merge01(pHead1,pHead2){


  if(pHead1===null){
    return pHead2
  }

  if(pHead2===null){
    return pHead1
  }

  // 前者大于后者，
  if(pHead1.val>=pHead2.val){
    // 记住，pHead2向后，
    pHead2.next=Merge01(pHead1,pHead2.next)
    return pHead2
  }

  // 前者小于后者
  if(pHead1.val<pHead2.val){
    pHead1.next=Merge01(pHead1.next,pHead2)
    return pHead1;
  }
}


module.exports = {
  Merge: Merge
};