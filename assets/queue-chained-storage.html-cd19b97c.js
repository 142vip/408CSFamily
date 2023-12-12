import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-02133217.js";const i="/408CSFamily/assets/不带头结点的链式队列-06e966f5.png",t="/408CSFamily/assets/带头结点的链式队列-517ccfb3.png",p="/408CSFamily/assets/链式队列出队-f3882fbf.png",o="/408CSFamily/assets/双端队列-960adeb2.png",c={},l=e('<h1 id="队列的链式存储结构" tabindex="-1"><a class="header-anchor" href="#队列的链式存储结构" aria-hidden="true">#</a> 队列的链式存储结构</h1><p><code>链队列</code>：和顺序队列一样，基于队列的链式表示叫做<code>链队列</code>，实际上为：<strong>一个同时带有队头指针和队尾指针的单链表</strong></p><ul><li>头指针指向队头结点</li><li>尾指针指向队尾结点（单链表的最后一个结点）</li></ul><p>这里复习下顺序队列的定义，进行比较学习</p><blockquote><p>队列的顺序实现是指分配一块连续的存储单元用来存放队列中的元素，并且附加两个指针。</p><ul><li>队头指针指向队头元素</li><li>队尾指针指向队尾元素的下一个位置</li></ul></blockquote><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>队列的链式存储结构：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 链式队列节点定义</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
  <span class="token comment">// 结果点数据域</span>
  ElemType data<span class="token punctuation">;</span>
  <span class="token comment">// 结点指针域</span>
  <span class="token keyword">struct</span> <span class="token class-name">LinkNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>LinkNode<span class="token punctuation">;</span>

<span class="token comment">// 链式队列定义</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
  <span class="token comment">// front 队头指针，rear 队尾指针</span>
  LinkNode <span class="token operator">*</span>front<span class="token punctuation">,</span><span class="token operator">*</span>rear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>LinkQueue<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合上面的<code>不带头结点</code>链式队列结构图，假设存在链式队列&lt;LinkQueue,linkQueue&gt;</p><ul><li>队空： <code>linkQueue.front==NULL</code>且<code>linkQueue.rear==NULL</code></li><li>出队： 先判断队列是否为空，非空队列则取出队头元素，从链表中闪出去，<code>队头指针Q.front指向下一个结点</code>，如果出队的结此为尾结点，出队后队空，需要将Q.front和Q.rear都置为NULL</li><li>入队： 建立一个新的结点，将新的结点插入到链表的尾部，修改队尾指针Q.rear指向新插入的结点。如果原队列为空，需要将队首指针也指向该结点</li></ul><p>仔细思考上面的入队、出队操作，都需要考虑队空的情况下的特殊处理，不带头结点的队列导致队空队首和队尾指针都为NULL，比较麻烦；结合之前整理、学习过的单链表，套用一下先贤的思路，也整上一个头结点，就会发现容易处理很多；</p><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>链式队列加上头结点后，之前较为复杂的入队、出队操作就统一起来了。</p><ul><li>队空：<code>Q.front==Q.rear</code>,都指向头结点，一般数据域可以为空</li><li>出队：判断队列是否为空，队列非空则在队首移动指针，将队首指针指向下一个元素。如果队列中就一个元素，则出队后将成为空队，<code>Q.rear==Q.front</code>,最后释放元素内存空间。</li><li>入队：将元素插入队尾，移动队尾指针，即便为空队列入队，由于队列带有头结点，此时就很好的避免操作队首指针了。</li></ul><p>特别注意：</p><ul><li>用单链表表示的链式队列非常适合频繁出队、入队、元素变化大的场景</li><li>不存在队满情况，也不会出现溢出情况；</li><li>链式队列不会出现存储分配不合理、“溢出”的情况，内存动态分配</li></ul><h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2><blockquote><p>Tips: 基于带头结点链式队列的基础操作</p></blockquote><h3 id="队列初始化" tabindex="-1"><a class="header-anchor" href="#队列初始化" aria-hidden="true">#</a> 队列初始化</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 链式队列初始化
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-06-27 14:17:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-02-18 22:15:06
 */</span>
