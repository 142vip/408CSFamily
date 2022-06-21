/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-23 23:02:58
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-23 23:03:10
 */

function Permutation (str) {
  // write code here

  let result=[];
  let i=0;
  while(i<str.length){
    let j=0
    while(j<=i){
      result.push(str[j])
    }

  }
}
module.exports = {
  Permutation: Permutation
};
