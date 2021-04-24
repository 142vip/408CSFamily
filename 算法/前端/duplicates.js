/*
 * @Description: 找出数组 arr 中重复出现过的元素
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-14 10:22:51
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-14 10:22:51
 */


// 找出数组 arr 中重复出现过的元素
function duplicates(arr) {
  const sortArr=arr.sort();

  let result=new Array()

  const len=sortArr.length;

  for(let index=0;index<len-1;index++){

    if(sortArr[index]===sortArr[index++]){
      result.push(sortArr[index])
    }
  }

  // 去重
  return [...new Set(result)];
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))
