/*
 * @Description: 买卖股票的最好时机
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-29 23:27:18
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-03 15:00:53
 */
/**
  * 暴力
  * @param prices int整型一维数组 
  * @return int整型
  */
function maxProfit (prices) {
  // write code here
  // 最低点买入，最高点卖出，收益最大 实际求的是一个子序列，最大和最小的差值 最小在前，最大在后

  // 最大收益为0 其他都不算收益
  let max = 0;

  for (let index = 0; index < prices.length; index++) {
    let start = prices[index];
    let end = Math.max(...prices.slice(index + 1));
    if (end - start > max) {
      max = end - start;
    }
  }

  // 返回最大值
  return max;
}

/**
 * 处理买点，卖点
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit (prices) {

  // 最大收益为0 其他都不算收益
  let max = 0;
  // 定义最小的值为买入
  let minPrice = Infinity
  for (let index = 0; index < prices.length; index++) {
    let start = prices[index];
    // 处理买点
    if (start < minPrice) {
      minPrice = start
    }
    // 处理卖点
    if (start - minPrice > max) {
      // 获取最大收益
      max = start - minPrice
    }
  }

  // 返回最大值
  return max;
};
module.exports = {
  maxProfit: maxProfit
};