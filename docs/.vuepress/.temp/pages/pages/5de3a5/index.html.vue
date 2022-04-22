<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 21:59:47
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 21:59:47
-->
<h2 id="静态链表" tabindex="-1"><a class="header-anchor" href="#静态链表" aria-hidden="true">#</a> 静态链表</h2>
<blockquote>
<p>借助数组来描述线性表的链式存储结构，结点元素同样存在数据域<code>data</code>和指针域<code>next</code></p>
</blockquote>
<p>注意： 和普通的链表的指针域不同的是，静态链表的指针是结点元素的相对地址(数组下标)，也称为<code>游标</code>，建议结合高级语言中数组的概念来理解；</p>
<p><strong>与顺序表一样，虽然静态链表属于链表，但是存储时需要预先分配一块连续的内存空间</strong></p>
<p>静态链表结构类型：</p>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
// 定义静态链表的最大长度
# define MaxSize 50

typedef struct{
    ElemType data;      // 存储数据元素，数据域
    int next;           // 下个元素的相对地址，数组下标
}SLinkList[MaxSize];

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>很显然，静态链表是通过<code>数组游标</code>来访问下一个结点元素，可以和<code>指针域</code>的相关概念结合理解；</p>
<ul>
<li>静态链表以<code>next=-1</code>作为结束的标志【尾结点】</li>
<li>和动态链表相同，<strong>插入、删除操作不需要移动元素，只需要修改指针</strong>；</li>
<li>总体来说，静态链表没有单链表使用方便，需要将整个链表存储在一块连续的内存空间中，内部的存储可以分散，通过指针构成<code>链</code>的关系</li>
</ul>
</template>
