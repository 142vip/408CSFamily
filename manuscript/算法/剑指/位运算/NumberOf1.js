/*
 * @Description: 【中等】二进制中1的个数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-09 11:27:14
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-09 11:40:28
 */

function NumberOf1(n){

  // 记录1的个数
  let count=0;
  
  // 循环验证
  while(n!==0){
    //加+1 记录
    count++;
    // 取与
    n=n & (n-1)

  }

  return count;
}

// 当然也是可以转化为字符串，进行校验
module.export={
  NumberOf1:NumberOf1
}