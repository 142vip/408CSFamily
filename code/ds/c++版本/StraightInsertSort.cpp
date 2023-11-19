// 直接插入排序【伪代码】
void straightInsertSort(ElemType A[], int n){
  int i,j;

  // 依次将前面的第2到第n个元素插入到前面的有序序列
  for(i=2;i<=n;i++){
    if(A[i].key< A[i-1].key){
      // 哨兵元素
      A[0]=A[i];
      // 循环向后挪动
      for(j=i-1;A[0].key<A[j].key;--j){
        A[j+1]=A[j]
      }
      // 哨兵元素插入，注意这里为j+1，因为--j等循环完，先递减再使用，比预想靠后
      A[j+1]=A[0]
    }
  }
}

