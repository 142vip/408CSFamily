/*
 * @Description: 折半插入排序【JavaScript版本】
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-27 12:35:17
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-27 12:50:00
 */

/**
 * 折半插入排序
 * @param arr
 * @param len
 */
function binaryInsertSort(arr, len) {
  // 数组长度校验【非必须】
  len = arr.length === len ? len : arr.length


  for (let i = 1; i < len; i++) {
    const temp = arr[i]
    let lowIndex = 0; let highIndex = i - 1

    while (lowIndex <= highIndex) {
      // 注意：取整,javascript这里取整，会出现空指针
      const mid = parseInt((lowIndex + highIndex) / 2)

      if (arr[mid] <= temp) {
        // 右侧
        lowIndex = mid + 1
      } else {
        // 左侧
        highIndex = mid - 1
      }
    }
    // 元素后移

    for (let j = i - 1; j > highIndex; --j) {
      arr[j + 1] = arr[j]
    }
    arr[highIndex + 1] = temp
  }

  // 返回经过折半插入排序处理的有序数组
  return arr
}


const dealArr = [5, 2, 7, 3, 18, 8, 12, 1]
console.log('插入排序前：', dealArr)
const sortResult = binaryInsertSort(dealArr, 7)

console.log('插入排序后：', sortResult)

