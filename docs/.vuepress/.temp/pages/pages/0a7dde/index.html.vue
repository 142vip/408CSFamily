<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 21:58:40
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 21:58:40
-->
<h2 id="线性表的链式表示" tabindex="-1"><a class="header-anchor" href="#线性表的链式表示" aria-hidden="true">#</a> 线性表的链式表示</h2>
<p>顺序表的插入、删除操作需要移动大量元素，影响了运行效率（虽然时间复杂度为O(1)的情况也存在）。</p>
<p><strong>链式存储线性表时，不需要使用连续的存储单元，不要求逻辑上相邻的两个元素在物理位置上也相邻</strong></p>
<p>理解“链”的含义，链条---&gt;捆绑、指向------&gt;指针</p>
<p><strong>链式存储线性表时，对线性表的插入、删除元素是不需要移动元素的，只是需要修改指针</strong></p>
<ul>
<li>单链表</li>
<li>双链表</li>
<li>循环链表</li>
<li>静态链表</li>
</ul>
<h3 id="单链表" tabindex="-1"><a class="header-anchor" href="#单链表" aria-hidden="true">#</a> 单链表</h3>
<p>线性表的链式存储称作<code>单链表</code>，通过<strong>一组任意的存储单元</strong>来存储线性表中的数据元素。</p>
<p>每个链表结点（node）除了存放元素自身的信息外，还需要存放一个指向其后继结点的指针。目的是：<strong>通过指针建立起链表元素之间的线性关系</strong></p>
<p>单链表中结点类型的描述：</p>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
// 单链表结点类型定义
typeof struct LNode{
    ElemType data;          // 数据域
    struct LNode *next;     // 指针域
}LNode , *LinkList;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>单链表可以解决顺序表需要大量连续存储空间的缺点，但是单链表在数据域的基础上附加了指针域，存在浪费存储空间的缺点；</p>
<p>单链表的元素是<strong>离散地分布</strong>在存储空间中的，因此<strong>单链表是非随机存取的存储结构</strong>，不能直接找到表中特定的结点，需要从头开始遍历、一次查找；</p>
<p>通常，<strong>头指针用来标识一个单链表</strong>。头指针指向<code>NULL</code>时，标识单链表为空。</p>
<h4 id="头结点" tabindex="-1"><a class="header-anchor" href="#头结点" aria-hidden="true">#</a> 头结点</h4>
<p>为了操作上的方便，在单链表第一个结点之前附加一个结点，叫做<strong>头结点</strong>。</p>
<ul>
<li>头结点的数据域可以不存任何信息、也可以记录表长等基础信息</li>
<li>头结点的指针域指向线性表的第一个元素结点；</li>
</ul>
<p><strong>不论单链表是否带头结点（可选），头指针始终指向链表的第一个结点。</strong></p>
<p>头结点是带头结点的链表中的第一个结点【重要】</p>
<ul>
<li>头结点的数据域可以不存任何信息、也可以记录表长等基础信息</li>
<li>头结点的指针域指向线性表的第一个元素结点；</li>
</ul>
<p>头结点的优点：</p>
<ul>
<li>因为开始结点的位置被存放在头结点的指针域中，所以在链表的第一个位置上的操作和在表的其他位置上的操作一致，不需要进行特殊处理；</li>
<li>无论链表是否为空，头指针始终是指向头结点的头结点的非空指针【空表中，往往就只有头结点，此时头结点的指针域为空，可以有效避免头指针空指针异常问题】-----&gt; <strong>头结点的引入，很好的统一了空表和非空表的操作；</strong></li>
</ul>
<h4 id="头插法" tabindex="-1"><a class="header-anchor" href="#头插法" aria-hidden="true">#</a> 头插法</h4>
<blockquote>
<p>从空表开始，生成新的结点，将读取的数据存放在新结点的数据域中，将新结点插入到当前链表的表头【头结点之后】</p>
</blockquote>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>/*
 * @Description: 单链表头插法创建
 * @Version: Beta1.0
 * @Author: 【B站&amp;公众号】Rong姐姐好可爱
 * @Date: 2020-03-04 23:38:04
 * @LastEditors: 【B站&amp;公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-03-04 23:39:16
 */
