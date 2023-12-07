import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as d,a as i,b as e,e as a,f as r}from"./app-f9dd4f6a.js";const o={},v=i("h2",{id:"什么是对象存储",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#什么是对象存储","aria-hidden":"true"},"#"),e(" 什么是对象存储？")],-1),c=i("p",null,"对象存储（Object Storage Service，OSS），也叫基于对象的存储，是一种解决和处理离散单元的方法，可提供基于分布式系统之上的对象形式的数据存储服务。",-1),u=i("h2",{id:"minio安装",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#minio安装","aria-hidden":"true"},"#"),e(" MinIO安装")],-1),m={href:"https://www.minio.org.cn/",target:"_blank",rel:"noopener noreferrer"},b=r(`<p>推荐使用docker进行部署：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、拉取docker镜像
docker pull minio/minio

2、设置minio用到的文件路径
mkdir minio

进入minio目录
cd minio

创建minio数据目录
mkdir data 

创建minio配置目录
mkdir config

3、启动服务
账号密码是：admin  admin123  
单独设置console端口
docker run --name minio \\
-p 9000:9000 \\
-p 9999:9999 \\
-d --restart=always \\
-e &quot;MINIO_ROOT_USER=admin&quot; \\    
-e &quot;MINIO_ROOT_PASSWORD=admin123&quot; \\
-v /home/minio/data:/data \\
-v /home/minio/config:/root/.minio \\
minio/minio server /data \\
--console-address &#39;0.0.0.0:9999&#39;

4、防火墙设置
firewall-cmd --zone=public --add-port=9000/tcp --permanent
firewall-cmd --zone=public --add-port=9999/tcp --permanent
firewall-cmd --reload

5、登录客户端
使用刚刚的console-address的9999端口去登录

这里网页的端口是9999，而api访问的端口就是9000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ok这样就完成了</p><figure><img src="https://raw.githubusercontent.com/DropTheChains/blog-img/main/img/202312072336277.png" alt="image-20231206145413222" tabindex="0" loading="lazy"><figcaption>image-20231206145413222</figcaption></figure><h2 id="使用java操作minio" tabindex="-1"><a class="header-anchor" href="#使用java操作minio" aria-hidden="true">#</a> 使用Java操作minio</h2><p>maven导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.minio&lt;/groupId&gt;
    &lt;artifactId&gt;minio&lt;/artifactId&gt;
    &lt;version&gt;8.4.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API测试代码 上传文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Main {
    public static void main(String[] args) throws IOException, ServerException, InsufficientDataException, ErrorResponseException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
        System.out.println(&quot;Hello world!&quot;);
        MinioClient client = MinioClient.builder()
                .endpoint(&quot;http://localhost:9000&quot;)
                .credentials(&quot;admin&quot;,&quot;admin123&quot;)
                .build();
        File file = new File(&quot;C:\\\\Users\\\\Chains\\\\Downloads\\\\头像.jpg&quot;);
        FileInputStream stream = new FileInputStream(file);
        PutObjectArgs put = PutObjectArgs.builder()
                .bucket(&quot;springboot-vue3-jwt&quot;)
                .object(&quot;test.jpg&quot;)
                .stream(stream,file.length(),-1)
                .build();

        client.putObject(put);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用springboot3-0-集成minio" tabindex="-1"><a class="header-anchor" href="#使用springboot3-0-集成minio" aria-hidden="true">#</a> 使用SpringBoot3.0 集成MinIO</h2><p>第一部添加maven依赖</p><p>编辑配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class MinioConfiguration {
    @Bean
    public MinioClient minioClient(){
        MinioClient client = MinioClient.builder()
                .endpoint(&quot;http://localhost:9000&quot;)
                .credentials(&quot;admin&quot;,&quot;admin123&quot;)
                .build();
        return client;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写文件上传下载接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.example.minio.controller;

import io.minio.GetObjectArgs;
import io.minio.GetObjectResponse;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.errors.*;
import jakarta.annotation.Resource;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

@RestController
@RequestMapping(&quot;/&quot;)
public class FileController {

    @Resource
    MinioClient client;

    @PostMapping(&quot;upload&quot;)
    public String upload(@RequestParam(&quot;file&quot;)MultipartFile file) throws IOException, ServerException, InsufficientDataException, ErrorResponseException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
        InputStream inputStream = file.getInputStream();
        String name = UUID.randomUUID().toString();
        PutObjectArgs put = PutObjectArgs.builder()
                .bucket(&quot;test&quot;)
                .object(&quot;upload/&quot;+name)
                .stream(inputStream, file.getSize(), -1)
                .build();
        client.putObject(put);
        return name;
    }
    @GetMapping(&quot;download/{name}&quot;)
    public void download(@PathVariable(&quot;name&quot;) String name, HttpServletResponse response) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
        GetObjectResponse object = client.getObject(GetObjectArgs.builder().bucket(&quot;test&quot;).object(&quot;upload/&quot; + name).build());
        ServletOutputStream outputStream = response.getOutputStream();
        outputStream.write(object.readAllBytes());
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function p(g,h){const n=s("ExternalLinkIcon");return t(),d("div",null,[v,c,u,i("p",null,[e("官方文档："),i("a",m,[e("MinIO | 高性能、支持原生 Kubernetes的对象存储"),a(n)])]),b])}const q=l(o,[["render",p],["__file","对象存储.html.vue"]]);export{q as default};
