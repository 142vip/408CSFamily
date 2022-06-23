/*
 * @Description: 【简单】用两个栈实现队列
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-29 22:06:51
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-29 22:07:22
 */

let result = []
function push (node) {
  // write code here
  // 尾部进栈
  result.push(node)
}
function pop () {
  // write code here
  // 队列 先进先出 头部出去
  return result.shift()
}
module.exports = {
  push: push,
  pop: pop
};