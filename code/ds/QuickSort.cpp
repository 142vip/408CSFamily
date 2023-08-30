// 快速排序【伪代码】
void QuickSort(ElemType A[] , int low , int high){
  // low > high 表角标越界，low=high 子表只有一个元素，不需要进行快排，已经有序
  if(low<high){

    // 获取pivot基准，将当前待排序表分成左右两个子表
    int pivotKey = Partition(A,low,high)

    // 对左边序列进行快排
    QuickSort(A,low,pivotKey-1)

    // 对右边序列进行快排
    QuickSort(A,pivotKey+1,high)

  }
  return A
}

int Partition(ElemType A ,int low , int high){

  ElemType pivot=A[low];

  while(low<high){
    while(low<high && A[high]>=pivot) --high
    A[low]=A[high]  // 比pivot小的都移到左表 注意--high 从后往前遍历

    while(low<high && A[low]<=pivot ) ++low
    A[high]=A[low]  // 比pivot大的都移到右表，注意++low 从前往后遍历
  }

  // 此时low==high||low>high 跳出循环后即找到能将当前表一分为二的pivotKey值
  A[low]=pivot
  // 基准元素pivot对应最终的位置角标
  return low
}