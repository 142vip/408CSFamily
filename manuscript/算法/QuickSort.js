/**
 * 非递归实现快速排序
 * @param {*} data 
 * @param {*} low 
 * @param {*} high 
 */
function quickSort(data, low, high) {
    console.log(data, low, high)
    const pivot = partition(data, low, high);
    let result = [];

    if (pivot + 1 < high) {
        result.push(pivot + 1, high);
    } else if (pivot > low + 1) {
        result.push(low, pivot - 1);
    }



    // 数组不为空
    while (result.length > 0) {
        console.log(1, result)
        const temp_high = result.pop();
        const temp_low = result.pop();
        if (temp_low >= temp_high) {
            break;
        }
        const temp_pivot = partition(data, temp_low, temp_high);

        if (temp_pivot + 1 < high) {
            result.push(temp_pivot + 1, temp_high)
        } else if (temp_pivot - 1 > low) {
            result.push(temp_low, temp_pivot - 1);
        }

    }

    return data;

}


// 严版获取快排pivot
function partition(data, low, high) {

    let pivot = data[low];

    while (low < high) {
        // 高位
        while (low < high && pivot <= data[high]) --high;
        data[low] = data[high]
        // 低位
        while (low < high && pivot >= data[low]) ++low;
        data[high] = data[low]
    }
    data[low] = pivot

    return low
}

console.log(quickSort([1, 8, 9, 2], 0, 3))