/*
 * @Description: 【FED19】	移除数组中的元素
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-13 22:47:38
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-14 10:23:19
 */


/**
 * 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
 * @param {*} arr 
 * @param {*} item 
 * @returns 
 */
function removeWithoutCopy(arr, item) {

  // const result= arr.filter(value=>value!==item)
  // // 输出
  // return result;

  // 每次都和arr中的首个元素去比较

  const len=arr.length;

  for(let index=0;index<len;index++){
    if(arr[0]!==item){
      arr.push(arr[0])
    }

    // 删除第一个
    arr.shift()
  }

  return arr;
}

const test = [1, 2, 2, 3, 4, 2, 2]
console.log(removeWithoutCopy(test,2))




