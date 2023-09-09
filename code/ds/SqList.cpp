// 顺序表的基础操作

// 基础结构体
define MaxSize 50;
typedef struct{
  ElemType data[MaxSize];  // ElemType 代表元素类型 int、string.....
  int length;
}SqList



bool ListInsert(SqList &L, int i, ElemType e){

  // i非法 i=1 表头 i=L.length+1 表尾巴
  if(i<1||i>L.length+1){
    return false;
  }

  // 存储空间满，无法插入
  if(L.length >= MaxSize){
    return false;
  }

  // 遍历，将位置元素往后移动，注意从后往前循环，避免值被覆盖
  for(int j=L.length; j>=i;j--){
    L.data[j]=L.data[j-1];
  }

  // 此时，表L中的第i个元素和第i+1元素素值一样，将新元素存入i位置即可

  // 第i个元素，对应的位置角标为i-1
  L.data[i-1]=e;

  // 表长度加1
  L.length++;

  // 返回插入成功
  return true;
}


bool ListDelete(SqList &L, int i, ElemType &e){

  // i非法 i=1 表头 i=L.length+1 表尾巴
  if(i<1||i>L.length+1){
    return false;
  }

  // 存储空间满，无法插入
  if(L.length >= MaxSize){
    return false;
  }

  // 引用变量e赋值
  e=L.data[i-1]

  // 遍历，第i个元素后面的往前移动
  for(int j=i; j<=L.length;j++){
    // 从第i个元素开始，角标从i-1开始
    L.data[j-1]=L.data[j];
  }

  // 此时，表L中的表尾元素和倒数第二个元素值一样，将表的长度-1

  // 表长度减1
  L.length--;

  // 返回删除成功
  return true;
}