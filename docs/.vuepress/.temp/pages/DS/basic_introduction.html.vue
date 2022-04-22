<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 21:54:07
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-09 00:25:07
-->
<h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念" aria-hidden="true">#</a> 基础概念</h2>
<h3 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h3>
<p><strong>信息的载体</strong>，是客观事物属性的数、字符以及所有能够输入到计算机包中并且被计算机程序识别和处理的<strong>集合</strong></p>
<h3 id="数据元素" tabindex="-1"><a class="header-anchor" href="#数据元素" aria-hidden="true">#</a> 数据元素</h3>
<p><strong>数据的基本单位</strong>，通常按照一个整数来进行考虑和处理。</p>
<p>特别注意：一个数据元素由若干个<strong>数据项</strong>组成，数据项是构成数组元素的最小单位，且不可分割。</p>
<h3 id="数据对象" tabindex="-1"><a class="header-anchor" href="#数据对象" aria-hidden="true">#</a> 数据对象</h3>
<p>具有<strong>相同性质</strong>的数据元素的<strong>集合</strong>，<strong>是数据的子集</strong></p>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<p>值的集合和定义在此集合上一组操作的总称</p>
<ul>
<li>原子类型：不可再分的数据类型；</li>
<li>结构类型：可以分解成若干分量（成分）的数据类型；</li>
<li><strong>抽象数据类型</strong>：抽象出具组织和其相关的操作；</li>
</ul>
<h3 id="抽象数据类型-adt" tabindex="-1"><a class="header-anchor" href="#抽象数据类型-adt" aria-hidden="true">#</a> 抽象数据类型（ADT）</h3>
<blockquote>
<p>Tips: 可以结合高级语言中类对象封装来理解；</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ADT抽象数据类型名<span class="token punctuation">{</span>
    数据对象：<span class="token operator">&lt;</span>数据对象的定义<span class="token operator">></span>
    数据关系：<span class="token operator">&lt;</span>数据关系的定义<span class="token operator">></span>
    基本操作：<span class="token operator">&lt;</span>基本操作的定义<span class="token operator">></span>
<span class="token punctuation">}</span> ADT抽象数据类型名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>一个数学模型以及定义在该模型上的一组操作。定义仅仅取决于它的一组逻辑操作。与计算机内部如何表示和实现是没有关系；</p>
<p><strong>不论内部结构如何变化，只要其数学特性不变，就不会影响到外部的使用，实现了数据封装和信息隐藏</strong></p>
<p>通常由（数据对象、数据关系、数据操作集）三元组来表示抽象数据类型；</p>
<p>抽象数据类型的主要作用是<strong>数据封装和信息隐藏，让实现与使用相分离</strong>。数据及其相关操作的结合称为数据封装。对象可以对其他对象隐藏某些操作细节，从而使这些操作不会受到其他对象的影响。</p>
<p>抽象数据类型独立于运算的具体实现，使用户程序只能通过抽象数据类型定义的某些操作来访问其中的数据，实现了信息隐藏。</p>
<h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h3>
<p>首先明确：数据元素都不是孤立存在的。元素与元素之间存在着某种关系，这种相互之间的关系就是<strong>结构</strong>。</p>
<p><strong>数据结构是相互之间存在一种或者多种特定关系的数据元素的集合</strong></p>
<ul>
<li>逻辑结构</li>
<li>存储结构（物理结构）</li>
<li>数据运算</li>
</ul>
<p>数据的逻辑结构和存储结构是密不可分的。</p>
<p><strong>算法的设计取决于所选定的逻辑结构；算法的实现依赖于所采用的存储结构；</strong></p>
<hr>
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
<hr>
<h2 id="算法和算法评价" tabindex="-1"><a class="header-anchor" href="#算法和算法评价" aria-hidden="true">#</a> 算法和算法评价</h2>
<h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3>
<p><code>算法</code> ： 对特定问题求解步骤的一种描述，<strong>是指令的有序集合</strong>，每一条指令表示一个或多个操作。</p>
<h4 id="重要特性" tabindex="-1"><a class="header-anchor" href="#重要特性" aria-hidden="true">#</a> 重要特性</h4>
<ul>
<li><code>有穷性</code>：必须总是（对任何合法的输入值）在<strong>执行有穷步后结束</strong>，并且每一步都可<strong>在有穷时间内完成</strong></li>
<li><code>确定性</code>：每条指令的含义明确，不会产生二义性（歧义），<strong>对相同的输入只能得出相同的结果</strong></li>
<li><code>可行性</code>：算法是可行的。<strong>算法中描述的操作都是可以通过已经实现的基本运算执行有限次来实现的</strong></li>
<li><code>输入</code>：有零个或者多个输入，<strong>输入取决于某个特定的对象的集合。</strong></li>
<li><code>输出</code>：有一个或者多个输出，<strong>输出是和输入有着某种特定关系的量（强调输出与输入的关系）</strong></li>
</ul>
<blockquote>
<p><strong>算法是有穷的，但是程序不一定满足有穷性</strong>，程序只是算法在计算机上的特定的实现， 例如：死循环</p>
</blockquote>
<h4 id="算法的目标" tabindex="-1"><a class="header-anchor" href="#算法的目标" aria-hidden="true">#</a> 算法的目标</h4>
<p>由于设计思路、解决问题方案等方面不同，不同算法之间也是有好坏的，就像人与人之间存在着差异。为设计出更好的算算法，往往需要追求更高的目标，而好的算法需要考虑到的目标就有：</p>
<ul>
<li>正确性：首先算法肯定是<strong>需要正确的解决求解问题</strong></li>
<li>可读性：<strong>算法应该具有良好的可读性</strong>，就像项目代码一样，好的业务代码、逻辑清楚，<strong>便于理解</strong>。</li>
<li>健壮性：<strong>在输入非法数据时，算法也能适当地做出反应或进行处理，而不会产生莫名奇妙的输出结果</strong>（在高级语言编程中，类似于强调封装方法的参数校验）</li>
<li>效率与低存储量需求：<strong>效率即算法执行的时间</strong>，<strong>存储量需求即算法那执行过程中所有要的最大存储空间</strong>，这些与算法所解决问题的规模有关；</li>
</ul>
<blockquote>
<p>Tips： 效率可以结合时间复杂度来理解，存储量需求可以结合空间复杂度理解；</p>
</blockquote>
<h3 id="效率的度量" tabindex="-1"><a class="header-anchor" href="#效率的度量" aria-hidden="true">#</a> 效率的度量</h3>
<p>算法效率的度量是通过<code>时间复杂度</code>和<code>空间复杂度</code>来描述的；</p>
<h4 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h4>
<p>语句的频度：语句在算法中被重复执行的次数</p>
<p>算法中所有语句的<code>频度之和</code>记作T(n),即：对应算法问题规模n的函数，时间复杂度主要是来分析T(n)的数量级；</p>
<p><strong>算法的时间复杂度不仅依赖于问题的规模n，也取决于待输入的数据的性质（例如：输入元素的初始状态）</strong></p>
<p>上面这句话是不是不能理解？？？ 哈哈哈，我第一次看，也是！！</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>
<span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 循环叠加 输出</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在这个简单的函数里</p>
<ul>
<li>当n&lt;1的时候，例如：-2，就不需要循环，此时时间复杂度可以理解为T(1)</li>
<li>当n&gt;1的时候，例如：5 此时时间复杂度可以理解为T(n)</li>
</ul>
<p>当然，这里只是简单举例子便于理解：</p>
<blockquote>
<p><strong>算法的时间复杂度不仅依赖于问题的规模n，也取决于待输入的数据的性质（例如：输入元素的初始状态）</strong></p>
</blockquote>
<ul>
<li><code>最坏时间复杂度</code>：<strong>最坏情况下</strong>，算法的时间复杂度</li>
<li><code>平均时间复杂度</code>：<strong>所有可能输入实例在同等概率出现的情况下</strong>，算法的期望运行时间</li>
<li><code>最好时间复杂度</code>：<strong>最好的情况下</strong>，算法的时间复杂度</li>
</ul>
<p>一般情况下，考虑最坏情况的时间复杂度（即：最坏时间复杂度），保证算法的运行时间不会更长（最糟糕我都能预料，难道还有更糟糕？？？？？噗呲）</p>
<h4 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h4>
<p>算法的空间复杂度可以用函数记作：S(n),<strong>用来定义算法运行过程中需要耗费的存储空间</strong>，是问题规模n的函数；</p>
<blockquote>
<p>渐进空间复杂度也被称为空间复杂度，记作：S(n)=O(g(n))</p>
</blockquote>
<p><strong>一个程序除了需要存储空间来存放本身所用的指令、常数、变量和输入数据外，也需要对数据进行操作的工作单元和存储一些实现计算所需要信息的辅助空间。</strong></p>
<p>当输入数据所占用的空间只取决于问题本身，和算法无关时，只需要去分析除了输入和程序之外的额外空间</p>
<p>算法原地工作：算法所需要辅助空间是常量，记作S(1)，例如：</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">switchValue</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 定义临时变量</span>
    <span class="token keyword">int</span> temp<span class="token operator">=</span>a<span class="token punctuation">;</span>
    b<span class="token operator">=</span>temp<span class="token punctuation">;</span>
    a<span class="token operator">=</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上面的函数中，只是通过临时变量temp来实现a和b的值交换，没有需要更多变量，因此可以简单理解函数的在<code>原地工作</code>，辅助空间是常量，记作S(1)</p>
</template>
