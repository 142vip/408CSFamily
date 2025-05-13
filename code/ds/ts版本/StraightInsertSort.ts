/**
 * 直接插入排序【JavaScript版本】
 */
export function straightInsertSort(arr: number[], len: number): number[] {
  // 重新确定数组长度
  if (arr.length !== len) {
    len = arr.length
  }

  // 从第二个元素开始循环，共len-1次
  for (let i = 1; i < len; i++) {
    // 后面的额元素比前面的元素小，需要把前面大于哨兵元素有序序列，移动后面一位
    if (arr[i] < arr[i - 1]) {
      let j
      // 哨兵元素
      const temp = arr[i]

      // 后移
      for (j = i - 1; arr[j] > temp; --j) {
        arr[j + 1] = arr[j]
      }

      // 跳出循环逻辑，出现arr[j] > arr[j-1]
      // 哨兵即待排序的
      arr[j + 1] = temp
    }
  }

  return arr
}

const dealArr = [5, 2, 7, 3, 18, 8, 12, 1]
console.log('插入排序前：', dealArr)

const sortResult = straightInsertSort(dealArr, 7)
console.log('插入排序后：', sortResult)
