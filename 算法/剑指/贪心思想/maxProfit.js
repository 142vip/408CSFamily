/*
 * @Description: 买卖股票的最好时机
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-29 23:27:18
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-29 23:27:55
 */
/**
  * 
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
module.exports = {
  maxProfit: maxProfit
};