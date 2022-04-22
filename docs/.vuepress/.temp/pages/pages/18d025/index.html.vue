<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 21:55:28
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 21:55:36
-->
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
