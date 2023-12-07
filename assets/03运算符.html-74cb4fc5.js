import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-6cc2c792.js";const p={},e=t(`<h1 id="_03运算符" tabindex="-1"><a class="header-anchor" href="#_03运算符" aria-hidden="true">#</a> 03运算符</h1><h1 id="_01、运算符" tabindex="-1"><a class="header-anchor" href="#_01、运算符" aria-hidden="true">#</a> 01、运算符</h1><blockquote><p>运算符是一种特殊的符号，用以表示数据的运算、赋值和比较等。</p></blockquote><ul><li>算术运算符</li><li>赋值运算符</li><li>比较运算符（关系运算符）</li><li>逻辑运算符</li><li>位运算符</li><li>三元运算符</li></ul><h2 id="_1-1、算术运算符" tabindex="-1"><a class="header-anchor" href="#_1-1、算术运算符" aria-hidden="true">#</a> 1.1、算术运算符</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
运算符之一：算术运算符
+ - * / % (前)++ (后)++ (前)-- (后)-- 

*/</span>
<span class="token keyword">class</span> <span class="token class-name">Day3Test</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">//除号：/</span>
		<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> resule1 <span class="token operator">=</span> num1 <span class="token operator">/</span> num2<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>resule1<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//2</span>

		<span class="token keyword">int</span> result2 <span class="token operator">=</span> num1 <span class="token operator">/</span> num2 <span class="token operator">*</span> num2<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">double</span> result3 <span class="token operator">=</span> num1 <span class="token operator">/</span> num2<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result3<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//2.0</span>

		<span class="token keyword">double</span> result4 <span class="token operator">=</span> num1 <span class="token operator">/</span> num2 <span class="token operator">+</span> <span class="token number">0.0</span><span class="token punctuation">;</span>	<span class="token comment">//2.0</span>
		<span class="token keyword">double</span> result5 <span class="token operator">=</span> num1 <span class="token operator">/</span> <span class="token punctuation">(</span>num2 <span class="token operator">+</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//2.4</span>
		<span class="token keyword">double</span> result6 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>num1 <span class="token operator">/</span> num2<span class="token punctuation">;</span>	<span class="token comment">//2.4</span>
		<span class="token keyword">double</span> result7 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">(</span>num1 <span class="token operator">/</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//2.0</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result5<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result6<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// %：取余运算</span>
		<span class="token comment">//结果的符号与被模数的符号相同</span>
		<span class="token keyword">int</span> m1 <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m1 % n1 = &quot;</span> <span class="token operator">+</span> m1 <span class="token operator">%</span> n1<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">int</span> m2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m2 % n2 = &quot;</span> <span class="token operator">+</span> m2 <span class="token operator">%</span> n2<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">int</span> m3 <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n3 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m3 % n3 = &quot;</span> <span class="token operator">+</span> m3 <span class="token operator">%</span> n3<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">int</span> m4 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n4 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m4 % n4 = &quot;</span> <span class="token operator">+</span> m4 <span class="token operator">%</span> n4<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//(前)++ : 先自增1，后运算</span>
		<span class="token comment">//(后)++ ：先运算，后自增1</span>
		<span class="token keyword">int</span> a1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> b1 <span class="token operator">=</span> <span class="token operator">++</span>a1<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a1 = &quot;</span> <span class="token operator">+</span> a1 <span class="token operator">+</span> <span class="token string">&quot;,b1 = &quot;</span> <span class="token operator">+</span> b1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> a2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> b2 <span class="token operator">=</span> a2<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a2 = &quot;</span> <span class="token operator">+</span> a2 <span class="token operator">+</span> <span class="token string">&quot;,b2 = &quot;</span> <span class="token operator">+</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">int</span> a3 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		a3<span class="token operator">++</span><span class="token punctuation">;</span>	<span class="token comment">//a3++;</span>
		<span class="token keyword">int</span> b3 <span class="token operator">=</span> a3<span class="token punctuation">;</span>

		<span class="token comment">//注意点：</span>
		<span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token comment">//s1 = s1 + 1;	//编译失败</span>
<span class="token comment">//		s1 = (short)(s1 + 1);	//正确的</span>
		s1<span class="token operator">++</span><span class="token punctuation">;</span>	<span class="token comment">//自增1不会改变本身变量的数据类型</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//问题：</span>
		<span class="token keyword">byte</span> bb1 <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
		bb1<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;bb1 = &quot;</span> <span class="token operator">+</span> bb1<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//(前)-- :先自减1，后运算</span>
		<span class="token comment">//(后)-- ：先运算，后自减1</span>

		<span class="token keyword">int</span> a4 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> b4 <span class="token operator">=</span> a4<span class="token operator">--</span><span class="token punctuation">;</span>	<span class="token comment">//int b4 = --a4;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a4 = &quot;</span> <span class="token operator">+</span> a4 <span class="token operator">+</span> <span class="token string">&quot;,b4 = &quot;</span> <span class="token operator">+</span> b4<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>算术运算符的注意问题</p></blockquote><ul><li>如果对负数取模，可以把模数负号忽略不记，如：5%-2=1。但被模数是负数则不可忽略。此外，取模运算的结果不一定总是整数。</li><li>对于除号“/”，它的整数除和小数除是有区别的：整数之间做除法时，只保留整数部分而舍弃小数部分。例如：intx=3510;x=x/1000*1000; x的结果是？</li><li>“+”除字符串相加功能外，还能把非字符串转换成字符串.例如：System.out.println(“5+5=”+5+5); //打印结果是？5+5=55 ?</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
练习：随意给出一个三位数的整数，打印显是它的个位数，十位数，百位数的值。
格式如下：
数字xxx的情况如下：
个位数：
十位数：
百位数：

例如：
数字153的情况如下：
个位数：3
十位数：5
百位数：1

*/</span>
<span class="token keyword">class</span> <span class="token class-name">AriExer</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">187</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;百位数：&quot;</span> <span class="token operator">+</span> num<span class="token operator">/</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;十位数：&quot;</span> <span class="token operator">+</span> num<span class="token operator">%</span><span class="token number">100</span><span class="token operator">/</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;个位数：&quot;</span> <span class="token operator">+</span> num<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2、赋值运算符" tabindex="-1"><a class="header-anchor" href="#_1-2、赋值运算符" aria-hidden="true">#</a> 1.2、赋值运算符</h2><ul><li>符号：<code>=</code><ul><li>当“=”两侧数据类型不一致时，可以使用自动类型转换或使用强制类型转换原则进行处理。</li><li>支持连续赋值。</li></ul></li><li>扩展赋值运算符：<code>+=, -=, *=, /=, %=</code></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
运算符之二：赋值运算符
+= -= *= /= 

*/</span>
<span class="token keyword">class</span> <span class="token class-name">SetValueTest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//赋值符号：=</span>
		<span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> j1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

		<span class="token keyword">int</span> i2<span class="token punctuation">,</span>j2<span class="token punctuation">;</span>
		<span class="token comment">//连续赋值</span>
		i2 <span class="token operator">=</span> j2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

		<span class="token keyword">int</span> i3 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>j3 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

		<span class="token comment">//***********************</span>
		<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		num1 <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>	<span class="token comment">//num1 = num1 + 2;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//12</span>
		
		<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
		num2 <span class="token operator">%=</span> <span class="token number">5</span><span class="token punctuation">;</span>	<span class="token comment">//num2 = num2 % 5;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token comment">//s1 = s1 + 2;	//编译失败</span>
		s1 <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>	<span class="token comment">//结论：不会改变变量本身的数据类型</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//开发中，如果希望变量实现+2的操作，有几种方法？？？(int num = 10)</span>
		<span class="token comment">//方式一：num = num + 2;</span>
		<span class="token comment">//方式二：num += 2;(推荐)</span>

		<span class="token comment">//开发中，如果希望变量实现+1的操作，有几种方法？？？(int num = 10)</span>
		<span class="token comment">//方式一：num = num + 1;</span>
		<span class="token comment">//方式二：num += 1;</span>
		<span class="token comment">//方式三：num++;(推荐)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">class</span> <span class="token class-name">MkFan</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//练习1：</span>
		<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		i <span class="token operator">*=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//</span>

		<span class="token comment">//练习2：</span>
		<span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
		n1 <span class="token operator">*=</span> m<span class="token operator">++</span><span class="token punctuation">;</span> 
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m=&quot;</span> <span class="token operator">+</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//3</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;n1=&quot;</span> <span class="token operator">+</span> n1<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//6</span>

		<span class="token comment">//练习3：</span>
		<span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		n <span class="token operator">+=</span> <span class="token punctuation">(</span>n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">++</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//32</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3、比较运算符" tabindex="-1"><a class="header-anchor" href="#_1-3、比较运算符" aria-hidden="true">#</a> 1.3、比较运算符</h2><ul><li>比较运算符的结果都是<code>boolean</code>型，也就是要么是true，要么是false。</li><li>比较运算符“<code>==</code>”不能误写成“=” 。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
运算符之三：比较运算符
==  !=  &gt; &lt; &gt;= &lt;= instanceof

结论：
1.比较运算符的结果是boolean类型
2.区分 == 和 = 

*/</span>
<span class="token keyword">class</span> <span class="token class-name">CompareTest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token operator">==</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//false</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">=</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//20</span>

		<span class="token keyword">boolean</span> b1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">boolean</span> b2 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b2 <span class="token operator">==</span> b1<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//false</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b2 <span class="token operator">=</span> b1<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4、逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_1-4、逻辑运算符" aria-hidden="true">#</a> 1.4、逻辑运算符</h2><ul><li><p><code>&amp;</code>—逻辑与</p></li><li><p><code>| </code>—逻辑或</p></li><li><p><code>！</code>—逻辑非</p></li><li><p><code>&amp;&amp;</code> —短路与</p></li><li><p><code>|| </code>—短路或</p></li><li><p><code>^</code> —逻辑异或</p></li><li><p>逻辑运算符用于连接布尔型表达式，在Java中不可以写成3&lt;x&lt;6，应该写成x&gt;3 &amp; x&lt;6 。</p></li><li><p>“<code>&amp;</code>”和“<code>&amp;&amp;</code>”的区别：</p><ul><li>单<code>&amp;</code>时，左边无论真假，右边都进行运算；</li><li>双<code>&amp;</code>时，如果左边为真，右边参与运算，如果左边为假，那么右边不参与运算。</li></ul></li><li><p>“<code>|</code>”和“<code>||</code>”的区别同理，<code>||</code>表示：当左边为真，右边不参与运算。</p></li><li><p>异或(<code>^</code>)与或( <code>|</code> )的不同之处是：当左右都为true时，结果为false。理解：异或，追求的是“异”!</p></li></ul><blockquote><p><strong>练习</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
运算符之四：逻辑运算符
&amp; &amp;&amp; | || ！ ^

说明：
1. 逻辑与运算符操作的都是boolean类型的变量

*/</span>
<span class="token keyword">class</span> <span class="token class-name">LogicTest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//区分&amp; 与 &amp;&amp;</span>
		<span class="token comment">//相同点1：&amp; 与 &amp;&amp; 的运算结果都相同</span>
		<span class="token comment">//相同点2：当符号左边是true时，二者都会执行符号右边的运算</span>
		<span class="token comment">//不同点：当符号左边是false时，&amp;继续执行符号</span>
		<span class="token comment">//开发中，推荐使用&amp;&amp;</span>
		<span class="token keyword">boolean</span> b1 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>b1 <span class="token operator">&amp;</span> <span class="token punctuation">(</span>num1<span class="token operator">++</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我现在在南京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我现在在北京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num1 = &quot;</span> <span class="token operator">+</span> num1<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">boolean</span> b2 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>b2 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>num2<span class="token operator">++</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我现在在南京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我现在在北京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num2 = &quot;</span> <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//区分：| 与 ||</span>
		<span class="token comment">//相同点1：| 与 || 的运算结果都相同</span>
		<span class="token comment">//相同点2：当符号左边是false时，二者都会执行符号右边的运算</span>
		<span class="token comment">//不同点3：当符号左边是true时，|继续执行符号右边的运算，而||不再执行符号右边的运算</span>
		<span class="token comment">//开发中，推荐使用||</span>
		<span class="token keyword">boolean</span> b3 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num3 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>b3 <span class="token operator">|</span> <span class="token punctuation">(</span>num3<span class="token operator">++</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我现在在南京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我现在在北京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num3 = &quot;</span> <span class="token operator">+</span> num3<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">boolean</span> b4 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num4 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>b4 <span class="token operator">||</span> <span class="token punctuation">(</span>num4<span class="token operator">++</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我现在在南京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我现在在北京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num4 = &quot;</span> <span class="token operator">+</span> num4<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">LogoinTest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">boolean</span> x <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">boolean</span> y <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">short</span> z <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
		<span class="token comment">//if(y == true)</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>z<span class="token operator">++</span><span class="token operator">==</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span>y<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>z<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">||</span><span class="token punctuation">(</span><span class="token operator">++</span>z<span class="token operator">==</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">)</span> z<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;z=&quot;</span> <span class="token operator">+</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//46</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5、位运算符" tabindex="-1"><a class="header-anchor" href="#_1-5、位运算符" aria-hidden="true">#</a> 1.5、位运算符</h2><blockquote><p>1、位运算是直接对整数的二进制进行的运算</p></blockquote><blockquote><p>2、<strong>注意：无&lt;&lt;&lt;</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
运算符之五：位运算符(了解)

结论：
1.位运算符操作的都是整型的数据变量
2.&lt;&lt; : 在一定范围内，每向左移一位，相当于 * 2
  &gt;&gt; : 在一定范围内，每向右移一位，相当于 / 2

面试题：最高效的计算2 * 8 ？	2 &lt;&lt; 3 或 8 &lt;&lt; 1
*/</span>
<span class="token keyword">class</span> <span class="token class-name">BitTest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">;</span>
<span class="token comment">//		i = -21;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i &lt;&lt; 2 :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i &lt;&lt; 3 :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i &lt;&lt; 20 :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;&lt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i &lt;&lt; 27 :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;&lt;</span> <span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m &amp; n :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>m <span class="token operator">&amp;</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m &amp; n :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>m <span class="token operator">|</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;m &amp; n :&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>m <span class="token operator">^</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//练习：交换两个变量的值</span>
		<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

		<span class="token comment">//方式一：</span>
	<span class="token comment">//	int tent = num1;</span>
	<span class="token comment">//	num1 = num2;</span>
	<span class="token comment">//	num2 = tent;</span>

		<span class="token comment">//方式二：</span>
		<span class="token comment">//好处：不用定义临时变量</span>
		<span class="token comment">//弊端：①相加可能超出存储范围 ② 有局限性：只适用于数值类型</span>
<span class="token comment">//		num1 = num1 + num2;</span>
<span class="token comment">//		num2 = num1 - num2;</span>
<span class="token comment">//		num1 = num1 - num2;</span>

		<span class="token comment">//方式三：使用位运算</span>
		num1 <span class="token operator">=</span> num1 <span class="token operator">^</span> num2<span class="token punctuation">;</span>
		num2 <span class="token operator">=</span> num1 <span class="token operator">^</span> num2<span class="token punctuation">;</span>
		num1 <span class="token operator">=</span> num1 <span class="token operator">^</span> num2<span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num1 = &quot;</span> <span class="token operator">+</span> num1 <span class="token operator">+</span> <span class="token string">&quot;,num2 = &quot;</span> <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BitTest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//练习：交换两个变量的值</span>
		<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

		<span class="token comment">//方式一：</span>
	<span class="token comment">//	int tent = num1;</span>
	<span class="token comment">//	num1 = num2;</span>
	<span class="token comment">//	num2 = tent;</span>

		<span class="token comment">//方式二：</span>
		<span class="token comment">//好处：不用定义临时变量</span>
		<span class="token comment">//弊端：①相加可能超出存储范围 ② 有局限性：只适用于数值类型</span>
<span class="token comment">//		num1 = num1 + num2;</span>
<span class="token comment">//		num2 = num1 - num2;</span>
<span class="token comment">//		num1 = num1 - num2;</span>

		<span class="token comment">//方式三：使用位运算</span>
		num1 <span class="token operator">=</span> num1 <span class="token operator">^</span> num2<span class="token punctuation">;</span>
		num2 <span class="token operator">=</span> num1 <span class="token operator">^</span> num2<span class="token punctuation">;</span>
		num1 <span class="token operator">=</span> num1 <span class="token operator">^</span> num2<span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num1 = &quot;</span> <span class="token operator">+</span> num1 <span class="token operator">+</span> <span class="token string">&quot;,num2 = &quot;</span> <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-6、三元运算符" tabindex="-1"><a class="header-anchor" href="#_1-6、三元运算符" aria-hidden="true">#</a> 1.6、三元运算符</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
运算符之六：三元运算符
1.结构：(条件表达式)？表达式1 : 表达式2
2. 说明
① 条件表达式的结果为boolean类型
② 根据条件表达式真或假，决定执行表达式1，还是表达式2.
  如果表达式为true,则执行表达式1
  如果表达式为false,则执行表达式2
③ 表达式1 和表达式2要求是一致的。
④ 三元运算符是可以嵌套的
3. 凡是可以使用三元运算的地方，都是可以改写if-else。
   反之，则不一定成立！！！
*/</span>
<span class="token keyword">class</span> <span class="token class-name">SanTest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//获取两个整数的最大值</span>
		<span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">&gt;</span> n<span class="token punctuation">)</span><span class="token operator">?</span> m <span class="token operator">:</span> n<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">double</span> num <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
		<span class="token comment">//(m &gt; n) ? 2 : &quot;n大&quot;;	//编译错误</span>

		<span class="token comment">//****************************************</span>
		<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;m大&quot;</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>m <span class="token operator">==</span> n<span class="token punctuation">)</span><span class="token operator">?</span> <span class="token string">&quot;m和n相等&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;n大&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//****************************************</span>
		<span class="token comment">//获取三个数中的最大值</span>
		<span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n2 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n3 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">43</span><span class="token punctuation">;</span>

		<span class="token keyword">int</span> max1 <span class="token operator">=</span> <span class="token punctuation">(</span>n1 <span class="token operator">&gt;</span> n2<span class="token punctuation">)</span> <span class="token operator">?</span> n1 <span class="token operator">:</span> n2<span class="token punctuation">;</span>
		<span class="token keyword">int</span> max2 <span class="token operator">=</span> <span class="token punctuation">(</span>max1 <span class="token operator">&gt;</span> n3<span class="token punctuation">)</span> <span class="token operator">?</span> max1 <span class="token operator">:</span> n3<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;三个数中的最大值是：&quot;</span> <span class="token operator">+</span> max2<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//此方法：pass</span>
		<span class="token keyword">int</span> max3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n1 <span class="token operator">&gt;</span> n2<span class="token punctuation">)</span><span class="token operator">?</span> n1 <span class="token operator">:</span> n2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> n3<span class="token punctuation">)</span> <span class="token operator">?</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n1 <span class="token operator">&gt;</span> n2<span class="token punctuation">)</span> <span class="token operator">?</span> n1 <span class="token operator">:</span> n2<span class="token punctuation">)</span> <span class="token operator">:</span> n3<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;三个数中的最大值是：&quot;</span> <span class="token operator">+</span> max3<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//改写成if-else</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>m <span class="token operator">&gt;</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_02、运算符的优先级" tabindex="-1"><a class="header-anchor" href="#_02、运算符的优先级" aria-hidden="true">#</a> 02、运算符的优先级</h1><ul><li>运算符有不同的优先级，所谓优先级就是表达式运算中的运算顺序。如右表，上一行运算符总优先于下一行。</li><li>只有单目运算符、三元运算符、赋值运算符是从右向左运算的。</li></ul>`,30),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","03运算符.html.vue"]]);export{r as default};
