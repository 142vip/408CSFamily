/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-23 07:50:21
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-23 22:05:34
 */



function add(){
  console.log(arguments);
  var args=Array.prototype.slice.call(arguments)
  console.log(args)


  var _add=function(){
    console.log('add',arguments)
    args.push(...arguments);

    // 返回函数
    return _add;
  }

  console.log(args)

  // 对参数数组做求和处理

  _add.toString=function(){
    // 设置sum的起始值为0
    return args.reduce((sum,item)=>{
      console.log(sum,item)
      return sum+item;
    })
  }
  // 返回函数
  return _add
}

let str=add(1,6)(2)(3)
console.log(str)
// console.log(String(add(1,6)(2)(3)) )
// console.log(add(1)(2)(3))
// console.log(add(1)(2,3,4))

