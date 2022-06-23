/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-24 11:51:20
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-24 12:02:23
 */


function multiply (array) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    // result.push(array.slice(0, index).reduce((res, item) => res * item, 1) * array.slice(index + 1).reduce((res, item) => res * item, 1))
    result.push([...array.slice(0, index), ...array.slice(index + 1)].reduce((res, item) => {
      return res * item;
    },1)) // 给res的初始值为1
  }
  return result;
}

console.log(multiply([1, 2, 3, 4, 5]))