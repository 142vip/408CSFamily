/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-21 21:33:14
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-21 21:38:32
 */



function threeNum(num){
  


}



// 暴力枚举，无法通过
function threeSum01( num ) {
  // write code here
  // 从小排序
  num=num.sort((a,b)=>a-b);
  const len=num.length;
  let result=[];
  for(let mid=1;mid<len-1;mid++){

      // 查找左边
      for(let left=0;left<mid;left++){

        // 查找右边

        for(let right=mid+1;right<len;right++){
          if(num[left]+num[mid]+num[right]===0){
            result.push([num[left],num[mid],num[right]])
          }
        }
      }

  }

  // 返回
  return result
}


console.log(threeSum([-2,0,1,1,2]))
module.exports = {
  threeSum : threeSum
};