/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-23 22:49:55
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-23 22:54:42
 */



let result = [];
function push (node) {
  // write code here
  if (result) {
    return result.push(node)
  }
}
function pop () {
  // write code here
  if (result.length > 0) {
    return result.pop();
  }
}
function top () {
  // write code here
  if (result.length > 0) {
    return result[result.length - 1]
  }
}


// 对数组排序
function min () {
  // write code here
  // 对result数组进行排序
  return Math.min(...result)
}
module.exports = {
  push: push,
  pop: pop,
  top: top,
  min: min
};