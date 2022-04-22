<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 21:57:27
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 21:57:35
-->
<h2 id="线性表的基础概念和基本操作" tabindex="-1"><a class="header-anchor" href="#线性表的基础概念和基本操作" aria-hidden="true">#</a> 线性表的基础概念和基本操作</h2>
<blockquote>
<p>强调线性表是一种逻辑结构，不是存储结构</p>
</blockquote>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3>
<p>线性表是具有相同数据类型的n（n≥0）个数据元素的有限序列。一般表示：</p>
<p>L=(a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>......a<sub>n</sub>)  其中n可以理解为表长（线性表的长度），n=0时候，即表空</p>
<ul>
<li><code>表头元素</code>：线性表中唯一的“第一个”数据元素，例如a<sub>1</sub></li>
<li><code>表尾元素</code>：线性表中唯一的“最后一个”数据元素，例如a<sub>n</sub></li>
</ul>
<p>重要逻辑特性：</p>
<ul>
<li>除表头元素外，线性表中每个元素有且仅有一个<code>直接前驱</code></li>
<li>除表尾元素外，线性表中每个元素有且仅有一个<code>直接后继</code></li>
</ul>
<p>基于此，这种<strong>线性有序的逻辑结构</strong>,使得线性表的特点如下：</p>
<ul>
<li>元素的<strong>个数有限</strong>（强调有限序列）</li>
<li>元素在逻辑上具有<strong>顺序性</strong>，在序列中每个元素都是都有先后次序的</li>
<li>元素都数据元素，<strong>每个元素都是单个元素</strong></li>
<li>元素的<strong>数据类型都相同</strong>（强调相同数据类型），每个数据元素占用相同大小的存储空间</li>
<li>元素具有<strong>抽象性</strong>，仅仅讨论元素之间的逻辑关系，不需要去考虑元素究竟表示的什么内容</li>
</ul>
<blockquote>
<p>Tips: <strong>线性表是一种逻辑结构</strong>，表示元素之间一对一的相邻关系。<strong>顺序表和链表则指的是存储结构</strong></p>
</blockquote>
<h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h3>
<ul>
<li><code>InitList(&amp;L)</code>： <strong>初始化表</strong>。构造空的线性表</li>
<li><code>Length(L)</code>：<strong>获取表的长度</strong>。返回线性表L的长度，即表中的数据元素个数</li>
<li><code>LocateElem(L,e)</code>：<strong>按值查找操作</strong>。在表L中国查找具有给定关键字的元素</li>
<li><code>GetElem(L,i)</code>：<strong>按位查找操作</strong>。获取表中第i个位置的元素的值</li>
<li><code>ListInsert(&amp;L,i,e)</code>：<strong>插入操作</strong>。在表的第i个位置上插入指定元素e</li>
<li><code>ListDelete(&amp;L,i,&amp;e)</code>：<strong>删除操作</strong>。删除表中第i个位置的元素，并用e返回删除元素的值</li>
<li><code>PrintList(L)</code>：<strong>输出操作</strong>。按照前后顺序（如：1、2....n）输出线性表的所有元素值</li>
<li><code>Empty(L)</code>：<strong>判空操作</strong>。当表L为空，则返回true，否则返回false</li>
<li><code>DestoryList(&amp;L)</code>：<strong>销毁操作</strong>。将线性表销毁，释放线性表L所占用的内存空间（类似：释放内存）</li>
</ul>
<p>线性表是具有相同的数据类型的有限个数据元素组成的，<strong>数据元素是由数据项组成的</strong></p>
</template>
