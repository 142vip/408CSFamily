/*
 * @Description: 【中等】圆圈中最后剩下的数 约瑟夫问题
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-05 14:48:28
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 15:11:02
 */



// 把n个人的编号改为0~n-1，然后对删除的过程进行分析。
// 第一个删除的数字是(m-1)%n，几位k，则剩余的编号为(0,1,...,k-1,k+1,...,n-1)，下次开始删除时，顺序为(k+1,...,n-1,0,1,...k-1)。
// 用f(n,m)表示从(0~n-1)开始删除后的最终结果。
// 用q(n-1,m)表示从(k+1,...,n-1,0,1,...k-1)开始删除后的最终结果。
// 则f(n,m)=q(n-1,m)。

// 下面把(k+1,...,n-1,0,1,...k-1)转换为(0~n-2)的形式，即
// k+1对应0
// k+2对于1
// ...
// k-1对应n-2
// 转化函数设为p(x)=(x-k-1)%n, p(x)的逆函数为p^(x)=(x+k+1)%n。
// 则f(n,m)=q(n-1,m)=p^(f(n-1,m))=(f(n-1,m)+k+1)%n，又因为k=(m-1)%n。
// 取余
// f(n,m)=(f(n-1,m)+m)%n;

// 最终的递推关系式为
// f(1,m) = 0;                        (n=1)
// f(n,m)=(f(n-1,m)+m)%n; （n>1）

function LastRemaining_Solution (n, m) {
  // write code here
  // 递推公式： f(0)=-1  f(1)=0 f(i)={f(i-1)+m}%i

  if (n === 0) {
    return -1;
  }

  if (n === 1) {
    return 0;
  }

  // 递归
  return (LastRemaining_Solution(n - 1, m) + m) % n;

}

// 非递归实现
function LastRemaining_Solution01 (n, m) {

  // 当然，这里也可以添加上负数的校验情况
  if (n === 0) {
    return -1;
  }

  if (n === 1) {
    return 0
  }

  // 循环处理
  let result = 0
  for (let index = 2; index <= n; index++) {
    // f(n,m)=[f(n-1,m)+m]%n
    result = (result + m) % index
  }
  // 返回
  return result;
}
module.exports = {
  LastRemaining_Solution: LastRemaining_Solution
};