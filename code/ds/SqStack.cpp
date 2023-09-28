// 定义栈中元素的最大个数
# define MaxSize 50

// 结构体定义
typedef struct{
    ElemType data[MaxSize];     // 存放栈中元素
    int top;                    // 栈顶指针
}SqStack;


// 初始化
void InitStack(&S){
    // 栈顶指针-1
    s.top=-1;
}

// 栈空判断
bool StackEmpty(S){
    if(S.top==-1){
        // 栈空
        return true;
    }else{
        // 栈非空
        return false;
    }
}

// 进栈
bool Push(SqStack &S,ElemType x){
    if(S.top==MaxSize-1){
        // 栈满，返回false，元素无法进行进栈操作
        return false;
    }else{
        // 可进栈，栈顶指针+1，再元素入栈
        S.data[++S.top]=x;

        // 入栈成功
        return true;
    }
}


// 出栈
bool Pop(SqStack &S,ElemType &x){
    if(S.top==-1){
        // 栈空，无栈顶元素可出栈，返回false
        return false;
    }else{
        // 栈非空，先元素出栈，再进行指针-1
        x=S.data[S.top--];

        // 出栈成功，返回true
        return true;
    }
}

// 读（获取）栈顶元素
bool GetTop(SqStack S,ElemType &x){

    if(S.top==-1){
        // 栈空，无栈顶元素,返回false
        return false;
    }else{

        // 通过栈顶指针，获取栈顶元素，赋值给变量x
        x=S.data[S.top];

        // 读取栈顶元素成功，返回true
        return true;
    }
}
