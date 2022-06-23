/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-03 15:43:06
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-03 15:44:38
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
      abs--
    }
    // 分数处理
    return 1 / result;

  } else {
    // 0 返回1 
    return result;
  }
}
module.exports = {
  Power: Power
};