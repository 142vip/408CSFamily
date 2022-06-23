/*
 * @Description: 第一个只出现一次的字符位置
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-28 22:23:51
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-28 22:24:20
 */


function FirstNotRepeatingChar (str) {
  // write code here
  // 转换为数组
  let arr = str.split('');
  // 数组里面去去重
  for (let index = 0; index < arr.length; index++) {
    if (arr.indexOf(arr[index]) === arr.lastIndexOf(arr[index])) {
      return index
    }
  }
  return -1

}

function FirstNotRepeatingChar01 (str) {
  // write code here
  const len = str.length;

  for (let index = 0; index < len - 1; index++) {
    const s = str.slice(index, index + 1);
    if (`${str.slice(0, index)}${str.slice(index + 1)}`.indexOf(s) === -1) {
      return index;
    }
  }
  return -1

}

module.exports = {
  FirstNotRepeatingChar: FirstNotRepeatingChar
};
