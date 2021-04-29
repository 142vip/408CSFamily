/**
 * 给出一个整数数组， 请在数组中找出两个加起来等于目标值的数，
 你给出的函数twoSum 需要返回这两个数字的下标（ index1， index2）， 需要满足 index1 小于index2.。注意： 下标是从1开始的
 假设给出的数组中只存在唯一解
 */

function twoSum(numbers, target) {
    // write code here
    for (let i = 0; i = numbers.length - 1; i++) {
        const num = numbers[i];
        const value = target - num
        if (numbers.indexOf(target - num, i)) {
            return [i + 1, numbers.indexOf(target - num) + 1]
        }
    }
}
module.exports = {
    twoSum: twoSum
};


function captureThreeNumbers(str) {
    // 切割转化
    const arr = str.split('');
    console.log(arr)
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    for (let index = 0; index < arr.length - 1; index++) {
        if (num.includes(arr[index]) && num.includes(arr[index + 1]) && num.includes(arr[index + 2])) {
            return parseInt(`${arr[index]}${arr[index+1]}${arr[index+2]}`)
        }
    }

    return false;
}


console.log(captureThreeNumbers('abc123'))


function matchesPattern(str) {


    if (str.length !== 12) {
        return false;
    }
    // console.log(str.slice(2, 3), str.slice(6, 7))
    if (str.slice(3, 4) !== '-' || str.slice(7, 8) !== '-') {
        return false;
    }

    const arr = str.split('-');
    console.log(arr)
    if (arr.length !== 3) {
        return false;
    }

    const [low, mid, high] = arr;

    const rule = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const lowArr = low.split('');
    const midArr = mid.split('');
    const highArr = high.split('');

    console.log(lowArr, midArr, highArr)

    // 逐一比对

    for (let index = 0; index < lowArr.length; index++) {
        if (!rule.includes(lowArr[index])) {
            return false;
        }
    }

    for (let index = 0; index < midArr.length; index++) {
        if (!rule.includes(midArr[index])) {
            return false;
        }
    }

    for (let index = 0; index < highArr.length; index++) {
        if (!rule.includes(highArr[index])) {
            return false;
        }
    }

    return true;
}

console.log(matchesPattern('800-555-1212'))