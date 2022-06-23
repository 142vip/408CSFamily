/*
 * @Description: 【较难】把字符串转换成整数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-05 21:40:03
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 23:28:22
 */

function StrToInt (str) {
  // write code here
  if (!str) return 0
  let bool = false, firstLetter = str[0]
  if (firstLetter == '-') bool = true
  if (firstLetter == '-' || firstLetter == '+') str = str.substring(1)
  const n = Number(str)
  if (n === 0) return 0
  return n !== n ? 0 : bool ? -n : n
}
// console.log(StrToInt(-123))
module.exports = {
  StrToInt: StrToInt
};