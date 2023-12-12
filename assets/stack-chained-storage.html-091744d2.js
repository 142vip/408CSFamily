import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-02133217.js";const t="/408CSFamily/assets/栈的链式存储结构-b37b8783.png",p={},o=e('<h1 id="栈的链式存储结构" tabindex="-1"><a class="header-anchor" href="#栈的链式存储结构" aria-hidden="true">#</a> 栈的链式存储结构</h1><p><code>链栈</code>： 采用链式存储的栈</p><p><code>栈满</code>：对于链栈来说，是基于链式存储的，基本不存在栈满的情况，除非内存已经没有使用空间了。</p><p><code>栈空</code>：对于空栈来说，链表原来的定义是头指针指向空，那么链栈的空其实就是<code>top＝NULL</code>,链栈元素总数为0</p><p>栈只是栈顶在做插入和删除操作，栈顶应该放在单链表的头部，所以单链表中的头结点也就失去了意义。</p><p><strong>通常对于链栈来说，是不需要头结点的，当然也存在带头结点的链栈</strong></p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>栈的链式存储类型：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">// 链栈类型定义【基础】</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">LinkNode</span><span class="token punctuation">{</span>
  ElemType data<span class="token punctuation">;</span>                <span class="token comment">// 栈元素结点数据域</span>
  <span class="token keyword">struct</span> <span class="token class-name">LinkNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>        <span class="token comment">// 栈元素结点指针域</span>
<span class="token punctuation">}</span> <span class="token operator">*</span>LinkStack<span class="token punctuation">;</span>

<span class="token comment">// 更为详细的定义</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">StackNode</span> 
<span class="token punctuation">{</span>
 <span class="token keyword">int</span> data<span class="token punctuation">;</span><span class="token comment">//结点数据域</span>
 <span class="token keyword">struct</span> <span class="token class-name">StackNode</span><span class="token operator">*</span> next<span class="token punctuation">;</span><span class="token comment">//结点指针域</span>
<span class="token punctuation">}</span>StackNode<span class="token punctuation">,</span><span class="token operator">*</span> Linktop<span class="token punctuation">;</span>
 
<span class="token comment">//链栈的数据结构</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">LinkStack</span> 
<span class="token punctuation">{</span>
 Linktop top<span class="token punctuation">;</span>   <span class="token comment">//栈顶结点,定义了一个指向上个结构体的指针</span>
 <span class="token keyword">int</span> count<span class="token punctuation">;</span><span class="token comment">//元素个数</span>
<span class="token punctuation">}</span>LinkStack<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p><ul><li>便于多个栈共享存储空间</li><li>不存在栈满上溢的情况，避免程序因溢出导致出错</li><li>有效的提高存取效率</li></ul><h2 id="进栈" tabindex="-1"><a class="header-anchor" href="#进栈" aria-hidden="true">#</a> 进栈</h2><ul><li>如果链栈不存在，则栈满，入栈操作失败，返回false;</li><li>如果链栈存在，进行单链表的结点插入操作，移动指针，结点元素赋值，再将结点压入链栈中，移动链栈栈顶指针，最后链栈元素总数+1，返回true</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 基于单链表链栈的进栈操作
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-03-04 07:36:04
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2020-03-04 11:39:16
 */</span>
<span class="token keyword">bool</span> <span class="token function">linkStackPushNode</span><span class="token punctuation">(</span>LinkStack<span class="token operator">*</span> linkStack<span class="token punctuation">,</span><span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// 判断链栈是否存在</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>linkStack<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token comment">//链栈不存在，无法进栈操作，返回false</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 开辟栈结点元素内存控件</span>
  StackNode<span class="token operator">*</span> node <span class="token operator">=</span> <span class="token punctuation">(</span>StackNode<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>StackNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 新结点指针域指向链表，即栈顶指针位置，元素加入链表</span>
  node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> linkStack<span class="token operator">-&gt;</span>top<span class="token punctuation">;</span>           
  <span class="token comment">// 新结点数据域赋值</span>
  node<span class="token operator">-&gt;</span>data <span class="token operator">=</span> e<span class="token punctuation">;</span>
  <span class="token comment">// 元素进栈，移动栈顶指针，指向新入栈的元素</span>
  linkStack<span class="token operator">-&gt;</span>top <span class="token operator">=</span> node<span class="token punctuation">;</span> 
  <span class="token comment">// 链栈元素总数+1                </span>
  linkStack<span class="token operator">-&gt;</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token comment">//链栈入栈成功，返回true</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="出栈" tabindex="-1"><a class="header-anchor" href="#出栈" aria-hidden="true">#</a> 出栈</h2><ul><li>如果链栈不存在，或者为空栈，则无法进行出栈操作，返回false</li><li>如果链栈满足出栈条件，则通过栈顶指针获取到链栈栈底结点，将其数据域赋值给变量e，移动栈顶指针指向待出栈元素的后继结点，同时释放待出栈元素的内存空间，链栈元素总数-1 ，出栈成功，返回true.</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 基于单链表链栈的出栈操作
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-03-04 23:38:04
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2020-03-04 23:39:16
 */</span>
<span class="token keyword">bool</span> <span class="token function">linkStackPopNode</span><span class="token punctuation">(</span>LinkStack<span class="token operator">*</span> linkStack<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">*</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 判断链栈是否存在及是否为空</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>linkStack <span class="token operator">||</span> linkStack<span class="token operator">-&gt;</span>count<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//出栈失败，返回false</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 获取栈顶元素结点</span>
  StackNode<span class="token operator">*</span> node <span class="token operator">=</span> stack<span class="token operator">-&gt;</span>top<span class="token punctuation">;</span>

  <span class="token comment">// 结点元素数据域赋值给变量e</span>
  <span class="token operator">*</span>e <span class="token operator">=</span> linkStack<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
  <span class="token comment">// 移动栈顶指向，栈顶指针指向待出栈结点的后继结点</span>
  linkStack<span class="token operator">-&gt;</span>top <span class="token operator">=</span> node<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>   
  <span class="token comment">// 变量e已被赋值，释放链栈出栈元素的内存控件</span>
  <span class="token function">free</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>      
  <span class="token comment">// 链栈元素个数-1          </span>
  linkStack<span class="token operator">-&gt;</span>count<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token comment">// 出栈成功，返回true.</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是基于单链表的链栈入栈、出栈操作，很明显<strong>时间复杂度都为O(1）</strong>,重点<code>注意移动指针，保持不断链</code></p>`,18),c=[o];function i(l,d){return s(),a("div",null,c)}const k=n(p,[["render",i],["__file","stack-chained-storage.html.vue"]]);export{k as default};
