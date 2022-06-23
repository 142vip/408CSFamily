/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-24 17:53:01
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-24 18:14:24
 */


function minNumberInRotateArray (rotateArray) {
  // write code here

  const len=rotateArray.length;
  if (rotateArray.length < 0) {
    return 0
  }

  // 重新整理思路 旋转数组： 非递减  基于分治的思路，对数组进行切割；

  let index=0;
  // 直接二分查找
  while(index<len){
    
  }

}

function isSortArr(arr){

  for(let index=0;index<arr.length-1;index++){
    if(arr[index]>arr[index+1]){
      return true;;
    }
  }
  return false;

}


console.log(minNumberInRotateArray([3,4,5,1,2]))
module.exports = {
  minNumberInRotateArray: minNumberInRotateArray
};