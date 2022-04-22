<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 21:59:27
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 21:59:27
-->
<h2 id="循环链表" tabindex="-1"><a class="header-anchor" href="#循环链表" aria-hidden="true">#</a> 循环链表</h2>
<ul>
<li>循环单链表</li>
<li>循环双链表</li>
</ul>
<h3 id="循环单链表" tabindex="-1"><a class="header-anchor" href="#循环单链表" aria-hidden="true">#</a> 循环单链表</h3>
<p><code>循环单链表</code>是在单链表的基础上，将最后一个结点（尾结点）的指针由<code>NULL</code>改为指向<code>头结点</code>，形成<code>环</code>。【单链表-----&gt;循环单链表】</p>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>// 双链表结点类型
typedef struct DNode{
    ElemType data;          // 结点的数据域
    struct DNode *prior;    // 结点的前驱指针
    struct DNode *next;     // 结点的后继指针
}DNode, *DlinkList;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="判空条件" tabindex="-1"><a class="header-anchor" href="#判空条件" aria-hidden="true">#</a> 判空条件</h4>
<p><strong>不是判断头结点的指针是否为空，而是需要判断是否等于头指针</strong>，表为空时，头结点的next指针域其实是指向自己；</p>
<h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h4>
<ul>
<li>在循环单链表中，尾结点*p的next指针域指向链表L（即：头结点），形成了<code>闭环</code>,不存在指针域为<code>NULL</code>的结点。</li>
<li><strong>由于循环单链表是个<code>环</code>,在任何位置上的插入、删除操作都是等价的，不需要去判断是否是表尾</strong>。当其中的结点的next指针指向自己，也就能判断表为空</li>
<li>单链表只能从头结点（表头结点）开始往后顺序遍历整个表，循环单链表可以从表中任意位置开始遍历整个链表，结点是等价的；</li>
<li><strong>循环单链表可以抽象为时钟，形成的<code>环</code>是有顺序的；</strong></li>
<li>频繁的<code>表头</code>和<code>表尾</code>操作，可以对循环单链表设置<code>尾指针</code>，而不设置<code>头指针</code>，明确尾指针r后，头指针即为：<code>r-&gt;next</code> ，减少头指针到尾指针间的遍历，时间复杂度:O(n)----&gt;O(1)</li>
</ul>
<h3 id="循环双链表" tabindex="-1"><a class="header-anchor" href="#循环双链表" aria-hidden="true">#</a> 循环双链表</h3>
<p><code>循环双链表</code>是在双链表的基础上，将<code>尾结点</code>的<code>next</code>指针指向<code>头结点</code>，将<code>头结点</code>的<code>prior</code>指针指向<code>尾结点</code>。【双链表-----&gt;循环双链表】</p>
<div class="language-C ext-C line-numbers-mode"><pre v-pre class="language-C"><code>// 双链表结点类型
typedef struct DNode{
    ElemType data;          // 结点的数据域
    struct DNode *prior;    // 结点的前驱指针
    struct DNode *next;     // 结点的后继指针
}DNode, *DlinkList;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="判空条件-1" tabindex="-1"><a class="header-anchor" href="#判空条件-1" aria-hidden="true">#</a> 判空条件</h4>
<p>循环双链表为空时，头结点*p的prior指针和next指针都指向L，即同时满足：</p>
<ul>
<li>p-&gt;next=L</li>
<li>p-&gt;prior=L</li>
</ul>
<h4 id="基本特点" tabindex="-1"><a class="header-anchor" href="#基本特点" aria-hidden="true">#</a> 基本特点</h4>
<ul>
<li>从双向链表中的任意一个结点开始，都可以很方便地访问它的<code>前驱结点</code>和<code>后继结点</code>。</li>
</ul>
</template>