voide <span class="token function">InitLinkQueue</span><span class="token punctuation">(</span>LinkQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// 创建头结点</span>
  Q<span class="token punctuation">.</span>front<span class="token operator">=</span>Q<span class="token punctuation">.</span>rear<span class="token operator">=</span><span class="token punctuation">(</span>LinkNode<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span> <span class="token punctuation">(</span>LinkNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 头结点的指针域指向的下一个结点为空</span>
  Q<span class="token punctuation">.</span>front<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这个初始化操作，我第一次看的时候，非常不理解为什么在队首指针和队尾指针都指向已经创建好的头结点后，突然写一行<code>Q.front-&gt;next=NULL;</code>,后来的的理解是：</p><blockquote><p>链式队列，本质是基于单链表的队列，那带头结点的链式队列，其实强调的也就是单链表要带头结点。队列的队首指针和队尾指针确定指向单表的队首和队尾就ok；初始化的时候，带头结点的单链表实质就只有一个头结点。而此时的链式队列，需要将队首指针和队尾指针指向单链表的头结点就行，好像到这里就完了。但是这样却忽视了单链表，只是注重的队列的front和rear指针。单链表的结点元素是分数据域和指针域的，即便是头结点的数据域可以不存什么（当然也常会存一些链表信息什么的）,此处的<code>Q.front-&gt;next=NULL</code>就是用来处理链表的头结点的指针域的，让其指向下一个单链表元素为空，这里是非常需要处理的，非常细节！</p></blockquote><h3 id="判断队空" tabindex="-1"><a class="header-anchor" href="#判断队空" aria-hidden="true">#</a> 判断队空</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 判断链式队列是否为空
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-06-27 14:24:22
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-02-16 22:15:06
 */</span>
<span class="token keyword">bool</span> <span class="token function">IsEmptyLinkQueue</span><span class="token punctuation">(</span>LinkQueue Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front<span class="token operator">==</span>Q<span class="token punctuation">.</span>rear<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 队首、队尾指针指向同一个结点内存地址，队空</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// 非空</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入队" tabindex="-1"><a class="header-anchor" href="#入队" aria-hidden="true">#</a> 入队</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/*
 * @Description: 链式队列入队操作
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-06-46 14:17:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-02-18 22:15:06
 */</span>
<span class="token keyword">void</span> <span class="token function">EnLinkQueue</span><span class="token punctuation">(</span>LinkQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> ElemType x<span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">//创建入队结点元素</span>
  node<span class="token operator">=</span><span class="token punctuation">(</span>LinkNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LinkNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 赋值给结点数据域</span>
  node<span class="token operator">-&gt;</span>data<span class="token operator">=</span>x<span class="token punctuation">;</span>
  <span class="token comment">// 单链表中结点的指针指向下一个元素，为空</span>
  node<span class="token operator">-&gt;</span>next<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>

  <span class="token comment">// 队尾进队，将结点node和队尾结点链接起来，确保不断链</span>
  Q<span class="token punctuation">.</span>rear<span class="token operator">-&gt;</span>next<span class="token operator">=</span>node<span class="token punctuation">;</span>
  <span class="token comment">// 修改队尾指针，指向新入队的结点node</span>
  Q<span class="token punctuation">.</span>rear<span class="token operator">=</span>node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="出队" tabindex="-1"><a class="header-anchor" href="#出队" aria-hidden="true">#</a> 出队</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 链式队列出队操作
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2020-05-18 11:25:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-02-22 06:15:06
 */</span>
<span class="token keyword">bool</span> <span class="token function">DeLinkQueue</span><span class="token punctuation">(</span>LinkQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> ElemType <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
  
  <span class="token comment">// 判断队列是否为空</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front<span class="token operator">==</span>Q<span class="token punctuation">.</span>rear<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 队列为空，没有元素出队</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Q.front指向单链表的头结点，出队需要出单链表的除头结点外的第一个结点（头结点的下一个结点：Q.front-&gt;next）</span>
  temp<span class="token operator">=</span>Q<span class="token punctuation">.</span>front<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

  <span class="token comment">// 变量x赋值</span>
  x<span class="token operator">=</span>temp<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>

  <span class="token comment">// 修改单例表的头指针，指向链表中待删除元素的下一个元素</span>
  Q<span class="token punctuation">.</span>front<span class="token operator">-&gt;</span>next<span class="token operator">=</span>temp<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>

  <span class="token comment">// 队尾指针和队首指针的下一个结点重合，表示当前链式队列只有一个元素，删除后，队列为空</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear<span class="token operator">==</span>temp<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 链表中队首、队尾指针重合，队列为空</span>
    Q<span class="token punctuation">.</span>rear<span class="token operator">=</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 释放删除元素的内存空间,注意，这里释放的是头结点的下一个结点</span>
  <span class="token function">free</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 出队成功</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出队的时候明显有些绕，需要明确队列中头结点的存在，出队出的是单链表中头结点的后一个结点，同时要确保整个过程<code>不断链</code></p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="双端队列" tabindex="-1"><a class="header-anchor" href="#双端队列" aria-hidden="true">#</a> 双端队列</h2><p><code>双端队列</code>: 允许在两端都可以进行入队和出队操作的队列，元素的逻辑结构仍然是线性结构</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>双端队列的两端分别称为<code>前端</code>和<code>后端</code>，两端都可以<code>入队</code>和<code>出队</code></strong></p><ul><li>进队：前端进的元素排列在队列中后端进的元素的前面，后端进的元素排列在队列前端进的元素后面;</li><li>出队：无论是前端还是后端出队，先出的的元素排列在后出的元素的前面</li></ul><p>在双端队列的基础上，还衍生出：</p><ul><li><code>输入受限的双端队列</code>：允许在一端进行插入和删除操作，但在另外一端只允许进行删除的双端队列</li><li><code>输出受限的双端队列</code>：允许在一端进行插入和删除曹组，但在另外一端只允许进行插入的双端队列</li></ul><p>当然，如果<code>限定双端队列从某个断点插入的元素只能从该端点删除</code>，那么此时的双端队列就演变为两个栈底相邻的栈了。</p><h2 id="知识补充" tabindex="-1"><a class="header-anchor" href="#知识补充" aria-hidden="true">#</a> 知识补充</h2><ul><li><p>最适合用来链队的链表是：<code>带队首指针和队尾指针的非循环单链表</code></p></li><li><p>栈和队列的逻辑结构都是线性表，存储结构可能是顺序的（顺序栈、顺序队列），也可能是链式的（链栈、链队）</p></li><li><p>不论是顺序存储还是链式存储，<strong>栈和队列都只能进行顺序存取（本质是线性表）</strong>。数组是可以做到随机存取（本质是顺序表）</p></li><li><p>队列先进先出的特性：<code>先进队列的元素先出队列，后进队列的元素后出队列</code></p></li></ul><p>特别注意：</p><p>队列用链表形式存储时，删除元素，需要从队头删除，一般情况下，仅仅修改头指针,但是如果此时队列中 仅有一个元素，则尾指针也是需要被修改的。<strong>因为队列中只有一个元素时，删除后队列为空，需要修改尾指针为：<code>rear=front</code></strong></p>',42),d=[l];function u(r,v){return s(),a("div",null,d)}const b=n(c,[["render",u],["__file","queue-chained-storage.html.vue"]]);export{b as default};
