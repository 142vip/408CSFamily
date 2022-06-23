/*
 * @Description:  【中等】跳台阶  递归，要么跳一阶，要么跳两阶
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-28 23:41:55
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 11:32:38
 */



/**
 * 
 * 思路： 对于第number台阶，只能从第number-1或者number-2上跳上来
 * 记作： G(number)=G(number-1)+G(number-2)
 * 即： 从第number-1跳上来的次数+从第number-2上跳上来的次数
 * 
 */

// 递归实现
function jumpFloor (number) {
  // write code here
  // 递归，要么跳一阶，要么跳两阶
  return number < 3 ? number : jumpFloor(number - 1) + jumpFloor(number - 2)
}

// 非递归调用
function jumpFloor01 (number) {

  let a = 1;
  let b = 2;
  let result = 0;

  if (number < 3) {
    return number
  }

  for (let index = 3; index <= number; index++) {
    result = a + b;
    a = b;
    b = result;
  }

  // 返回
  return result;
}

module.exports = {
  jumpFloor: jumpFloor
};