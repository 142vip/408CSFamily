/*
 * @Description: 【较难】滑动窗口的最大值
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-29 21:49:42
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-29 21:58:32
 */

function maxInWindows (num, size) {
  // write code here
  let len = num.length;
  let result = [];
  if (len < size || size === 0) {
    // 窗口大于数组长度 || 窗口大小为0
    return []
  }

  for (let index = 0; index <= len - size; index++) {

    // 获取最大值 【这里可以抽一个多数求最大的函数出来】
    result.push(Math.max(...num.slice(index, index + size)))
  }
  return result;
}
module.exports = {
  maxInWindows: maxInWindows
};