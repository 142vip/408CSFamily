// 链栈类型定义【基础】
typedef struct LinkNode{
  ElemType data;                // 栈元素结点数据域
  struct LinkNode *next;        // 栈元素结点指针域
} *LinkStack;

// 更为详细的定义

typedef struct StackNode
{
	int data;//结点数据域
	struct StackNode* next;//结点指针域
}StackNode,* LinkTop;

//链栈的数据结构
typedef struct LinkStack
{
	LinkTop top;   //栈顶结点,定义了一个指向上个结构体的指针
	int count;//元素个数
}LinkStack;


// 基于单链表链栈的进栈操作
bool linkStackPushNode(LinkStack* linkStack,int e){

  // 判断链栈是否存在
  if (!linkStack){
     //链栈不存在，无法进栈操作，返回false
	  return false;
  }
  // 开辟栈结点元素内存控件
  StackNode* node = (StackNode*)malloc(sizeof(StackNode));
  // 新结点指针域指向链表，即栈顶指针位置，元素加入链表
  node->next = linkStack->top;
  // 新结点数据域赋值
  node->data = e;
  // 元素进栈，移动栈顶指针，指向新入栈的元素
  linkStack->top = node;
  // 链栈元素总数+1
  linkStack->count++;
  //链栈入栈成功，返回true
  return true;
}


/*
 * 基于单链表链栈的出栈操作
 *
 */
bool linkStackPopNode(LinkStack* linkStack,int *e){
  // 判断链栈是否存在及是否为空
  if (!linkStack || linkStack->count==0){
    //出栈失败，返回false
	  return	false;
  }
  // 获取栈顶元素结点
  StackNode* node = stack->top;

  // 结点元素数据域赋值给变量e
  *e = linkStack->data;
  // 移动栈顶指向，栈顶指针指向待出栈结点的后继结点
  linkStack->top = node->next;
  // 变量e已被赋值，释放链栈出栈元素的内存控件
  free(node);
  // 链栈元素个数-1
  linkStack->count--;
  // 出栈成功，返回true.
  return true;
}
