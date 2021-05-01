/*
 * @Description: 【中等】左旋转字符串
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-30 22:00:13
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-30 22:16:13
 */

function LeftRotateString (str, n) {
  // write code here
  // 临界条件
  if(!str||str.length<n){
    return ''
  }
  // 对k以前的进行翻转
  const firstStr = str.slice(0, n);
  // 对k以后的字符串进行翻转
  const secondStr = str.slice(n);
  // 对拼接后的字符串进行翻转
  return reverseStr(`${reverseStr(firstStr)}${reverseStr(secondStr)}`)
}

// 偷懒做法
function LeftRotateString01 (str, n) {

  // 两两翻转后，在统一翻转
  return `${str.slice(0, n).split('').reverse().join('')}${str.slice(n).split('').reverse().join('')}`.split('').reverse().join('')
}

/**
 * 旋转数组，交换
 * @param {string} str 
 * @returns 
 */
function reverseStr (str) {
  let result = str.split('')
  let left = 0, right = result.length - 1
  while (left <= right) {
    // 临时值 元素交换
    [result[left], result[right]] = [result[right], result[left]]
    left++;
    right--
  }
  return result.join('');
}
console.log(LeftRotateString('',6))
module.exports = {
  LeftRotateString: LeftRotateString
};