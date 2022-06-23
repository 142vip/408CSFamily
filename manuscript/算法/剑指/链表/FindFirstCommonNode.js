/*
 * @Description: 【简单】两个链表的第一个公共结点
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-02 21:33:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-02 21:44:24
 */


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode (pHead1, pHead2) {
  // write code here
  // 双重循环，时间复杂度过大，考虑优化
  //     while(pHead1!==null){
  //         let pHead2_back=pHead2
  //         while(pHead2_back!==null){
  //             if(pHead1===pHead2_back){
  //                 return pHead1;
  //             }else{
  //                 pHead2=pHead2_back.next;
  //             }
  //         }
  //         // 对pHead2从头开始
  //         pHead2_back=pHead2
  //         pHead1=pHead1.next;
  //     }
  //     return null;

  let p1 = pHead1, p2 = pHead2;

  // 其实，这里有个死循环的问题
  while (p1 !== p2) {
    // 不相等，则向前，如果后继结点为空，则回到头结点，重复
    p1 = p1 === null ? pHead1 : p1.next;
    p2 = p2 === null ? pHead2 : p2.next;
  }

  // 返回公共结点
  return p1;

}
module.exports = {
  FindFirstCommonNode: FindFirstCommonNode
};