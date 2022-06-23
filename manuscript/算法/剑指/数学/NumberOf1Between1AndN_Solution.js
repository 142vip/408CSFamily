/*
 * @Description: 【中等】从1到n整数中1出现的次数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-26 22:23:17
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 15:15:56
 */


// 转化
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    let count=0;
    while(n>0){
        // 转化为字符串
        count += (n).toString().split('').reduce((sum,item)=>{
            if(item==='1'){
                sum++;
            }
            return sum;
        },0)
       
        // 递减
        n--
    }
    return count;
}

// console.log(NumberOf1Between1AndN_Solution(13))
module.exports = {
    NumberOf1Between1AndN_Solution : NumberOf1Between1AndN_Solution
};