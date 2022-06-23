/*
 * @Description: 数组中重复的数字
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-27 08:41:26
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-27 08:51:03
 */


/**
 * 
 * 方案一：将所有数据从小打到排序，如果存在左右相等的情况就是重复了，输出一个即可；
 * 方案二：借助空数组，循环遍历目标数组按照index的值放入 如果存在则重复
 * 
 * 
 */


function duplicate (numbers) {
  // write code here

  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    // 这部分依赖的是排序后，如果不重复理想情况下：numbers[index]===index的情况
    if (!arr[numbers[i]]) {
      arr[numbers[i]] = 1;
    } else {
      return numbers[i]
    }
  }
  return -1
}


// 存在问题：时间复杂度依赖sort()函数
function duplicate01 (numbers) {

  // 从小到大排列
  numbers = numbers.sort((a, b) => a - b)

  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] === numbers[index + 1]) {
      // 存在两个元素重复
      return numbers[index]
    }
  }

  return -1;
}

module.exports = {
  duplicate: duplicate
};