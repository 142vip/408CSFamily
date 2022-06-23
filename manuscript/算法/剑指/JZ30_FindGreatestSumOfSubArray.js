/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-23 23:11:40
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-24 17:52:06
 */

function FindGreatestSumOfSubArray01 (array) {

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

    // 注意，重新计数
    sum = sum > 0 ? sum : 0
    index++
  }
  return max;

}


function FindGreatestSumOfSubArray (array) {
  // write code here

  // 首位指针
  let i = 0;
  // 从第一个元素开始，假设最大
  let max = array[0]
  let sum = 0;

  while (i < array.length) {
    // 替换

    // 和下一个元素求和
    sum += array[i];
    // 获取最大值
    max = sum > max ? sum : max;

    // 小于sum值，则说明累加和变小了，下一个模块重新计数
    sum = sum < 0 ? 0 : sum;


    // 标记指针后移
    i++
  }

  return max;


}
console.log(FindGreatestSumOfSubArray01([1, -2, 3, 10, -4, 7, 2, -5]))
console.log(FindGreatestSumOfSubArray([-2, -8, -1, -5, -9]))


module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray
};