LinkList CreateListWithStartNode(LinkList &amp;L){
    
    LNode *s;
    int x;
    L=(LinkList)malloc(sizeof(LNode));  // 创建头结点L
    L-&gt;next=NULL;                       // 初始化空链表
    
    // 控制台输入值
    scanf(&quot;%d&quot;,&amp;x);
    
    // 输入9999 表示结束
    while(x!==9999){
        // 开辟新结点存储空间
        s=(LNode*)malloc(sizeof(LNode));    
        // 结点数据域赋值
        s-&gt;data=x;      
        // 修改指针，新结点插入表中【注意：L-&gt;next为头结点的指针域】
        s-&gt;next=L-&gt;next;
        L-&gt;next=s;
        scanf(&quot;%d&quot;,&amp;x);
    }
    
    // 返回单链表
    return L;
}


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>特点：</p>
<ul>
<li>读入数据的顺序与生成的链表中的元素顺序是相反的【结合队列先进先出思考】</li>
<li>每个结点插入的时间复杂度为O(1),单链表长度为n时，头插法的时间复杂度为O(n)【结合算法中的while循环，可以很明确看出时间复杂度】</li>
</ul>
<h4 id="尾插法" tabindex="-1"><a class="header-anchor" href="#尾插法" aria-hidden="true">#</a> 尾插法</h4>
<p>头插法建立的单链表，链表中结点的次序和输入数据的顺序不一致【相反】，尾插法则很好的避免了这个问题；</p>
<blockquote>
<p>新结点插入到当前链表的表尾上，必须增加一个尾指针r,始终指向当前链表的尾结点；</p>
</blockquote>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
/*
 * @Description: 单链表尾插法创建
 * @Version: Beta1.0
 * @Author: 【B站&amp;公众号】Rong姐姐好可爱
 * @Date: 2020-03-04 23:38:04
 * @LastEditors: 【B站&amp;公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-03-04 23:39:16
 */
