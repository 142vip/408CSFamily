// 单链表头插法
LinkList CreateListWithStartNode(LinkList &L){

    LNode *s;
    int x;
    L=(LinkList)malloc(sizeof(LNode));  // 创建头结点L
    L->next=NULL;                       // 初始化空链表

    // 控制台输入值
    scanf("%d",&x);

    // 输入9999 表示结束
    while(x!==9999){
        // 开辟新结点存储空间
        s=(LNode*)malloc(sizeof(LNode));
        // 结点数据域赋值
        s->data=x;
        // 修改指针，新结点插入表中【注意：L->next为头结点的指针域】
        s->next=L->next;
        L->next=s;
        scanf("%d",&x);
    }

    // 返回单链表
    return L;
}

// 单链表尾插法
LinkList CreateListWithEndNode(LinkList &L){


    int x;              // 输入结点值
    L=(LinkList)malloc(sizeof(LNode));
    LNode *s;           // 新结点s
    LNode *r=L;         // r为尾指针

    // 控制台输入值
    scanf("%d",&x);

    while(x!==9999){
        // 开辟新结点存储空间
        s=(LNode *)malloc(sizeof(LNode));

        // 新结点s的数据域赋值为x
        s->data=x;
        // 单链表L的尾指针指向新的结点s
        r->next=s;

        // 指针r指向新的表尾结点
        r=s;

        scanf("%d",&x);
    }

    // 表尾指针置空【重要】
    r->next=NULL;

    // 返回单链表
    return L;

}

// 单链表按序号查找
LNode *GetElem(LinkList L,int i){
    int j=1;                  // 查询计数，初始为1
    LNode *p=L->next;         // 单链表头结点指针赋值给指针p


    // 第0个元素，则指向头结点，返回头结点
    if(i==0){
        // 头结点包含数据域和指针域
        return L;
    }

    // 不等于0，却小于1，则i为负数无效，直接返回NULL，查询结果空；
    if(i<1){
        return NULL;
    }

    // p存在且计数没有走到初始i的位置
    while(p&&j<i){

        // 指针后移
        p=p->next;

        // 计数标记+1
        j++;
    }

    // 注意： 当p不存在时， 跳出循环，p=NULL; 当p存在但是j大于等于i，跳出循环，返回查找的结果，返回p
    // 从跳出循环上来分析，p要么存在即：找到的结点元素，要么为空即NULL

    // 跳出循环，返回第i个结点的指针
    return p;

}

//单链表按值查找
LNode *LocateElem(LinkList L,ElemType e){

    // 指针【哨兵】
    LNode *p=L->next;
    // 从第1个结点开始查找数据域(data)为e的结点
    while(p!=NULL&&p->data!=e){
        // 无法匹配，指针后移
        p=p->next;
    }

    // 注意：p为NULL的时候，说明单链表已经遍历的尾结点了，跳出循环，没有找到目标结点；

    // 查找到第1个匹配的结点，跳出循环，返回结点指针
    return p;
    //
}

