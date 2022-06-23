/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-18 11:58:01
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-18 12:07:04
 */


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

console.log()