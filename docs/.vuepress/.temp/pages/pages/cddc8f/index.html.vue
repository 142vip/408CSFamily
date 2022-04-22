<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 22:00:53
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 22:00:53
-->
<h2 id="零碎知识补充" tabindex="-1"><a class="header-anchor" href="#零碎知识补充" aria-hidden="true">#</a> 零碎知识补充</h2>
<ul>
<li>无论是链表的插入还是删除操作，必须保证不断链【重要】</li>
<li>顺序存储结构可以随机存取也能顺序存取，链式结构只能进行顺序存取</li>
<li>顺序存储方式同样适合图和树的存储，例如：满二叉树的顺序存储</li>
<li>队列需要在表头删除元素，在表尾插入元素【先进先出】，采用带尾指针的循环单链表比较方便</li>
<li>数组排序最少时间复杂度为O(nlog<sub>2</sub>n)【重要】</li>
<li>静态链表中的指针称为<code>游标</code>，指示下一个元素在数组中的<code>下标</code></li>
<li>静态链表用数组表示，需要预先分配较大的连续空间，同时具有一般链表的特点（插入、删除元素不需要移动元素）</li>
</ul>
<h3 id="单链表设置头结点" tabindex="-1"><a class="header-anchor" href="#单链表设置头结点" aria-hidden="true">#</a> 单链表设置头结点</h3>
<p>目的</p>
<blockquote>
<p>主要是方便运算。</p>
</blockquote>
<p>好处</p>
<ul>
<li>有头结点后，插入、删除数据元素的算法统一起来了，不需要判断是否在第一个元素之前插入或者删除第一个元素了。</li>
<li>不论链表是否为空，头指针是指向头结点的<code>非空指针</code>，链表的头指针不变，因此空链表和非空链表的处理也就统一起来了。</li>
</ul>
</template>
