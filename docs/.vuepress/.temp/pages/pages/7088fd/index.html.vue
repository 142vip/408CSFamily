<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 22:00:10
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 22:00:10
-->
<h2 id="顺序表和链表的比较" tabindex="-1"><a class="header-anchor" href="#顺序表和链表的比较" aria-hidden="true">#</a> 顺序表和链表的比较</h2>
<h3 id="存取方式" tabindex="-1"><a class="header-anchor" href="#存取方式" aria-hidden="true">#</a> 存取方式</h3>
<ul>
<li>顺序表支持顺序存取和随机存取；</li>
<li>链表只能从表头顺序存取元素，支持顺序存取；</li>
</ul>
<h3 id="逻辑结构与物理结构" tabindex="-1"><a class="header-anchor" href="#逻辑结构与物理结构" aria-hidden="true">#</a> 逻辑结构与物理结构</h3>
<ul>
<li>顺序存储时，逻辑上相邻的元素，对应的物理存储位置也相邻【一定性】。</li>
<li>链式存储时，逻辑上相邻的元素，对应的物理存储位置不一定相邻【可以相邻，也可以不相邻】。</li>
<li>链式存储的逻辑关系通过指针链接表示；</li>
</ul>
<h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h3>
<h4 id="按值查找" tabindex="-1"><a class="header-anchor" href="#按值查找" aria-hidden="true">#</a> 按值查找</h4>
<ul>
<li>顺序表无序的情况下，顺序表和链表的时间复杂度均为O(n)</li>
<li>顺序表有序的情况下，顺序表的时间复杂度为O(log<sub>2</sub>n)，链表的时间复杂度为O(n)；</li>
</ul>
<p><strong>注意：O(log<sub>2</sub>n) &lt; O(n)</strong></p>
<h4 id="按序号查找" tabindex="-1"><a class="header-anchor" href="#按序号查找" aria-hidden="true">#</a> 按序号查找</h4>
<ul>
<li>顺序表支持随机访问，时间复杂度为O(1)；</li>
<li>顺序表不支持随机访问，时间复杂度为O(n)；</li>
</ul>
<h4 id="插入、删除" tabindex="-1"><a class="header-anchor" href="#插入、删除" aria-hidden="true">#</a> 插入、删除</h4>
<ul>
<li>顺序表平均需要移动半个表长的元素；</li>
<li>链表只需要修改相应结点的指针域，不需要移动元素；</li>
<li>链表结点除了数据域，还有指针域，在存储空间上比顺序存储需要更大的存储空间，付出更大的存储代价，存储密度不够大</li>
</ul>
<h3 id="空间分配" tabindex="-1"><a class="header-anchor" href="#空间分配" aria-hidden="true">#</a> 空间分配</h3>
<h4 id="顺序存储" tabindex="-1"><a class="header-anchor" href="#顺序存储" aria-hidden="true">#</a> 顺序存储</h4>
<h5 id="静态分配" tabindex="-1"><a class="header-anchor" href="#静态分配" aria-hidden="true">#</a> 静态分配</h5>
<ul>
<li>需要预先分配足够大的存储空间；</li>
<li>空间装满后不能扩充，存储新元素将出现<code>内存溢出</code>；</li>
<li>存储空间过大，顺序表后部闲置空间过多，造成<code>内部碎片</code></li>
<li>存储空间过小，会造成<code>内存溢出</code></li>
</ul>
<h5 id="动态分配" tabindex="-1"><a class="header-anchor" href="#动态分配" aria-hidden="true">#</a> 动态分配</h5>
<ul>
<li>动态分配能够扩充存储空间，但需要移动大量元素，操作效率降低</li>
<li>内存中没有更大块的连续存储空间，将会导致空间分配失败；</li>
</ul>
<h4 id="链式存储" tabindex="-1"><a class="header-anchor" href="#链式存储" aria-hidden="true">#</a> 链式存储</h4>
<ul>
<li>链式存储的结点空间只在需要的时候申请分配</li>
<li>只要内存由空间就可以分配，操作灵活、高效</li>
</ul>
</template>
