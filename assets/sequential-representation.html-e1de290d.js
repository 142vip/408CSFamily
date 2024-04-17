import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as l,a as n,b as s,d as o,e as a}from"./app-0014a839.js";const c="/408CSFamily/assets/线性表的存储结构-45761fc0.png",u="/408CSFamily/assets/顺序表插入平均时间复杂度计算-77743320.png",d="/408CSFamily/assets/顺序表随机删除元素的平均复杂度计算-5b7f2ef1.png",r={},v=a('<h1 id="顺序表示" tabindex="-1"><a class="header-anchor" href="#顺序表示" aria-hidden="true">#</a> 顺序表示</h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p><code>顺序表</code>：顺序存储的线性表，<strong>是用一组地址连续的存储单元，依次存储线性表中的数据元素，使得在逻辑上相邻的两个元素在物理位置上也相邻。</strong></p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>顺序表中的元素的逻辑顺序与实际的物理位置相同</p><p>注意：</p><ul><li>线性表中的元素的位序是从1开始的，例如1、2、3...</li><li>数组中的元素的下标是从0开始的，例如0、1、2...</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">define</span> <span class="token macro-name">MaxSize</span> <span class="token expression"><span class="token number">20</span>         </span><span class="token comment">// 定义常量MaxSize 用来声明顺序表的最大长度</span></span>

<span class="token comment">// 线性表结构体定义【ElemType用来代指顺序表中元素的类型，例如高级语言中的int、string....】</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    ElemType data<span class="token punctuation">[</span>MaxSize<span class="token punctuation">]</span><span class="token punctuation">;</span>     <span class="token comment">// 顺序表的元素</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>                 <span class="token comment">// 顺序表的长度</span>
<span class="token punctuation">}</span>SqList

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储分配" tabindex="-1"><a class="header-anchor" href="#存储分配" aria-hidden="true">#</a> 存储分配</h3><p><code>静态分配</code>：数组的大小和空间都是实现确定好的，一旦存储空间占满就会产生溢出，直接导致程序崩溃。（有点内存不够，宕机重启的意思....）</p><p><code>动态分配</code>：存储数据的空间在程序执行过程中通过<code>动态存储分配语句</code>分配的，即便是数据空间占满，也可以另外开辟一块更大的空间，来替换原来的存储空间，满足扩充数据空间的目的。（有点动态规划的意思....）最重要的是：<strong>不需要像静态分配那样，一次性地固定线性表的空间和大小</strong></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">InitSize</span> <span class="token expression"><span class="token number">100</span>    </span><span class="token comment">// 表长度初始化</span></span>


<span class="token comment">// 动态分配数组顺序表的结构体定义</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    ElemType <span class="token operator">*</span>data<span class="token punctuation">;</span>             <span class="token comment">// 动态分配数组的指针</span>
    <span class="token keyword">int</span> MaxSize<span class="token punctuation">,</span>length<span class="token punctuation">;</span>         <span class="token comment">// 数组的最大容量和当前元素个数</span>
<span class="token punctuation">}</span>SqList<span class="token punctuation">;</span>    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态分配语句</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>// C语言中

L.data=(ElemType*)malloc(sizeof(ElemType)*InitSize);


// C++ 中

