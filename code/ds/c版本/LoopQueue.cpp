// 队列最大存储元素个数
#define MaxSize 50

// 结构体定义
typedef struct {
  // 存放队列元素
  ElemType data[MaxSize];
  // 队头指针和队尾指针
  int front,rear;
} SqQueue;

// 入队算法
// 尾插法：Q.data[Q.rear]=x;Q.rear=(Q.rear+1)%Maxsize;Q.tag=1
// 队空条件：Q.front== Q.rear且Q.tag==0
int EnLoopQueue(SqQueue &Q, ElemType x){
   if(Q.front==Q.rear&&Q.tag==1){
      return 0;
   }
   Q.data[Q.rear]=x;
   Q.rear=(Q.rear+1)%MaxSize;
   Q.tag=1;
   return 1;
}



// 出队算法
// 头结点删除：x=Q.data[Q.front];Q.front=(Q.front +1)%Maxsize;Q.tag=0
// 队满条件：Q.front == Q.rear且Q.tag=1
// 注意：当删除之后链表为空时，还需增加一步，将尾指针指向头结点
int DeLoopQueue(SqQueue &Q, ElemType &x){
    if (Q.front==Q.rear&&Q.tag==0){
        return 0;
    }
    x=Q.data[Q.front];
    Q.front=(Q.front+1)%MaxSize;
    Q.tag=0;
    return 1;
}



