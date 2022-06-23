/*
 * @Description: 替换空格
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-27 10:07:45
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-27 10:08:59
 */


// 先转化为数组，再进行拼接
function replaceSpace( s ) {
  // write code here
  return s.split(' ').join('%20')
}

// 利用循环拼接，然后slice剪切
function replaceSpace01( s ) {
  // write code here
  const arr=s.split(' ');
  let str='';
   
  for(let index=0;index<arr.length;index++){
      str=str.concat('%20').concat(arr[index]);
  }
  return str.slice(3);
   
}
module.exports = {
  replaceSpace : replaceSpace
};