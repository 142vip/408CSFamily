/*
 * @Description: 最小的K个数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-28 23:12:33
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-28 23:35:30
 */


function GetLeastNumbers_Solution (input, k) {
  // write code here
  // 偷懒做法
  return k > input.length ? [] : input.sort((a, b) => a - b).slice(0, k)
}

// 基于冒泡实现
function GetLeastNumbers_Solution01 (input, k) {
  // write code here

  // 添加参数校验
  if (k > input.length) {
    return []
  }
  // 先将输入的数组进行排序从小到大  只拍前面几个即可
  // 这里首先想到的是冒泡或者插入排序里面的特性 --- 每次都有一个元素在最终的位置上

  // 循环k次，跑k趟
  for (let index = 0; index < k; index++) {
    for (let j = input.length - 1; j > index; j--) {
      if (input[index] > input[j]) {
        // 找到比它的，位置交换
        [input[index], input[j]] = [input[j], input[index]]
      }
    }
  }

  // 排序完毕，输入前k个
  return input.slice(0, k)
}
module.exports = {
  GetLeastNumbers_Solution: GetLeastNumbers_Solution
};