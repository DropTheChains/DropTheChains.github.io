import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-f9dd4f6a.js";const i={},t=e(`<h1 id="git常用命令汇总" tabindex="-1"><a class="header-anchor" href="#git常用命令汇总" aria-hidden="true">#</a> Git常用命令汇总</h1><h2 id="一、git安装后-指定名称和邮箱" tabindex="-1"><a class="header-anchor" href="#一、git安装后-指定名称和邮箱" aria-hidden="true">#</a> 一、Git安装后-指定名称和邮箱</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>
 
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;email@example.com&quot;</span>

<span class="token function">git</span> config user.name           //查看用户名
<span class="token function">git</span> config user.password       //查看密码
<span class="token function">git</span> config user.email          //查看邮箱
<span class="token function">git</span> config <span class="token parameter variable">--list</span>              //查看配置信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、创建本地仓库" tabindex="-1"><a class="header-anchor" href="#二、创建本地仓库" aria-hidden="true">#</a> 二、创建本地仓库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> learngit	//创建
$ <span class="token builtin class-name">cd</span> learngit	    //使用
$ <span class="token builtin class-name">pwd</span>	            //查看当前目录
$ <span class="token function">git</span> init	        //初始化，生成.git文件<span class="token punctuation">(</span>若该文件隐藏，则使用ls -ah<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、添加和提交" tabindex="-1"><a class="header-anchor" href="#三、添加和提交" aria-hidden="true">#</a> 三、添加和提交</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> test.txt	                 //添加
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;wrote a test file&quot;</span>	//提交
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add 3 files.&quot;</span>		//一次性提交多个文件

<span class="token function">git</span> status   命令用于查看项目的当前状态。

<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span> 添加项目根目录下的所有改动内容
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> 只添加当前目录已经子目录下的改动内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、版本控制" tabindex="-1"><a class="header-anchor" href="#四、版本控制" aria-hidden="true">#</a> 四、版本控制</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log	                //查看提交历史记录，从最近到最远，可以看到3次
$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline	//加参，简洁查看
$ <span class="token function">git</span> reflog	            //查看每一次修改历史
$ <span class="token function">cat</span> test.txt	            //查看文件内容
$ <span class="token function">git</span> status	            //查看工作区中文件当前状态


$ <span class="token function">git</span> reset HEAD^           // 回退所有内容到上一个版本  
$ <span class="token function">git</span> reset HEAD^ hello.php // 回退 hello.php 文件的版本到上一个版本  
$ <span class="token function">git</span>  reset  052e          // 回退到指定版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、删除文件" tabindex="-1"><a class="header-anchor" href="#五、删除文件" aria-hidden="true">#</a> 五、删除文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rm</span> test.txt
//直接删除
$ <span class="token function">git</span> <span class="token function">rm</span> test.txt
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;remove test.txt&quot;</span>
//删错了，恢复
$ <span class="token function">git</span> checkout -- test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、远程仓库" tabindex="-1"><a class="header-anchor" href="#六、远程仓库" aria-hidden="true">#</a> 六、远程仓库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;youremail@example.com&quot;</span>	//创建SSH Key

$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:Daisy/AKgit.git	//关联
$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master	//将本地内容推送到远程仓库（第一次）
$ <span class="token function">git</span> push origin master	//将本地内容推送到远程仓库（之后）

$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>        //查看远程仓库信息
$ <span class="token function">git</span> remote <span class="token function">rm</span> origin	//删除远程仓库（解绑）

$ <span class="token function">git</span> clone git@github.com: Daisy/AKgit.git	//克隆远程仓库
//克隆之后使用和查看
$ <span class="token builtin class-name">cd</span> gitskills
$ <span class="token function">ls</span>

$ <span class="token function">git</span> remote	//查看远程库的信息
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>	//查看远程库的详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、多人协作" tabindex="-1"><a class="header-anchor" href="#七、多人协作" aria-hidden="true">#</a> 七、多人协作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev	         //创建并切换到分支dev
   //创建并切换到分支dev，同上
$ <span class="token function">git</span> branch dev	             //创建
$ <span class="token function">git</span> checkout dev	             //切换
//新版本
$ <span class="token function">git</span> switch <span class="token parameter variable">-c</span> dev	             //创建并切换到分支dev
$ <span class="token function">git</span> switch master	             //直接切换分支


$ <span class="token function">git</span> branch		                //查看当前分支
$ <span class="token function">git</span> merge dev	（--no-ff）<span class="token punctuation">(</span>-m<span class="token punctuation">)</span>     //合并，把dev分支的工作成果合并到master分支上
$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> dev	                //删除dev分支 


$ <span class="token function">git</span> push origin master（dev）	    //推送分支
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev origin/dev	//创建远程origin的dev分支到本地
$ <span class="token function">git</span> pull	                        //抓取分支（解决冲突）
$ <span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/dev dev      //指定本地与远程dev的链接
$ <span class="token function">git</span> rebase	                     //把本地未push的分叉提交历史整理成直线

origin就是远程仓库的一个别名，当然也可以写成项目完整地址，但是这样显然比较麻烦
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、远程仓库本地仓库关联" tabindex="-1"><a class="header-anchor" href="#八、远程仓库本地仓库关联" aria-hidden="true">#</a> 八、远程仓库本地仓库关联</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、首先创建本地分支，并切换到本地分支
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 本地分支名 
<span class="token number">2</span>、提交本地分支到远程仓库
<span class="token function">git</span> push origin dev 将本地分支提交到了 远程dev分支  也就是创建了dev分支
<span class="token number">3</span>、本地分支与远程分支相关联
<span class="token function">git</span> branch –set-upstream 本地分支名 origin/远程分支名
fatal: the <span class="token string">&#39;--set-upstream&#39;</span> option is no longer supported. Please use <span class="token string">&#39;--track&#39;</span> or <span class="token string">&#39;--set-upstream-to&#39;</span> instead.

<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/dev dev 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[t];function c(d,r){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","Git命令汇总.html.vue"]]);export{u as default};
