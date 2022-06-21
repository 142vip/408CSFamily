function Find(target, array) {
    // write code here
    if (!array) {
        return false;
    }

    // 行
    const rows = array.length;
    // 列
    const cols = array[0].length;
    console.log(rows, cols)
    if (rows === 0 || cols === 0) {
        return false;
    }
    let r = 0,
        c = cols - 1;

    while (r < rows && c >= 0) {

        if (array[r][c] === target) {
            return true;
        } else if (array[r][c] < target) {
            // 比目标值小，往下
            r++
        } else if (array[r][c] > target) {
            // 比目标值大 往左
            c--
        }
    }

    return false;

}


console.log(Find(7, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]
]))

// 投机方案
function Find01() {
    const len = array.length;
    let result = []
    for (let index = 0; index < len; index++) {
        result = result.concat(array[index]);
    }
    console.log(result, result.indexOf(target));
    // 查询
    return result.indexOf(target) !== -1
}
module.exports = {
    Find: Find
};