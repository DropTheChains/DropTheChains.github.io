import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-6cc2c792.js";const p={},e=t(`<h1 id="_08面向对象-下" tabindex="-1"><a class="header-anchor" href="#_08面向对象-下" aria-hidden="true">#</a> 08面向对象(下)</h1><h1 id="_01、关键字-static" tabindex="-1"><a class="header-anchor" href="#_01、关键字-static" aria-hidden="true">#</a> 01、关键字：static</h1><h2 id="_1-1、static-的使用" tabindex="-1"><a class="header-anchor" href="#_1-1、static-的使用" aria-hidden="true">#</a> 1.1、static 的使用</h2><p>当我们编写一个类时，其实就是在描述其对象的属性和行为，而并没有产生实质上的对象，只有通过 new 关键字才会产生出对象，这时系统才会分配内存空间给对象，其方法才可以供外部调用。</p><p>我们有时候希望无论是否产生了对象或无论产生了多少对象的情况下，<strong>某些特定的数据在内存空间里只有一份。</strong></p><p>例如所有的中国人都有个国家名称，每一个中国人都共享这个国家名称，不必在每一个中国人的实例对象中都单独分配一个用于代表国家名称的变量。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * static 关键字的使用
 * 
 * 1.static:静态的。
 * 2.static 可以用来修饰:属性、方法、代码块、内部类。
 * 
 * 3.使用 static 修饰属性:静态变量(或类变量)。
 * 		3.1  属性:是否使用 static 修饰，又分为:静态属性 VS 非静态属性(实例变量)
 * 		   实例变量:我们创建了类的多个对象，每个对象都独立的拥有了一套类中的非静态属性。
 * 				当修改其中一个非静态属性时，不会导致其他对象中同样的属性值的修饰。
 * 		   静态变量:我们创建了类的多个对象，多个对象共享同一个静态变量。当通过静态变量去修改某一个变量时，
 * 				会导致其他对象调用此静态变量时，是修改过的。
 * 		3.2 static 修饰属性的其他说明:
 * 			① 静态变量随着类的加载而加载。可以通过&quot;类.静态变量&quot;的方式进行调用。
 * 			② 静态变量的加载要早于对象的创建。
 * 			③ 由于类只会加载一次，则静态变量在内存中也只会存在一次。存在方法区的静态域中。
 * 
 * 			④ 		类变量		实例变量
 * 			类		yes			no
 * 			对象		yes			yes
 * 
 * 		3.3 静态属性举例:System.out.Math.PI;
 *  
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">Chinese</span><span class="token punctuation">.</span>nation <span class="token operator">=</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Chinese</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chinese</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		c1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;姚明&quot;</span><span class="token punctuation">;</span>
		c1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
		c1<span class="token punctuation">.</span>nation <span class="token operator">=</span> <span class="token string">&quot;CHN&quot;</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Chinese</span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chinese</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		c2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;马龙&quot;</span><span class="token punctuation">;</span>
		c2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
		c2<span class="token punctuation">.</span>nation <span class="token operator">=</span> <span class="token string">&quot;CHINA&quot;</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span>nation<span class="token punctuation">)</span><span class="token punctuation">;</span> 
		
		<span class="token comment">//编译不通过</span>
