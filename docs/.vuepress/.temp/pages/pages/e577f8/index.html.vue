<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 21:59:05
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 21:59:13
-->
<h2 id="双链表" tabindex="-1"><a class="header-anchor" href="#双链表" aria-hidden="true">#</a> 双链表</h2>
<p>从单链表的结构上来看</p>
<ul>
<li>访问特定结点的前驱结点需要遍历整个单链表，移动指针，时间复杂度为：O(n)</li>
<li>访问特定结点的后继结点只需要移动一次指针，时间复杂度为：O(1)</li>
</ul>
<p>双链表的引入，很好的解决单链表访问前驱结点时间消耗大的问题。</p>
<p>双链表结点由三部分组成：</p>
<ul>
<li><code>数据域</code> 存放数据信息</li>
<li><code>prior指针域</code> 指向结点的前驱结点</li>
<li><code>next指针域</code>  指向结点的后继结点</li>
</ul>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
// 双链表结点类型
typedef struct DNode{
    ElemType data;          // 结点的数据域
    struct DNode *prior;    // 结点的前驱指针
    struct DNode *next;     // 结点的后继指针
}DNode, *DlinkList;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="基本特点" tabindex="-1"><a class="header-anchor" href="#基本特点" aria-hidden="true">#</a> 基本特点</h3>
<ul>
<li>双链表仅仅在单链表的结点中增加了一个指向结点前驱的<code>prior</code>指针；</li>
<li><code>按值查找</code>、<code>按序号查找</code>在单链表和双链表上的操作是相同的。</li>
<li>和单链表不同，<code>插入</code>、<code>删除</code>操作除了修改<code>next</code>指针域，双链表还需要修改<code>prior</code>指针域，确保不断<code>链</code>，时间复杂度都为：O(1)</li>
</ul>
<h3 id="插入结点" tabindex="-1"><a class="header-anchor" href="#插入结点" aria-hidden="true">#</a> 插入结点</h3>
<blockquote>
<p>在双链表中p所指的结点之后插入结点s</p>
</blockquote>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
// 第一步
s-&gt;next=p-&gt;next;

// 第二步
p-&gt;next-&gt;prior=s;

// 第三步
s-&gt;prior=p;

// 第四步
p-&gt;next=s

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>第一步和第二步必须再第四步之前</strong>，整体时间复杂度为：O(1)</p>
<h3 id="删除结点" tabindex="-1"><a class="header-anchor" href="#删除结点" aria-hidden="true">#</a> 删除结点</h3>
<blockquote>
<p>删除双链表中结点p的后继结点q</p>
</blockquote>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>
// 第一步
p-&gt;next=q-&gt;next;

// 第二步
q-&gt;next-&gt;prior=p;

// 第三步
free(q);

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>第一步和第二步顺序可换</strong>，整体时间复杂度为：O(1)</p>
</template>
