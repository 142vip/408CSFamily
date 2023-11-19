// 冒泡排序
void BubbleSwapSort(ElemType A[], int n){
  for(i=0;i<n-1;i++){
    // 当前趟次冒泡，是否发生了元素交换，初始化为false
    bool flag=false;

    for(j=n-1;j>i;j--){
      if(A[j-1].key>A[j].key){
        // 将两个元素A[j-1]、A[j]进行交换，有多种方法
        swap(A[j-1],A[j])
        // 确认已发生交换
        flag=true
      }
    }

    // 本趟遍历后没有发生交换，说明表已经有序
    if(flag==false){
      return ;
    }
  }
}

/**
 * 加减法实现两个元素值互换
 */
void swap(int a, int b){
  // 此时a为两值的和
  a=a+b;
  // 此时b的值为a
  b=a-b
  // 如何实现让a的值为b呢？？此时a的值为b
  a=a-b;
}


// 临时变量实现两个元素值的互换
void swap(int a,int b){
  int temp;
  temp=a;
  a=b;
  b=temp
}

