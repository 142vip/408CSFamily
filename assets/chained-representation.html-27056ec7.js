import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,d as a,a as n,b as p,e}from"./app-0014a839.js";const l="/408CSFamily/assets/静态链表存储结构-0649be12.png",d={},r=n("h1",{id:"链式表示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#链式表示","aria-hidden":"true"},"#"),p(" 链式表示")],-1),u=n("p",null,"顺序表的插入、删除操作需要移动大量元素，影响了运行效率（虽然时间复杂度为O(1)的情况也存在）。",-1),v=n("p",null,[n("strong",null,"链式存储线性表时，不需要使用连续的存储单元，不要求逻辑上相邻的两个元素在物理位置上也相邻")],-1),k=n("p",null,"理解“链”的含义，链条--->捆绑、指向------>指针",-1),m=n("p",null,[n("strong",null,"链式存储线性表时，对线性表的插入、删除元素是不需要移动元素的，只是需要修改指针")],-1),b=n("h2",{id:"单链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#单链表","aria-hidden":"true"},"#"),p(" 单链表")],-1),h=e(`<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><p>线性表的链式存储称作<code>单链表</code>，通过<strong>一组任意的存储单元</strong>来存储线性表中的数据元素。</p><p>每个链表结点（node）除了存放元素自身的信息外，还需要存放一个指向其后继结点的指针。目的是：<strong>通过指针建立起链表元素之间的线性关系</strong></p><p>单链表中结点类型的描述：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 单链表结点类型定义</span>
typeof <span class="token keyword">struct</span> <span class="token class-name">LNode</span><span class="token punctuation">{</span>
    ElemType data<span class="token punctuation">;</span>          <span class="token comment">// 数据域</span>
    <span class="token keyword">struct</span> <span class="token class-name">LNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>     <span class="token comment">// 指针域</span>
<span class="token punctuation">}</span>LNode <span class="token punctuation">,</span> <span class="token operator">*</span>LinkList<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单链表可以解决顺序表需要大量连续存储空间的缺点，但是单链表在数据域的基础上附加了指针域，存在浪费存储空间的缺点；</p><p>单链表的元素是<strong>离散地分布</strong>在存储空间中的，因此<strong>单链表是非随机存取的存储结构</strong>，不能直接找到表中特定的结点，需要从头开始遍历、一次查找；</p><p>通常，<strong>头指针用来标识一个单链表</strong>。头指针指向<code>NULL</code>时，标识单链表为空。</p><h3 id="头结点" tabindex="-1"><a class="header-anchor" href="#头结点" aria-hidden="true">#</a> 头结点</h3><p>为了操作上的方便，在单链表第一个结点之前附加一个结点，叫做<strong>头结点</strong>。</p><ul><li>头结点的数据域可以不存任何信息、也可以记录表长等基础信息</li><li>头结点的指针域指向线性表的第一个元素结点；</li></ul><p><strong>不论单链表是否带头结点（可选），头指针始终指向链表的第一个结点。</strong></p><p>头结点是带头结点的链表中的第一个结点【重要】</p><ul><li>头结点的数据域可以不存任何信息、也可以记录表长等基础信息</li><li>头结点的指针域指向线性表的第一个元素结点；</li></ul><p>头结点的优点：</p><ul><li>因为开始结点的位置被存放在头结点的指针域中，所以在链表的第一个位置上的操作和在表的其他位置上的操作一致，不需要进行特殊处理；</li><li>无论链表是否为空，头指针始终是指向头结点的头结点的非空指针【空表中，往往就只有头结点，此时头结点的指针域为空，可以有效避免头指针空指针异常问题】-----&gt; <strong>头结点的引入，很好的统一了空表和非空表的操作；</strong></li></ul><h3 id="头插法" tabindex="-1"><a class="header-anchor" href="#头插法" aria-hidden="true">#</a> 头插法</h3><blockquote><p>从空表开始，生成新的结点，将读取的数据存放在新结点的数据域中，将新结点插入到当前链表的表头【头结点之后】</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/*
 * @Description: 单链表头插法创建
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-03-04 23:38:04
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2020-03-04 23:39:16
 */</span>
LinkList <span class="token function">CreateListWithStartNode</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    LNode <span class="token operator">*</span>s<span class="token punctuation">;</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    L<span class="token operator">=</span><span class="token punctuation">(</span>LinkList<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 创建头结点L</span>
    L<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>                       <span class="token comment">// 初始化空链表</span>
    
    <span class="token comment">// 控制台输入值</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 输入9999 表示结束</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token operator">!=</span><span class="token operator">=</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 开辟新结点存储空间</span>
        s<span class="token operator">=</span><span class="token punctuation">(</span>LNode<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
        <span class="token comment">// 结点数据域赋值</span>
        s<span class="token operator">-&gt;</span>data<span class="token operator">=</span>x<span class="token punctuation">;</span>      
        <span class="token comment">// 修改指针，新结点插入表中【注意：L-&gt;next为头结点的指针域】</span>
        s<span class="token operator">-&gt;</span>next<span class="token operator">=</span>L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        L<span class="token operator">-&gt;</span>next<span class="token operator">=</span>s<span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 返回单链表</span>
    <span class="token keyword">return</span> L<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：</p><ul><li>读入数据的顺序与生成的链表中的元素顺序是相反的【结合队列先进先出思考】</li><li>每个结点插入的时间复杂度为O(1),单链表长度为n时，头插法的时间复杂度为O(n)【结合算法中的while循环，可以很明确看出时间复杂度】</li></ul><h3 id="尾插法" tabindex="-1"><a class="header-anchor" href="#尾插法" aria-hidden="true">#</a> 尾插法</h3><p>头插法建立的单链表，链表中结点的次序和输入数据的顺序不一致【相反】，尾插法则很好的避免了这个问题；</p><blockquote><p>新结点插入到当前链表的表尾上，必须增加一个尾指针r,始终指向当前链表的尾结点；</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 单链表尾插法创建
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-03-04 23:38:04
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2020-03-04 23:39:16
 */</span>
LinkList <span class="token function">CreateListWithEndNode</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>              <span class="token comment">// 输入结点值</span>
    L<span class="token operator">=</span><span class="token punctuation">(</span>LinkList<span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    LNode <span class="token operator">*</span>s<span class="token punctuation">;</span>           <span class="token comment">// 新结点s</span>
    LNode <span class="token operator">*</span>r<span class="token operator">=</span>L<span class="token punctuation">;</span>         <span class="token comment">// r为尾指针</span>
    
    <span class="token comment">// 控制台输入值</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span><span class="token punctuation">(</span>x<span class="token operator">!=</span><span class="token operator">=</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 开辟新结点存储空间</span>
        s<span class="token operator">=</span><span class="token punctuation">(</span>LNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 新结点s的数据域赋值为x</span>
        s<span class="token operator">-&gt;</span>data<span class="token operator">=</span>x<span class="token punctuation">;</span>
        <span class="token comment">// 单链表L的尾指针指向新的结点s</span>
        r<span class="token operator">-&gt;</span>next<span class="token operator">=</span>s<span class="token punctuation">;</span>
        
        <span class="token comment">// 指针r指向新的表尾结点</span>
        r<span class="token operator">=</span>s<span class="token punctuation">;</span>

        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 表尾指针置空【重要】</span>
    r<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">// 返回单链表</span>
    <span class="token keyword">return</span> L<span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：</p><ul><li>读入数据的顺序与生成的链表中的元素顺序完全一致</li><li>每个结点插入的时间复杂度为O(1),单链表长度为n时，尾巴插法的时间复杂度为O(n)【结合算法中的while循环，可以很明确看出时间复杂度】</li><li>相比头插法附设了一个指向表尾结点的指针，但时间复杂度与头插法相同</li></ul><h3 id="按序号查找" tabindex="-1"><a class="header-anchor" href="#按序号查找" aria-hidden="true">#</a> 按序号查找</h3><blockquote><p>在单链表中从第一个结点出发，顺指针next域逐个往下搜索、遍历，直到找出第i个结点为止，否则返回最后一个结点指针域NULL</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 单链表按序号查找
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-03-04 23:38:04
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2020-03-04 23:39:16
 */</span>
LNode <span class="token operator">*</span><span class="token function">GetElem</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>                  <span class="token comment">// 查询计数，初始为1</span>
    LNode <span class="token operator">*</span>p<span class="token operator">=</span>L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>         <span class="token comment">// 单链表头结点指针赋值给指针p</span>
    

    <span class="token comment">// 第0个元素，则指向头结点，返回头结点</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 头结点包含数据域和指针域</span>
        <span class="token keyword">return</span> L<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 不等于0，却小于1，则i为负数无效，直接返回NULL，查询结果空；</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// p存在且计数没有走到初始i的位置</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token operator">&amp;&amp;</span>j<span class="token operator">&lt;</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        
        <span class="token comment">// 指针后移</span>
        p<span class="token operator">=</span>p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

        <span class="token comment">// 计数标记+1</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 注意： 当p不存在时， 跳出循环，p=NULL; 当p存在但是j大于等于i，跳出循环，返回查找的结果，返回p</span>
    <span class="token comment">// 从跳出循环上来分析，p要么存在即：找到的结点元素，要么为空即NULL</span>

    <span class="token comment">// 跳出循环，返回第i个结点的指针</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要遍历（扫描）单链表，时间复杂度为：O(n)</p><h3 id="按值查找" tabindex="-1"><a class="header-anchor" href="#按值查找" aria-hidden="true">#</a> 按值查找</h3><blockquote><p>从单链表的第一个结点开始，从前往后依次比较表中个结点数据域的值，等于给定值e，则返回该结点的指针；若整个单链表【遍历完】中没有数据域值为e的结点，则返回NULL；</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>LNode <span class="token operator">*</span><span class="token function">LocateElem</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span>ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token comment">// 指针【哨兵】</span>
    LNode <span class="token operator">*</span>p<span class="token operator">=</span>L<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 从第1个结点开始查找数据域(data)为e的结点</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token operator">&amp;&amp;</span>p<span class="token operator">-&gt;</span>data<span class="token operator">!=</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 无法匹配，指针后移</span>
        p<span class="token operator">=</span>p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 注意：p为NULL的时候，说明单链表已经遍历的尾结点了，跳出循环，没有找到目标结点；</span>

    <span class="token comment">// 查找到第1个匹配的结点，跳出循环，返回结点指针</span>
    <span class="token keyword">return</span> p<span class="token punctuation">;</span>
    <span class="token comment">// </span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链表遍历无法匹配，会返回NULL,因为在尾结点无法匹配的时候，直接返回尾结点指针域</p><p>需要遍历（扫描）单链表，时间复杂度为：O(n)</p><h3 id="结点插入" tabindex="-1"><a class="header-anchor" href="#结点插入" aria-hidden="true">#</a> 结点插入</h3><blockquote><p>单链表中，将值为x的新结点插入到单链表的第i个位置上</p></blockquote><ul><li>第一步： 检查插入位置的合法性；</li><li>第二步： 找到待插入位置的前驱结点，即第（i-1）个结点；</li><li>第三部： 在前驱结点后插入新结点；</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    <span class="token comment">// 循环遍历，时间复杂度O(n)</span>
    p<span class="token operator">=</span><span class="token function">GetElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 移动指针，时间复杂度O(1)</span>
    s<span class="token operator">-&gt;</span>next<span class="token operator">=</span>p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next<span class="token operator">=</span>s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合上面的代码可以看出，将元素x插入到单链表L的第i个元素上，必须先找到单链表L的i个结点的前驱结点，即（i-1）的位置，需要采用<code>GetElem()</code>函数，按照序号查找；</p><p>如果返回的前驱结点不为空，则说明插入的位置i合法，否则位置非法，插入失败；</p><p>找到前驱结点p后，最重要的是移动指针，将新的结点s的指针域指向结点p的指针域，也就是s的指针域指向元素p的后继结点，第i个结点元素</p><p>原来的(i-1)位置上的元素，也就是前驱结点p的指针域则必须指向新的结点元素；</p><p><strong>上面的过程不能更换，避免后继指针不存在的问题</strong></p><p>最后的最后，一定要注意将s的数据域赋值x</p><p>插入结点的时间复杂度集中在查找第(i-1)个元素，时间复杂度为O(n);如果在给定结点的后面插入新结点，只需要执行<code>p-&gt;next=s</code>操作，时间复杂度为O(1)</p><h4 id="前插操作" tabindex="-1"><a class="header-anchor" href="#前插操作" aria-hidden="true">#</a> 前插操作</h4><blockquote><p>在某结点的前面插入一个新的结点</p></blockquote><p><strong>对结点的前插操作都可以转化为后插操作，前提：需要从单链表的头结点开始顺序查找到其前驱结点；时间复杂度为O(n)。</strong></p><h4 id="后插操作" tabindex="-1"><a class="header-anchor" href="#后插操作" aria-hidden="true">#</a> 后插操作</h4><blockquote><p>在某结点的后面插入一个新的结点，单链表插入算法中，通常采用后插操作的</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 结点s插入到结点p的前面，修改指针域，顺序不能改变</span>
s<span class="token operator">-&gt;</span>next<span class="token operator">=</span>p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
p<span class="token operator">-&gt;</span>next<span class="token operator">=</span>s<span class="token punctuation">;</span>


<span class="token comment">// 经典的借助变量，进行值交换</span>
temp<span class="token operator">=</span>p<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
p<span class="token operator">-&gt;</span>data<span class="token operator">=</span>s<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
s<span class="token operator">-&gt;</span>data<span class="token operator">=</span>temp<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述借助临时变量<code>temp</code>来将结点s和结点p的数据域进行交换，需要开辟O(1)的空间复杂度，但是时间复杂度却从O(n)改变为O(1)，典型的空间换时间策略</p><h3 id="删除结点" tabindex="-1"><a class="header-anchor" href="#删除结点" aria-hidden="true">#</a> 删除结点</h3><blockquote><p>将单链表L的第i个结点元素删除；</p></blockquote><ul><li>第一步： 先检查删除位置的合法性；</li><li>第二步： 查找表中的第（i-1）个结点，即被删结点的前驱结点；</li><li>第三步： 移动指针，删除结点元素；</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 获取删除位置结点元素的前驱结点</span>
p<span class="token operator">=</span><span class="token function">GetElem</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除位置结点元素指针</span>
q<span class="token operator">=</span>p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

<span class="token comment">// 修改指针，将删除位置结点元素前驱结点的指针域指向其后继结点</span>
p<span class="token operator">-&gt;</span>next<span class="token operator">=</span>q<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

<span class="token comment">// 释放结点元素的内存控件</span>
<span class="token function">free</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和插入算法一样，时间都消耗在查询前驱结点上，时间复杂度为：O(n)</p><blockquote><p>删除单链表L中给点结点元素*p，通常是按值查找获取到p结点的前驱元素，再执行删除操作，这样很明显会导致时间复杂度为：O(n)，主要都消耗在<code>按值查找</code>上</p></blockquote><p>这里可以利用p结点的后继结点将p结点删除</p><ul><li>第一步：申请结点q，使其只想p结点的后继结点；</li><li>第二步：将p结点的数据域值换成其后继结点的数据域；【注意，交换没什么意义，最终p的后继结点会删除、释放】</li><li>第三步：p的指针域指向q的指针域，q结点从链中“断开”</li><li>第四步：释放q的内存空间</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    <span class="token comment">// 存放p的后继结点指针</span>
    q<span class="token operator">=</span>p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    
    <span class="token comment">// 结点p的后继结点元素赋值给结点p，避免后继结点的数据域丢失</span>
    p<span class="token operator">-&gt;</span>data<span class="token operator">=</span>p<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next<span class="token operator">=</span>q<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    
    <span class="token comment">// 此时q指向更换数据域后的p，即原来p的后继结点</span>
    <span class="token function">free</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比按值查找前驱结点来删除给定的结点p，利用后继结点来删除的时间复杂度更小，为：O(1)</p><h3 id="计算表长" tabindex="-1"><a class="header-anchor" href="#计算表长" aria-hidden="true">#</a> 计算表长</h3><blockquote><p>计算单链表中数据结点（不含头结点）的个数</p></blockquote><p>算法思路：从第一个结点开始顺序依次访问表中的每一个结点，为此需要设置一个<code>计数器变量</code>，每访问一个结点，计算器加1，直到访问到空结点为止。</p><p>算法时间复杂度：O(n)</p><p><strong>单链表的长度是不包括头结点的，不带头结点和带头结点的单链表在求表长操作上会略有不同。</strong></p><p>不带头结点的单链表，当表为空时候，需要单独处理；</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 不带头结点的单链表L为空,判定条件是L=NULL。</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token operator">==</span><span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">// 链表为空，表长为0</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 带头结点的单链表L为空，判空条件：L-&gt;next=NULL;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token operator">-&gt;</span>next<span class="token operator">==</span><span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 链表为空，不包含头结点，表长为0</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双链表" tabindex="-1"><a class="header-anchor" href="#双链表" aria-hidden="true">#</a> 双链表</h2>`,72),g=e(`<p>从单链表的结构上来看</p><ul><li>访问特定结点的前驱结点需要遍历整个单链表，移动指针，时间复杂度为：O(n)</li><li>访问特定结点的后继结点只需要移动一次指针，时间复杂度为：O(1)</li></ul><p>双链表的引入，很好的解决单链表访问前驱结点时间消耗大的问题。</p><p>双链表结点由三部分组成：</p><ul><li><code>数据域</code> 存放数据信息</li><li><code>prior指针域</code> 指向结点的前驱结点</li><li><code>next指针域</code> 指向结点的后继结点</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 双链表结点类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">DNode</span><span class="token punctuation">{</span>
    ElemType data<span class="token punctuation">;</span>          <span class="token comment">// 结点的数据域</span>
    <span class="token keyword">struct</span> <span class="token class-name">DNode</span> <span class="token operator">*</span>prior<span class="token punctuation">;</span>    <span class="token comment">// 结点的前驱指针</span>
    <span class="token keyword">struct</span> <span class="token class-name">DNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>     <span class="token comment">// 结点的后继指针</span>
<span class="token punctuation">}</span>DNode<span class="token punctuation">,</span> <span class="token operator">*</span>DlinkList<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本特点" tabindex="-1"><a class="header-anchor" href="#基本特点" aria-hidden="true">#</a> 基本特点</h3><ul><li>双链表仅仅在单链表的结点中增加了一个指向结点前驱的<code>prior</code>指针；</li><li><code>按值查找</code>、<code>按序号查找</code>在单链表和双链表上的操作是相同的。</li><li>和单链表不同，<code>插入</code>、<code>删除</code>操作除了修改<code>next</code>指针域，双链表还需要修改<code>prior</code>指针域，确保不断<code>链</code>，时间复杂度都为：O(1)</li></ul><h3 id="插入结点" tabindex="-1"><a class="header-anchor" href="#插入结点" aria-hidden="true">#</a> 插入结点</h3><blockquote><p>在双链表中p所指的结点之后插入结点s</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 第一步</span>
s<span class="token operator">-&gt;</span>next<span class="token operator">=</span>p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

<span class="token comment">// 第二步</span>
p<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior<span class="token operator">=</span>s<span class="token punctuation">;</span>

<span class="token comment">// 第三步</span>
s<span class="token operator">-&gt;</span>prior<span class="token operator">=</span>p<span class="token punctuation">;</span>

<span class="token comment">// 第四步</span>
p<span class="token operator">-&gt;</span>next<span class="token operator">=</span>s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第一步和第二步必须再第四步之前</strong>，整体时间复杂度为：O(1)</p><h3 id="删除结点-1" tabindex="-1"><a class="header-anchor" href="#删除结点-1" aria-hidden="true">#</a> 删除结点</h3><blockquote><p>删除双链表中结点p的后继结点q</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 第一步</span>
p<span class="token operator">-&gt;</span>next<span class="token operator">=</span>q<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

<span class="token comment">// 第二步</span>
q<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>prior<span class="token operator">=</span>p<span class="token punctuation">;</span>

<span class="token comment">// 第三步</span>
<span class="token function">free</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第一步和第二步顺序可换</strong>，整体时间复杂度为：O(1)</p><h2 id="循环链表" tabindex="-1"><a class="header-anchor" href="#循环链表" aria-hidden="true">#</a> 循环链表</h2>`,17),L=e(`<h3 id="循环单链表" tabindex="-1"><a class="header-anchor" href="#循环单链表" aria-hidden="true">#</a> 循环单链表</h3><p><code>循环单链表</code>是在单链表的基础上，将最后一个结点（尾结点）的指针由<code>NULL</code>改为指向<code>头结点</code>，形成<code>环</code>。【单链表-----&gt;循环单链表】</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 双链表结点类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">DNode</span><span class="token punctuation">{</span>
    ElemType data<span class="token punctuation">;</span>          <span class="token comment">// 结点的数据域</span>
    <span class="token keyword">struct</span> <span class="token class-name">DNode</span> <span class="token operator">*</span>prior<span class="token punctuation">;</span>    <span class="token comment">// 结点的前驱指针</span>
    <span class="token keyword">struct</span> <span class="token class-name">DNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>     <span class="token comment">// 结点的后继指针</span>
<span class="token punctuation">}</span>DNode<span class="token punctuation">,</span> <span class="token operator">*</span>DlinkList<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判空条件" tabindex="-1"><a class="header-anchor" href="#判空条件" aria-hidden="true">#</a> 判空条件</h4><p><strong>不是判断头结点的指针是否为空，而是需要判断是否等于头指针</strong>，表为空时，头结点的next指针域其实是指向自己；</p><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h4><ul><li>在循环单链表中，尾结点*p的next指针域指向链表L（即：头结点），形成了<code>闭环</code>,不存在指针域为<code>NULL</code>的结点。</li><li><strong>由于循环单链表是个<code>环</code>,在任何位置上的插入、删除操作都是等价的，不需要去判断是否是表尾</strong>。当其中的结点的next指针指向自己，也就能判断表为空</li><li>单链表只能从头结点（表头结点）开始往后顺序遍历整个表，循环单链表可以从表中任意位置开始遍历整个链表，结点是等价的；</li><li><strong>循环单链表可以抽象为时钟，形成的<code>环</code>是有顺序的；</strong></li><li>频繁的<code>表头</code>和<code>表尾</code>操作，可以对循环单链表设置<code>尾指针</code>，而不设置<code>头指针</code>，明确尾指针r后，头指针即为：<code>r-&gt;next</code> ，减少头指针到尾指针间的遍历，时间复杂度:O(n)----&gt;O(1)</li></ul><h3 id="循环双链表" tabindex="-1"><a class="header-anchor" href="#循环双链表" aria-hidden="true">#</a> 循环双链表</h3><p><code>循环双链表</code>是在双链表的基础上，将<code>尾结点</code>的<code>next</code>指针指向<code>头结点</code>，将<code>头结点</code>的<code>prior</code>指针指向<code>尾结点</code>。【双链表-----&gt;循环双链表】</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 双链表结点类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">DNode</span><span class="token punctuation">{</span>
    ElemType data<span class="token punctuation">;</span>          <span class="token comment">// 结点的数据域</span>
    <span class="token keyword">struct</span> <span class="token class-name">DNode</span> <span class="token operator">*</span>prior<span class="token punctuation">;</span>    <span class="token comment">// 结点的前驱指针</span>
    <span class="token keyword">struct</span> <span class="token class-name">DNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>     <span class="token comment">// 结点的后继指针</span>
<span class="token punctuation">}</span>DNode<span class="token punctuation">,</span> <span class="token operator">*</span>DlinkList<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判空条件-1" tabindex="-1"><a class="header-anchor" href="#判空条件-1" aria-hidden="true">#</a> 判空条件</h4><p>循环双链表为空时，头结点*p的prior指针和next指针都指向L，即同时满足：</p><ul><li>p-&gt;next=L</li><li>p-&gt;prior=L</li></ul><h4 id="基本特点-1" tabindex="-1"><a class="header-anchor" href="#基本特点-1" aria-hidden="true">#</a> 基本特点</h4><ul><li>从双向链表中的任意一个结点开始，都可以很方便地访问它的<code>前驱结点</code>和<code>后继结点</code>。</li></ul><h2 id="静态链表" tabindex="-1"><a class="header-anchor" href="#静态链表" aria-hidden="true">#</a> 静态链表</h2><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>借助数组来描述线性表的链式存储结构，结点元素同样存在数据域<code>data</code>和指针域<code>next</code></p></blockquote><p>注意： 和普通的链表的指针域不同的是，静态链表的指针是结点元素的相对地址(数组下标)，也称为<code>游标</code>，建议结合高级语言中数组的概念来理解；</p><p><strong>与顺序表一样，虽然静态链表属于链表，但是存储时需要预先分配一块连续的内存空间</strong></p><p>静态链表结构类型：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 定义静态链表的最大长度</span>
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">define</span> <span class="token macro-name">MaxSize</span> <span class="token expression"><span class="token number">50</span></span></span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    ElemType data<span class="token punctuation">;</span>      <span class="token comment">// 存储数据元素，数据域</span>
    <span class="token keyword">int</span> next<span class="token punctuation">;</span>           <span class="token comment">// 下个元素的相对地址，数组下标</span>
<span class="token punctuation">}</span>SLinkList<span class="token punctuation">[</span>MaxSize<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很显然，静态链表是通过<code>数组游标</code>来访问下一个结点元素，可以和<code>指针域</code>的相关概念结合理解；</p><ul><li>静态链表以<code>next=-1</code>作为结束的标志【尾结点】</li><li>和动态链表相同，<strong>插入、删除操作不需要移动元素，只需要修改指针</strong>；</li><li>总体来说，静态链表没有单链表使用方便，需要将整个链表存储在一块连续的内存空间中，内部的存储可以分散，通过指针构成<code>链</code>的关系</li></ul>`,24);function x(f,y){const s=o("Mermaid");return i(),c("div",null,[r,a(s,{id:"mermaid-3",code:"eJzLzcxLyU0s4FJQKMrPL9F4OXnf0z39LxaueL5klyZQEAQ0nvZOBYoDBREi/T3oIvtWPe9bjyb4cu7MZw2NMEEAELUwxg=="}),u,v,k,m,b,a(s,{id:"mermaid-19",code:"eJzLzcxLyU0s4FJQKMrPL9F42jv15eR9Lxau0ASKgAA2kSVbnu+e/LxpJ7LIs/5JzzZPRYhs2Icm8qyn8+mu/qf925/NX/qscx+KeMMeNEGI+UATnrYuRZjZseDlzCVoVr9Yt/D5uulA572cul+TCwBK61yb"}),h,a(s,{id:"mermaid-333",code:"eJzLzcxLyU0s4FJQKMrPL9F42t/zcvK+FwtXaAJFQEDj6fxdz+ased6583nTTrjgs/5JT1uXPt89GVnwaceClzOXwAQB5xooug=="}),g,a(s,{id:"mermaid-420",code:"eJzLzcxLyU0s4FJQ0Hi6b9XzvvUvJ+97sXCFJlAABKCCT3unoopD5DqWPF+569nchU92b0OVmL/r2Zw1zzt3Pm/aiW5Sfw/5JnEBAN9qTek="}),L])}const q=t(d,[["render",x],["__file","chained-representation.html.vue"]]);export{q as default};