<span class="token comment">//		Chinese.name = &quot;张继科&quot;;</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//中国人</span>
<span class="token keyword">class</span> <span class="token class-name">Chinese</span><span class="token punctuation">{</span>
	
	<span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token class-name">String</span> nation<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2、类变量-vs-实例变量内存解析" tabindex="-1"><a class="header-anchor" href="#_1-2、类变量-vs-实例变量内存解析" aria-hidden="true">#</a> 1.2、类变量 vs 实例变量内存解析</h2><h2 id="_1-3、static-修饰方法" tabindex="-1"><a class="header-anchor" href="#_1-3、static-修饰方法" aria-hidden="true">#</a> 1.3、static 修饰方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/* 
 * 4.使用 static 修饰方法:静态方法
 * 		① 随着类的加载而加载，可以通过&quot;类.静态方法&quot;的方式调用
 * 		② 			静态方法		非静态方法
 * 			类		yes			no
 * 			对象		yes			yes
 * 		③ 静态方法中，只能调用静态的方法或属性
 * 		  非静态的方法中，可以调用所有的方法或属性
 * 
 * 5.static 注意点:
 * 	 5.1  在静态的方法内，不能使用 this 关键字、super 关键字
 *   5.2 关于静态属性和静态方法的使用，大家从生命周期的角度去理解。
 *   
 * 6.开发中，如何确定一个属性是否需要声明 static 的？
 * 	 》 属性是可以被多个对象所共享的，不会随着对象的不同而不同的。
 * 	 》 类中的常量也常常声明为 static
 *   
 *   开发中，如何确定一个方法是否要声明为 static 的？
 *   》 操作静态属性的方法，通常设置为 static 的
 *   》 工具类中的方法，习惯上声明为 static 的。比如：Math、Arrays、Collections
 * 	 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">Chinese</span><span class="token punctuation">.</span>nation <span class="token operator">=</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Chinese</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chinese</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">//编译不通过</span>
<span class="token comment">//		Chinese.name = &quot;张继科&quot;;</span>
		
		c1<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Chinese</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//编译不通过</span>
<span class="token comment">//		chinese.eat();</span>
<span class="token comment">//		Chinese.info();</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//中国人</span>
<span class="token keyword">class</span> <span class="token class-name">Chinese</span><span class="token punctuation">{</span>
	
	<span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token class-name">String</span> nation<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中国人吃中餐&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//调用非静态结构</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name : &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//调用静态结构</span>
		<span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;nation : &quot;</span> <span class="token operator">+</span> <span class="token class-name">Chinese</span><span class="token punctuation">.</span>nation<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是一个中国人！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		eat();</span>
<span class="token comment">//		name = &quot;Tom&quot;;</span>
		<span class="token comment">//可以调用静态的结构</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Chinese</span><span class="token punctuation">.</span>nation<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name : &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;,age : &quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4、自定义-arrayutil-的优化" tabindex="-1"><a class="header-anchor" href="#_1-4、自定义-arrayutil-的优化" aria-hidden="true">#</a> 1.4、自定义 ArrayUtil 的优化</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 自定义数组工具类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayUtil</span> <span class="token punctuation">{</span>

	<span class="token comment">// 求数组的最大值</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>maxValue <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				maxValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> maxValue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 求数组的最小值</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getMin</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> minValue <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>minValue <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				minValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> minValue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 求数组总和</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 求数组平均值</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getAvg</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> avgValue <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">/</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">return</span> avgValue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//如下两个同名方法构成重载</span>
	<span class="token comment">// 反转数组</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>

	<span class="token comment">// 复制数组</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 数组排序</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//					int temp = arr[j];</span>
<span class="token comment">//					arr[j] = arr[j + 1];</span>
<span class="token comment">//					arr[j + 1] = temp;</span>
					<span class="token comment">//错误的：</span>
<span class="token comment">//					swap(arr[j],arr[j+1]);</span>
					
					<span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>j <span class="token punctuation">,</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//错误的:交换数组中两个指定位置元素的值</span>
<span class="token comment">//	public void swap(int i,int j){</span>
<span class="token comment">//		int temp = i;</span>
<span class="token comment">//		i = j;</span>
<span class="token comment">//		j = temp;</span>
<span class="token comment">//	}</span>
	
	<span class="token comment">//正确的：</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
		arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 遍历数组</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 查找指定元素</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> dest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//线性查找</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>dest<span class="token operator">==</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> i<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>测试类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayUtilTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//		ArrayUtil util = new ArrayUtil();</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">26</span><span class="token punctuation">,</span><span class="token number">74</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">96</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">98</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token class-name">ArrayUtil</span><span class="token punctuation">.</span><span class="token function">getMax</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最大值为:&quot;</span> <span class="token operator">+</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;排序前:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ArrayUtil</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">ArrayUtil</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;排序后:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ArrayUtil</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
<span class="token comment">//		System.out.println(&quot;查找:&quot;);</span>
<span class="token comment">//		int index = util.getIndex(arr, 5);</span>
<span class="token comment">//		if(index &gt; 0){</span>
<span class="token comment">//			System.out.println(&quot;找到了，索引地址:&quot; + index);</span>
<span class="token comment">//		}else{</span>
<span class="token comment">//			System.out.println(&quot;没找到&quot;);</span>
<span class="token comment">//		}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5、static-的应用举例" tabindex="-1"><a class="header-anchor" href="#_1-5、static-的应用举例" aria-hidden="true">#</a> 1.5、static 的应用举例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//static 关键字的应用</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CircleTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">Circle</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Circle</span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Circle</span> c3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c1 的 ID:&quot;</span> <span class="token operator">+</span> c1<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c2 的 ID:&quot;</span> <span class="token operator">+</span> c2<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c3 的 ID:&quot;</span> <span class="token operator">+</span> c3<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;创建圆的个数: &quot;</span> <span class="token operator">+</span> <span class="token class-name">Circle</span><span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Circle</span><span class="token punctuation">{</span>
	
	<span class="token keyword">private</span> <span class="token keyword">double</span> radius<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>	<span class="token comment">//需要自动赋值</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		id <span class="token operator">=</span> init<span class="token operator">++</span><span class="token punctuation">;</span>
		total<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">double</span> radius<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//或</span>
<span class="token comment">//		id = init++;</span>
<span class="token comment">//		total++;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> total<span class="token punctuation">;</span><span class="token comment">//记录创建圆的个数</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> init <span class="token operator">=</span> <span class="token number">1001</span><span class="token punctuation">;</span><span class="token comment">//static 声明的属性被所有对象所共享</span>
	
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRadius</span><span class="token punctuation">(</span><span class="token keyword">double</span> radius<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> id<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> total<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-6、static-的练习" tabindex="-1"><a class="header-anchor" href="#_1-6、static-的练习" aria-hidden="true">#</a> 1.6、static 的练习</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 编写一个类实现银行账户的概念，包含的属性有“帐号”、“密码”、“存款余额”、
 * “利率”、“最小余额”，定义封装这些属性的方法。
 * 账号要自动生成。编写主类，使用银行账户类，输入、输出 3 个储户的上述信息。
 * 考虑：哪些属性可以设计成 static 属性。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>	<span class="token comment">//账号</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> pwd <span class="token operator">=</span> <span class="token string">&quot;000000&quot;</span><span class="token punctuation">;</span>	<span class="token comment">//密码</span>
	<span class="token keyword">private</span> <span class="token keyword">double</span> balance<span class="token punctuation">;</span> <span class="token comment">//存款余额</span>
	
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">double</span> interestRate<span class="token punctuation">;</span> <span class="token comment">//利率</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">double</span> minMoney <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>  <span class="token comment">//最小余额</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> init <span class="token operator">=</span> <span class="token number">1001</span><span class="token punctuation">;</span>	<span class="token comment">//用于自动生成 id</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>	<span class="token comment">//账号自动生成</span>
		id <span class="token operator">=</span> init<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token class-name">String</span> pwd<span class="token punctuation">,</span><span class="token keyword">double</span> balance<span class="token punctuation">)</span><span class="token punctuation">{</span>
		id <span class="token operator">=</span> init<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>pwd <span class="token operator">=</span> pwd<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>balance <span class="token operator">=</span> balance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> pwd<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPwd</span><span class="token punctuation">(</span><span class="token class-name">String</span> pwd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>pwd <span class="token operator">=</span> pwd<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">getInterestRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> interestRate<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setInterestRate</span><span class="token punctuation">(</span><span class="token keyword">double</span> interestRate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Account</span><span class="token punctuation">.</span>interestRate <span class="token operator">=</span> interestRate<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">getMinMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> minMoney<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setMinMoney</span><span class="token punctuation">(</span><span class="token keyword">double</span> minMoney<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Account</span><span class="token punctuation">.</span>minMoney <span class="token operator">=</span> minMoney<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> id<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> balance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;Account [id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;, pwd=&quot;</span> <span class="token operator">+</span> pwd <span class="token operator">+</span> <span class="token string">&quot;, balance=&quot;</span> <span class="token operator">+</span> balance <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>测试类</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">Account</span> acct1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Account</span> acct2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Account</span><span class="token punctuation">(</span><span class="token string">&quot;qwerty&quot;</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Account</span><span class="token punctuation">.</span><span class="token function">setInterestRate</span><span class="token punctuation">(</span><span class="token number">0.012</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token class-name">Account</span><span class="token punctuation">.</span><span class="token function">setMinMoney</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>acct1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>acct2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>acct1<span class="token punctuation">.</span><span class="token function">getInterestRate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>acct1<span class="token punctuation">.</span><span class="token function">getMinMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-7、单例-singleton-设计模式" tabindex="-1"><a class="header-anchor" href="#_1-7、单例-singleton-设计模式" aria-hidden="true">#</a> 1.7、单例(Singleton)设计模式</h2><p>设计模式是**在大量的实践中总结和理论化之后优选的代码结构、编程风格、以及解决问题的思考方式。**设计模免去我们自己再思考和摸索。就像是经典的棋谱，不同的棋局，我们用不同的棋谱。”套路”</p><p>所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对<strong>某个类只能存在一个对象实例</strong>。并且该类只提供一个取得其对象实例的方法。如果我们要让类在一个虚拟机中只能产生一个对象，我们首先必须将类的<strong>构造器的访问权限设置为 private</strong>，这样，就不能用 new 操作符在类的外部产生类的对象了，但在类内部仍可以产生该类的对象。因为在类的外部开始还无法得到类的对象，<strong>只能调用该类的某个静态方法以返回类内部创建的对象，静态方法只能访问类中的静态成员变量，所以，指向类内部产生的该类对象的变量也必须定义成静态的。</strong></p><blockquote><p>1、<strong>单例模式的饿汉式</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 单例设计模式:
 * 1.所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类只能存在一个对象实例
 *  
 * 2.如何实现？
 *   饿汉式	VS	懒汉式
 * 
 * 3.区分饿汉式和懒汉式。
 * 	   饿汉式：坏处:对象加载时间过长。
 * 	 	       好处:饿汉式是线程安全的。
 * 
 *   懒汉式：好处:延迟对象的创建。
 * 		       坏处:目前的写法，会线程不安全。---》到多线程内容时，再修改
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//		Bank bank1 = new Bank(); </span>
<span class="token comment">//		Bank bank2 = new Bank(); </span>
		
		<span class="token class-name">Bank</span> bank1 <span class="token operator">=</span> <span class="token class-name">Bank</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Bank</span> bank2 <span class="token operator">=</span> <span class="token class-name">Bank</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bank1 <span class="token operator">==</span> bank2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//单例的饿汉式</span>
<span class="token keyword">class</span> <span class="token class-name">Bank</span><span class="token punctuation">{</span>
	
	<span class="token comment">//1.私有化类的构造器</span>
	<span class="token keyword">private</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
	
	<span class="token comment">//2.内部创见类的对象</span>
	<span class="token comment">//4.要求此对象也必须声明为静态的</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//3.提供公共的静态的方法，返回类的对象。</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2、<strong>单例模式的懒汉式</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 单例的懒汉式实现
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonTest2</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">Order</span> order1 <span class="token operator">=</span> <span class="token class-name">Order</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Order</span> order2 <span class="token operator">=</span> <span class="token class-name">Order</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>order1 <span class="token operator">==</span> order2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Order</span><span class="token punctuation">{</span>
	<span class="token comment">//1.私有化类的构造器</span>
	<span class="token keyword">private</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
	
	<span class="token comment">//2.声明当前类对象，没有初始化。</span>
	<span class="token comment">//此对象也必须声明为 static 的</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	
	<span class="token comment">//3.声明 public、static 的返回当前类对象的方法</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3、<strong>单例模式的优点</strong></p></blockquote><p>由于单例模式只生成一个实例，<strong>减少了系统性能开销</strong>，当一个对象的产生需要比较多的资源时，如读取配置、产生其他依赖对象时，则可以通过在应用启动时直接产生一个单例对象，然后永久驻留内存的方式来解决。</p><blockquote><p>4、单例(Singleton)设计模式-应用场景</p></blockquote><ul><li><strong>网站的计数器</strong>，一般也是单例模式实现，否则难以同步。</li><li><strong>应用程序的日志应用</strong>，一般都使用单例模式实现，这一般是由于共享的日志文件一直处于打开状态，因为只能有一个实例去操作，否则内容不好追加。</li><li><strong>数据库连接池</strong>的设计一般也是采用单例模式，因为数据库连接是一种数据库资源。</li><li>项目中，<strong>读取配置文件的类</strong>，一般也只有一个对象。没有必要每次使用配置文件数据，都生成一个对象去读取。</li><li><strong>Application</strong>也是单例的典型应用</li><li>Windows 的 **Task Manager (任务管理器)**就是很典型的单例模式</li><li>Windows 的 **Recycle Bin(回收站)**也是典型的单例应用。在整个系统运行过程中，回收站一直维护着仅有的一个实例。</li></ul><h1 id="_02、理解-main-方法的语法-了解" tabindex="-1"><a class="header-anchor" href="#_02、理解-main-方法的语法-了解" aria-hidden="true">#</a> 02、理解 main 方法的语法（了解)</h1><p>由于 Java 虚拟机需要调用类的 main()方法，所以该方法的访问权限必须是 public，又因为 Java 虚拟机在执行 main()方法时不必创建对象，所以该方法必须是 static 的，该方法接收一个 String 类型的数组参数，该数组中保存执行 Java 命令时传递给所运行的类的参数。</p><p>又因为 main() 方法是静态的，我们不能直接访问该类中的非静态成员，必须创建该类的一个实例对象后，才能通过这个对象去访问类中的非静态成员，这种情况，我们在之前的例子中多次碰到。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * main()方法的使用说明
 * 1.main()方法作为程序的入口;
 * 2.main()方法也是一个普通的静态方法
 * 3.main()方法也可以作为我们与控制台交互的方式。(之前，使用 Scanner)
 * 
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>	<span class="token comment">//入口</span>
		
		<span class="token class-name">Main</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">MainTest</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MainTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		test<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		args <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			args<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;args_&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>命令行参数用法举例</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainDemo</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;/*/*/*/&quot;</span><span class="token operator">+</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>//运行程序 MainDemo.java</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>javac <span class="token class-name">MainDemo</span><span class="token punctuation">.</span>java
java <span class="token class-name">MainDemo</span> “<span class="token class-name">Tom</span>” “<span class="token class-name">Jerry</span>” “<span class="token class-name">Shkstart</span>”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_03、类的成员之四-代码块" tabindex="-1"><a class="header-anchor" href="#_03、类的成员之四-代码块" aria-hidden="true">#</a> 03、类的成员之四：代码块</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 类的成员之四:代码块（或初始化块）
 * 
 * 1.代码块的作用：用来初始化类、对象的
 * 2.代码块如果有修饰的话，只能使用 static
 * 3.分类:静态代码块 vs 非静态代码块
 * 
 * 4.静态代码块
 * 	》内部可以有输出语句
 *  》随着类的加载而执行,而且只执行一次
 *  》作用:初始化类的信息
 *  》如果一个类中，定义了多个静态代码块，则按照声明的先后顺序执行
 *  》静态代码块的执行，优先于非静态代码块的执行
 *  》静态代码块内只能调用静态的属性、静态的方法，不能调用非静态的结构
 * 
 * 5.非静态代码块
 *  &gt;内部可以有输出语句
 *  &gt;随着对象的创建而执行
 *  &gt;每创建一个对象，就执行一次非静态代码块。
 *  &gt;作用:可以在创建对象时，对对象的属性等进行初始化。
 *  &gt;如果一个类中，定义了多个非静态代码块，则按照声明的先后顺序执行
 *  &gt;非静态代码块内可以调用静态的属性、静态的方法，或非静态的属性、非静态的方法。
 *  
 * 对属性可以赋值的位置:
 *  ①默认初始化
 *  ②显式初始化
 *  ③构造器中初始化
 *  ④有了对象以后，可以通过&quot;对象.属性&quot;或&quot;对象.方法&quot;的方式，进行赋值。
 *  ⑤在代码块中赋值
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlockTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">String</span> desc <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>desc<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>desc<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Person</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	<span class="token comment">//属性</span>
	<span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token class-name">String</span> desc <span class="token operator">=</span> <span class="token string">&quot;我是一个青年&quot;</span><span class="token punctuation">;</span>
	
	<span class="token comment">//构造器</span>
	<span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
	
	<span class="token comment">//static 的代码块</span>
	<span class="token keyword">static</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello,static block-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//调用静态结构</span>
		desc <span class="token operator">=</span> <span class="token string">&quot;我是一个爱小说的人&quot;</span><span class="token punctuation">;</span>
		<span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//不能调用非静态结构</span>
<span class="token comment">//		eat();</span>
<span class="token comment">//		name = &quot;Tom&quot;;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">static</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello,static block-2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//非 static 的代码块</span>
	<span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello,block-2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello,block-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//调用非静态结构</span>
		age <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//调用静态结构</span>
		desc <span class="token operator">=</span> <span class="token string">&quot;我是一个爱小说的人 1&quot;</span><span class="token punctuation">;</span>
		<span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	
	
	<span class="token comment">//方法</span>
	<span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;Person [name=&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是一个快乐的人。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>静态初始化块举例 1</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//总结:由父类到子类，静态先行</span>
<span class="token keyword">class</span> <span class="token class-name">Root</span><span class="token punctuation">{</span>
	<span class="token keyword">static</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Root 的静态初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Root 的普通初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">Root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Root 的无参数的构造器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Mid</span> <span class="token keyword">extends</span> <span class="token class-name">Root</span><span class="token punctuation">{</span>
	<span class="token keyword">static</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Mid 的静态初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Mid 的普通初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">Mid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Mid 的无参数的构造器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">Mid</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//通过 this 调用同一类中重载的构造器</span>
		<span class="token keyword">this</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Mid 的带参数构造器，其参数值：&quot;</span>
			<span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Leaf</span> <span class="token keyword">extends</span> <span class="token class-name">Mid</span><span class="token punctuation">{</span>
	<span class="token keyword">static</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Leaf 的静态初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Leaf 的普通初始化块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	
	<span class="token keyword">public</span> <span class="token class-name">Leaf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//通过 super 调用父类中有一个字符串参数的构造器</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;尚硅谷&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Leaf 的构造器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LeafTest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token comment">//new Leaf();</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>静态初始化块举例 2</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;11111111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;22222222222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;33333333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;44444444444&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;55555555555&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;66666666666&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 由父及子 静态先行</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;77777777777&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;************************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;************************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;************************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结：程序中成员变量赋值的执行顺序</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 对属性可以赋值的位置:
 *  ①默认初始化
 *  ②显式初始化 / ⑤在代码块中赋值
 *  ③构造器中初始化
 *  ④有了对象以后，可以通过&quot;对象.属性&quot;或&quot;对象.方法&quot;的方式，进行赋值。
 *  
 *  执行的先后顺序:① - ② / ⑤ - ③ - ④
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span>orderId<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Order</span><span class="token punctuation">{</span>
	
	<span class="token keyword">int</span> orderId <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token punctuation">{</span>
		orderId <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_04、关键字-final" tabindex="-1"><a class="header-anchor" href="#_04、关键字-final" aria-hidden="true">#</a> 04、关键字：final</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * final:最终的
 * 
 * 1.final可以用来修饰的结构:类、方法、变量
 * 
 * 2.final用来修饰一个类:此类不能被其他类所继承。
 * 		  比如:String类、System类、StringBuffer类
 * 3.final修饰一个方法:final标记的方法不能被子类重写。
 * 		  比如：Object类中的getClass()。 
 * 4.final用来修饰变量:此时的&quot;变量&quot;(成员变量或局部变量)就是一个常量。名称大写，且只能被赋值一次。
 * 	 4.1 final修饰属性，可以考虑赋值的位置有:显式初始化、代码块中初始化、构造器中初始化
 *   4.2 final修饰局部变量:
 *   	 尤其是使用final修饰形参时，表明此形参是一个常量。当我们调用此方法时，给常量形参赋一个实参。
 *      一旦赋值以后，就只能在方法体内使用此形参，但不能进行重新赋值。
 *      
 * static final 用来修饰:全局常量
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FinalTest</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">WIDTH</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">LEFT</span><span class="token punctuation">;</span>
	<span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">RIGHT</span><span class="token punctuation">;</span>
<span class="token comment">//	final int DOWN;</span>
	
	<span class="token punctuation">{</span>
		<span class="token constant">LEFT</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">FinalTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token constant">RIGHT</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">FinalTest</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token constant">RIGHT</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token comment">//	public void setDown(int down){</span>
<span class="token comment">//		this.DOWN = down;</span>
<span class="token comment">//	}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dowidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//		width = 20;	//width cannot be resolved to a variable</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">NUM</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>	<span class="token comment">//常量</span>
<span class="token comment">//		num += 20;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		
		num <span class="token operator">=</span> num <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
		
		<span class="token class-name">FinalTest</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FinalTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		test.setDown(5);</span>
		
		test<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">FianlA</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>

<span class="token comment">//class B extends FinalA{     //错误，不能被继承。</span>
<span class="token comment">//	</span>
<span class="token comment">//}</span>

<span class="token comment">//class C extends String{</span>
<span class="token comment">//	</span>
<span class="token comment">//}</span>

<span class="token keyword">class</span> <span class="token class-name">AA</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//class BB extends AA{	// 错误，不能被重写。</span>
<span class="token comment">//	public void show(){</span>
<span class="token comment">//		</span>
<span class="token comment">//	}</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>1、<strong>面试题1</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Something</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">addOne</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">++</span>x<span class="token punctuation">;</span> <span class="token comment">// return x + 1;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2、<strong>面试题2</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Something</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Other</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Other</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">new</span> <span class="token class-name">Something</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addOne</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addOne</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Other</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// o = new Other();</span>
		o<span class="token punctuation">.</span>i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Other</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_05、抽象类与抽象方法" tabindex="-1"><a class="header-anchor" href="#_05、抽象类与抽象方法" aria-hidden="true">#</a> 05、抽象类与抽象方法</h1><p>随着继承层次中一个个新子类的定义，类变得越来越具体，而父类则更一般，更通用。类的设计应该保证父类和子类能够共享特征。有时将一个父类设计得非常抽象，以至于它没有具体的实例，这样的类叫做<strong>抽象类</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * abstract 关键字的使用
 * 
 * 1.abstract:抽象的
 * 2.abstract 可以用来修饰的结构:类、方法
 * 3.abstract 修饰类:抽象类
 * 	》 此类不能实例化
 *  》 抽象类中一定有构造器，便于子类实例化时调用(涉及:子类对象实例化全过程)
 *  》 开发中，都会提供抽象类的子类，让子类对象实例化，实现相关的操作
 * 
 * 4.abstract 修饰方法:抽象方法
 *  &gt; 抽象方法，只有方法的声明，没有方法体。
 *  &gt; 包含抽象方法的类，一定是一个抽象类。反之，抽象类中可以没有抽象方法
 *  &gt; 若子类重写了父类中所有的抽象方法，此子类，
 *
 * abstract 使用上的注意点:
 * 1.abstract 不能用来修饰变量、代码块、构造器；
 * 
 * 2.abstract 不能用来修饰私有方法、静态方法、final 的方法、final 的类。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbstractTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//一旦 Person 类抽象了，就不可实例化</span>
<span class="token comment">//		Person p1 = new Person();</span>
<span class="token comment">//		p1.eat();</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Creature</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">breath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">Creature</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//不是抽象方法</span>
<span class="token comment">//	public void eat(){</span>
<span class="token comment">//		System.out.println(&quot;人吃饭&quot;);</span>
<span class="token comment">//	}</span>
	
	<span class="token comment">//抽象方法</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;人走路&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学生应该多吃有营养的。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">breath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学生应该呼吸新鲜的无雾霾空气&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-1、抽象类应用" tabindex="-1"><a class="header-anchor" href="#_5-1、抽象类应用" aria-hidden="true">#</a> 5.1、抽象类应用</h2><blockquote><p>抽象类是用来模型化那些父类无法确定全部实现，而是由其子类提供具体实现的对象的类。</p></blockquote><blockquote><p>问题：卡车(Truck)和驳船(RiverBarge)的燃料效率和行驶距离的计算方法完全不同。Vehicle 类不能提供计算方法，但子类可以。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/* Java 允许类设计者指定：超类声明一个方法但不提供实现，该方法的实现由子类提  供。这样的方法称为抽象方法。有一个或更多抽象方法的类称为抽象类。
 * Vehicle 是一个抽象类，有两个抽象方法。
 * 注意：抽象类不能实例化 new Vihicle()是非法的
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Vehicle</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">double</span> <span class="token function">calcFuelEfficiency</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//计算燃料效率的抽象方法</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">double</span> <span class="token function">calcTripDistance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//计算行驶距离的抽象方法</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Truck</span> <span class="token keyword">extends</span> <span class="token class-name">Vehicle</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">calcFuelEfficiency</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
		<span class="token comment">//写出计算卡车的燃料效率的具体方法</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">calcTripDistance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
		<span class="token comment">//写出计算卡车行驶距离的具体方法</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RiverBarge</span> <span class="token keyword">extends</span> <span class="token class-name">Vehicle</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">calcFuelEfficiency</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
		<span class="token comment">//写出计算驳船的燃料效率的具体方法</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">calcTripDistance</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>  <span class="token punctuation">{</span>  
		<span class="token comment">//写出计算驳船行驶距离的具体方法</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2、练习" tabindex="-1"><a class="header-anchor" href="#_5-2、练习" aria-hidden="true">#</a> 5.2、练习</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 编写一个 Employee 类，声明为抽象类，
 * 包含如下三个属性：name，id，salary。
 * 提供必要的构造器和抽象方法：work()。
 * 对于 Manager 类来说，他既是员工，还具有奖金(bonus)的属性。
 * 请使用继承的思想，设计 CommonEmployee 类和 Manager 类，
 * 要求类中提供必要的方法进行属性访问。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">double</span> salary<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token keyword">double</span> salary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>salary <span class="token operator">=</span> salary<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Manager 类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 对于 Manager 类来说，他既是员工，还具有奖金(bonus)的属性。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Manager</span> <span class="token keyword">extends</span> <span class="token class-name">Employee</span><span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token keyword">double</span> bonus<span class="token punctuation">;</span>	<span class="token comment">//奖金</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Manager</span><span class="token punctuation">(</span><span class="token keyword">double</span> bonus<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>bonus <span class="token operator">=</span> bonus<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Manager</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token keyword">double</span> salary<span class="token punctuation">,</span> <span class="token keyword">double</span> bonus<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> id<span class="token punctuation">,</span> salary<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>bonus <span class="token operator">=</span> bonus<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;管理员工，提高公司运行效率。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>CommonEmployee 类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonEmployee</span> <span class="token keyword">extends</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;员工在一线车间生产产品。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>测试类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 请使用继承的思想，设计 CommonEmployee 类和 Manager 类，
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmployeeTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">Employee</span> manager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Manager</span><span class="token punctuation">(</span><span class="token string">&quot;库克&quot;</span><span class="token punctuation">,</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">,</span><span class="token number">50000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		manager<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">CommonEmployee</span> commonEmployee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommonEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		commonEmployee<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-3、创建抽象类的匿名子类对象" tabindex="-1"><a class="header-anchor" href="#_5-3、创建抽象类的匿名子类对象" aria-hidden="true">#</a> 5.3、创建抽象类的匿名子类对象</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Num</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Creature</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">breath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">Creature</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//不是抽象方法</span>
<span class="token comment">//	public void eat(){</span>
<span class="token comment">//		System.out.println(&quot;人吃饭&quot;);</span>
<span class="token comment">//	}</span>
	
	<span class="token comment">//抽象方法</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;人走路&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学生应该多吃有营养的。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">breath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学生应该呼吸新鲜的无雾霾空气&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>PersonTest 类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 抽象类的匿名子类
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token function">method</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//匿名对象</span>
		
		<span class="token class-name">Worker</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token function">method1</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//非匿名的类非匿名的对象</span>
		
		<span class="token function">method1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//非匿名的类匿名的对象</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*********************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">//创建了一个匿名子类的对象:p</span>
		<span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃东西&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">breath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;呼吸空气&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token function">method1</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;**********************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token comment">//创建匿名子类的匿名对象</span>
		<span class="token function">method1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃零食&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">breath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;云南的空气&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token class-name">Person</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
		p<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		p<span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">Student</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Worker</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">breath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4、多态的应用-模板方法设计模式-templatemethod" tabindex="-1"><a class="header-anchor" href="#_5-4、多态的应用-模板方法设计模式-templatemethod" aria-hidden="true">#</a> 5.4、多态的应用：模板方法设计模式(TemplateMethod)</h2><p>抽象类体现的就是一种模板模式的设计，抽象类作为多个子类的通用模板，子类在抽象类的基础上进行扩展、改造，但子类总体上会保留抽象类的行为方式。</p><blockquote><p>解决的问题：</p></blockquote><p>当功能内部一部分实现是确定的，一部分实现是不确定的。这时可以把不确定的部分暴露出去，让子类去实现。<br> 换句话说，<strong>在软件开发中实现一个算法时，整体步骤很固定、通用，这些步骤已经在父类中写好了。但是某些部分易变，易变部分可以抽象出来，供不同子类实现。这就是一种模板模式。</strong></p><blockquote><p>1、例 1</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 抽象类的应用:模板方法的设计模式
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TemplateTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">SubTemlate</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubTemlate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		t<span class="token punctuation">.</span><span class="token function">sendTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Template</span><span class="token punctuation">{</span>
	
	<span class="token comment">//计算某段代码执行所需花费的时间</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
		<span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token function">code</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//不确定部分，易变的部分</span>
		
		<span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;花费的时间为:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">code</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubTemlate</span> <span class="token keyword">extends</span> <span class="token class-name">Template</span><span class="token punctuation">{</span>
	
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">code</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">1000</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">boolean</span> isFlag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>j <span class="token operator">&lt;=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					isFlag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>isFlag<span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2、例 2</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//抽象类的应用：模板方法的设计模式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TemplateMethodTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">BankTemplateMethod</span> btm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DrawMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		btm<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">BankTemplateMethod</span> btm2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ManageMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		btm2<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BankTemplateMethod</span> <span class="token punctuation">{</span>
	<span class="token comment">// 具体方法</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">takeNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;取号排队&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">transact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 办理具体的业务 //钩子方法</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;反馈评分&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 模板方法，把基本操作组合到一起，子类一般不能重写</span>
	<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">takeNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 像个钩子，具体执行时，挂哪个子类，就执行哪个子类的实现代码</span>

		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DrawMoney</span> <span class="token keyword">extends</span> <span class="token class-name">BankTemplateMethod</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">transact</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我要取款！！！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ManageMoney</span> <span class="token keyword">extends</span> <span class="token class-name">BankTemplateMethod</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">transact</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我要理财！我这里有 2000 万美元!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>模板方法设计模式是编程中经常用得到的模式。各个框架、类库中都有他的影子，比如常见的有：</p></blockquote><ul><li>数据库访问的封装</li><li>Junit 单元测试</li><li>JavaWeb 的 Servlet 中关于 doGet/doPost 方法调用</li><li>Hibernate 中模板程序</li><li>Spring 中 JDBCTemlate、HibernateTemplate 等</li></ul><h2 id="_5-5、抽象类的练习" tabindex="-1"><a class="header-anchor" href="#_5-5、抽象类的练习" aria-hidden="true">#</a> 5.5、抽象类的练习</h2><blockquote><p>1、Employee 类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 定义一个 Employee 类，
 * 该类包含：private 成员变量 name,number,birthday，
 * 其中 birthday 为 MyDate 类的对象；
 * abstract 方法 earnings()；
 * toString()方法输出对象的 name,number 和 birthday。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> number<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">MyDate</span> birthday<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> number<span class="token punctuation">,</span> <span class="token class-name">MyDate</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> number<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>birthday <span class="token operator">=</span> birthday<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> number<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> number<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">MyDate</span> <span class="token function">getBirthday</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> birthday<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token class-name">MyDate</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>birthday <span class="token operator">=</span> birthday<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">double</span> <span class="token function">earnings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;name=&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, number=&quot;</span> <span class="token operator">+</span> number <span class="token operator">+</span> <span class="token string">&quot;, birthday=&quot;</span> <span class="token operator">+</span> birthday<span class="token punctuation">.</span><span class="token function">toDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2、MyDate 类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * MyDate 类包含:private 成员变量 year,month,day；
 * toDateString()方法返回日期对应的字符串：xxxx 年 xx 月 xx 日
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyDate</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> year<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> month<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> day<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">MyDate</span><span class="token punctuation">(</span><span class="token keyword">int</span> year<span class="token punctuation">,</span> <span class="token keyword">int</span> month<span class="token punctuation">,</span> <span class="token keyword">int</span> day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>month <span class="token operator">=</span> month<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>day <span class="token operator">=</span> day<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> year<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setYear</span><span class="token punctuation">(</span><span class="token keyword">int</span> year<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> month<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMonth</span><span class="token punctuation">(</span><span class="token keyword">int</span> month<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>month <span class="token operator">=</span> month<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> day<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDay</span><span class="token punctuation">(</span><span class="token keyword">int</span> day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>day <span class="token operator">=</span> day<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> year <span class="token operator">+</span> <span class="token string">&quot;年&quot;</span> <span class="token operator">+</span> month <span class="token operator">+</span> <span class="token string">&quot;月&quot;</span> <span class="token operator">+</span> day <span class="token operator">+</span> <span class="token string">&quot;日&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3、SalariedEmployee 类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 定义 SalariedEmployee 类继承 Employee 类，实现按月计算工资的员工处理。
 * 该类包括：private 成员变量 monthlySalary；实现父类的抽象方法 earnings(),
 * 该方法返回 monthlySalary 值；
 * toString()方法输出员工类型信息及员工的 name，number,birthday。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SalariedEmployee</span> <span class="token keyword">extends</span> <span class="token class-name">Employee</span><span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">double</span> monthlySalary<span class="token punctuation">;</span>	<span class="token comment">//月工资</span>

	<span class="token keyword">public</span> <span class="token class-name">SalariedEmployee</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> number<span class="token punctuation">,</span><span class="token class-name">MyDate</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>number<span class="token punctuation">,</span>birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">SalariedEmployee</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> number<span class="token punctuation">,</span> <span class="token class-name">MyDate</span> birthday<span class="token punctuation">,</span> <span class="token keyword">double</span> monthlySalary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> number<span class="token punctuation">,</span> birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>monthlySalary <span class="token operator">=</span> monthlySalary<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">earnings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> monthlySalary<span class="token punctuation">;</span>		
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;SalariedEmployee [&quot;</span> <span class="token operator">+</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>4、HourlyEmployee 类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 参照 SalariedEmployee 类定义 HourlyEmployee 类，
 * 实现按小时计算工资的员工处理。该类包括：private 成员变量 wage 和 hour；
 * 实现父类的抽象方法 earnings(),该方法返回 wage*hour 值；
 * toString()方法输出员工类型信息及员工的 name，number,birthday。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HourlyEmployee</span> <span class="token keyword">extends</span> <span class="token class-name">Employee</span><span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> wage<span class="token punctuation">;</span>	<span class="token comment">//每小时的工资</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> hour<span class="token punctuation">;</span>	<span class="token comment">//月工作的小时数</span>
	
	<span class="token keyword">public</span> <span class="token class-name">HourlyEmployee</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> number<span class="token punctuation">,</span> <span class="token class-name">MyDate</span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> number<span class="token punctuation">,</span> birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">HourlyEmployee</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> number<span class="token punctuation">,</span> <span class="token class-name">MyDate</span> birthday<span class="token punctuation">,</span> <span class="token keyword">int</span> wage<span class="token punctuation">,</span> <span class="token keyword">int</span> hour<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> number<span class="token punctuation">,</span> birthday<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>wage <span class="token operator">=</span> wage<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>hour <span class="token operator">=</span> hour<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">earnings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> wage<span class="token operator">*</span>hour<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getWage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> wage<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setWage</span><span class="token punctuation">(</span><span class="token keyword">int</span> wage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>wage <span class="token operator">=</span> wage<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getHour</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> hour<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHour</span><span class="token punctuation">(</span><span class="token keyword">int</span> hour<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>hour <span class="token operator">=</span> hour<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;HourlyEmployee[&quot;</span> <span class="token operator">+</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span> 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>5、PayrollSystem 类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Calendar</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>
<span class="token comment">/*
 * 定义 PayrollSystem 类，创建 Employee 变量数组并初始化，
 * 该数组存放各类雇员对象的引用。利用循环结构遍历数组元素，
 * 输出各个对象的类型,name,number,birthday,以及该对象生日。
 * 当键盘输入本月月份值时，
 * 如果本月是某个 Employee 对象的生日，还要输出增加工资信息。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PayrollSystem</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//方式一：</span>
<span class="token comment">//		Scanner scanner = new Scanner(System.in);</span>
<span class="token comment">//		System.out.println(&quot;请输入当月的月份：&quot;);</span>
<span class="token comment">//		int month = scanner.nextInt();</span>
		
		<span class="token comment">//方式二：</span>
		<span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> month <span class="token operator">=</span> calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取当前的月份</span>
<span class="token comment">//		System.out.println(month);//一月份：0</span>
		
		<span class="token class-name">Employee</span><span class="token punctuation">[</span><span class="token punctuation">]</span> emps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		
		emps<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SalariedEmployee</span><span class="token punctuation">(</span><span class="token string">&quot;马良&quot;</span><span class="token punctuation">,</span> <span class="token number">1002</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">MyDate</span><span class="token punctuation">(</span><span class="token number">1992</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		emps<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HourlyEmployee</span><span class="token punctuation">(</span><span class="token string">&quot;博西&quot;</span><span class="token punctuation">,</span> <span class="token number">2001</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyDate</span><span class="token punctuation">(</span><span class="token number">1991</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">240</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> emps<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>emps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">double</span> salary <span class="token operator">=</span> emps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">earnings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;月工资为：&quot;</span> <span class="token operator">+</span> salary<span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>month<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> emps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getBirthday</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;生日快乐！奖励 100 元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_06、接口-interface" tabindex="-1"><a class="header-anchor" href="#_06、接口-interface" aria-hidden="true">#</a> 06、接口(interface)</h1><h2 id="_6-1、概述" tabindex="-1"><a class="header-anchor" href="#_6-1、概述" aria-hidden="true">#</a> 6.1、概述</h2><p>一方面，有时必须从几个类中派生出一个子类，继承它们所有的属性和方法。但是，Java 不支持多重继承。有了接口，就可以得到多重继承的效果。</p><p>另一方面，有时必须从几个类中抽取出一些共同的行为特征，而它们之间又没有 is-a 的关系，仅仅是具有相同的行为特征而已。例如：鼠标、键盘、打印机、扫描仪、摄像头、充电器、MP3 机、手机、数码相机、移动硬盘等都支持 USB 连接。</p><p>接口就是规范，定义的是一组规则，体现了现实世界中“如果你是/要…则必须能…”的思想。<strong>继承是一个&quot;是不是&quot;的关系，而接口实现则是&quot;能不能&quot;的关系。</strong></p><p><strong>接口的本质是契约，标准，规范</strong>，就像我们的法律一样。制定好后大家都要遵守。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/* 接口(interface)是抽象方法和常量值定义的集合。
 * 接口的特点：
 * 用 interface 来定义。
 * 接口中的所有成员变量都默认是由 public static final 修饰的。
 * 接口中的所有抽象方法都默认是由 public abstract 修饰的。
 * 接口中没有构造器。
 * 接口采用多继承机制。
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 接口的使用
 * 1.接口使用 interface 来定义。
 * 2.在 Java 中:接口和类是并列的两个结构
 * 3.如何去定义两个接口:定义接口中的成员
 * 	》3.1 JDK7 及以前:只能定义全局常量和抽象方法
 * 		》全局常量:public static final 的,但是书写中，可以省略不写。
 * 		》抽象方法:public abstract 的
 * 
 *  》3.2 JDK8:除了全局常量和抽象方法之外，还可以定义静态方法、默认方法(略)。
 * 
 * 4.接口中不能定义构造器！意味着接口不可以实例化。
 * 
 * 5.Java 开发中，接口通过让类去实现(implements)的方式来使用。
 *   如果实现类覆盖了接口中的所有方法，则此实现类就可以实例化
 *   如果实现类没有覆盖接口中所有的抽象方法，则此实现类仍为一个抽象类
 * 
 * 6.Java 类可以实现多个接口 ---》弥补了 Java 单继承性的局限性
 *  格式:class AA extends BB implementd CC,DD,EE
 *  
 *  7.接口与接口之间是继承,而且可以多继承
 *  
 **********************************
 * 8.接口的具体使用，体现多态性
 * 	   接口的主要用途就是被实现类实现。（面向接口编程）
 * 9.接口，实际可以看作是一种规范
 * 
 * 面试题:抽象类与接口有哪些异同？
 *  
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterfaceTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Flayable</span><span class="token punctuation">.</span><span class="token constant">MAX_SPEED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Flayable</span><span class="token punctuation">.</span><span class="token constant">MIN_SPEED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Flayable</span><span class="token punctuation">{</span>
	
	<span class="token comment">//全局变量</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">MAX_SPEED</span> <span class="token operator">=</span> <span class="token number">7900</span><span class="token punctuation">;</span>	
	<span class="token keyword">int</span> <span class="token constant">MIN_SPEED</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//省略了 public static final </span>
	
	<span class="token comment">//抽象方法</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//省略了 public abstract </span>
	<span class="token comment">//Interfaces cannot have constructors</span>
<span class="token comment">//	public Flayable(){</span>
<span class="token comment">//		</span>
<span class="token comment">//	}	</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Attackable</span><span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Plane</span> <span class="token keyword">implements</span> <span class="token class-name">Flayable</span><span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;飞机通过引擎起飞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;驾驶员减速停止&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Kite</span> <span class="token keyword">implements</span> <span class="token class-name">Flayable</span><span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bullet</span> <span class="token keyword">extends</span> <span class="token class-name">Object</span> <span class="token keyword">implements</span> <span class="token class-name">Flayable</span><span class="token punctuation">,</span><span class="token class-name">Attackable</span><span class="token punctuation">,</span><span class="token constant">CC</span><span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">attack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//*********************************</span>
<span class="token keyword">interface</span> <span class="token class-name">AA</span><span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">BB</span><span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">CC</span> <span class="token keyword">extends</span> <span class="token class-name">AA</span><span class="token punctuation">,</span><span class="token constant">BB</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2、举例" tabindex="-1"><a class="header-anchor" href="#_6-2、举例" aria-hidden="true">#</a> 6.2、举例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 接口的使用
 * 1.接口使用上也满足多态性
 * 2.接口，实际上就是定义了一种规范
 * 3.开发中，体会面向接口编程！
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">USBTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">Computer</span> com <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//1.创建了接口的非匿名实现类的非匿名对象</span>
		<span class="token class-name">Flash</span> flash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Flash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		com<span class="token punctuation">.</span><span class="token function">transferData</span><span class="token punctuation">(</span>flash<span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token comment">//2. 创建了接口的非匿名实现类的匿名对象</span>
		com<span class="token punctuation">.</span><span class="token function">transferData</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Printer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//3. 创建了接口的匿名实现类的非匿名对象</span>
		<span class="token class-name">USB</span> phone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">USB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;手机开始工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;手机结束工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		com<span class="token punctuation">.</span><span class="token function">transferData</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//4. 创建了接口的匿名实现类的匿名对象</span>
		com<span class="token punctuation">.</span><span class="token function">transferData</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">USB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;mp3 开始工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;mp3 结束工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Computer</span><span class="token punctuation">{</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">transferData</span><span class="token punctuation">(</span><span class="token class-name">USB</span> usb<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//USB usb = new Flash();</span>
		usb<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;具体传输数据的细节&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		usb<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">USB</span><span class="token punctuation">{</span>
	<span class="token comment">//常量:定义了长、宽</span>
	<span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Flash</span> <span class="token keyword">implements</span> <span class="token class-name">USB</span><span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;U 盘开始工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;U 盘结束工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Printer</span> <span class="token keyword">implements</span> <span class="token class-name">USB</span><span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;打印机开启工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;打印机结束工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3、接口的应用-代理模式-proxy" tabindex="-1"><a class="header-anchor" href="#_6-3、接口的应用-代理模式-proxy" aria-hidden="true">#</a> 6.3、接口的应用：代理模式(Proxy)</h2><p>代理模式是 Java 开发中使用较多的一种设计模式。代理设计就是为其他对象提供一种代理以控制对这个对象的访问。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 接口的应用:代理模式
 * 
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NetWorkTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">Server</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		server.browse();</span>
		<span class="token class-name">ProxyServer</span> proxyServer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyServer</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		proxyServer<span class="token punctuation">.</span><span class="token function">browse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">NetWork</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">browse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span>
<span class="token comment">//被代理类</span>
<span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token keyword">implements</span> <span class="token class-name">NetWork</span><span class="token punctuation">{</span>


	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">browse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;真实的服务器来访问网络&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//代理类</span>
<span class="token keyword">class</span> <span class="token class-name">ProxyServer</span> <span class="token keyword">implements</span> <span class="token class-name">NetWork</span><span class="token punctuation">{</span>
	
	<span class="token keyword">private</span> <span class="token class-name">NetWork</span> work<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">ProxyServer</span><span class="token punctuation">(</span><span class="token class-name">NetWork</span> work<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>work <span class="token operator">=</span> work<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;联网前的检查工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">browse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		work<span class="token punctuation">.</span><span class="token function">browse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>应用场景：</p></blockquote><ul><li>安全代理：屏蔽对真实角色的直接访问。</li><li>远程代理：通过代理类处理远程方法调用（RMI）</li><li>延迟加载：先加载轻量级的代理对象，真正需要再加载真实对象</li></ul><p>比如你要开发一个大文档查看软件，大文档中有大的图片，有可能一个图片有 100MB，在打开文件时，不可能将所有的图片都显示出来，这样就可以使用代理模式，当需要查看图片时，用 proxy 来进行大图片的打开。</p><blockquote><p>分类</p></blockquote><ul><li>静态代理（静态定义代理类）</li><li>动态代理（动态生成代理类） <ul><li>JDK 自带的动态代理，需要反射等知识</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticProxyTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Proxy</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RealStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		s<span class="token punctuation">.</span><span class="token function">confer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		s<span class="token punctuation">.</span><span class="token function">signContract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		s<span class="token punctuation">.</span><span class="token function">bookTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		s<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		s<span class="token punctuation">.</span><span class="token function">collectMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Star</span> <span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">confer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 面谈</span>

	<span class="token keyword">void</span> <span class="token function">signContract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 签合同</span>

	<span class="token keyword">void</span> <span class="token function">bookTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 订票</span>

	<span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 唱歌</span>

	<span class="token keyword">void</span> <span class="token function">collectMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 收钱</span>
<span class="token punctuation">}</span>
<span class="token comment">//被代理类</span>
<span class="token keyword">class</span> <span class="token class-name">RealStar</span> <span class="token keyword">implements</span> <span class="token class-name">Star</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">confer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">signContract</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bookTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;明星：歌唱~~~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">collectMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//代理类</span>
<span class="token keyword">class</span> <span class="token class-name">Proxy</span> <span class="token keyword">implements</span> <span class="token class-name">Star</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">Star</span> real<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token class-name">Star</span> real<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>real <span class="token operator">=</span> real<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">confer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;经纪人面谈&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">signContract</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;经纪人签合同&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bookTicket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;经纪人订票&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		real<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">collectMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;经纪人收钱&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-4、接口的应用-工厂模式" tabindex="-1"><a class="header-anchor" href="#_6-4、接口的应用-工厂模式" aria-hidden="true">#</a> 6.4、接口的应用：工厂模式</h2><blockquote><p>接口和抽象类之间的对比</p></blockquote><table><thead><tr><th>No.</th><th>区别点</th><th>抽象类</th><th>接口</th></tr></thead><tbody><tr><td>1</td><td>定义</td><td>包含抽象方法的类</td><td>主要是抽象方法和全局常量的集合</td></tr><tr><td>2</td><td>组成</td><td>构造方法、抽象方法、普通方法、常量、变量</td><td>常量、抽象方法、(jdk8.0:默认方法、静态方法)</td></tr><tr><td>3</td><td>使用</td><td>子类继承抽象类(extends)</td><td>子类实现接口(implements)</td></tr><tr><td>4</td><td>关系</td><td>抽象类可以实现多个接口</td><td>接口不能继承抽象类，但允许继承多个接口</td></tr><tr><td>5</td><td>常见设计模式</td><td>模板方法</td><td>简单工厂、工厂方法、代理模式</td></tr><tr><td>6</td><td>对象</td><td>都通过对象的多态性产生实例化对象</td><td></td></tr><tr><td>7</td><td>局限</td><td>抽象类有单继承的局限</td><td>接口没有此局限</td></tr><tr><td>8</td><td>实际</td><td>作为一个模板</td><td>是作为一个标准或是表示一种能力</td></tr><tr><td>9</td><td>选择</td><td>如果抽象类和接口都可以使用的话，优先使用接口，因为避免单继承的局限</td><td></td></tr></tbody></table><blockquote><p>在开发中，常看到一个类不是去继承一个已经实现好的类，而是要么继承抽象类，要么实现接口。<br> -【面试题】排错：</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">B</span> <span class="token keyword">implements</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//		编译不通过，x 不明确</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		System.out.println(super.x); //1</span>
<span class="token comment">//		System.out.println(A.x);//0</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>排错 2：</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Playable</span> <span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Bounceable</span> <span class="token punctuation">{</span>
	<span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Rollable</span> <span class="token keyword">extends</span> <span class="token class-name">Playable</span><span class="token punctuation">,</span> <span class="token class-name">Bounceable</span> <span class="token punctuation">{</span>
	<span class="token class-name">Ball</span> ball<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ball</span><span class="token punctuation">(</span><span class="token string">&quot;PingPang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//省略了 public static final</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ball</span> <span class="token keyword">implements</span> <span class="token class-name">Rollable</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token class-name">Ball</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ball <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ball</span><span class="token punctuation">(</span><span class="token string">&quot;Football&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//The final field Rollable.ball cannot be assigned	</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ball<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>练习</p></blockquote><p>CompareObject 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 定义一个接口用来实现两个对象的比较。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CompareObject</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//若返回值是 0,代表相等;若为正数，代表当前对象大；负数代表当前对象小</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Circle 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 定义一个 Circle 类，声明 redius 属性，提供 getter 和 setter 方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">private</span> <span class="token class-name">Double</span> radius<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRadius</span><span class="token punctuation">(</span><span class="token class-name">Double</span> radius<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token class-name">Double</span> radius<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
		
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ComparableCircle 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 定义一个 ComparableCircle 类，继承 Circle 类并且实现 CompareObject 接口。在 ComparableCircle 类中给出接口中方法 compareTo 的实现体，
 * 用来比较两个圆的半径大小。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComparableCircle</span> <span class="token keyword">extends</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">CompareObject</span><span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token class-name">ComparableCircle</span><span class="token punctuation">(</span><span class="token keyword">double</span> radius<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> o<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>o <span class="token keyword">instanceof</span> <span class="token class-name">ComparableCircle</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">ComparableCircle</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ComparableCircle</span><span class="token punctuation">)</span>o<span class="token punctuation">;</span>
			<span class="token comment">//错误的写法</span>
<span class="token comment">//			return (int)(this.getRedius() - c.getRedius());</span>
			<span class="token comment">//正确的方式一：</span>
<span class="token comment">//			if(this.getRadius() &gt; c.getRadius()){</span>
<span class="token comment">//				return 1;</span>
<span class="token comment">//			}else if(this.getRadius() &lt; c.getRadius()){</span>
<span class="token comment">//				return -1;</span>
<span class="token comment">//			}else{</span>
<span class="token comment">//				return 0;</span>
<span class="token comment">//			}</span>
			<span class="token comment">//当属性 radius 声明为 Double 类型时，可以调用包装类的方法</span>
			<span class="token comment">//正确的方式二：</span>
			<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//			throw new RuntimeException(&quot;传入数据类型不匹配&quot;);</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>InterfaceTest 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 定义一个测试类 InterfaceTest，创建两个 ComparableCircle 对象，
 * 调用 compareTo 方法比较两个类的半径大小。
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterfaceTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">ComparableCircle</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComparableCircle</span><span class="token punctuation">(</span><span class="token number">3.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ComparableCircle</span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComparableCircle</span><span class="token punctuation">(</span><span class="token number">3.6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">int</span> compareValue <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>compareValue <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c1 对象大&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>compareValue <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;c2 对象大&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;两个一样的&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">int</span> compareValue1 <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;AA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>compareValue1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_07、java-8-中关于接口的改进" tabindex="-1"><a class="header-anchor" href="#_07、java-8-中关于接口的改进" aria-hidden="true">#</a> 07、Java 8 中关于接口的改进</h1><p>Java 8 中，你可以为接口添加静态方法和默认方法。从技术角度来说，这是完全合法的，只是它看起来违反了接口作为一个抽象定义的理念。</p><blockquote><p>静态方法：</p></blockquote><p>使用 static 关键字修饰。可以通过接口直接调用静态方法，并执行其方法体。我们经常在相互一起使用的类中使用静态方法。你可以在标准库中找到像 Collection/Collections 或者 Path/Paths 这样成对的接口和类。</p><blockquote><p>默认方法：</p></blockquote><p>默认方法使用 default 关键字修饰。可以通过实现类对象来调用。我们在已有的接口中提供新方法的同时，还保持了与旧版本代码的兼容性。比如：java 8 API 中对 Collection、List、Comparator 等接口提供了丰富的默认方法。</p><blockquote><p>例1</p></blockquote><p>interface 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * JDK8:除了全局常量和抽象方法之外，还可以定义静态方法、默认方法(略)。
 * 
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CompareA</span> <span class="token punctuation">{</span>

	<span class="token comment">//静态方法</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CompareA:西安&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//默认方法</span>
	<span class="token keyword">public</span> <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CompareA:深圳&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CompareA:杭州&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SubClassTest 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubClassTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SubClass</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		s.method1();</span>
<span class="token comment">//		SubClass.method1();</span>
<span class="token comment">//		知识点 1：接口中定义的静态方法，只能通过接口来调用。</span>
		<span class="token class-name">CompareA</span><span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		知识点 2：通过实现类的对象，可以调用接口中的默认方法。</span>
<span class="token comment">//		如果实现类重写了接口中的默认方法，调用时，仍然调用的是重写以后的方法</span>
		s<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		知识点 3：如果子类(或实现类)继承的父类和实现的接口中声明了同名同参数的默认方法，</span>
<span class="token comment">//		那么子类在没有重写此方法的情况下，默认调用的是父类中的同名同参数的方法。--&gt;类优先原则</span>
<span class="token comment">//		知识点 4：如果实现类实现了多个接口，而这多个接口中定义了同名同参数的默认方法，</span>
<span class="token comment">//		那么在实现类没有重写此方法的情况下，报错。--&gt;接口冲突。</span>
<span class="token comment">//		这就需要我们必须在实现类中重写此方法</span>
		s<span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">SubClass</span> <span class="token keyword">extends</span> <span class="token class-name">SuperClass</span> <span class="token keyword">implements</span> <span class="token class-name">CompareA</span><span class="token punctuation">,</span><span class="token class-name">CompareB</span><span class="token punctuation">{</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SubClass：上海&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SubClass：深圳&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token comment">//	知识点 5：如何在子类(或实现类)的方法中调用父类、接口中被重写的方法</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//调用自己定义的重写的方法</span>
		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//调用的是父类中声明的</span>
<span class="token comment">//		调用接口中的默认方法</span>
		<span class="token class-name">CompareA</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">CompareB</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SuperClass 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperClass</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SuperClass:北京&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CompareB 类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CompareB</span> <span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;CompareB：上海&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例2</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 练习：接口冲突的解决方式
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Filial</span> <span class="token punctuation">{</span><span class="token comment">// 孝顺的</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;老妈，我来救你了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Spoony</span> <span class="token punctuation">{</span><span class="token comment">// 痴情的</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;媳妇，别怕，我来了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;儿子，救我媳妇！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token keyword">implements</span> <span class="token class-name">Filial</span><span class="token punctuation">,</span> <span class="token class-name">Spoony</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我该就谁呢？&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Filial</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Spoony</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_08、类的内部成员之五-内部类" tabindex="-1"><a class="header-anchor" href="#_08、类的内部成员之五-内部类" aria-hidden="true">#</a> 08、类的内部成员之五：内部类</h1><p>当一个事物的内部，还有一个部分需要一个完整的结构进行描述，而这个内部的完整的结构又只为外部事物提供服务，那么整个内部的完整结构最好使用内部类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 类的内部成员之五:内部类
 * 
 * 1.Java中允许将一个类A声明在另一个类B中,则类A就是内部类,类B就是外部类.
 * 
 * 2.内部类的分类:成员内部类	VS	局部内部类(方法内、代码块内、构造器内)
 * 		
 * 3.成员内部类
 * 	》作为外部类的成员,
 * 		- 调用外部类的结构
 * 		- 可以被static修饰
 * 		- 可以被4种不同的权限修饰
 * 
 *  》作为一个类，
 *  	- 类内可以定义属性、方法、构造器等
 *  	- 可以被final修饰，表示此类不能被继承。言外之意，不使用final，就可以被继承
 *  	- 可以abstract修饰
 * 
 * 4.关注如下的3个问题
 *   》 如何实例化成员内部类的对象
 *   》 如何在成员内部类中区分调用外部类的结构
 *   》 开发中局部内部类的使用  见《InnerClassTest1.java》
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InnerClassTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token comment">//创建Dog实例(静态的成员内部类)</span>
		<span class="token class-name">Person<span class="token punctuation">.</span>Dog</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person<span class="token punctuation">.</span>Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		dog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">//创建Bird实例(非静态的成员内部类)</span>
<span class="token comment">//		Person.Bird bird = new Person.Bird();</span>
		<span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Person<span class="token punctuation">.</span>Bird</span> bird <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		bird<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		bird<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string">&quot;喜鹊&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;李雷&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;人，吃饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//静态成员内部类</span>
	<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">{</span>
		<span class="token class-name">String</span> name<span class="token punctuation">;</span>
		<span class="token keyword">int</span> age<span class="token punctuation">;</span>
		
		<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;卡拉是条狗&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//			eat();</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//非静态成员内部类</span>
	<span class="token keyword">class</span> <span class="token class-name">Bird</span><span class="token punctuation">{</span>
		<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;杜鹃&quot;</span><span class="token punctuation">;</span>
		<span class="token keyword">public</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
		
		<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我是一只猫头鹰&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用外部类的非静态属性</span>
			<span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//方法的形参</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//内部类的属性</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//外部类的属性</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//局部内部类</span>
		<span class="token keyword">class</span> <span class="token class-name">AA</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token punctuation">{</span>
		<span class="token comment">//局部内部类</span>
		<span class="token keyword">class</span> <span class="token class-name">BB</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//局部内部类</span>
		<span class="token keyword">class</span> <span class="token class-name">CC</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>InnerClassTest1类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InnerClassTest1</span> <span class="token punctuation">{</span>
	
<span class="token comment">//	开发中很少见</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//		局部内部类</span>
		<span class="token keyword">class</span> <span class="token class-name">AA</span><span class="token punctuation">{</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
<span class="token comment">//	返回一个实现了Comparable接口的类的对象</span>
	<span class="token keyword">public</span> <span class="token class-name">Comparable</span> <span class="token function">getComparable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
<span class="token comment">//		创建一个实现了Comparable接口的类:局部内部类</span>
		<span class="token comment">//方式一：</span>
<span class="token comment">//		class MyComparable implements Comparable{</span>
<span class="token comment">//</span>
<span class="token comment">//			@Override</span>
<span class="token comment">//			public int compareTo(Object o) {</span>
<span class="token comment">//				return 0;</span>
<span class="token comment">//			}</span>
<span class="token comment">//			</span>
<span class="token comment">//		}</span>
<span class="token comment">//		</span>
<span class="token comment">//		return new MyComparable();</span>
		
		<span class="token comment">//方式二：</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Comparable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>


			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-1、匿名内部类" tabindex="-1"><a class="header-anchor" href="#_8-1、匿名内部类" aria-hidden="true">#</a> 8.1、匿名内部类</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 1.匿名内部类不能定义任何静态成员、方法和类，只能创建匿名内部类的一个实例。
 * 一个匿名内部类一定是在new的后面，用其隐含实现一个接口或实现一个类。
 * 
 * 2.格式：
 * 		new 父类构造器（实参列表）|实现接口(){
 * 				//匿名内部类的类体部分
 * 		}
 * 
 * 3.匿名内部类的特点
 * 		&gt; 匿名内部类必须继承父类或实现接口
 * 		&gt; 匿名内部类只能有一个对象
 * 		&gt; 匿名内部类对象只能使用多态形式引用
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Product</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnonymousTest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">Product</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;购买了一个&quot;</span> <span class="token operator">+</span> p<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;，花掉了&quot;</span> <span class="token operator">+</span> p<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">AnonymousTest</span> ta <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnonymousTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//调用test方法时，需要传入一个Product参数，</span>
		<span class="token comment">//此处传入其匿名实现类的实例</span>
		ta<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token number">567.8</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token string">&quot;AGP显卡&quot;</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2、局部内部类的使用注意" tabindex="-1"><a class="header-anchor" href="#_8-2、局部内部类的使用注意" aria-hidden="true">#</a> 8.2、局部内部类的使用注意</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InnerClassTest</span> <span class="token punctuation">{</span>
	
<span class="token comment">//	public void onCreate(){</span>
<span class="token comment">//	</span>
<span class="token comment">//	int number = 10;</span>
<span class="token comment">//	</span>
<span class="token comment">//	View.OnClickListern listener = new View.OnClickListener(){</span>
<span class="token comment">//		</span>
<span class="token comment">//		public void onClick(){</span>
<span class="token comment">//			System.out.println(&quot;hello!&quot;);</span>
<span class="token comment">//			System.out.println(number);</span>
<span class="token comment">//		}</span>
<span class="token comment">//		</span>
<span class="token comment">//	}</span>
<span class="token comment">//	</span>
<span class="token comment">//	button.setOnClickListener(listener);</span>
<span class="token comment">//	</span>
<span class="token comment">//}</span>

	<span class="token comment">/*
	 * 在局部内部类的方法中(比如:show)如果调用局部内部类所声明的方法(比如：method)中的局部变量(比如：num)的话,
	 * 要求此局部变量声明为final的。
	 * 
	 * jdk 7及之前版本：要求此局部变量显式的声明为final的
	 * jdk 8及之后的版本：可以省略final的声明
	 * 
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//局部变量</span>
		<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		
		<span class="token keyword">class</span> <span class="token class-name">AA</span><span class="token punctuation">{</span>
			
			<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//				num = 20;	//Local variable num defined in an enclosing scope must be final or effectively final</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,154),c=[e];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","08面向对象（下）.html.vue"]]);export{d as default};
