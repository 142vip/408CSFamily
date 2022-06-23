// 
function LeftRotateString(str, n) {

    if (!str) {
        return str;
    }
    let arr = str.split('')

    const leftReverseArr = reverse(arr, 0, n - 1);
    console.log(`left:${leftReverseArr}`)
    const rightReverseArr = reverse(arr, n, arr.length - 1)
    console.log(`right:${rightReverseArr}`)

    // 翻转后，通过join连接起来
    return reverse(arr, 0, arr.length - 1).join('')
}


// 数组中翻转
function reverse(arr, left, right) {
    while (left < right) {
        // 元素交换
        arr = swap(arr, left, right)
        // left右移
        left++
        // right左移
        right--
    }
    return arr;
}


// 元素交换
function swap(arr, left, right) {

    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp

    return arr;
}


console.log(LeftRotateString('', 6))