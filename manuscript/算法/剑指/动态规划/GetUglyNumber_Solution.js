/*
 * @Description: 【较难】丑数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-06 21:33:38
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-08 23:53:19
 */


function GetUglyNumber_Solution (index) {

  // 由于丑数只包含因子 2 3 5 且，下一个丑数是通过上一个丑数，去x2 x3 或 x5  取最小得到的，要保证丑数的顺序递增的

  // 定义存放丑数的数组，且第一个丑数为1=2^0 * 3^0 * 5^0
  let result=[1];
  // 定义丑数对应的因子个数  即 丑数= 2^f2 * 3^f3 * 5^f5
  let f2=0,f3=0,f5=0;

  // 基于丑数的上下关系，可以去动态规划来做

  for(let i=1;i<index;i++){

    // 第i个丑数是在第i-1个丑数的基础上 去x2 x3 或 x5  取最小得到的，存放在result中
    result[i]=Math.min(result[i-1]*2,result[i-1]*3,result[i-1]*5);

    if(result[i]===result[i-1]*f2){
      f2++
    }
    if(result[i]===result[i-1]*f3){
      f3++
    }
    if(result[i]===result[i-1]*f5){
      f5++
    }

  }
  console.log(result)
  return result[index-1]
  

}


module.export = {
  GetUglyNumber_Solution: GetUglyNumber_Solution
}
