<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 22:00:36
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 22:00:43
-->
<h2 id="存储结构的选取" tabindex="-1"><a class="header-anchor" href="#存储结构的选取" aria-hidden="true">#</a> 存储结构的选取</h2>
<h3 id="基于存储的考虑" tabindex="-1"><a class="header-anchor" href="#基于存储的考虑" aria-hidden="true">#</a> 基于存储的考虑</h3>
<ul>
<li>对线性表的长度和存储规模难以估计时，不宜采用顺序表存储</li>
<li>链表不用事先估计存储规模，但存储密度较低</li>
<li>链式存储结构的存储密度小于1，不要求连续的存储空间</li>
</ul>
<h3 id="基于运算的考虑" tabindex="-1"><a class="header-anchor" href="#基于运算的考虑" aria-hidden="true">#</a> 基于运算的考虑</h3>
<ul>
<li>顺序表支持随机存取，按序号查找顺序表的时间复杂度为O(1)；</li>
<li>链表不支持随机存取，按序号查找链表的时间复杂度为O(n);</li>
<li>顺序表的插入、删除操作，平均需要移动表中一半的元素，当表的数据量较大时，这种情况需要重点考虑的。</li>
<li>链表的插入、删除操作，也是需要找插入位置（前驱结点、后继结点），主要的操作还是比较操作，相对较好；</li>
</ul>
<h3 id="基于环境的考虑" tabindex="-1"><a class="header-anchor" href="#基于环境的考虑" aria-hidden="true">#</a> 基于环境的考虑</h3>
<ul>
<li>顺序表容易实现，任何高级语言中都有数组类型；</li>
<li>链表操作是基于指针的，指针移动，相对复杂；</li>
</ul>
<p>综上比较</p>
<ul>
<li>通常比较稳定的线性表选择顺序存储；</li>
<li>频繁进行插入、删除操作的线性表，应该选择链式存储，动态性较强</li>
</ul>
</template>