LinkList CreateListWithEndNode(LinkList &amp;L){
    
    
    int x;              // 输入结点值
    L=(LinkList)malloc(sizeof(LNode));
    LNode *s;           // 新结点s
    LNode *r=L;         // r为尾指针
    
    // 控制台输入值
    scanf(&quot;%d&quot;,&amp;x);
    
    while(x!==9999){
        // 开辟新结点存储空间
        s=(LNode *)malloc(sizeof(LNode));
        
        // 新结点s的数据域赋值为x
        s-&gt;data=x;
        // 单链表L的尾指针指向新的结点s
        r-&gt;next=s;
        
        // 指针r指向新的表尾结点
        r=s;

        scanf(&quot;%d&quot;,&amp;x);
    }
    
    // 表尾指针置空【重要】
    r-&gt;next=NULL;

    // 返回单链表
    return L;
    
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>特点：</p>
<ul>
<li>读入数据的顺序与生成的链表中的元素顺序完全一致</li>
<li>每个结点插入的时间复杂度为O(1),单链表长度为n时，尾巴插法的时间复杂度为O(n)【结合算法中的while循环，可以很明确看出时间复杂度】</li>
<li>相比头插法附设了一个指向表尾结点的指针，但时间复杂度与头插法相同</li>
</ul>
<h4 id="按序号查找" tabindex="-1"><a class="header-anchor" href="#按序号查找" aria-hidden="true">#</a> 按序号查找</h4>
<blockquote>
<p>在单链表中从第一个结点出发，顺指针next域逐个往下搜索、遍历，直到找出第i个结点为止，否则返回最后一个结点指针域NULL</p>
</blockquote>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
/*
 * @Description: 单链表按序号查找
 * @Version: Beta1.0
 * @Author: 【B站&amp;公众号】Rong姐姐好可爱
 * @Date: 2020-03-04 23:38:04
 * @LastEditors: 【B站&amp;公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-03-04 23:39:16
 */
LNode *GetElem(LinkList L,int i){
    int j=1;                  // 查询计数，初始为1
    LNode *p=L-&gt;next;         // 单链表头结点指针赋值给指针p
    

    // 第0个元素，则指向头结点，返回头结点
    if(i==0){
        // 头结点包含数据域和指针域
        return L;
    }
    
    // 不等于0，却小于1，则i为负数无效，直接返回NULL，查询结果空；
    if(i&lt;1){
        return NULL;
    }

    // p存在且计数没有走到初始i的位置
    while(p&amp;&amp;j&lt;i){
        
        // 指针后移
        p=p-&gt;next;

        // 计数标记+1
        j++;
    }

    // 注意： 当p不存在时， 跳出循环，p=NULL; 当p存在但是j大于等于i，跳出循环，返回查找的结果，返回p
    // 从跳出循环上来分析，p要么存在即：找到的结点元素，要么为空即NULL

    // 跳出循环，返回第i个结点的指针
    return p;
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>需要遍历（扫描）单链表，时间复杂度为：O(n)</p>
<h4 id="按值查找" tabindex="-1"><a class="header-anchor" href="#按值查找" aria-hidden="true">#</a> 按值查找</h4>
<blockquote>
<p>从单链表的第一个结点开始，从前往后依次比较表中个结点数据域的值，等于给定值e，则返回该结点的指针；若整个单链表【遍历完】中没有数据域值为e的结点，则返回NULL；</p>
</blockquote>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
/*
 * @Description: 单链表按值查找
 * @Version: Beta1.0
 * @Author: 【B站&amp;公众号】Rong姐姐好可爱
 * @Date: 2020-03-04 23:38:04
 * @LastEditors: 【B站&amp;公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-03-04 23:39:16
 */
LNode *LocateElem(LinkList L,ElemType e){
    
    // 指针【哨兵】
    LNode *p=L-&gt;next;
    // 从第1个结点开始查找数据域(data)为e的结点
    while(p!=NULL&amp;&amp;p-&gt;data!=e){
        // 无法匹配，指针后移
        p=p-&gt;next;
    }
    
    // 注意：p为NULL的时候，说明单链表已经遍历的尾结点了，跳出循环，没有找到目标结点；

    // 查找到第1个匹配的结点，跳出循环，返回结点指针
    return p;
    // 
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>链表遍历无法匹配，会返回NULL,因为在尾结点无法匹配的时候，直接返回尾结点指针域</p>
<p>需要遍历（扫描）单链表，时间复杂度为：O(n)</p>
<h4 id="结点插入" tabindex="-1"><a class="header-anchor" href="#结点插入" aria-hidden="true">#</a> 结点插入</h4>
<blockquote>
<p>单链表中，将值为x的新结点插入到单链表的第i个位置上</p>
</blockquote>
<ul>
<li>第一步： 检查插入位置的合法性；</li>
<li>第二步： 找到待插入位置的前驱结点，即第（i-1）个结点；</li>
<li>第三部： 在前驱结点后插入新结点；</li>
</ul>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>    // 循环遍历，时间复杂度O(n)
    p=GetElem(L,i-1);
    
    // 移动指针，时间复杂度O(1)
    s-&gt;next=p-&gt;next;
    p-&gt;next=s;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>结合上面的代码可以看出，将元素x插入到单链表L的第i个元素上，必须先找到单链表L的i个结点的前驱结点，即（i-1）的位置，需要采用<code>GetElem()</code>函数，按照序号查找；</p>
<p>如果返回的前驱结点不为空，则说明插入的位置i合法，否则位置非法，插入失败；</p>
<p>找到前驱结点p后，最重要的是移动指针，将新的结点s的指针域指向结点p的指针域，也就是s的指针域指向元素p的后继结点，第i个结点元素</p>
<p>原来的(i-1)位置上的元素，也就是前驱结点p的指针域则必须指向新的结点元素；</p>
<p><strong>上面的过程不能更换，避免后继指针不存在的问题</strong></p>
<p>最后的最后，一定要注意将s的数据域赋值x</p>
<p>插入结点的时间复杂度集中在查找第(i-1)个元素，时间复杂度为O(n);如果在给定结点的后面插入新结点，只需要执行<code>p-&gt;next=s</code>操作，时间复杂度为O(1)</p>
<h5 id="前插操作" tabindex="-1"><a class="header-anchor" href="#前插操作" aria-hidden="true">#</a> 前插操作</h5>
<blockquote>
<p>在某结点的前面插入一个新的结点</p>
</blockquote>
<p><strong>对结点的前插操作都可以转化为后插操作，前提：需要从单链表的头结点开始顺序查找到其前驱结点；时间复杂度为O(n)。</strong></p>
<h5 id="后插操作" tabindex="-1"><a class="header-anchor" href="#后插操作" aria-hidden="true">#</a> 后插操作</h5>
<blockquote>
<p>在某结点的后面插入一个新的结点，单链表插入算法中，通常采用后插操作的</p>
</blockquote>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
// 结点s插入到结点p的前面，修改指针域，顺序不能改变
s-&gt;next=p-&gt;next;
p-&gt;next=s;


// 经典的借助变量，进行值交换
temp=p-&gt;data;
p-&gt;data=s-&gt;data;
s-&gt;data=temp;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>上述借助临时变量<code>temp</code>来将结点s和结点p的数据域进行交换，需要开辟O(1)的空间复杂度，但是时间复杂度却从O(n)改变为O(1)，典型的空间换时间策略</p>
<h4 id="删除结点" tabindex="-1"><a class="header-anchor" href="#删除结点" aria-hidden="true">#</a> 删除结点</h4>
<blockquote>
<p>将单链表L的第i个结点元素删除；</p>
</blockquote>
<ul>
<li>第一步： 先检查删除位置的合法性；</li>
<li>第二步： 查找表中的第（i-1）个结点，即被删结点的前驱结点；</li>
<li>第三步： 移动指针，删除结点元素；</li>
</ul>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
// 获取删除位置结点元素的前驱结点
p=GetElem(L,i-1);

// 删除位置结点元素指针
q=p-&gt;next;

// 修改指针，将删除位置结点元素前驱结点的指针域指向其后继结点
p-&gt;next=q-&gt;next;

// 释放结点元素的内存控件
free(q)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>和插入算法一样，时间都消耗在查询前驱结点上，时间复杂度为：O(n)</p>
<blockquote>
<p>删除单链表L中给点结点元素*p，通常是按值查找获取到p结点的前驱元素，再执行删除操作，这样很明显会导致时间复杂度为：O(n)，主要都消耗在<code>按值查找</code>上</p>
</blockquote>
<p>这里可以利用p结点的后继结点将p结点删除</p>
<ul>
<li>第一步：申请结点q，使其只想p结点的后继结点；</li>
<li>第二步：将p结点的数据域值换成其后继结点的数据域；【注意，交换没什么意义，最终p的后继结点会删除、释放】</li>
<li>第三步：p的指针域指向q的指针域，q结点从链中“断开”</li>
<li>第四步：释放q的内存空间</li>
</ul>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>    // 存放p的后继结点指针
    q=p-&gt;next;
    
    // 结点p的后继结点元素赋值给结点p，避免后继结点的数据域丢失
    p-&gt;data=p-&gt;next-&gt;data;
    p-&gt;next=q-&gt;next;
    
    // 此时q指向更换数据域后的p，即原来p的后继结点
    free(q)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>相比按值查找前驱结点来删除给定的结点p，利用后继结点来删除的时间复杂度更小，为：O(1)</p>
<h4 id="计算表长" tabindex="-1"><a class="header-anchor" href="#计算表长" aria-hidden="true">#</a> 计算表长</h4>
<blockquote>
<p>计算单链表中数据结点（不含头结点）的个数</p>
</blockquote>
<p>算法思路：从第一个结点开始顺序依次访问表中的每一个结点，为此需要设置一个<code>计数器变量</code>，每访问一个结点，计算器加1，直到访问到空结点为止。</p>
<p>算法时间复杂度：O(n)</p>
<p><strong>单链表的长度是不包括头结点的，不带头结点和带头结点的单链表在求表长操作上会略有不同。</strong></p>
<p>不带头结点的单链表，当表为空时候，需要单独处理；</p>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>// 不带头结点的单链表L为空,判定条件是L=NULL。
if(L===NULL){
// 链表为空，表长为0
    return 0;
}

// 带头结点的单链表L为空，判空条件：L-&gt;next=NULL;

if(L-&gt;next===NULL){
    // 链表为空，不包含头结点，表长为0
    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
