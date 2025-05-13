/**
 * 数组的希尔排序
 * - 返回已排序的数组，从小到大
 * @param {Array} arr  待排序数组
 * @param {int} len 数组长度，可校验
 */
export function shellSort(arr: number[], len: number): number[] {
  // 校对数组长度
  if (arr.length !== len) {
    len = arr.length
  }

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
export function specialStraightInsertSort(arr: number[], len: number, increment: number, groupIndex: number): number[] {
  if (arr.length !== len) {
    len = arr.length
  }

  console.log(`数组长度：${len}----->当前步长：${increment}---->分组：${groupIndex}`)

  for (let eleStartIndex = groupIndex + increment; eleStartIndex < len; eleStartIndex += increment) {
    // 此时eleStartIndex为直接插入排序的比较元素

    // 直接插入排序中的哨兵元素【重要】
    const temp = arr[eleStartIndex]

    let j: number
    // 向前比较 从小到大
    for (j = eleStartIndex - increment; j >= 0 && arr[j] > temp; j -= increment) {
      arr[j + increment] = arr[j]
    }
    arr[j + increment] = temp
  }

  console.log('specialStraightInsertSort处理后：', arr)

  return arr
}

const dealArr = [5, 8, 2, 16, 3, 9, 1]
console.log('插入排序前：', dealArr)

const sortResult = shellSort(dealArr, 7)
console.log('插入排序后：', sortResult)

/**
 * 简化的希尔排序
 * - 返回已排序号的数组，从小到大
 * @param {Array} arr
 */
export function shellSortBetter(arr: number[]): number[] {
  const len = arr.length
  let increment = Math.floor(len / 2)

  while (increment !== 0) {
    for (let i = increment; i < len; i++) {
      const temp = arr[i]
      for (let j = i - increment; j >= 0 && temp < arr[j]; j -= increment) {
        arr[j + increment] = arr[j]
      }
      arr[i + increment] = temp
    }
    increment = Math.floor(increment / 2)
  }
  return arr
}

// 测试用例
console.log('简化shellSortBetter希尔排序前：', dealArr)
const sortResultBetter = shellSortBetter(dealArr)
console.log('简化shellSortBetter希尔排序后：', sortResultBetter)
