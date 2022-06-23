/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-21 22:13:04
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-22 07:43:10
 */



// 指针矛盾了
function FindContinuousSequence (sum) {
  // write code here

  // 首先，序列最少包含两位数，则 x+(x+1)<=sum ===> x<sum/2 暂且向上取整吧

  let left=1,right=2;
  let temp_sum=3;
  let result=[]
  // < 确保序列不断，跳出玄幻时候，left ==right  
  while(left<right){

    // 求和
    if(temp_sum===sum){

    }else if(temp_sum<sum){
      // 向右
      temp_sum-=left;
      left++;
    }else if(temp_sum>sum){
      // 向左
    }
  }

  // 跳出循环
  return result;

}

console.log(FindContinuousSequence(9))
module.exports = {
  FindContinuousSequence: FindContinuousSequence
};