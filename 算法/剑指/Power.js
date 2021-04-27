/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-23 22:14:37
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-23 22:23:46
 */

// 
/**
 * Math.power(base,exponent)
 * 保证base和exponent不同时为0。不得使用库函数，同时不需要考虑大数问题，也不用考虑小数点后面0的位数。
 * @param {double} base 
 * @param {int} exponent 
 */
function Power (base, exponent) {
  // write code here

  let result = 1;

  if (exponent > 0) {
    // 正数
    while (exponent > 0) {
      result *= base;
      exponent--
    }
    return result;
  } else if (exponent < 0) {
    // 负数 取反 绝对值 abs
    // let abs=Math.abs(exponent)
    let abs = -exponent;
    while (abs > 0) {
      result *= base;
      abx--
    }
    return 1 / result;

  } else {
    // 0 返回1
    return result;
  }
}

console.log(Power(2.10000, 3))
module.exports = {
  Power: Power
};