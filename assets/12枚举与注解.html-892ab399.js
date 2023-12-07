import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-6cc2c792.js";const e={},p=t(`<h1 id="_12枚举与注解" tabindex="-1"><a class="header-anchor" href="#_12枚举与注解" aria-hidden="true">#</a> 12枚举与注解</h1><h1 id="_01、枚举类的使用" tabindex="-1"><a class="header-anchor" href="#_01、枚举类的使用" aria-hidden="true">#</a> 01、枚举类的使用</h1><h2 id="_1-1、枚举类的理解" tabindex="-1"><a class="header-anchor" href="#_1-1、枚举类的理解" aria-hidden="true">#</a> 1.1、枚举类的理解</h2><ul><li>类的对象只有有限个，确定的。举例如下： <ul><li>星期：Monday(星期一)、…、Sunday(星期天)</li><li>性别：Man(男)、Woman(女)</li><li>季节：Spring(春节)…Winter(冬天)</li><li>支付方式：Cash（现金）、WeChatPay（微信）、Alipay(支付宝)、BankCard(银行卡)、CreditCard(信用卡)</li><li>就职状态：Busy、Free、Vocation、Dimission</li><li>订单状态：Nonpayment（未付款）、Paid（已付款）、Delivered（已发货）、Return（退货）、Checked（已确认）Fulfilled（已配货）、</li><li>线程状态：创建、就绪、运行、阻塞、死亡</li></ul></li><li>当需要定义一组常量时，强烈建议使用枚举类</li><li>枚举类的实现 <ul><li>JDK1.5之前需要自定义枚举类</li><li>JDK 1.5 新增的enum 关键字用于定义枚举类</li></ul></li><li>若枚举只有一个对象, 则可以作为一种单例模式的实现方式。</li></ul><h2 id="_1-2、自定义枚举类" tabindex="-1"><a class="header-anchor" href="#_1-2、自定义枚举类" aria-hidden="true">#</a> 1.2、自定义枚举类</h2><blockquote><p>枚举类的属性</p></blockquote><ul><li>枚举类对象的属性不应允许被改动, 所以应该使用<code>private final </code>修饰</li><li>枚举类的使用<code>private final</code> 修饰的属性应该在构造器中为其赋值</li><li>若枚举类显式的定义了带参数的构造器, 则在列出枚举值时也必须对应的传入参数</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 一、枚举类的使用
 * 1.枚举类的理解：类的对象只有有限个，确定的。我们称此类为枚举类。
 * 2.当需要定义一组常量时，强烈建议使用枚举类
 * 3.若枚举只有一个对象, 则可以作为一种单例模式的实现方式。
 *
 * 二、如何定义枚举类
 *     方式一：JDK1.5之前需要自定义枚举类
 *     方式二：JDK 1.5 新增的enum 关键字用于定义枚举类
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SeasonTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Season</span> spring <span class="token operator">=</span> <span class="token class-name">Season</span><span class="token punctuation">.</span><span class="token constant">SPRING</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>spring<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//自定义枚举类</span>
<span class="token keyword">class</span> <span class="token class-name">Season</span><span class="token punctuation">{</span>
    <span class="token comment">//1.声明Season对象的属性:private final修饰</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">;</span>

    <span class="token comment">//2.私有化类的构造器,并给对象属性赋值</span>
    <span class="token keyword">private</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span><span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//3.提供当前枚举类的多个对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">SPRING</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">&quot;春天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;万物复苏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">SUMMER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">&quot;夏天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;烈日炎炎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">AUTUMN</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">&quot;秋天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;金秋送爽&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">WINTER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">&quot;冬天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;白雪皑皑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//4.其他诉求：获取枚举类对象的属性</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//4.其他诉求1：提供toString()</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Season{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;seasonName=&#39;&quot;</span> <span class="token operator">+</span> seasonName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, seasonDesc=&#39;&quot;</span> <span class="token operator">+</span> seasonDesc <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3、使用enum关键字定义枚举类" tabindex="-1"><a class="header-anchor" href="#_1-3、使用enum关键字定义枚举类" aria-hidden="true">#</a> 1.3、使用enum关键字定义枚举类</h2><blockquote><p>使用说明</p></blockquote><ul><li>使用enum定义的枚举类默认继承了java.lang.Enum类，因此不能再继承其他类</li><li>枚举类的构造器只能使用private 权限修饰符</li><li>枚举类的所有实例必须在枚举类中显式列出(, 分隔; 结尾)。列出的实例系统会自动添加public static final 修饰</li><li>必须在枚举类的第一行声明枚举类对象</li></ul><blockquote><p>JDK 1.5 中可以在switch 表达式中使用Enum定义的枚举类的对象作为表达式, case 子句可以直接使用枚举值的名字, 无需添加枚举类作为限定。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 使用enum关键字定义枚举类
 * 说明：定义的枚举类默认继承于java.lang.Enum类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SeasonTest1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Season1</span> summer <span class="token operator">=</span> <span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token constant">SUMMER</span><span class="token punctuation">;</span>
        <span class="token comment">//toString():</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>summer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用enum关键字枚举类</span>
<span class="token keyword">enum</span> <span class="token class-name">Season1</span><span class="token punctuation">{</span>
    <span class="token comment">//1.提供当前枚举类的对象，多个对象之间用&quot;,&quot;隔开，末尾对象&quot;;&quot;结束</span>
    <span class="token function">SPRING</span><span class="token punctuation">(</span><span class="token string">&quot;春天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;万物复苏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">SUMMER</span><span class="token punctuation">(</span><span class="token string">&quot;夏天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;烈日炎炎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AUTUMN</span><span class="token punctuation">(</span><span class="token string">&quot;秋天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;金秋送爽&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">WINTER</span><span class="token punctuation">(</span><span class="token string">&quot;冬天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;白雪皑皑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//2.声明Season对象的属性:private final修饰</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">;</span>

    <span class="token comment">//3.私有化类的构造器,并给对象属性赋值</span>
    <span class="token keyword">private</span> <span class="token class-name">Season1</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span><span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//4.其他诉求：获取枚举类对象的属性</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//4.其他诉求1：提供toString()</span>
<span class="token comment">//    @Override</span>
<span class="token comment">//    public String toString() {</span>
<span class="token comment">//        return &quot;Season{&quot; +</span>
<span class="token comment">//                &quot;seasonName=&#39;&quot; + seasonName + &#39;\\&#39;&#39; +</span>
<span class="token comment">//                &quot;, seasonDesc=&#39;&quot; + seasonDesc + &#39;\\&#39;&#39; +</span>
<span class="token comment">//                &#39;}&#39;;</span>
<span class="token comment">//    }</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4、enum类中的常用方法" tabindex="-1"><a class="header-anchor" href="#_1-4、enum类中的常用方法" aria-hidden="true">#</a> 1.4、Enum类中的常用方法</h2><blockquote><p>Enum类的主要方法：</p></blockquote><ul><li><code>values()</code>方法：返回枚举类型的对象数组。该方法可以很方便地遍历所有的枚举值。</li><li><code>valueOf(String str)</code>：可以把一个字符串转为对应的枚举类对象。要求字符串必须是枚举类对象的“名字”。如不是，会有运行时异常：IllegalArgumentException。</li><li><code>toString()</code>：返回当前枚举类对象常量的名称</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 使用enum关键字定义枚举类
 * 说明：定义的枚举类默认继承于java.lang.Enum类
 *
 * 三、Enum类的常用方法
 *      values()方法：返回枚举类型的对象数组。该方法可以很方便地遍历所有的枚举值。
 *      valueOf(String str)：可以把一个字符串转为对应的枚举类对象。要求字符串必须是枚举类对象的“名字”。如不是，会有运行时异常：IllegalArgumentException。
 *      toString()：返回当前枚举类对象常量的名称
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SeasonTest1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Season1</span> summer <span class="token operator">=</span> <span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token constant">SUMMER</span><span class="token punctuation">;</span>
        <span class="token comment">//toString():</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>summer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        System.out.println(Season1.class.getSuperclass());</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;**************************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//values():返回所有的枚举类对象构成的数组</span>
        <span class="token class-name">Season1</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values <span class="token operator">=</span> <span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> values<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;****************************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread<span class="token punctuation">.</span>State</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values1 <span class="token operator">=</span> <span class="token class-name">Thread<span class="token punctuation">.</span>State</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> values1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>values1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//valueOf(String objName):返回枚举类中对象名是objName的对象。</span>
        <span class="token class-name">Season1</span> winter <span class="token operator">=</span> <span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;WINTER&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//如果没有objName的枚举类对象，则抛异常：IllegalArgumentException</span>
<span class="token comment">//        Season1 winter = Season1.valueOf(&quot;WINTER1&quot;);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>winter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用enum关键字枚举类</span>
<span class="token keyword">enum</span> <span class="token class-name">Season1</span><span class="token punctuation">{</span>
    <span class="token comment">//1.提供当前枚举类的对象，多个对象之间用&quot;,&quot;隔开，末尾对象&quot;;&quot;结束</span>
    <span class="token function">SPRING</span><span class="token punctuation">(</span><span class="token string">&quot;春天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;万物复苏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">SUMMER</span><span class="token punctuation">(</span><span class="token string">&quot;夏天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;烈日炎炎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AUTUMN</span><span class="token punctuation">(</span><span class="token string">&quot;秋天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;金秋送爽&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">WINTER</span><span class="token punctuation">(</span><span class="token string">&quot;冬天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;白雪皑皑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//2.声明Season对象的属性:private final修饰</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">;</span>

    <span class="token comment">//3.私有化类的构造器,并给对象属性赋值</span>
    <span class="token keyword">private</span> <span class="token class-name">Season1</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span><span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//4.其他诉求：获取枚举类对象的属性</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//4.其他诉求1：提供toString()</span>
<span class="token comment">//    @Override</span>
<span class="token comment">//    public String toString() {</span>
<span class="token comment">//        return &quot;Season{&quot; +</span>
<span class="token comment">//                &quot;seasonName=&#39;&quot; + seasonName + &#39;\\&#39;&#39; +</span>
<span class="token comment">//                &quot;, seasonDesc=&#39;&quot; + seasonDesc + &#39;\\&#39;&#39; +</span>
<span class="token comment">//                &#39;}&#39;;</span>
<span class="token comment">//    }</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5、使用enum关键字定义的枚举类实现接口" tabindex="-1"><a class="header-anchor" href="#_1-5、使用enum关键字定义的枚举类实现接口" aria-hidden="true">#</a> 1.5、使用enum关键字定义的枚举类实现接口</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 使用enum关键字定义枚举类
 * 说明：定义的枚举类默认继承于java.lang.Enum类
 *
 * 四、使用enum关键字定义的枚举类实现接口的情况
 *   情况一：实现接口，在enum类中实现抽象方法
 *   情况二：让枚举类的对象分别实现接口中的抽象方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SeasonTest1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//values():返回所有的枚举类对象构成的数组</span>
        <span class="token class-name">Season1</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values <span class="token operator">=</span> <span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> values<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            values<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//valueOf(String objName):返回枚举类中对象名是objName的对象。</span>
        <span class="token class-name">Season1</span> winter <span class="token operator">=</span> <span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;WINTER&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        winter<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Info</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用enum关键字枚举类</span>
<span class="token keyword">enum</span> <span class="token class-name">Season1</span> <span class="token keyword">implements</span> <span class="token class-name">Info</span><span class="token punctuation">{</span>
    <span class="token comment">//1.提供当前枚举类的对象，多个对象之间用&quot;,&quot;隔开，末尾对象&quot;;&quot;结束</span>
    <span class="token function">SPRING</span><span class="token punctuation">(</span><span class="token string">&quot;春天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;春暖花开&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;一元复始、万物复苏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">SUMMER</span><span class="token punctuation">(</span><span class="token string">&quot;夏天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;夏日炎炎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;蝉声阵阵、烈日当空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">AUTUMN</span><span class="token punctuation">(</span><span class="token string">&quot;秋天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;秋高气爽&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;天高气清、金桂飘香&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">WINTER</span><span class="token punctuation">(</span><span class="token string">&quot;冬天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;冰天雪地&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;寒冬腊月、滴水成冰&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">//2.声明Season对象的属性:private final修饰</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">;</span>

    <span class="token comment">//3.私有化类的构造器,并给对象属性赋值</span>
    <span class="token keyword">private</span> <span class="token class-name">Season1</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span><span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//4.其他诉求：获取枚举类对象的属性</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> seasonDesc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//4.其他诉求1：提供toString()</span>
<span class="token comment">//    @Override</span>
<span class="token comment">//    public String toString() {</span>
<span class="token comment">//        return &quot;Season{&quot; +</span>
<span class="token comment">//                &quot;seasonName=&#39;&quot; + seasonName + &#39;\\&#39;&#39; +</span>
<span class="token comment">//                &quot;, seasonDesc=&#39;&quot; + seasonDesc + &#39;\\&#39;&#39; +</span>
<span class="token comment">//                &#39;}&#39;;</span>
<span class="token comment">//    }</span>

<span class="token comment">//    @Override</span>
<span class="token comment">//    public void show() {</span>
<span class="token comment">//        System.out.println(&quot;这是一个季节。&quot;);</span>
<span class="token comment">//    }</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_02、注解的使用" tabindex="-1"><a class="header-anchor" href="#_02、注解的使用" aria-hidden="true">#</a> 02、注解的使用</h1><h2 id="_2-1、注解的理解" tabindex="-1"><a class="header-anchor" href="#_2-1、注解的理解" aria-hidden="true">#</a> 2.1、注解的理解</h2><ul><li>从JDK 5.0 开始, Java 增加了对元数据(MetaData) 的支持, 也就是Annotation(注解)</li><li>Annotation 其实就是代码里的<strong>特殊标记</strong>, 这些标记可以在编译, 类加载, 运行时被读取, 并执行相应的处理。通过使用Annotation, 程序员可以在不改变原有逻辑的情况下, 在源文件中嵌入一些补充信息。代码分析工具、开发工具和部署工具可以通过这些补充信息进行验证或者进行部署。</li><li>Annotation 可以像修饰符一样被使用, 可用于<strong>修饰包,类, 构造器, 方法, 成员变量, 参数, 局部变量的声明</strong>, 这些信息被保存在Annotation 的“name=value” 对中。</li><li>在JavaSE中，注解的使用目的比较简单，例如标记过时的功能，忽略警告等。在JavaEE/Android中注解占据了更重要的角色，例如用来配置应用程序的任何切面，代替JavaEE旧版中所遗留的繁冗代码和XML配置等。</li><li>未来的开发模式都是基于注解的，JPA是基于注解的，Spring2.5以上都是基于注解的，Hibernate3.x以后也是基于注解的，现在的Struts2有一部分也是基于注解的了，注解是一种趋势，一定程度上可以说：<strong>框架= 注解+ 反射+ 设计模式</strong>。</li></ul><h2 id="_2-2、annotation的使用示例" tabindex="-1"><a class="header-anchor" href="#_2-2、annotation的使用示例" aria-hidden="true">#</a> 2.2、Annotation的使用示例</h2><ul><li>使用Annotation 时要在其前面增加@ 符号, <strong>并把该Annotation 当成一个修饰符使用</strong>。用于修饰它支持的程序元素</li><li>示例一：生成文档相关的注解 <ul><li>@author标明开发该类模块的作者，多个作者之间使用,分割</li><li>@version标明该类模块的版本</li><li>@see参考转向，也就是相关主题</li><li>@since从哪个版本开始增加的</li><li>@param对方法中某参数的说明，如果没有参数就不能写</li><li>@return对方法返回值的说明，如果方法的返回值类型是void就不能写</li><li>@exception对方法可能抛出的异常进行说明，如果方法没有用throws显式抛出的异常就不能写其中 <ul><li>@param@return和@exception这三个标记都是只用于方法的。</li><li>@param的格式要求：@param形参名形参类型形参说明</li><li>@return的格式要求：@return返回值类型返回值说明</li><li>@exception的格式要求：@exception异常类型异常说明</li><li>@param和@exception可以并列多个</li></ul></li></ul></li><li>示例二：在编译时进行格式检查(JDK内置的三个基本注解) <ul><li>@Override: 限定重写父类方法, 该注解只能用于方法</li><li>@Deprecated: 用于表示所修饰的元素(类, 方法等)已过时。通常是因为所修饰的结构危险或存在更好的选择</li><li>@SuppressWarnings: 抑制编译器警告</li></ul></li><li>示例三：跟踪代码依赖性，实现替代配置文件功能 <ul><li>Servlet3.0提供了注解(annotation),使得不再需要在web.xml文件中进行Servlet的部署。</li><li>spring框架中关于“事务”的管理</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 注解的使用
 *
 * 1. 理解Annotation:
 * ① jdk 5.0 新增的功能
 *
 * ② Annotation 其实就是代码里的特殊标记, 这些标记可以在编译, 类加载, 运行时被读取, 并执行相应的处理。通过使用 Annotation,
 *    程序员可以在不改变原有逻辑的情况下, 在源文件中嵌入一些补充信息。
 *
 * ③在JavaSE中，注解的使用目的比较简单，例如标记过时的功能，忽略警告等。在JavaEE/Android
 *  中注解占据了更重要的角色，例如用来配置应用程序的任何切面，代替JavaEE旧版中所遗留的繁冗
 *  代码和XML配置等。
 *
 * 2. Annocation的使用示例
 *  示例一：生成文档相关的注解
 *  示例二：在编译时进行格式检查(JDK内置的三个基本注解)
 *      @Override: 限定重写父类方法, 该注解只能用于方法
 *      @Deprecated: 用于表示所修饰的元素(类, 方法等)已过时。通常是因为所修饰的结构危险或存在更好的选择
 *      @SuppressWarnings: 抑制编译器警告
 *
 *  示例三：跟踪代码依赖性，实现替代配置文件功能
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2020</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unused&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">//        System.out.println(num);</span>

        <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">&quot;unused&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rawtypes&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token class-name">ArrayList</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学习中……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;摸鱼中……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Info</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Info</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;喷子走开&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3、如何自定义注解" tabindex="-1"><a class="header-anchor" href="#_2-3、如何自定义注解" aria-hidden="true">#</a> 2.3、如何自定义注解</h2><ul><li>定义新的<code>Annotation类</code>型使用**<code>@interface</code>**关键字</li><li>自定义注解自动继承了**<code>java.lang.annotation.Annotation</code>**接口</li><li><code>Annotation</code>的成员变量在<code>Annotation</code>定义中以无参数方法的形式来声明。其方法名和返回值定义了该成员的名字和类型。我们称为配置参数。类型只能是八种基本数据类型、<strong>String类型、Class类型、enum类型、Annotation类型、以上所有类型的数组</strong>。</li><li>可以在定义<code>Annotation</code>的成员变量时为其指定初始值,指定成员变量的初始值可使用**<code>default</code>**关键字</li><li>如果只有一个参数成员，建议使用<strong>参数名为<code>value</code></strong></li><li>如果定义的注解含有配置参数，那么使用时必须指定参数值，除非它有默认值。格式是“参数名=参数值”，如果只有一个参数成员，且名称为<code>value</code>，可以省略“<code>value=</code>”</li><li>没有成员定义的<code>Annotation</code>称为标记;包含成员变量的<code>Annotation</code>称为元数据<code>Annotation</code></li><li>注意：<strong>自定义注解必须配上注解的信息处理流程才有意义</strong>。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 注解的使用
 *
 *  3.如何自定义注解：参照@SuppressWarnings定义
 *      ① 注解声明为：@interface
 *      ② 内部定义成员，通常使用value表示
 *      ③ 可以指定成员的默认值，使用default定义
 *      ④ 如果自定义注解没有成员，表明是一个标识作用。
 *
 *      如果注解有成员，在使用注解时，需要指明成员的值。
 *      自定义注解必须配上注解的信息处理流程(使用反射)才有意义。
 *      自定义注解通过都会指明两个元注解：Retention、Target
 *
 */</span>

<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4、jdk中4个基本的元注解的使用1" tabindex="-1"><a class="header-anchor" href="#_2-4、jdk中4个基本的元注解的使用1" aria-hidden="true">#</a> 2.4、jdk中4个基本的元注解的使用1</h2><ul><li><p>JDK 的元<code>Annotation</code> 用于修饰其他<code>Annotation</code> 定义</p></li><li><p>JDK5.0提供了4个标准的<code>meta-annotation</code>类型，分别是：</p><ul><li><code>Retention</code></li><li><code>Target</code></li><li><code>Documented</code></li><li><code>Inherited</code></li></ul><blockquote><p>元数据的理解：<code>String name = “MyBlog”</code>;</p></blockquote></li><li><p><code>@Retention</code>: 只能用于修饰一个<code>Annotation </code>定义, 用于指定该<code>Annotation</code> 的生命周期, <code>@Rentention</code>包含一个<code>RetentionPolicy</code>类型的成员变量, 使用<code>@Rentention</code>时必须为该<code>value</code> 成员变量指定值:</p><ul><li><code>RetentionPolicy.SOURCE</code>:在源文件中有效（即源文件保留），编译器直接丢弃这种策略的注释</li><li><code>RetentionPolicy.CLASS</code>:在class文件中有效（即class保留），当运行Java 程序时, JVM 不会保留注解。这是默认值</li><li><code>RetentionPolicy.RUNTIME</code>:在运行时有效（即运行时保留），当运行Java 程序时, JVM 会保留注释。程序可以通过反射获取该注释。</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Retention</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RetentionPolicy</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">SOURCE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 注解的使用
 *
 *   4.jdk 提供的4种元注解
 *     元注解：对现有的注解进行解释说明的注解
 *     Retention:指定所修饰的 Annotation 的生命周期：SOURCE\\CLASS（默认行为）\\RUNTIME
 *               只有声明为RUNTIME生命周期的注解，才能通过反射获取。
 *     Target:
 *     Documented:
 *     Inherited:
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;jack&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学习中……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;摸鱼中……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5、jdk中4个基本的元注解的使用2" tabindex="-1"><a class="header-anchor" href="#_2-5、jdk中4个基本的元注解的使用2" aria-hidden="true">#</a> 2.5、jdk中4个基本的元注解的使用2</h2><ul><li><p><code>@Target</code>: 用于修饰Annotation 定义, 用于指定被修饰的Annotation 能用于修饰哪些程序元素。@Target 也包含一个名为value 的成员变量。</p></li><li><p><code>@Documented</code>: 用于指定被该元Annotation 修饰的Annotation 类将被javadoc工具提取成文档。默认情况下，javadoc是不包括注解的。</p><ul><li>定义为Documented的注解必须设置Retention值为RUNTIME。</li></ul></li><li><p><code>@Inherited</code>: 被它修饰的Annotation 将具有继承性。如果某个类使用了被@Inherited 修饰的Annotation, 则其子类将自动具有该注解。</p><ul><li>比如：如果把标有@Inherited注解的自定义的注解标注在类级别上，子类则可以继承父类类级别的注解</li><li>实际应用中，使用较少</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Annotation</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 注解的使用
 *
 *   4.jdk 提供的4种元注解
 *     元注解：对现有的注解进行解释说明的注解
 *     Retention:指定所修饰的 Annotation 的生命周期：SOURCE\\CLASS（默认行为）\\RUNTIME
 *               只有声明为RUNTIME生命周期的注解，才能通过反射获取。
 *     Target:用于指定被修饰的 Annotation 能用于修饰哪些程序元素
 *     *******出现的频率较低*******
 *     Documented:表示所修饰的注解在被javadoc解析时，保留下来。
 *     Inherited:被它修饰的 Annotation 将具有继承性。
 *     
 * 5.通过反射获取注解信息 ---到反射内容时系统讲解
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token class-name">Annotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotations <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> annotations<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>annotations<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@MyAnnotation</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@MyAnnotation</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学习中……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;摸鱼中……&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span> <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">,</span><span class="token constant">TYPE_PARAMETER</span><span class="token punctuation">,</span><span class="token constant">TYPE_USE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6、利用反射获取注解信息" tabindex="-1"><a class="header-anchor" href="#_2-6、利用反射获取注解信息" aria-hidden="true">#</a> 2.6、利用反射获取注解信息</h2><ul><li>JDK 5.0 在<code>java.lang.reflect</code>包下新增了<code>AnnotatedElement</code>接口, 该接口代表程序中可以接受注解的程序元素</li><li>当一个<code>Annotation</code> 类型被定义为运行时<code>Annotation</code> 后, 该注解才是运行时可见, 当<code>class </code>文件被载入时保存在<code>class</code> 文件中的<code>Annotation</code> 才会被虚拟机读取</li><li>程序可以调用<code>AnnotatedElement</code>对象的如下方法来访问<code>Annotation</code> 信息</li></ul><h2 id="_2-7、jdk8新特性-可重复注解" tabindex="-1"><a class="header-anchor" href="#_2-7、jdk8新特性-可重复注解" aria-hidden="true">#</a> 2.7、jdk8新特性：可重复注解</h2><p>Java 8对注解处理提供了两点改进：可重复的注解及可用于类型的注解。此外，反射也得到了加强，在Java8中能够得到方法参数的名称。这会简化标注在方法参数上的注解。</p><blockquote><p>可重复注解示例：</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Retention</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RetentionPolicy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Target</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span> <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotations</span> <span class="token punctuation">{</span>

    <span class="token class-name">MyAnnotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Repeatable</span><span class="token punctuation">(</span><span class="token class-name">MyAnnotations</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span> <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">,</span><span class="token constant">TYPE_PARAMETER</span><span class="token punctuation">,</span><span class="token constant">TYPE_USE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Annotation</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 注解的使用
 *
 * 6.jdk 8 中注解的新特性：可重复注解、类型注解
 *
 *   6.1可重复注解：① 在MyAnnotation上声明@Repeatable，成员值为MyAnnotations.class
 *                ② MyAnnotation的Target和Retention等元注解与MyAnnotations相同。
 *
 *
 * <span class="token keyword">@author</span> subei
 * <span class="token keyword">@create</span> 2020-05-11 11:19
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//jdk 8之前的写法：</span>
<span class="token comment">//@MyAnnotations({@MyAnnotation(value=&quot;hi&quot;),@MyAnnotation(value=&quot;hi&quot;)})</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-8、jdk8新特性-类型注解" tabindex="-1"><a class="header-anchor" href="#_2-8、jdk8新特性-类型注解" aria-hidden="true">#</a> 2.8、jdk8新特性：类型注解</h2><ul><li>JDK1.8之后，关于元注解<code>@Target</code>的参数类型<code>ElementType</code>枚举值多了两个：<code>TYPE_PARAMETER,TYPE_USE</code>。</li><li>在Java8之前，注解只能是在声明的地方所使用，Java8开始，注解可以应用在任何地方。 <ul><li><code>ElementType.TYPE_PARAMETER</code>表示该注解能写在类型变量的声明语句中（如：泛型声明）。</li><li><code>ElementType.TYPE_USE</code>表示该注解能写在使用类型的任何语句中。</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 注解的使用
 *
 * 6.jdk 8 中注解的新特性：可重复注解、类型注解
 *
 *   6.1可重复注解：① 在MyAnnotation上声明@Repeatable，成员值为MyAnnotations.class
 *                ② MyAnnotation的Target和Retention等元注解与MyAnnotations相同。
 *
 *   6.2类型注解：
 *      ElementType.TYPE_PARAMETER 表示该注解能写在类型变量的声明语句中（如：泛型声明）。
 *      ElementType.TYPE_USE 表示该注解能写在使用类型的任何语句中。
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationTest</span> <span class="token punctuation">{</span>
 
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Generic</span><span class="token operator">&lt;</span><span class="token annotation punctuation">@MyAnnotation</span> <span class="token class-name">T</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token annotation punctuation">@MyAnnotation</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">{</span>

        <span class="token class-name">ArrayList</span><span class="token operator">&lt;</span><span class="token annotation punctuation">@MyAnnotation</span> <span class="token class-name">String</span><span class="token operator">&gt;</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token annotation punctuation">@MyAnnotation</span> <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">10L</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>MyAnnotation</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token constant">PARAMETER</span><span class="token punctuation">,</span> <span class="token constant">CONSTRUCTOR</span><span class="token punctuation">,</span> <span class="token constant">LOCAL_VARIABLE</span><span class="token punctuation">,</span><span class="token constant">TYPE_PARAMETER</span><span class="token punctuation">,</span><span class="token constant">TYPE_USE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","12枚举与注解.html.vue"]]);export{d as default};
