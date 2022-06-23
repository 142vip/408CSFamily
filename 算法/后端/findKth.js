/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-19 20:27:28
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-19 21:46:21
 */


/**
 * 
 * @param a int整型一维数组 
 * @param n int整型 
 * @param K int整型 
 * @return int整型
 */
function findKth (a, n, K) {
  // write code here


  const result = quickSort(a, 0, n - 1);

  console.log(result)
  return result[K - 1]



}

function quickSort (arr, low, high) {

  // 
  while (low < high) {

    // 中间区分值
    let pivot = getPivot(arr, low, high);
    console.log(`pivot:${pivot}`)
    
    // 左侧
    quickSort(arr, low, pivot - 1)
    // 右侧
    quickSort(arr, pivot + 1, high)
  }
  return arr;
}

function getPivot (arr, low, high) {

  let pivot = arr[low];

  while (low < high) {

    // pivot右侧元素都比arr[pivot]值大
    while (low < high && pivot <= arr[high]) {
      --high;
    }
    arr[low] = arr[high]

    // pivot左侧元素都比arr[pivot]值小
    while (low < high && pivot >= arr[low]) {
      ++low
    }
    arr[high] = arr[low]

  }
  arr[low] = pivot

  return low;

}


console.log(findKth([1, 3, 5, 2, 2], 5, 3))

module.exports = {
  findKth: findKth
};