/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-23 22:26:26
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-23 22:40:59
 */


// odd 奇数  even: 偶数

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
/**
 * 
 * 借用临时变量 遍历  【可通过测试】
 * @param {Array} array 
 * @returns 
 */
function reOrderArray( array ) {
  // write code here

  // 奇数,偶数；
  let odd_arr=[],even_arr=[];
  for(let index=0;index<array.length;index++){

    if(array[index]%2!==0){
      // 奇数
      odd_arr.push(array[index])
    }else{
      // 偶数
      even_arr.push(array[index])
    }
  }

  // 拼接
  return odd_arr.concat(even_arr)

}

console.log(reOrderArray([2,4,6,5,7]))
module.exports = {
  reOrderArray : reOrderArray
};