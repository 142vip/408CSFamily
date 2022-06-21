/**
 * 
 * @param matrix int整型二维数组 
 * @return int整型一维数组
 */
function spiralOrder(matrix) {
    // write code here

    const high = matrix.length;
    const width = matrix[0].length;

    let top = width
    let bottom = width
    let right = high
    let left = high
}
module.exports = {
    spiralOrder: spiralOrder
};

consle.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))