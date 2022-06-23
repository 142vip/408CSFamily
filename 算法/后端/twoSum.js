/*
 * @Description: 给出一个整数数组，请在数组中找出两个加起来等于目标值的数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-17 23:31:18
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-18 10:05:27
 */

// 利用左右双指针
function twoSum (numbers, target) {
  // write code here

  const len = numbers.length

  // 从头开始
  for (let left = 0; left < len; left++) {
    for (let right = len - 1; right > left; right--) {
      if (numbers[left] + numbers[right] === target) {
        return [left + 1, right + 1]
      }
    }
  }
}

// 利用map对象来存储已经遍历的数据

function twoSum02 (numbers, target) {

  // 从左到右循环，进入map
  let map = new Map();

  for (let left = 0; left < numbers.length; left++) {


    if (map.has(target - numbers[left]) && map.get(target - numbers[left]) !== (left + 1)) {

      // 则在左边找到元素
      const right = map.get(target - numbers[left]);

      console.log(map)
      return [right, left + 1]
    }
    // 有点倒排索引的意思
    map.set(numbers[left], left + 1)
  }


}


console.log(twoSum([3,2,4],6))
console.log(twoSum02([0, 4, 3, 0], 0))
module.exports = {
  twoSum: twoSum
};