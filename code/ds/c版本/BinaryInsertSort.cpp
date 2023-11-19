// 折半查找
void BinaryInsertSort(ElemType Arr[],int n){
  int i,j,lowIndex,highIndex,midIndex;

  for(i=2;j<=n;i++){
    // 将待排序的元素暂存在Arr[0]上
    Arr[0]=Arr[i];

    lowIndex=1;         // 左侧子表 折半查找起始位置
    highIndex=i-1;     // 左侧子表 折半查找结束位置
    while(lowIndex<=highIndex){

      // 左侧有序子表的中间位置角标
      midIndex=(lowIndex+heightIndex)/2;

      if(Arr[midIndex].key>Arr[0].key){
        // 小于中间元素，插入位置在子表左侧
        highIndex=mid-1
      }else{
        // 大于或者等于中间元素，插入位置在子表右侧
        lowIndex=midIndex+1;
      }
    }

    // 跳出循环需要（lowIndex>heightIndex），
    //  说明待插入位置的角标在heightIndex之后，为 heightIndex+1,此时需要将（heightIndex，i）之间的所有元素后移

    for(j=i-1;j>highIndex;--j){
      Arr[j+1]=Arr[j]
    }

    // 后移完成后，将元素Arr[0]赋值到位置（highIndex+1）上
    Arr[highIndex+1]=Arr[0]
  }
}
