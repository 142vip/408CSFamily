/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-29 22:43:05
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-29 22:44:23
 */
function thenumberof0( n ) {
  // write code here
  let result=1;
  let count=0;
  for(let index=1;index<=n;index++){
      result *= index;
      if(result%10===0){
          count++;
          // 避免溢出
          result /=10;
      }
  }
  
  return count;
}
console.log(thenumberof0(10000000))
module.exports = {
  thenumberof0 : thenumberof0
};