/*
 * @Description: 【中等】调整数组顺序使奇数位于偶数前面
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-03 15:56:06
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 07:54:38
 */

// 利用空间
function reOrderArray (array) {
  // write code here
  // 奇数,偶数；
  let odd_arr = [], even_arr = [];
  for (let index = 0; index < array.length; index++) {

    if (array[index] % 2 !== 0) {
      // 奇数
      odd_arr.push(array[index])
    } else {
      // 偶数
      even_arr.push(array[index])
    }
  }

  // 拼接
  return odd_arr.concat(even_arr)
}

// 利用冒泡，遇见偶数往最后放，统一前移

module.exports = {
  reOrderArray: reOrderArray
};