/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-21 21:48:10
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-21 22:11:21
 */


// 注意array是递增的
function FindNumbersWithSum (array, sum) {
  // write code here

  let left = 0;
  let right = array.length - 1;

  let sumReuslt = [];
  // 定义无穷大Infinity 或者直接sum值的平方
  let min = Math.pow(sum, 2)
  // let min=Infinity
  while (left < right) {
    let temp_sum = array[left] + array[right];
    if (temp_sum < sum) {
      // 向右
      left++
    } else if (temp_sum > sum) {
      // 向左
      right--
    } else if (temp_sum === sum) {
      // 已找到符合条件的元素，需要对齐进行乘积比较
      if (min > array[left] * array[right]) {
        // 假定为最小值
        min= array[left] * array[right]
        sumReuslt = [array[left], array[right]]
      }
      // left向右
      left++
      // right向左
      right--
    }
  }
  // left===right 退出
  return sumReuslt

}

console.log(FindNumbersWithSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],21))
module.exports = {
  FindNumbersWithSum: FindNumbersWithSum
};