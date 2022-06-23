/*
 * @Description: 字符串中字符出现频率计数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-14 10:21:39
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-14 10:22:19
 */


function count(str) {
  // 转换为数组后去重
  const originArr=str.split('')
  const arr=[...new Set(originArr)];
  let result={};
  for(let index=0;index<arr.length;index++){
      const value=arr[index];
      let count=0;
      if(value!==' '){
        originArr.map(item=>{
              if(item===value){
                  count++
              }
          })
          // 对象计数
          result[value]=count
      }

  }
  return result;
}