<template><!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-03-07 21:54:07
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-03-07 22:59:29
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
</template>
