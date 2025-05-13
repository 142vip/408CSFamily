/**
 * 基于分治法思想，将数组进行快速排序
 * @param {Array} arr 待排序的数组
 * @param {int} low   数组低位角标   左指针
 * @param {int} high  数组高位角标   右指针
 */
export function QuickSort(arr: number[], low: number, high: number): number[] {
  // low=high 说明只有一个元素，理解为有序，不做处理
  // low>high 说明左、右指针已经重合，数组已经遍历完，需要跳出
  if (low < high) {
    const pivotIndex = Partition(arr, low, high)
    // 处理左侧
    QuickSort(arr, low, pivotIndex - 1)
    // 处理右侧
    QuickSort(arr, pivotIndex + 1, high)
  }

  // 经过快排处理的数组
  return arr
}

/**
 *
 * 寻找数组中的基准pivot，使得左侧元素全部小于等于pivot，右侧元素全部大于等于pivot
 * @param {Array} arr 分治思想处理后的数组
 * @param {int} low   数组低位角标   左指针
 * @param {int} high  数组高位角标   右指针
 */
export function Partition(arr: number[], low: number, high: number): number {
  // 假设低位指针对应数组角标元素为基准pivot
  const pivot = arr[low]
  while (low < high) {
    // 从右往左直到比pivot小跳出循环
    while (low < high && arr[high] >= pivot) --high
    arr[low] = arr[high]

    // 从左往右直到比pivot大跳出循环
    while (low < high && arr[low] <= pivot) ++low
    arr[high] = arr[low]
  }

  // 基准值移到最终的位置，此时左侧小于等于pivot 右侧大于等于pivot
  arr[low] = pivot

  // 返回基准值的角标
  return low
}

const initArr = [2, 18, 6, 25, 19, 4, 8, 3, 7]
console.log(`快速排序处理前：${initArr}`)
const quickSortResult = QuickSort(initArr, 0, 8)
console.log(`快速排序处理后：${quickSortResult}`)
