<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 21:55:06
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 21:55:14
-->
<h2 id="数据结构三要素" tabindex="-1"><a class="header-anchor" href="#数据结构三要素" aria-hidden="true">#</a> 数据结构三要素</h2>
<ul>
<li>数据的逻辑结构</li>
<li>数据的存储结构</li>
<li>数据的运算</li>
</ul>
<h3 id="数据的逻辑结构" tabindex="-1"><a class="header-anchor" href="#数据的逻辑结构" aria-hidden="true">#</a> 数据的逻辑结构</h3>
<p>数据元素之间的逻辑关系，从逻辑关系上描述数据，叫做数据的逻辑结构。</p>
<p>与数据的存储（物理）结构无关，是独立于计算机的。</p>
<p>可以分为：</p>
<ul>
<li>线性结构</li>
<li>非线性结构</li>
</ul>
<p>线性表是典型的线性结构，衍生出的栈、队列、串、数组、广义表也都是线性结构；</p>
<p>非线性结构主要有：集合、树（一般树、二叉树）、图（有向图、无向图）</p>
<p>特别注意：</p>
<ul>
<li><code>集合</code>：结构中的数据元素之间<strong>除了“同属于一个集合”的关系外，别无其他关系。</strong></li>
<li><code>线性结构</code>：结构中的数据元素之间<strong>只存在一对一的关系</strong>。</li>
<li><code>树形结构</code>：结构中的数据元素之间<strong>存在一对多的关系。</strong></li>
<li><code>图状结构和网状结构</code>：结构中的数据元素之间<strong>存在多对多的关系。</strong></li>
</ul>
<h3 id="数据的存储-物理-结构" tabindex="-1"><a class="header-anchor" href="#数据的存储-物理-结构" aria-hidden="true">#</a> 数据的存储（物理）结构</h3>
<p>数据结构在计算机中的表示（映像）。包括数据<code>元素的表示</code>和<code>关系的表示</code>。</p>
<p>存储结构是逻辑结构用计算机语言实现的，依赖于计算机语言。</p>
<p>可以分为：</p>
<ul>
<li>顺序存储</li>
<li>链式存储</li>
<li>索引存储</li>
<li>散列（Hash）存储</li>
</ul>
<p><strong>注意：存储和存取的概念不一样</strong></p>
<h4 id="顺序存储" tabindex="-1"><a class="header-anchor" href="#顺序存储" aria-hidden="true">#</a> 顺序存储</h4>
<p><strong>逻辑上相邻的元素存储在物理位置上也相邻的存储单元里，元素之间的关系由存储单元的邻接关系来体现。</strong></p>
<p>优点：</p>
<ul>
<li>可以实现随机存取</li>
<li>元素占用最少的存储空间</li>
</ul>
<p>缺点：</p>
<ul>
<li>只能使用相邻的一整块存储单元，依赖于物理结构相邻；</li>
<li>容易产生<code>外部碎片</code></li>
</ul>
<p>什么是内外部碎片？</p>
<blockquote>
<p>参考资料：https://blog.csdn.net/qq_22238021/article/details/80209062</p>
</blockquote>
<ul>
<li>外部碎片：<code>还没有分配出去</code>（不属于任何进程），但是<strong>由于大小而无法分配给申请内存空间的新进程的内存空闲块。</strong></li>
<li>内部碎片：<code>已经被分配出去</code>（能明确指出属于哪个进程）的<strong>内存空间大于请求所需的内存空间，不能被利用的内存空间就是内部碎片。</strong></li>
</ul>
<h4 id="链式存储" tabindex="-1"><a class="header-anchor" href="#链式存储" aria-hidden="true">#</a> 链式存储</h4>
<p>与顺序存储不同，<strong>链式存储不要求逻辑上相邻的元素在物理位置上也相邻。</strong></p>
<p>借助指示元素存储地址的<code>指针</code>表示元素之间的逻辑关系。</p>
<p>优点：</p>
<ul>
<li>不会出现碎片现象</li>
<li>充分利用所有存储单元</li>
</ul>
<p>缺点：</p>
<ul>
<li>除了存储元素外，还需要额外存储指针，会占用额外的存储空间（结合数据库索引学习）。</li>
<li>链式存储，<strong>只能实现<code>顺序存取</code>，不能实现<code>随机存取</code>（指针的遍历）</strong></li>
</ul>
<h4 id="索引存储" tabindex="-1"><a class="header-anchor" href="#索引存储" aria-hidden="true">#</a> 索引存储</h4>
<p>存放数据元素和元素间关系的存储方式，在存储元素信息的同时，还需要建立附加的<code>索引表</code>。</p>
<p><strong>索引表的每一项称为索引项，索引项的一般形式是：&lt;关键字，地址&gt;</strong></p>
<p>优点：</p>
<ul>
<li>检索快（就好比字典有了目录，查询就很快了）</li>
</ul>
<p>缺点：</p>
<ul>
<li>增加了索引表，占用较多的存储空间（典型的空间换时间策略）</li>
<li>增加、删除数据时，需要对应修改索引表，花费更多时间。</li>
</ul>
<h4 id="散列-hash-存储" tabindex="-1"><a class="header-anchor" href="#散列-hash-存储" aria-hidden="true">#</a> 散列（Hash）存储</h4>
<p>根据元素的关键字直接通过散列（Hash）函数计算出元素的存储地址。</p>
<p>优点：</p>
<ul>
<li>检索快，添加、删除元素结点操作快（获取元素地址直接，整体时间就少了）</li>
</ul>
<p>缺点：</p>
<ul>
<li>非常依赖于<code>散列函数</code></li>
<li>会出现<code>散列冲突</code>（主要依赖与散列函数，散列函数不好就很容易出现散列冲突）</li>
<li>出现<code>散列冲突</code>时，解决冲突就会增加时间和空间上的开销</li>
</ul>
<h3 id="数据的运算" tabindex="-1"><a class="header-anchor" href="#数据的运算" aria-hidden="true">#</a> 数据的运算</h3>
<p>数据上的运算包括：<code>运算的定义</code> 、<code>运算的实现</code></p>
<ul>
<li><code>运算的定义</code>：针对逻辑结构，指出运算的功能</li>
<li><code>原酸的实现</code>：针对存储结构，指出运算的具体操作步骤</li>
</ul>
<p>线性表既可以用顺序存储方式实现，也可以用链式存储方式实现。</p>
</template>
