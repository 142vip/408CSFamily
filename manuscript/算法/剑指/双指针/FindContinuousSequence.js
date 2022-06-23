/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-30 21:05:44
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-30 21:36:15
 */


// 注意是连续递增数列，间距为1 那么可以将序列开始、结束元素看做 a 、 b
// 按照数列求和公式sum=（首项+尾项）* 项数 /2 即可
function FindContinuousSequence (sum) {

  // 按照sum值，先预估大概最多满足条件的序列
  // sum=(b+a)(b-a+1)/2 
  let left = 1, right = 2;

  let result = [];
  while (left < right) {
    // 从left....right的序列求和 
    const temp_sum = (right + left) * (right - left + 1)
    if (2 * sum === temp_sum) {
      // 满足条件
      let count = left;
      let temp_arr = [];
      while (count <= right) {
        temp_arr.push(count)
        count++
      }
      result.push(temp_arr)
      // 向前寻找
      left++
    } else if (2 * sum > temp_sum) {
      // 右边向右 
      right++
    } else {
      // 左边向右
      left++
    }

  }

  return result;


}

// console.log(FindContinuousSequence(9))
module.exports = {
  FindContinuousSequence: FindContinuousSequence
};