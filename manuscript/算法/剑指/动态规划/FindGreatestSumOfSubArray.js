/*
 * @Description: 【简单】连续子数组的最大和 时间复杂度O(n)
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-05 11:34:21
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 11:45:11
 */

function FindGreatestSumOfSubArray (array) {

  // 标记指针
  let index = 0;
  // 子串的累计结果
  let sum = 0;
  // 子串的累加和最大值，当标记位从
  let max = array[index];


  // 循环
  while (index < array.length) {
    sum += array[index];
    max = sum > max ? sum : max;

    // 注意，重新计数,累计求和，从0开始
    sum = sum > 0 ? sum : 0
    index++
  }
  return max;

}

module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray
};
