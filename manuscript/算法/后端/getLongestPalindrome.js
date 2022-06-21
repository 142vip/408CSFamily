/*
 * @Description: 最长回文字符串
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-20 21:06:00
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-20 21:06:17
 */


/**
 * 求给定字符的最大回文字符串
 * @param {string} str 字符串
 * @param {int} len 给定字符串的长度 
 */
function getLongestPalindrome(str,len){


  // 直接暴力

  // 最大计数
  let max=0;
  for(let i=0;i<len;i++){

    for(let j=i+1;j<len;j++){

      let current_str=str.slice(i,j);
      let reverse_srt=str.slice(i,j).split('').reverse().join()

      if(current_str===reverse_srt){
        // 可以
        max=Math.max(max,j-i+1)
      }else{
        // 不可能是回文
        break;
      }
    }
  }

  return max;

}