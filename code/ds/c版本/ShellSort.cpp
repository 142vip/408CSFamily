
// 希尔排序【伪代码】
void ShellSort(ElemType Arr[] , int n){
  // k是增量
  for(k=n/2;k>=1;k=k/2){

    // 增量子表进行直接插入排序
    for(i=k+1;i<=n;++i){

      if(Arr[i].key<Arr[i-k].key){

        // 元素暂存
        Arr[0]=Arr[i];

        for(j=i-k;j>0&&Arr[0].key<Arr[j].key;j-=k){
          // 记录后移，查找插入的位置
          Arr[j+k]=Arr[j]
        }
        // 插入
        Arr[j+k]=Arr[0]
      }
    }
  }
}


void ShellSortEnhance(ElemType Arr[] , int n){

  // 采用k=n/2 幂函数 确认希尔排序的步长

  for(k=n/2;k>=1;n/=2){

    // // 步长为k，则对应分为k个组，分别对其进行  直接插入排序

    for(i=1,i<=k;i++){
      
      // 第一步： 对应组的元素找出来，组成新的待排序的数列
      // 第二步： 对待排序数列进行 直接插入排序

      specialStraightInsertSort(ElemType Arr[], int n , int k , int i)

    }

  }
  // 返回 
  return Arr;
}
  