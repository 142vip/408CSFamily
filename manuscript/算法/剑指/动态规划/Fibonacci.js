/*
 * @Description: 【入门】斐波拉契数列
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-05 11:00:05
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 11:10:56
 */

function Fibonacci (n) {
  // write code here
  // 递归调用
  return n < 2 ? n : Fibonacci(n - 1) + Fibonacci(n - 2)
}


// 非递归实现
function Fibonacci01 (n) {

  let a = 0, b = 1;

  if (n < 2) {
    return n;
  }
  let result = 0
  for (let index = 2; index <= n; index++) {
    // 求和
    result = a + b;
    a = b;
    b = result;
  }
  // 返回结果
  return result;
}




module.exports = {
  Fibonacci: Fibonacci01
};