L.data=new ElemType[InitSize];

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),k=n("code",null,"malloc()函数",-1),m={href:"https://baike.baidu.com/item/malloc%E5%87%BD%E6%95%B0/8582146?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},b=a(`<p><strong>动态分配不是链式存储，而是属于顺序存储结构</strong>，动态分配的物理结构没有改变，依然是随机存取的方式。只是分配的空间大小可以在运行时决定；</p><h3 id="顺序表的特点" tabindex="-1"><a class="header-anchor" href="#顺序表的特点" aria-hidden="true">#</a> 顺序表的特点</h3><ul><li>随机访问【这是最主要的特点】，通过存储起始地址和元素序号O(1)时间内访问指定元素。</li><li>存储密度高，没有结点只存储数据元素，不像索引存储那样，还需要索引表什么的..</li><li>逻辑上相邻的元素物理上也相邻，插入和删除需要移动大量元素</li></ul><h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h3><p>在顺序表L的第i（1≤i≤L.length+1）个位置插入新的元素e</p><ul><li>第一步：如果i非法，则直接返回false，插入失败，结束插入过程</li><li>第二步：i正常，将表的第i个元素以及后面的所有元素都向右移动一个位置，在腾出来的空位置插入元素e</li><li>第三步：顺序表插入成功，返回true</li></ul><p>注意：先判空和临界值，提高算法健壮性</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 顺序表的插入操作
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-02-23 07:48:26
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2020-02-23 07:48:26
 */</span>
<span class="token keyword">bool</span> <span class="token function">ListInsert</span><span class="token punctuation">(</span>SqList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// i非法 i=1 表头 i=L.length+1 表尾巴</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">||</span>i<span class="token operator">&gt;</span>L<span class="token punctuation">.</span>length<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 存储空间满，无法插入</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> MaxSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 遍历，将位置元素往后移动，注意从后往前循环，避免值被覆盖</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>L<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">&gt;=</span>i<span class="token punctuation">;</span>j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 此时，表L中的第i个元素和第i+1元素素值一样，将新元素存入i位置即可</span>

  <span class="token comment">// 第i个元素，对应的位置角标为i-1</span>
  L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>e<span class="token punctuation">;</span>

  <span class="token comment">// 表长度加1</span>
  L<span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>

  <span class="token comment">// 返回插入成功</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：区别顺序表中的位序和角标；</p><p><strong>时间复杂度</strong></p><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>最好情况：在表尾插入，元素向后移动循环没有执行，时间复杂度O(1);</li><li>最坏情况：在表头插入，元素后移循环执行n次，时间复杂度为O(n);</li><li>平均情况：随机插入，平均次数为：n/2，对应的平均复杂度为O(n);</li></ul><p><strong>线性表插入算法的平均时间复杂度为：O(n)</strong></p><blockquote><p>Tips: 需要根据实现代码理解循环为什么是从后往前来实现元素后移，通过for循环可以很明显的看出表尾插入快，表头插入慢</p></blockquote><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4><p>删除顺序表L中第i（1≤i≤L.length+1）个位置的元素</p><ul><li>成功，返回true,将被删除的元素用引用变量返回；</li><li>失败，返回false</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 顺序表的删除操作
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-02-23 07:48:26
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2020-02-23 07:48:26
 */</span>
<span class="token keyword">bool</span> <span class="token function">ListDelete</span><span class="token punctuation">(</span>SqList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// i非法 i=1 表头 i=L.length+1 表尾巴</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">||</span>i<span class="token operator">&gt;</span>L<span class="token punctuation">.</span>length<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 存储空间满，无法插入</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> MaxSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 引用变量e赋值</span>
  e<span class="token operator">=</span>L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

  <span class="token comment">// 遍历，第i个元素后面的往前移动</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>i<span class="token punctuation">;</span> j<span class="token operator">&lt;=</span>L<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 从第i个元素开始，角标从i-1开始</span>
    L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 此时，表L中的表尾元素和倒数第二个元素值一样，将表的长度-1 </span>

  <span class="token comment">// 表长度减1</span>
  L<span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span>

  <span class="token comment">// 返回删除成功</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里来看，删除、插入元素都会涉及到大量的元素的移动（最好情况例外），总结而言：</p><ul><li>元素从后往前移，循环从前往后遍历</li><li>元素从前往后移，循环从后往前遍历</li></ul><p><strong>时间复杂度：</strong></p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>最好情况：删除表尾元素，不需要移动任何元素，时间复杂度为O(1)；</li><li>最坏情况：删除表头元素，需要移动除第一个元素外的所有元素，时间复杂度为O(n)；</li><li>平均情况：随机删除，平均需要(n-1)/2，对应的时间复杂度为O(n)；</li></ul><p><strong>线性表删除算法的平均时间复杂度为O(n)；</strong></p><h3 id="按值查找-顺序查找" tabindex="-1"><a class="header-anchor" href="#按值查找-顺序查找" aria-hidden="true">#</a> 按值查找（顺序查找）</h3><p>在顺序表L中查找第一个元素值等于e的元素，并返回位序</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/*
 * @Description: 顺序表的按值查找（顺序查找）
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-02-23 07:48:26
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2020-02-23 07:48:26
 */</span>
<span class="token keyword">int</span> <span class="token function">LocateElem</span><span class="token punctuation">(</span>SqList L<span class="token punctuation">,</span>ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token comment">// 循环判断</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>L<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">=</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// i是元素的角标，i+1是具体元素的位序号</span>
            <span class="token keyword">return</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 未命中，返回0,即：没有</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意理解<code>位序</code>的含义，即元素在线性表中的位置序号，角标为<code>i</code>（角标从0开始）,对应的位序为<code>i+1</code>（位序从1开始）。当返回为0时，则直接代表没有<code>命中</code>；</p><p><strong>时间复杂度：</strong></p><ul><li>最好情况：查找的元素在表头，只需要比较一次，循环成本最小，时间复杂度为O(1);</li><li>最坏情况：查找的元素在表尾或者不存在，需要完整遍历，比较n次，时间复杂度为O(n);</li><li>平均情况：随机查找表上的第i个（1≤i≤L.length）元素,平均次数为(n+1)/2,对应时间复杂度为O(n)</li></ul><p><strong>线性表按值查找（顺序查找）的平均时间复杂度为O(n)；</strong></p><p><strong>顺序存取是读写方式，不是存储结构；顺序存储是存储结构，包括有：顺序存储、链式存储、索引存储、散列存储</strong></p>`,33);function g(h,f){const e=t("ExternalLinkIcon");return p(),l("div",null,[v,n("p",null,[k,s("： 指针型函数，返回的指针指向该分配域的开头的位置。作用是在内存的动态存储区中分配一个长度为size的连续空间。"),n("a",m,[s("百度百科"),o(e)])]),b])}const w=i(r,[["render",g],["__file","sequential-representation.html.vue"]]);export{w as default};
