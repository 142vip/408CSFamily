/*
 * @Description: 【中等】矩形覆盖
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-05 11:17:02
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 11:18:08
 */

function rectCover (number) {
  // write code here
  // 应该也是个递归  斐波拉契变形
  // n=1 ---> 1
  // n=2 ---> 2
  // n=3 ---> 3 <---- 1+2
  // n=4 ---> 5 <---- 2+3

  let a = 1; // n=1的情况
  let b = 2; // n=2的情况

  if (number < 3) {
    return number;
  }

  let result = 0;
  for (let index = 3; index <= number; index++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;

}
module.exports = {
  rectCover: rectCover
};