/*
 * @Description: 顺时针打印矩阵
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-27 14:22:13
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-28 22:25:16
 */


function printMatrix (matrix) {
  // write code here

  // 行 角标
  let row = matrix.length - 1;
  // 列角标
  if (matrix[0].length === 0) {
    // 返回空数组
    return []
  }
  let col = matrix[0].length - 1

  let r = 0,
    c = 0;

  // 这里需要在脑海里想象顺时针旋转的时候，r-->left c-->top row-->right  col-->bottom 



  // 数组结果
  let result = []
  while (r <= row && c <= col) {

    // 上
    for (let index = c; index <= col; index++) {
      // 当前在上测，行为r 不为 row
      result.push(matrix[r][index])
    }

    // 跳出后，到右侧
    for (let index = r + 1; index <= row; index++) {
      result.push(matrix[index][col])
    }
    // 跳出来，就是下测 判断右下角拐角
    if (r !== row) {
      // 从右到左边
      for (let index = col - 1; index >= c; index--) {
        // 当前在底部，所以行为row
        result.push(matrix[row][index])
      }
    }
    // 左侧，注意判断条件
    if (c !== col) {
      // 从下到上
      for (let index = row - 1; index > r; index--) {
        // 当前在左侧，所以列表为c 部位col
        result.push(matrix[index][c])
      }
    }

    // 指针移动  转完一圈
    r++;
    row--;
    c++;
    col--;
  }

  return result;
}


console.log(printMatrix([
  [1, 2],
  [3, 4]
]))
module.exports = {
  printMatrix: printMatrix
};