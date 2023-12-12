import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-02133217.js";const p="/408CSFamily/assets/入队-2950c825.png",t="/408CSFamily/assets/出队-29797215.png",o="/408CSFamily/assets/队列队满情况分析-f1bb188e.png",i="/408CSFamily/assets/循环队列初始化-af4f2041.png",c="/408CSFamily/assets/循环队列入队-bc53687c.png",l={},r=e(`<h1 id="队列的顺序存储结构" tabindex="-1"><a class="header-anchor" href="#队列的顺序存储结构" aria-hidden="true">#</a> 队列的顺序存储结构</h1><blockquote><p>队列的顺序实现是指分配一块连续的存储单元用来存放队列中的元素，并且附加两个指针。</p><ul><li><code>front指针</code>： 指向队头元素的位置</li><li><code>rear指针</code>： 指向队尾元素的位置</li></ul></blockquote><p>队列顺序存储类型：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 队列最大存储元素个数</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MaxSize</span> <span class="token expression"><span class="token number">50</span></span></span>

<span class="token comment">// 结构体定义</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  <span class="token comment">// 存放队列元素</span>
  ElemType data<span class="token punctuation">[</span>MaxSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 队头指针和队尾指针</span>
  <span class="token keyword">int</span> front<span class="token punctuation">,</span>rear<span class="token punctuation">;</span>
<span class="token punctuation">}</span> SqQueue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假定：</p><ul><li>队头指针指向队头元素</li><li>队尾指针指向队尾元素的下一个位置</li></ul><p>则：</p><ul><li>初始状态（<strong>队空条件</strong>）：<code>Q.front</code>===<code>Q.rear</code>===0</li><li>入队操作：队不满时，先赋值给队尾元素，再移动队尾指针+1</li><li>出队操作： 队不空时，先取队头元素值，再移动队头指针+1</li></ul><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在空队列中，初始状态为<code>Q.front===Q.rear==0</code>,当元素a入队时,队尾指针rear后移+1，入队成功后，<code>Q.front==0</code>、<code>Q.rear==1</code>，在队不满的情况下进队，都是<code>先赋值给队尾元素，再移动队尾指针rear+1</code>,通过上面的图宝贝可以看到，队列被元素打满的时：</p><ul><li>在这个进队的过程中，没有元素出队，队头指针并没有做改变，<code>Q.front==0</code></li><li>进队操作直接影响队尾指针的变化，队列满的时候<code>Q.rear==Maxsize</code></li></ul><blockquote><p>Tips: MaxSize为队列结构体定义中，最大存储元素个数哦~</p></blockquote><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进队说完了，那给宝贝来说说出队吧。以上图为例，队列中<code>Q.rear==Maxsize</code>、<code>Q.front==0</code>；当出现元素在队首出队，就会直接影响队首指针，从上面的流程上看：</p><ul><li><p>元素出队，front指针后移+1，在队不空的情况下，操作为：<code>先取队头元素值，再移动队头指针+1</code></p></li><li><p>当队列中的元素都陆续出队，抛弃了宝贝（都是渣男，噗呲，哈哈哈），指针会是：<code>Q.rear==Q.front==MaxSize</code></p></li></ul><p>从上面两张图中，我们来思考：</p><blockquote><p>前面队空条件为：<code>Q.front===Q.rear===0</code>,那能用<code>Q.rear==MaxSize</code>来表示队满嘛？</p></blockquote><p>傻瓜，你在瞅瞅前面的图，明显存在<code>Q.rear==MaxSize</code>，但队列确实空的情况呀。队满要灵活判断，可不要死记书上总结的。书上说的很多结论都是有前提的，老师记结论不记前提容易张冠李戴、含糊不清的呀~</p><p>很显然，也存在下面这种情况：</p><ul><li>队头指针指向队头元素的前一个位置</li><li>队尾指针指向队尾元素</li></ul><p>此时的入队、出队过程就宝贝自己去画流程图咯</p><h2 id="循环队列" tabindex="-1"><a class="header-anchor" href="#循环队列" aria-hidden="true">#</a> 循环队列</h2><p>在上面的顺序队列中，当队满后进行出队列，由于顺序队列出队只在队首进行操作，并且只会修改队首指针，这时候就会出现队尾指针一直<code>Q.rear===MaxSize</code>情况，就如下：</p><figure><img src="'+o+'" alt="队列队满情况分析" tabindex="0" loading="lazy"><figcaption>队列队满情况分析</figcaption></figure><p>可以很明显的看到，明明队列不满，但是由于进队列只能在队尾操作，因此不能进行进队操作；通常在这种情况下入队就会出现“上溢出”。</p><blockquote><p>需要明确的是：上溢出并不是真正的溢出，只是表明在顺序队列中队不满却无法入队的情况，是一种假的”溢出“</p></blockquote><p>这种情况在顺序队列中是非常常见的，也是顺序队列的一大缺点。为了克服这个缺点，计算机先贤们总是能够有很多很好的办法，这里不得不佩服！！，所以就有了循环队列，<strong>一个将顺序队列臆想为一个环状的空间</strong></p><blockquote><p>很多时候就是这样，为了解决一个问题，从而衍生出一个新的知识</p></blockquote><p><code>循环队列</code>：把顺序队列臆想为一个环状的空间，将存储队列元素的表从逻辑上看做为一个环</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当队首指针<code>Q.front=MaxSize-1</code>后，再有元素<code>出队</code>就前进一个位置自动到位置0了【注意：可以结合时钟来理解，一圈转完了】</p><ul><li>初始时：<code>Q.front=Q.rear=0</code></li><li>队首指针进1： <code>Q.front=(Q.front+1)%MaxSize</code></li><li>队尾指针进1： <code>Q.rear=(Q.rear+1)%MaxSize</code></li><li>队列长度： <code>(Q.rear+MaxSize-Q.front)%MaxSize</code></li></ul><blockquote><p>是不是理解起来有点抽象，其实我最开始学到这里的时候，也不明白为什么要用<code>除法取余运算（%）</code>来实现。后来我看看了手机上的时钟指针，一圈两圈三圈的转，好像就开始悟了...其实这种取余操作在计算机知识体系中还是非常常见的，例如：组成原理中将会学到的补码，据说idea就是来源于时钟..</p></blockquote><p><strong>和时钟一样，顺时钟进行时间变换，在出队、入队时，队首、队尾指针都是按顺时针方向进1</strong></p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图，循环队列从最开始初始化为空队列时:<code>Q.front==Q.rear==0</code>,经过元素a入队，队尾指针顺时针前移<code>Q.rear+1</code>，到元素a、b、c、d陆续入队，就好像时钟转完了一圈，循环队列已满，此时发现：<code>Q.front==Q.rear==0</code>在队满时候依然成立，所以结合前面提到的初始化对空条件:<code>Q.front==Q.rear==0</code>,用<code>Q.front==Q.rear</code>来区分<code>队空</code>和<code>队满</code>是非常不合适的。</p><h3 id="如何区别队空还是队满" tabindex="-1"><a class="header-anchor" href="#如何区别队空还是队满" aria-hidden="true">#</a> 如何区别队空还是队满</h3><blockquote><p>为了很好的区别循环队列的<code>队空</code>还是<code>队满</code>的情况，一般有三种处理方式.</p></blockquote><h4 id="牺牲一个单元来区分队空和队满" tabindex="-1"><a class="header-anchor" href="#牺牲一个单元来区分队空和队满" aria-hidden="true">#</a> 牺牲一个单元来区分队空和队满</h4><p>这种方式<strong>要求在入队时少用一个队列单元</strong>，是一种比较普遍的做法。约定：</p><p><strong>队头指针在队尾指针在队尾指针的下一个位置作为队满标志【重要】</strong></p><ul><li>队满条件：<code>(Q.rear+1)%MaxSize==Q.front</code></li><li>队空条件：<code>Q.front==Q.rear</code></li><li>队列中元素个数：<code>(Q.rear+MaxSize-Q.front)%MaxSize</code></li></ul><h4 id="类型中增设表示元素个数的数据成员" tabindex="-1"><a class="header-anchor" href="#类型中增设表示元素个数的数据成员" aria-hidden="true">#</a> 类型中增设表示元素个数的数据成员</h4><p>这种就很直接了，直接和MaxSize去比较，就可以有：</p><ul><li>队空条件： <code>Q.count=0</code></li><li>队满条件： <code>Q.count=MaxSize</code></li></ul><p>值的注意的是：在这个前提下，不论是<code>队空</code>还是<code>队满</code>，对会存在<code>Q.front=Q.rear</code>,这个可以通过前面方案解决。</p><h4 id="类型中增设tag数据成员标记" tabindex="-1"><a class="header-anchor" href="#类型中增设tag数据成员标记" aria-hidden="true">#</a> 类型中增设tag数据成员标记</h4><p>通过添加tag标记的方式，区分<code>队空</code>还是<code>队满</code></p><ul><li><code>tag==0</code>的情况下，如果因为删除导致<code>Q.front==Q.rear</code>，则队空；</li><li><code>tag==1</code>的情况下，如果因为插入导致<code>Q.front==Q.rear</code>，则队满；</li></ul><p>可能你会对上面的这两种情况有迷惑，说实话我第一次看的时候，也挺迷惑的，这里我按照我的理解来解释一下：</p><blockquote><p>在循环队列中增加tag数据成员标记，tag的主要作用：</p><ul><li>在有元素入队的时候，设置tag=1</li><li>在有元素出队的时候，设置tag=0</li></ul></blockquote><p>对应的算法实现：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 入队算法</span>
<span class="token comment">// 尾插法：Q.data[Q.rear]=x;Q.rear=(Q.rear+1)%Maxsize;Q.tag=1</span>
<span class="token comment">// 队空条件：Q.front== Q.rear且Q.tag==0</span>
<span class="token keyword">int</span> <span class="token function">EnLoopQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> ElemType x<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front<span class="token operator">==</span>Q<span class="token punctuation">.</span>rear<span class="token operator">&amp;&amp;</span>Q<span class="token punctuation">.</span>tag<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   Q<span class="token punctuation">.</span>data<span class="token punctuation">[</span>Q<span class="token punctuation">.</span>rear<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>
   Q<span class="token punctuation">.</span>rear<span class="token operator">=</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>MaxSize<span class="token punctuation">;</span>
   Q<span class="token punctuation">.</span>tag<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

 
        
<span class="token comment">// 出队算法</span>
<span class="token comment">// 头结点删除：x=Q.data[Q.front];Q.front=(Q.front +1)%Maxsize;Q.tag=0</span>
<span class="token comment">// 队满条件：Q.front == Q.rear且Q.tag=1</span>
<span class="token comment">// 注意：当删除之后链表为空时，还需增加一步，将尾指针指向头结点</span>
<span class="token keyword">int</span> <span class="token function">DeLoopQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> ElemType <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front<span class="token operator">==</span>Q<span class="token punctuation">.</span>rear<span class="token operator">&amp;&amp;</span>Q<span class="token punctuation">.</span>tag<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    x<span class="token operator">=</span>Q<span class="token punctuation">.</span>data<span class="token punctuation">[</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>front<span class="token operator">=</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>MaxSize<span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>tag<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="初始化空队列" tabindex="-1"><a class="header-anchor" href="#初始化空队列" aria-hidden="true">#</a> 初始化空队列</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/*
 * @Description: 循环队列初始化，队列为空
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2019-09-27 14:17:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-03-18 22:15:06
 */</span>
<span class="token keyword">void</span> <span class="token function">InitLoopQueque</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
  Q<span class="token punctuation">.</span>front<span class="token operator">=</span>Q<span class="token punctuation">.</span>rear<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队列是否为空" tabindex="-1"><a class="header-anchor" href="#队列是否为空" aria-hidden="true">#</a> 队列是否为空</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/*
 * @Description: 判断循环队列是否为空
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2019-09-27 14:17:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-03-18 22:15:06
 */</span>
<span class="token keyword">bool</span> <span class="token function">isEmpatyLoopQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 注意循环队列对空条件：Q.rear=Q.front</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear<span class="token operator">=</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 队空</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// 非空</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入队操作" tabindex="-1"><a class="header-anchor" href="#入队操作" aria-hidden="true">#</a> 入队操作</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/*
 * @Description: 循环队列元素入队
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2019-09-27 14:17:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-03-18 22:15:06
 */</span>
<span class="token keyword">bool</span> <span class="token function">EnLoopQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> ElemType x<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 判断循环队列是否已满 注意判断条件：(Q.rear+1)%MaxSize===Q.front</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>MaxSize<span class="token operator">==</span><span class="token operator">=</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 循环队列满</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
   <span class="token comment">// 队列未满，可进行入队操作【队尾进行】</span>
   
   <span class="token comment">// 队尾指针指向的数据域进行赋值</span>
   Q<span class="token punctuation">.</span>data<span class="token punctuation">[</span>Q<span class="token punctuation">.</span>rear<span class="token punctuation">]</span><span class="token operator">=</span>x<span class="token punctuation">;</span>

   <span class="token comment">//队尾指针后移+1【类似时钟的顺时针方向】</span>
   Q<span class="token punctuation">.</span>rear<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>MaxSize<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// 入队成功，返回true</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="出队操作" tabindex="-1"><a class="header-anchor" href="#出队操作" aria-hidden="true">#</a> 出队操作</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token comment">/*
 * @Description: 循环队列元素出队
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2019-09-27 14:17:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-03-18 20:32:18
 */</span>
<span class="token keyword">bool</span> <span class="token function">DeLoopQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> ElemType <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
  
  <span class="token comment">// 判断循环队列是否为空队列</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear<span class="token operator">==</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// 队列为空，无法进行出队操作，返回false</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 循环队列非空,元素可出队【队首操作】</span>

  <span class="token comment">// 将循环队列队首指针指向的元素的数据域赋值给变量x</span>
  x<span class="token operator">=</span>Q<span class="token punctuation">.</span>data<span class="token punctuation">[</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 移动队首指针，顺时针后移+1</span>
  Q<span class="token punctuation">.</span>front<span class="token operator">=</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>MaxSize<span class="token punctuation">;</span>

  <span class="token comment">// 出队成功，返回true</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取队头元素" tabindex="-1"><a class="header-anchor" href="#获取队头元素" aria-hidden="true">#</a> 获取队头元素</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/*
 * @Description: 获取循环队列队头元素
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2019-09-27 14:17:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-03-18 20:15:33
 */</span>
<span class="token keyword">bool</span> <span class="token function">GetLoopQueueHead</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> ElemType <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 判断循环队列是否为空队列</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front<span class="token operator">==</span>Q<span class="token punctuation">.</span>rear<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 队列为空，没有队头元素，返回false</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token comment">// 获取队头指针指向元素的数据域，赋值给x</span>
      x<span class="token operator">=</span>Q<span class="token punctuation">.</span>data<span class="token punctuation">[</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token comment">// 获取队头元素成功，返回true</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64),u=[r];function d(k,v){return s(),a("div",null,u)}const Q=n(l,[["render",d],["__file","queue-sequential-storage.html.vue"]]);export{Q as default};
