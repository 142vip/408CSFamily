/*
 * @Description: 【简单】不用加减乘除做加法
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-05 21:29:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 23:25:36
 */

function Add (num1, num2) {
  // write code here
  let count = num1;

  if (num2 > 0) {
    for (let index = 0; index < num2; index++) {
      count++
    }
    return count;
  } else if (num2 < 0) {
    let temp = Math.abs(num2);
    for (let index = 0; index < temp; index++) {
      count--
    }
    return count;
  } else {
    return count;
  }

}
module.exports = {
  Add: Add
};