
/**
 *  ++i 和 i++ 的区别： https://zhidao.baidu.com/question/40433825.html
 */

function straightInsertSort(arr,len){
    len=arr.length===len?len:arr.length;
    // console.log(len)
    for(let i=1;i<len;i++){
        // 前面的元素比后面的元素大
        if(arr[i]<arr[i-1]){

            // 交换排序
            // let j=i
            // for(j;j>0;j--){
            //     if(arr[j-1]>arr[j]){
            //         const temp=arr[j]
            //         arr[j]=arr[j-1]
            //         arr[j-1]=temp;
            //     }
            // }

            //  插入排序
            const temp=arr[i];
            let j;
            // 哨兵元素小于前面的倒叙元素
            for(j=i-1;arr[j]>temp;--j){
                arr[j+1]=arr[j]
            }
            arr[j+1]=temp
            // console.log(arr)
        }
    }

    return arr;
}

const straightInsertSortResult= straightInsertSort([3,16,5,7,1,9,40,18,24],9)
console.log(straightInsertSort([3,16,5,7,1],5))

console.log(straightInsertSortResult)

