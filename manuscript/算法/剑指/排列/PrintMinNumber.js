/*
 * @Description: 【较难】把数组排成最小的数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-05 07:58:03
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 07:59:26
 */


// 比较s1,s2的时候，注意比较s1+s2<s2+s1的拼接大小
function PrintMinNumber (numbers) {
  // write code here
  let len = numbers.length;
  // 冒泡每次都将最小的放在最前面
  while (len > 0) {
    for (let index = 0; index < numbers.length - 1; index++) {

      if (parseInt(`${numbers[index]}${numbers[index + 1]}`) >= parseInt(`${numbers[index + 1]}${numbers[index]}`)) {

        // 元素交换
        [numbers[index], numbers[index + 1]] = [numbers[index + 1], numbers[index]]
      }
    }
    len--
  }



  return numbers.join('')

}
module.exports = {
  PrintMinNumber: PrintMinNumber
};