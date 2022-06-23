/*
 * @Description: 【简单】旋转数组的最小数字
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-03 15:12:26
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-03 15:31:34
 */


// 找出前者大于后者的数，立即返回  
function minNumberInRotateArray (rotateArray) {
  // write code here

  if (rotateArray.length < 0) {
    return 0
  }

  for (let index = 0; index < rotateArray.length - 1; index++) {
    if (rotateArray[index] > rotateArray[index + 1]) {
      return rotateArray[index + 1]
    }
  }

  // 返回
  return rotateArray[0]
}

// 考虑二分法
function minNumberInRotateArray01(array){

}
module.exports = {
  minNumberInRotateArray: minNumberInRotateArray
};
