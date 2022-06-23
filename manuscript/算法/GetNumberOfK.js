function GetNumberOfK(data, k) {
    // write code here
    // 分两次二分查找，知道重复元素首次和最后一次出现位置，相减就能拿到重复次数了.

    // 左侧二分查找，重复元素第一次出现的索引位置
    const left = leftBinarySearch(data, k);


    // 右侧二分查找，重复元素最后一次出现的索引位置
    const right = rightBinarySearch(data, k);

    console.log(`left:${left}----> right:${right}`)
    return left === -1 && right === -1 ? 0 : right - left + 1
}

function rightBinarySearch(data, target) {
    if (!data.length) {
        return -1
    }
    let left = 0;
    let right = data.length - 1;

    while (left <= right) {

        let mid = left + Math.floor((right - left) / 2);

        if (target === data[mid]) {
            left = mid + 1
        } else if (target < data[mid]) {
            // 左侧
            right = mid - 1
        } else if (target > data[mid]) {
            // 右侧；
            left = mid + 1;
        }
    }

    // left = right+1; 判断出界
    if (right < 0 || data[right] !== target) {
        return -1
    }
    return right
}


// [left，right]
function leftBinarySearch(data, target) {
    if (!data.length) {
        return -1
    }
    let left = 0;
    let right = data.length - 1;

    while (left <= right) {

        let mid = left + Math.floor((right - left) / 2);

        if (target === data[mid]) {
            // 左侧收缩
            right = mid - 1;
        } else if (target < data[mid]) {
            // 左侧
            right = mid - 1
        } else if (target > data[mid]) {
            // 右侧；
            left = mid + 1;
        }
    }



    // left = right+1; 判断出界
    if (left > data.length || data[left] !== target) {
        return -1
    }


    return left
}










console.log(GetNumberOfK([1, 2, 3, 3, 3, 3, 4, 5], 3))
console.log(GetNumberOfK([3, 3, 3, 3, 4, 5], 3))
console.log(GetNumberOfK([1, 2, 3, 3, 3, 3], 3))
console.log(GetNumberOfK([1, 3, 3, 3, 3, 4, 5], 2))
console.log(GetNumberOfK([1, 3, 3, 3, 3, 4, 5], 0))
console.log(GetNumberOfK([1, 3, 3, 3, 3, 4, 5], 6))
console.log(GetNumberOfK([3, 3, 3, 3], 3))
console.log(GetNumberOfK([3, 3, 3, 3], 4))
console.log(GetNumberOfK([3], 3))
console.log(GetNumberOfK([3], 4))
console.log(GetNumberOfK([1, 3, 3, 3, 3, 4, 5], 2))


module.exports = {
    GetNumberOfK: GetNumberOfK
};