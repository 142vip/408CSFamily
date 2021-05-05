/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-28 23:41:50
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 11:26:46
 */

function jumpFloorII (number) {
  // write code here

  // 我tm跳1 还剩下n-1阶  记作 G(n-1) 可选
  // 我tm跳2 还剩下n-2阶  记作 G(n-2) 可选
  // ....
  // 我tm跳n-1 还剩下1阶  记作 G(1)   可选

  // 归纳出： G(n-1)=G(1)+G(2)+.....+G(n-2);
  //         G(n)=G(1)+G(2)+.....+G(n-2)+G(n-1)

  // 两个相减  G(n)=2* G(n-1)   去递归 G(1)=1  , G(2)=2 G(3)=2*G(2)=4

  // 开始代码
  //     return Math.pow(2,number-1)
  // 位运算
  //     return 1<<(number-1)
  return 1 << --number
}
module.exports = {
  jumpFloorII: jumpFloorII
};