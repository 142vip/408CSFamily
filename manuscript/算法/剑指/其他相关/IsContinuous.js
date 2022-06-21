/*
 * @Description: 【中等】扑克牌顺子
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-05 21:26:28
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 21:27:09
 */


function IsContinuous (numbers) {
  // write code here
  // 先对数据进行从小到大排列

  numbers = numbers.sort((a, b) => a - b);

  // 判断0的个数
  let count = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === 0) {
      count++;
    }
  }
  // 不允许5个0
  if (count > 4) {
    return false;
  }

  // 4个0的时候，一定成立
  if (count === 4) {
    return true;
  }

  // 判断每个的间隔
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] !== 0 && numbers[index + 1] - numbers[index] > 1) {
      //             console.log(count,(numbers[index+1]-numbers[index]))
      count -= (numbers[index + 1] - numbers[index] - 1)
      //             console.log(count)
    }
  }

  if (count === 0) {
    return true;
  }

  return false;

}
module.exports = {
  IsContinuous: IsContinuous
};