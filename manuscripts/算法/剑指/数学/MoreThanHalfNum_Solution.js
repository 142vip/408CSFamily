/*
 * @Description: 【 简单】数组中出现次数超过一半的数字
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-05 14:28:36
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 14:29:22
 */

// 借助map计数即可
function MoreThanHalfNum_Solution (numbers) {
  // write code here
  let map = new Map();

  numbers.forEach(item => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })

  const arr = [...new Set(numbers)];

  //   console.log(map,arr)
  let result = 0;

  arr.map(item => {
    if (2 * map.get(item) > numbers.length) {
      result = item;
    }
  })


  return result;

}
module.exports = {
  MoreThanHalfNum_Solution: MoreThanHalfNum_Solution
};