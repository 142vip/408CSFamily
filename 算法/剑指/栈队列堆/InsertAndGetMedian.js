/*
 * @Description: 【中等】数据流中的中位数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-29 21:38:01
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-29 21:39:13
 */



// 存储数据
let result = [];
function Insert (num) {
  // write code here
  result.push(num)
  // 当然，也可以在push之后去排序
}
function GetMedian () {
  // write code here
  // 先排序
  result = result.sort((a, b) => a - b);
  let len = result.length;

  // 奇数
  if (len % 2 !== 0) {
    return result[Math.floor((len - 1) / 2)]
  } else {
    // 分别获取低位 和高位
    const low = result[Math.floor((len - 2) / 2)]
    const high = result[Math.floor((len) / 2)]

    // 去平均值
    return (high + low) / 2
  }
}
module.exports = {
  Insert: Insert,
  GetMedian: GetMedian
};