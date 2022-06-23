/*
 * @Description: 【中等】和为S的两个数字
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-30 20:29:08
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-30 21:04:46
 */


// 根据x+y=sum 求xy最小  由于array是递增的，则x y 距离越远 xy值越小，x y距离越近xy值越大
// x+y=(x+m)+(y-m)=sum  假设x是左边元素，y是右边元素 即：y>x
// 可以理解乘积(x+m)(y-m)=xy-(y-x)*m-m^2 其中y-x>0 m^2
// 所以m值越大，其实(x+m)(y-m)越小，也就是x与y间隔也大 xy越小 ，由于array是递增的，所以只需要找到第一个满足和为sum的即可
function FindNumbersWithSum (array, sum) {

  let left = 0, right = array.length - 1;

  while (left < right) {
    if (array[left] + array[right] === sum) {
      // 第一个就返回
      return [array[left], array[right]]
    } else if (array[left] + array[right] > sum) {
      // 向左
      right--
    } else {
      // 向右
      left++
    }
  }

  // 不存在满足添加，就返回空数组
  return []

}

// 注意数组array是递增的
// 不存在的时候，返回空数组
function FindNumbersWithSum01 (array, sum) {


  let left = 0, right = array.length - 1;

  // 将最小值标记设置成最大
  let min = array[right] * array[right]
  let result = [];
  while (left < right) {
    if (array[left] + array[right] === sum) {
      // 符合条件
      if (min > array[left] * array[right]) {
        // 最小值
        min = array[left] * array[right]
        result = [array[left], array[right]]
      }
      // 移动指针
      left++;
      right--
    } else if (array[left] + array[right] < sum) {
      // 左边向右
      left++
    } else {
      // 右边向左
      right--
    }

  }

  // 跳出循环
  return result;

}

console.log(FindNumbersWithSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21))
module.exports = {
  FindNumbersWithSum: FindNumbersWithSum
};