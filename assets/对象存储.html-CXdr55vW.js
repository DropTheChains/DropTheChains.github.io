import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as i,o as e}from"./app-AJJlDVrO.js";const l={};function p(d,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="minio对象存储" tabindex="-1"><a class="header-anchor" href="#minio对象存储"><span>MinIO对象存储</span></a></h1><h2 id="什么是对象存储" tabindex="-1"><a class="header-anchor" href="#什么是对象存储"><span>什么是对象存储？</span></a></h2><p>对象存储（Object Storage Service，OSS），也叫基于对象的存储，是一种解决和处理离散单元的方法，可提供基于分布式系统之上的对象形式的数据存储服务。</p><h2 id="minio安装" tabindex="-1"><a class="header-anchor" href="#minio安装"><span>MinIO安装</span></a></h2><p>官方文档：<a href="https://www.minio.org.cn/" target="_blank" rel="noopener noreferrer">MinIO | 高性能、支持原生 Kubernetes的对象存储</a></p><p>推荐使用docker进行部署：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1、拉取docker镜像</span></span>
<span class="line"><span>docker pull minio/minio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、设置minio用到的文件路径</span></span>
<span class="line"><span>mkdir minio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>进入minio目录</span></span>
<span class="line"><span>cd minio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建minio数据目录</span></span>
<span class="line"><span>mkdir data </span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建minio配置目录</span></span>
<span class="line"><span>mkdir config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3、启动服务</span></span>
<span class="line"><span>账号密码是：admin  admin123  </span></span>
<span class="line"><span>单独设置console端口</span></span>
<span class="line"><span>docker run --name minio \\</span></span>
<span class="line"><span>-p 9000:9000 \\</span></span>
<span class="line"><span>-p 9999:9999 \\</span></span>
<span class="line"><span>-d --restart=always \\</span></span>
<span class="line"><span>-e &quot;MINIO_ROOT_USER=admin&quot; \\    </span></span>
<span class="line"><span>-e &quot;MINIO_ROOT_PASSWORD=admin123&quot; \\</span></span>
<span class="line"><span>-v /home/minio/data:/data \\</span></span>
<span class="line"><span>-v /home/minio/config:/root/.minio \\</span></span>
<span class="line"><span>minio/minio server /data \\</span></span>
<span class="line"><span>--console-address &#39;0.0.0.0:9999&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4、防火墙设置</span></span>
<span class="line"><span>firewall-cmd --zone=public --add-port=9000/tcp --permanent</span></span>
<span class="line"><span>firewall-cmd --zone=public --add-port=9999/tcp --permanent</span></span>
<span class="line"><span>firewall-cmd --reload</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5、登录客户端</span></span>
<span class="line"><span>使用刚刚的console-address的9999端口去登录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里网页的端口是9999，而api访问的端口就是9000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ok这样就完成了</p><figure><img src="https://raw.githubusercontent.com/DropTheChains/blog-img/main/img/202312072336277.png" alt="image-20231206145413222" tabindex="0" loading="lazy"><figcaption>image-20231206145413222</figcaption></figure><h2 id="使用java操作minio" tabindex="-1"><a class="header-anchor" href="#使用java操作minio"><span>使用Java操作minio</span></a></h2><p>maven导入</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;io.minio&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;minio&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;8.4.3&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API测试代码 上传文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) throws IOException, ServerException, InsufficientDataException, ErrorResponseException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {</span></span>
<span class="line"><span>        System.out.println(&quot;Hello world!&quot;);</span></span>
<span class="line"><span>        MinioClient client = MinioClient.builder()</span></span>
<span class="line"><span>                .endpoint(&quot;http://localhost:9000&quot;)</span></span>
<span class="line"><span>                .credentials(&quot;admin&quot;,&quot;admin123&quot;)</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>        File file = new File(&quot;C:\\\\Users\\\\Chains\\\\Downloads\\\\头像.jpg&quot;);</span></span>
<span class="line"><span>        FileInputStream stream = new FileInputStream(file);</span></span>
<span class="line"><span>        PutObjectArgs put = PutObjectArgs.builder()</span></span>
<span class="line"><span>                .bucket(&quot;springboot-vue3-jwt&quot;)</span></span>
<span class="line"><span>                .object(&quot;test.jpg&quot;)</span></span>
<span class="line"><span>                .stream(stream,file.length(),-1)</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        client.putObject(put);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用springboot3-0-集成minio" tabindex="-1"><a class="header-anchor" href="#使用springboot3-0-集成minio"><span>使用SpringBoot3.0 集成MinIO</span></a></h2><p>第一部添加maven依赖</p><p>编辑配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class MinioConfiguration {</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public MinioClient minioClient(){</span></span>
<span class="line"><span>        MinioClient client = MinioClient.builder()</span></span>
<span class="line"><span>                .endpoint(&quot;http://localhost:9000&quot;)</span></span>
<span class="line"><span>                .credentials(&quot;admin&quot;,&quot;admin123&quot;)</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>        return client;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写文件上传下载接口</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.minio.controller;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import io.minio.GetObjectArgs;</span></span>
<span class="line"><span>import io.minio.GetObjectResponse;</span></span>
<span class="line"><span>import io.minio.MinioClient;</span></span>
<span class="line"><span>import io.minio.PutObjectArgs;</span></span>
<span class="line"><span>import io.minio.errors.*;</span></span>
<span class="line"><span>import jakarta.annotation.Resource;</span></span>
<span class="line"><span>import jakarta.servlet.ServletOutputStream;</span></span>
<span class="line"><span>import jakarta.servlet.http.HttpServletResponse;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.*;</span></span>
<span class="line"><span>import org.springframework.web.multipart.MultipartFile;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.io.InputStream;</span></span>
<span class="line"><span>import java.security.InvalidKeyException;</span></span>
<span class="line"><span>import java.security.NoSuchAlgorithmException;</span></span>
<span class="line"><span>import java.util.UUID;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/&quot;)</span></span>
<span class="line"><span>public class FileController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    MinioClient client;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping(&quot;upload&quot;)</span></span>
<span class="line"><span>    public String upload(@RequestParam(&quot;file&quot;)MultipartFile file) throws IOException, ServerException, InsufficientDataException, ErrorResponseException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {</span></span>
<span class="line"><span>        InputStream inputStream = file.getInputStream();</span></span>
<span class="line"><span>        String name = UUID.randomUUID().toString();</span></span>
<span class="line"><span>        PutObjectArgs put = PutObjectArgs.builder()</span></span>
<span class="line"><span>                .bucket(&quot;test&quot;)</span></span>
<span class="line"><span>                .object(&quot;upload/&quot;+name)</span></span>
<span class="line"><span>                .stream(inputStream, file.getSize(), -1)</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>        client.putObject(put);</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @GetMapping(&quot;download/{name}&quot;)</span></span>
<span class="line"><span>    public void download(@PathVariable(&quot;name&quot;) String name, HttpServletResponse response) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {</span></span>
<span class="line"><span>        GetObjectResponse object = client.getObject(GetObjectArgs.builder().bucket(&quot;test&quot;).object(&quot;upload/&quot; + name).build());</span></span>
<span class="line"><span>        ServletOutputStream outputStream = response.getOutputStream();</span></span>
<span class="line"><span>        outputStream.write(object.readAllBytes());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)]))}const t=s(l,[["render",p],["__file","对象存储.html.vue"]]),o=JSON.parse(`{"path":"/notes/%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8.html","title":"MinIO对象存储","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"什么是对象存储？","slug":"什么是对象存储","link":"#什么是对象存储","children":[]},{"level":2,"title":"MinIO安装","slug":"minio安装","link":"#minio安装","children":[]},{"level":2,"title":"使用Java操作minio","slug":"使用java操作minio","link":"#使用java操作minio","children":[]},{"level":2,"title":"使用SpringBoot3.0 集成MinIO","slug":"使用springboot3-0-集成minio","link":"#使用springboot3-0-集成minio","children":[]}],"git":{"createdTime":1726544741000,"updatedTime":1726544741000,"contributors":[{"name":"Chains","email":"dropthechains@outlook.com","commits":1}]},"readingTime":{"minutes":1.81,"words":542},"filePathRelative":"notes/对象存储.md","localizedDate":"2024年9月17日","excerpt":"\\n<h2>什么是对象存储？</h2>\\n<p>对象存储（Object Storage Service，OSS），也叫基于对象的存储，是一种解决和处理离散单元的方法，可提供基于分布式系统之上的对象形式的数据存储服务。</p>\\n<h2>MinIO安装</h2>\\n<p>官方文档：<a href=\\"https://www.minio.org.cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MinIO | 高性能、支持原生 Kubernetes的对象存储</a></p>\\n<p>推荐使用docker进行部署：</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>1、拉取docker镜像</span></span>\\n<span class=\\"line\\"><span>docker pull minio/minio</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>2、设置minio用到的文件路径</span></span>\\n<span class=\\"line\\"><span>mkdir minio</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>进入minio目录</span></span>\\n<span class=\\"line\\"><span>cd minio</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>创建minio数据目录</span></span>\\n<span class=\\"line\\"><span>mkdir data </span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>创建minio配置目录</span></span>\\n<span class=\\"line\\"><span>mkdir config</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>3、启动服务</span></span>\\n<span class=\\"line\\"><span>账号密码是：admin  admin123  </span></span>\\n<span class=\\"line\\"><span>单独设置console端口</span></span>\\n<span class=\\"line\\"><span>docker run --name minio \\\\</span></span>\\n<span class=\\"line\\"><span>-p 9000:9000 \\\\</span></span>\\n<span class=\\"line\\"><span>-p 9999:9999 \\\\</span></span>\\n<span class=\\"line\\"><span>-d --restart=always \\\\</span></span>\\n<span class=\\"line\\"><span>-e \\"MINIO_ROOT_USER=admin\\" \\\\    </span></span>\\n<span class=\\"line\\"><span>-e \\"MINIO_ROOT_PASSWORD=admin123\\" \\\\</span></span>\\n<span class=\\"line\\"><span>-v /home/minio/data:/data \\\\</span></span>\\n<span class=\\"line\\"><span>-v /home/minio/config:/root/.minio \\\\</span></span>\\n<span class=\\"line\\"><span>minio/minio server /data \\\\</span></span>\\n<span class=\\"line\\"><span>--console-address '0.0.0.0:9999'</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>4、防火墙设置</span></span>\\n<span class=\\"line\\"><span>firewall-cmd --zone=public --add-port=9000/tcp --permanent</span></span>\\n<span class=\\"line\\"><span>firewall-cmd --zone=public --add-port=9999/tcp --permanent</span></span>\\n<span class=\\"line\\"><span>firewall-cmd --reload</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>5、登录客户端</span></span>\\n<span class=\\"line\\"><span>使用刚刚的console-address的9999端口去登录</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>这里网页的端口是9999，而api访问的端口就是9000</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{t as comp,o as data};
