/*
 * @Description: 希尔排序
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-02-21 08:07:13
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-28 11:37:29
 */



/**
 * 
 * 数组的希尔排序
 * @param {Array} arr  待排序数组 
 * @param {int} len 数组长度，可校验
 * @returns 返回已排序的数组，从小到大  
 */
function shellSort (arr, len) {

  // 校对数组长度
  len = arr.length === len ? len : arr.length

  // 注意处理浮点【向上取整】 防止空指针
  for (let increment = Math.floor(len / 2); increment >= 1; increment = Math.floor(increment / 2)) {
    // 对每组数据，进行直接排序
    for (let groupIndex = 0; groupIndex < increment; ++groupIndex) {

      specialStraightInsertSort(arr, len, increment, groupIndex)
    }

  }

  return arr
}

/**
 * 根据希尔排序的步长对分组进行直接插入排序处理
 * @param {Array} arr 排序数组 
 * @param {int} len 数组长度
 * @param {int} increment 增量步长
 * @param {int} groupIndex 分组，第几个分组
 */
function specialStraightInsertSort (arr, len, increment, groupIndex) {
  len = arr.length === len ? len : arr.length
  console.log(`数组长度：${len}----->当前步长：${increment}---->分组：${groupIndex}`)

  for(let eleStartIndex=groupIndex+increment;eleStartIndex<len;eleStartIndex+=increment){
    // 此时eleStartIndex为直接插入排序的比较元素
    

    // 直接插入排序中的哨兵元素【重要】
    const temp=arr[eleStartIndex]       
    let j;
    // 向前比较 从小到大
    for(j=eleStartIndex-increment;j>=0&&arr[j]>temp;j-=increment){
      arr[j+increment]=arr[j]
    }
    arr[j+increment]=temp
  }

  console.log('specialStraightInsertSort处理后：',arr)
  return arr
}


/**
 * 插入排序
 * @param{Array} arr 待排序的数组
 * @param{int} len 数组arr的长度，可以用arr.length()计算得到
 */
function straightInsertSort (arr, len) {
  // 重新确定数组长度
  len = arr.length === len ? len : arr.length;

  // 从第二个元素开始循环，共len-1次
  for (let i = 1; i < len; i++) {

    // 后面的额元素比前面的元素小，需要把前面大于哨兵元素有序序列，移动后面一位
    if (arr[i] < arr[i - 1]) {
      let j;
      // 哨兵元素
      const temp = arr[i];
      for (j = i - 1; arr[j] > temp; --j) {
        // 后移
        arr[j + 1] = arr[j]
      }
      // 跳出循环逻辑，出现arr[j] > arr[j-1]

      // 哨兵即待排序的
      arr[j + 1] = temp
    }
  }

  return arr

}


const dealArr = [5, 8, 2, 16, 3, 9, 1]
console.log('插入排序前：', dealArr)
const sortResult = shellSort(dealArr, 7)
console.log('插入排序后：', sortResult)


/**
 * 简化的希尔排序
 * @param {Array} arr 
 * @returns 返回已排序号的数组，从小到大
 */
function shellSortBetter (arr) {
  var len = arr.length;
  var increment = Math.floor(len / 2);
  while (increment != 0) {
    for (var i = increment; i < len; i++) {
      var temp = arr[i]
      for (var j = i - increment; j >= 0 && temp < arr[j]; j -= increment) {
        arr[j + increment] = arr[j]
      }
      arr[j + increment] = temp;
    }
    increment = Math.floor(increment / 2)
  }
  return arr;
}


console.log('简化shellSortBetter希尔排序前：', dealArr)
const sortResultBetter = shellSortBetter(dealArr)
console.log('简化shellSortBetter希尔排序后：', sortResultBetter)