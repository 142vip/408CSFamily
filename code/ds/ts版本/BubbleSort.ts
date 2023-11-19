/**
 * 排序算法：冒泡排序
 * 给定一个数组，按照从小到大或从大到小排序，打印排序前后结果对比
 * 编程语言：TypeScript
 */
function BubbleSort(arr:Array<number>):number[] {
  // 获取数组长度
  const len = arr.length

  // 冒泡排序，让数组arr有序
  for (let i = 0; i < len - 1; i++) {
    let isSorted = false

    // len个数组，进行len-1趟，即：一趟冒泡
    for (let j = len - 1; j > i; j--) {
      // 注意：这里的for循环倒序是有讲究的，想象一下泡泡不都是网上升的么....
      if (arr[j - 1] > arr[j]) {
        // 交换元素，始终让最小的元素往上走（冒泡）
        const temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp

        // 需要冒泡
        isSorted = true
      }
    }
    // 第一趟比较后，如果本身序列是有序的，就直接跳出循环
    if (isSorted === false) {
      break
    }
  }

  return arr
}

/**
 * 将两个变量数值交换
 */
function switchValue(params:{ a: number, b: number }):{a:number, b:number} {
  const { a: newB, b: newA } = params
  return { a: newA, b: newB }
}

const initArr = [1, 5, 8, 3, 2, 9, 16]
console.log(`冒泡排序前：${initArr}`)
const sortedArr = BubbleSort(initArr)
console.log(`冒泡排序后：${sortedArr}`)
