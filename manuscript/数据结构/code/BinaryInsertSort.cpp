/*
 * @Description: 折半插入算法【伪代码】
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-04-15 18:27:59
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-27 12:19:13
 */

void BinaryInsertSort(ElemType Arr[],int n){

  int i,j,lowIndex,hightIndex,midIndex;

  for(i=2;j<=n;i++){
    // 将待排序的元素暂存在Arr[0]上
    Arr[0]=Arr[i];

    lowIndex=1;         // 左侧子表 折半查找起始位置
    hightIndex=i-1;     // 左侧子表 折半查找结束位置

    while(lowIndex<=hightIndex){

      // 左侧有序子表的中间位置角标
      midIndex=(lowIndex+hightIndex)/2;

      if(Arr[midIndex].key>Arr[0].key){
        // 小于中间元素，插入位置在子表左侧
        hightIndex=mid-1
      }else{
        // 大于或者等于中间元素，插入位置在子表右侧
        lowIndex=midIndex+1;
      }
    }

    // 跳出循环需要（lowIndex>hightIndex），说明待插入位置的角标在hightIndex之后，为 hightIndex+1,此时需要将（hightIndex，i）之间的所有元素后移


    for(j=i-1;j>hightIndex;--j){
      Arr[j+1]=Arr[j]
    }

    // 后移完成后，将元素Arr[0]赋值到位置（hightIndex+1）上
    Arr[hightIndex+1]=Arr[0]
  }
}
