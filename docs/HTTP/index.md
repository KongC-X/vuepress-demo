---
title: HTTP
---

# HTTP

## HTTP 简介

HTTP 协议是 Hyper Text Transfer Protocol（超文本传输协议）的缩写,是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。

**HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范**。

HTTP 是一个基于 TCP/IP 通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTIyMzEzMy0xMzAwNDA2NjE4LnBuZw?x-oss-process=image/format,png)

按照范围的大小 协议 > 传输 > 超文本。

### 什么是超文本

在互联网早期的时候，我们输入的信息只能保存在本地，无法和其他电脑进行交互。我们保存的信息通常都以`文本`即简单字符的形式存在，文本是一种能够被计算机解析的有意义的二进制数据包。而随着互联网的高速发展，两台电脑之间能够进行数据的传输后，人们不满足只能在两台电脑之间传输文字，还想要传输图片、音频、视频，甚至点击文字或图片能够进行`超链接`的跳转，那么文本的语义就被扩大了，这种语义扩大后的文本就被称为`超文本(Hypertext)`。

### 什么是传输

那么我们上面说到，两台计算机之间会形成互联关系进行通信，我们存储的超文本会被解析成为二进制数据包，由传输载体（例如同轴电缆，电话线，光缆）负责把二进制数据包由计算机终端传输到另一个终端的过程，称为`传输(transfer)`。

通常我们把传输数据包的一方称为`请求方`，把接到二进制数据包的一方称为`应答方`。请求方和应答方可以进行互换，请求方也可以作为应答方接受数据，应答方也可以作为请求方请求数据

### 什么是协议

协议这个名词不仅局限于互联网范畴，也体现在日常生活中，比如情侣双方约定好在哪个地点吃饭，这个约定也是一种`协议`，比如你应聘成功了，企业会和你签订劳动合同，这种双方的雇佣关系也是一种 `协议`。注意自己一个人对自己的约定不能成为协议，协议的前提条件必须是多人约定。

**协议（protocol）定义了在两个或多个通信实体之间交换报文的格式和顺序，以及报文发送和/或接受一条报文或其他事件所采取的动作**。

那么网络协议是什么呢？

网络协议就是网络中(包括互联网)传递、管理信息的一些规范。如同人与人之间相互交流是需要遵循一定的规矩一样，计算机之间的相互通信需要共同遵守一定的规则，这些规则就称为网络协议。

## HTTP 工作原理

HTTP 协议工作于客户端-服务端架构上。浏览器作为 HTTP 客户端通过 URL 向 HTTP 服务端即 WEB 服务器发送所有请求。

Web 服务器有：Apache 服务器，Nginx，IIS 服务器（Internet Information Services）等。

Web 服务器根据接收到的请求后，向客户端发送响应信息。

HTTP 默认端口号为 80，但是你也可以改为 8080 或者其他端口。

**HTTP 三点注意事项：**

- HTTP 是无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。
- HTTP 是媒体独立的：这意味着，只要客户端和服务器知道如何处理的数据内容，任何类型的数据都可以通过 HTTP 发送。客户端以及服务器指定使用适合的 MIME-type 内容类型。
- HTTP 是无状态：HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。

## HTTP 消息结构

HTTP 是基于客户端/服务端（C/S）的架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。

一个 HTTP"客户端"是一个应用程序（Web 浏览器或其他任何客户端），通过连接到服务器达到向服务器发送一个或多个 HTTP 的请求的目的。

一个 HTTP"服务器"同样也是一个应用程序（通常是一个 Web 服务，如 Apache Web 服务器或 IIS 服务器等），通过接收客户端的请求并向客户端发送 HTTP 响应数据。

HTTP 使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。

一旦建立连接后，数据消息就通过类似 Internet 邮件所使用的格式[RFC5322]和多用途 Internet 邮件扩展（MIME）[RFC2045]来传送。

### 客户端请求消息

客户端发送一个 HTTP 请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成，下图给出了请求报文的一般格式。

![img](https://www.runoob.com/wp-content/uploads/2013/11/2012072810301161.png)

### 服务器响应消息

HTTP 响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。

其中起始行和头部字段并成为 `请求头` 或者 `响应头`，统称为 `Header`；消息正文也叫做实体，称为 `body`。HTTP 协议规定每次发送的报文必须要有 Header，但是可以没有 body，也就是说头信息是必须的，实体信息可以没有。而且在 header 和 body 之间必须要有一个空行（CRLF）

![img](https://www.runoob.com/wp-content/uploads/2013/11/httpmessage.jpg)

### 请求头部

```http
Host: www.someschool.edu
Connection: close
User-agent: Mozilla/5.0
Accept-language: fr
```

这个请求头信息比较少，首先 Host 表示的是对象所在的主机。你也许认为这个 Host 是不需要的，因为 URL 不是已经指明了请求对象的路径了吗？这个首部行提供的信息是 `Web 代理高速缓存`所需要的。`Connection: close` 表示的是浏览器需要告诉服务器使用的是`非持久连接`。它要求服务器在发送完响应的对象后就关闭连接。`User-agent`: 这是请求头用来告诉 Web 服务器，浏览器使用的类型是 `Mozilla/5.0`，即 Firefox 浏览器。`Accept-language` 告诉 Web 服务器，浏览器想要得到对象的法语版本，前提是服务器需要支持法语类型，否则将会发送服务器的默认版本。

HTTP 的请求标头分为四种： `通用标头`、`请求标头`、`响应标头` 和 `实体标头`

#### 通用标头

通用标头主要有三个，分别是 `Date`、`Cache-Control` 和 `Connection`

Date 是一个通用标头，它可以出现在请求标头和响应标头中

```http
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

Cache-Control 是一个通用标头，他可以出现在请求标头和响应标头中，Cache-Control 的种类比较多，虽然说这是一个通用标头，但是又一些特性是请求标头具有的，有一些是响应标头才有的。主要大类有 `可缓存性`、`阈值性`、 `重新验证并重新加载` 和`其他特性`

Connection 决定当前事务（一次三次握手和四次挥手）完成后，是否会关闭网络连接。Connection 有两种，一种是`持久性连接`，即一次事务完成后不关闭网络连接

```http
Connection: keep-alive
```

另一种是`非持久性连接`，即一次事务完成后关闭网络连接

```http
Connection: close
```

HTTP1.1 其他通用标头如下

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTYwNDU2MC04MjQ2NTk1OC5wbmc?x-oss-process=image/format,png)

#### 实体标头

实体标头是描述消息正文内容的 HTTP 标头。实体标头用于 HTTP 请求和响应中。头部`Content-Length`、 `Content-Language`、 `Content-Encoding` 是实体头。

- Content-Length 实体报头指示实体主体的大小，以字节为单位，发送到接收方。
- Content-Language 实体报头描述了客户端或者服务端能够接受的语言，例如

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

- Content-Encoding 这又是一个比较麻烦的属性，这个实体报头用来压缩媒体类型。Content-Encoding 指示对实体应用了何种编码。

  常见的内容编码有这几种： **gzip、compress、deflate、identity** ，这个属性可以应用在请求报文和响应报文中

```http
Accept-Encoding: gzip, deflate //请求头
Content-Encoding: gzip  //响应头

```

下面是一些实体标头字段

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTYxMzkwNi0xNjU4OTMyODU3LnBuZw?x-oss-process=image/format,png)

#### 请求标头

```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

**Host**

Host 请求头指明了服务器的域名（对于虚拟主机来说），以及（可选的）服务器监听的 TCP 端口号。如果没有给定端口号，会自动使用被请求服务的默认端口（比如请求一个 HTTP 的 URL 会自动使用 80 作为端口）。

```http
Host: developer.mozilla.org
```

上面的 `Accpet`、 `Accept-Language`、`Accept-Encoding` 都是属于内容协商的请求标头，我们会在下面说明

**Referer**

HTTP Referer 属性是请求标头的一部分，当浏览器向 web 服务器发送请求的时候，一般会带上 Referer，告诉服务器该网页是从哪个页面链接过来的，服务器因此可以获得一些信息用于处理。

```http
Referer: https://developer.mozilla.org/testpage.html
```

**Upgrade-Insecure-Requests**

Upgrade-Insecure-Requests 是一个请求标头，用来向服务器端发送信号，表示客户端优先选择加密及带有身份验证的响应。

```http
Upgrade-Insecure-Requests: 1
```

**If-Modified-Since**

HTTP 的 If-Modified-Since 使其成为`条件请求`：

- 返回 200，只有在给定日期的最后一次修改资源后，服务器才会以 200 状态发送回请求的资源。
- 如果请求从开始以来没有被修改过，响应会返回 304 并且没有任何响应体

If-Modified-Since 通常会与 If-None-Match 搭配使用，If-Modified-Since 用于确认代理或客户端拥有的本地资源的有效性。获取资源的更新日期时间，可通过确认首部字段 `Last-Modified` 来确定。

大白话说就是如果在 `Last-Modified` 之后更新了服务器资源，那么服务器会响应 200，如果在 `Last-Modified` 之后没有更新过资源，则返回 304。

```http
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
```

**If-None-Match**

If-None-Match HTTP 请求标头使请求成为条件请求。 对于 GET 和 HEAD 方法，仅当服务器没有与给定资源匹配的 `ETag` 时，服务器才会以 200 状态发送回请求的资源。 对于其他方法，仅当最终现有资源的`ETag`与列出的任何值都不匹配时，才会处理请求。

```http
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
```

ETag 属于响应标头，后面进行介绍。

#### 内容协商

内容协商机制是指客户端和服务器端就响应的资源内容进行交涉，然后提供给客户端最为适合的资源。内容协商会以响应资源的语言、字符集、编码方式等作为判断的标准。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTYzMDM2Ni0xNTYyODgwODYyLnBuZw?x-oss-process=image/format,png)

内容协商主要有以下 3 种类型：

- `服务器驱动协商（Server-driven Negotiation）`

这种协商方式是由服务器端进行内容协商。服务器端会根据请求首部字段进行自动处理

- `客户端驱动协商（Agent-driven Negotiation）`

这种协商方式是由客户端来进行内容协商。

- `透明协商（Transparent Negotiation）`

是服务器驱动和客户端驱动的结合体，是由服务器端和客户端各自进行内容协商的一种方法。

内容协商的分类有很多种，主要的几种类型是 **Accept、Accept-Charset、Accept-Encoding、Accept-Language、Content-Language**。

##### 为什么需要内容协商

我们为什么需要内容协商呢？在回答这个问题前我们先来看一下 TCP 和 HTTP 的不同。

在 TCP / IP 协议栈里，传输数据基本上都是 `header+body` 的格式。但 TCP、UDP 因为是传输层的协议，它们不会关心 body 数据是什么，只要把数据发送到对方就算是完成了任务。

而 HTTP 协议则不同，它是应用层的协议，数据到达之后需要告诉应用程序这是什么数据。当然不告诉应用这是哪种类型的数据，应用也可以通过不断尝试来判断，但这种方式无疑十分低效，而且有很大几率会检查不出来文件类型。

所以鉴于此，浏览器和服务器需要就数据的传输达成一致，浏览器需要告诉服务器自己希望能够接收什么样的数据，需要什么样的压缩格式，什么语言，哪种字符集等；而服务器需要告诉客户端自己能够提供的服务是什么。

#### 响应标头

响应标头是可以在 HTTP 响应种使用的 HTTP 标头，这听起来是像一句废话，不过确实是这样解释。并不是所有出现在响应中的标头都是响应标头。还有一些特殊的我们上面说过，有通用标头和实体标头也会出现在响应标头中，比如 `Content-Length` 就是一个实体标头，但是，在这种情况下，这些实体请求通常称为响应头。

```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
x-frame-options: DENY

```

**响应状态码**

首先出现的应该就是 `200 OK`，这是 HTTP 响应标头的状态码，它表示着响应成功完成。

**Access-Control-Allow-Origin**

一个返回的 HTTP 标头可能会具有 Access-Control-Allow-Origin ，`Access-Control-Allow-Origin` 指定一个来源，它告诉浏览器允许该来源进行资源访问。 否则-对于没有凭据的请求 `*`通配符，告诉浏览器允许任何源访问资源。例如，要允许源 `https://mozilla.org` 的代码访问资源，可以指定：

```http
Access-Control-Allow-Origin: https://mozilla.org
Vary: Origin
```

如果服务器指定单个来源而不是 `*`通配符的话 ，则服务器还应在 Vary 响应标头中包含 `Origin` ，以向客户端指示 服务器响应将根据原始请求标头的值而有所不同。

**Keep-Alive**

上面我们提到，HTTP 报文标头会分为四种，这其实是按着`上下文`来分类的

还有一种分类是根据`代理`进行分类，根据代理会分为`端到端头` 和 `逐跳标头`

而 Keep-Alive 表示的是 Connection 非持续连接的存活时间，如下

```http
Connection: Keep-Alive
Keep-Alive: timeout=5, max=997
```

Keep-Alive 有两个参数，它们是以逗号分隔的参数列表，每个参数由一个标识符和一个由等号 = 分隔的值组成。

`timeout`：指示空闲连接必须保持打开状态的最短时间（以秒为单位）。

`max`：指示在关闭连接之前可以在此连接上发送的最大请求数。

上述 HTTP 代码的意思就是限制最大的超时时间是 5s 和 最大的连接请求是 997 个。

**Server**

服务器标头包含有关原始服务器用来处理请求的软件的信息。

应该避免使用过于冗长和详细的 Server 值，因为它们可能会泄露内部实施细节，这可能会使攻击者容易地发现并利用已知的安全漏洞。例如下面这种写法

```http
Server: Apache/2.4.1 (Unix)
```

**Set-Cookie**

Cookie 又是另外一个领域的内容了，我们后面文章会说道 Cookie，这里需要记住 Cookie、Set-Cookie 和 Content-Disposition 等在其他 RFC 中定义的首部字段，它们不是属于 HTTP 1.1 的首部字段，但是使用率仍然很高。

**Transfer-Encoding**

首部字段 Transfer-Encoding 规定了传输报文主体时采用的编码方式。

```http
Transfer-Encoding: chunked
```

HTTP /1.1 的传输编码方式仅对分块传输编码有效。

**X-Frame-Options**

HTTP 首部字段是可以自行扩展的。所以在 Web 服务器和浏览器的应用上，会出现各种非标准的首部字段。

首部字段 `X-Frame-Options` 属于 HTTP 响应首部，用于控制网站内容在其他 Web 网站的 Frame 标签内的显示问题。其主要目的是为了防止点击劫持（clickjacking）攻击。

## HTTP 请求响应过程

我们假设访问的 URL 地址为 `http://www.someSchool.edu/someDepartment/home.index`，当我们输入网址点

击回车时，浏览器内部会进行如下操作

- DNS 服务器会首先进行域名的映射，找到访问`www.someSchool.edu`所在的地址，然后 HTTP 客户端进程在

  80 端口发起一个到服务器 `www.someSchool.edu` 的 TCP 连接（80 端口是 HTTP 的默认端口）。在客户和服

  务器进程中都会有一个`套接字`与其相连。

- HTTP 客户端通过它的套接字向服务器发送一个 HTTP 请求报文。该报文中包含了路径

  `someDepartment/home.index` 的资源，我们后面会详细讨论 HTTP 请求报文。

- HTTP 服务器通过它的套接字接受该报文，进行请求的解析工作，并从其`存储器(RAM 或磁盘)`中检索出对象 `www.someSchool.edu/someDepartment/home.index`，然后把检索出来的对象进行封装，封装到 HTTP 响应

  报文中，并通过套接字向客户进行发送。

- HTTP 服务器随即通知 TCP 断开 TCP 连接，实际上是需要等到客户接受完响应报文后才会断开 TCP 连接。

- HTTP 客户端接受完响应报文后，TCP 连接会关闭。HTTP 客户端从响应中提取出报文中是一个 HTML 响应文

  件，并检查该 HTML 文件，然后循环检查报文中其他内部对象。

- 检查完成后，HTTP 客户端会把对应的资源通过显示器呈现给用户。

至此，键入网址再按下回车的全过程就结束了。上述过程描述的是一种简单的`请求-响应`全过程，真实的请求-响应

情况可能要比上面描述的过程复杂很多。

## HTTP 请求方法

根据 HTTP 标准，HTTP 请求可以使用多种请求方法。

HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD 方法。

HTTP1.1 新增了六种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 和 CONNECT 方法。

| 序号 | 方法    | 描述                                                                                                                                     |
| :--- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | GET     | 请求指定的页面信息，并返回实体主体。                                                                                                     |
| 2    | HEAD    | 类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头                                                                          |
| 3    | POST    | 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改。 |
| 4    | PUT     | 从客户端向服务器传送的数据取代指定的文档的内容。                                                                                         |
| 5    | DELETE  | 请求服务器删除指定的页面。                                                                                                               |
| 6    | CONNECT | HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。                                                                                |
| 7    | OPTIONS | 允许客户端查看服务器的性能。                                                                                                             |
| 8    | TRACE   | 回显服务器收到的请求，主要用于测试或诊断。                                                                                               |
| 9    | PATCH   | 是对 PUT 方法的补充，用来对已知资源进行局部更新 。                                                                                       |

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTQzMDE5My0xNTU5MTYwNTg4LnBuZw?x-oss-process=image/format,png)

## HTTP 响应头信息

HTTP 请求头提供了关于请求，响应或者其他的发送实体的信息。

| 应答头           | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allow            | 服务器支持哪些请求方法（如 GET、POST 等）。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Content-Encoding | 文档的编码（Encode）方法。只有在解码之后才可以得到 Content-Type 头指定的内容类型。利用 gzip 压缩文档能够显著地减少 HTML 文档的下载时间。Java 的 GZIPOutputStream 可以很方便地进行 gzip 压缩，但只有 Unix 上的 Netscape 和 Windows 上的 IE 4、IE 5 才支持它。因此，Servlet 应该通过查看 Accept-Encoding 头（即 request.getHeader("Accept-Encoding")）检查浏览器是否支持 gzip，为支持 gzip 的浏览器返回经 gzip 压缩的 HTML 页面，为其他浏览器返回普通页面。                                                                                                                                                                                                                                                                                                          |
| Content-Length   | 表示内容长度。只有当浏览器使用持久 HTTP 连接时才需要这个数据。如果你想要利用持久连接的优势，可以把输出文档写入 ByteArrayOutputStream，完成后查看其大小，然后把该值放入 Content-Length 头，最后通过 byteArrayStream.writeTo(response.getOutputStream()发送内容。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Content-Type     | 表示后面的文档属于什么 MIME 类型。Servlet 默认为 text/plain，但通常需要显式地指定为 text/html。由于经常要设置 Content-Type，因此 HttpServletResponse 提供了一个专用的方法 setContentType。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Date             | 当前的 GMT 时间。你可以用 setDateHeader 来设置这个头以避免转换时间格式的麻烦。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Expires          | 应该在什么时候认为文档已经过期，从而不再缓存它？                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Last-Modified    | 文档的最后改动时间。客户可以通过 If-Modified-Since 请求头提供一个日期，该请求将被视为一个条件 GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个 304（Not Modified）状态。Last-Modified 也可用 setDateHeader 方法来设置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Location         | 表示客户应当到哪里去提取文档。Location 通常不是直接设置的，而是通过 HttpServletResponse 的 sendRedirect 方法，该方法同时设置状态代码为 302。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Refresh          | 表示浏览器应该在多少时间之后刷新文档，以秒计。除了刷新当前文档之外，你还可以通过 setHeader("Refresh", "5; URL=http://host/path")让浏览器读取指定的页面。 注意这种功能通常是通过设置 HTML 页面 HEAD 区的＜ META HTTP-EQUIV="Refresh" CONTENT="5;URL=http://host/path"＞实现，这是因为，自动刷新或重定向对于那些不能使用CGI或Servlet的HTML编写者十分重要。但是，对于Servlet来说，直接设置Refresh头更加方便。 注意 Refresh 的意义是"N 秒之后刷新本页面或访问指定页面"，而不是"每隔 N 秒刷新本页面或访问指定页面"。因此，连续刷新要求每次都发送一个 Refresh 头，而发送 204 状态代码则可以阻止浏览器继续刷新，不管是使用 Refresh 头还是＜ META HTTP-EQUIV="Refresh" ...＞。 注意 Refresh 头不属于 HTTP 1.1 正式规范的一部分，而是一个扩展，但 Netscape 和 IE 都支持它。 |
| Server           | 服务器名字。Servlet 一般不设置这个值，而是由 Web 服务器自己设置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Set-Cookie       | 设置和页面关联的 Cookie。Servlet 不应使用 response.setHeader("Set-Cookie", ...)，而是应使用 HttpServletResponse 提供的专用方法 addCookie。参见下文有关 Cookie 设置的讨论。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| WWW-Authenticate | 客户应该在 Authorization 头中提供什么类型的授权信息？在包含 401（Unauthorized）状态行的应答中这个头是必需的。例如，response.setHeader("WWW-Authenticate", "BASIC realm=＼"executives＼"")。 注意 Servlet 一般不进行这方面的处理，而是让 Web 服务器的专门机制来控制受密码保护页面的访问（例如.htaccess）。                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## HTTP 状态码

当浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含 HTTP 状态码的信息头（server header）用以响应浏览器的请求。

HTTP 状态码的英文为 HTTP Status Code。

下面是常见的 HTTP 状态码：

- 200 - 请求成功
- 301 - 资源（网页等）被永久转移到其它 URL
- 404 - 请求的资源（网页等）不存在
- 500 - 内部服务器错误

### HTTP 状态码分类

HTTP 状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字没有分类的作用。HTTP 状态码共分为 5 种类型：

| 分类  | 分类描述                                       |
| :---- | :--------------------------------------------- |
| 1\*\* | 信息，服务器收到请求，需要请求者继续执行操作   |
| 2\*\* | 成功，操作被成功接收并处理                     |
| 3\*\* | 重定向，需要进一步的操作以完成请求             |
| 4\*\* | 客户端错误，请求包含语法错误或无法完成请求     |
| 5\*\* | 服务器错误，服务器在处理请求的过程中发生了错误 |

HTTP 状态码列表:

| 状态码 | 状态码英文名称                  | 中文描述                                                                                                                                                         |
| :----- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100    | Continue                        | 继续。[客户端](http://www.dreamdu.com/webbuild/client_vs_server/)应继续其请求                                                                                    |
| 101    | Switching Protocols             | 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到 HTTP 的新版本协议                                                                 |
|        |                                 |                                                                                                                                                                  |
| 200    | OK                              | 请求成功。一般用于 GET 与 POST 请求                                                                                                                              |
| 201    | Created                         | 已创建。成功请求并创建了新的资源                                                                                                                                 |
| 202    | Accepted                        | 已接受。已经接受请求，但未处理完成                                                                                                                               |
| 203    | Non-Authoritative Information   | 非授权信息。请求成功。但返回的 meta 信息不在原始的服务器，而是一个副本                                                                                           |
| 204    | No Content                      | 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档                                                                         |
| 205    | Reset Content                   | 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域                                                               |
| 206    | Partial Content                 | 部分内容。服务器成功处理了部分 GET 请求                                                                                                                          |
|        |                                 |                                                                                                                                                                  |
| 300    | Multiple Choices                | 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择                                                           |
| 301    | Moved Permanently               | 永久移动。请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替                              |
| 302    | Found                           | 临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI                                                                                            |
| 303    | See Other                       | 查看其它地址。与 301 类似。使用 GET 和 POST 请求查看                                                                                                             |
| 304    | Not Modified                    | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 305    | Use Proxy                       | 使用代理。所请求的资源必须通过代理访问                                                                                                                           |
| 306    | Unused                          | 已经被废弃的 HTTP 状态码                                                                                                                                         |
| 307    | Temporary Redirect              | 临时重定向。与 302 类似。使用 GET 请求重定向                                                                                                                     |
|        |                                 |                                                                                                                                                                  |
| 400    | Bad Request                     | 客户端请求的语法错误，服务器无法理解                                                                                                                             |
| 401    | Unauthorized                    | 请求要求用户的身份认证                                                                                                                                           |
| 402    | Payment Required                | 保留，将来使用                                                                                                                                                   |
| 403    | Forbidden                       | 服务器理解请求客户端的请求，但是拒绝执行此请求                                                                                                                   |
| 404    | Not Found                       | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面                                                     |
| 405    | Method Not Allowed              | 客户端请求中的方法被禁止                                                                                                                                         |
| 406    | Not Acceptable                  | 服务器无法根据客户端请求的内容特性完成请求                                                                                                                       |
| 407    | Proxy Authentication Required   | 请求要求代理的身份认证，与 401 类似，但请求者应当使用代理进行授权                                                                                                |
| 408    | Request Time-out                | 服务器等待客户端发送的请求时间过长，超时                                                                                                                         |
| 409    | Conflict                        | 服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突                                                                                          |
| 410    | Gone                            | 客户端请求的资源已经不存在。410 不同于 404，如果资源以前有现在被永久删除了可使用 410 代码，网站设计人员可通过 301 代码指定资源的新位置                           |
| 411    | Length Required                 | 服务器无法处理客户端发送的不带 Content-Length 的请求信息                                                                                                         |
| 412    | Precondition Failed             | 客户端请求信息的先决条件错误                                                                                                                                     |
| 413    | Request Entity Too Large        | 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个 Retry-After 的响应信息  |
| 414    | Request-URI Too Large           | 请求的 URI 过长（URI 通常为网址），服务器无法处理                                                                                                                |
| 415    | Unsupported Media Type          | 服务器无法处理请求附带的媒体格式                                                                                                                                 |
| 416    | Requested range not satisfiable | 客户端请求的范围无效                                                                                                                                             |
| 417    | Expectation Failed              | 服务器无法满足 Expect 的请求头信息                                                                                                                               |
|        |                                 |                                                                                                                                                                  |
| 500    | Internal Server Error           | 服务器内部错误，无法完成请求                                                                                                                                     |
| 501    | Not Implemented                 | 服务器不支持请求的功能，无法完成请求                                                                                                                             |
| 502    | Bad Gateway                     | 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应                                                                                   |
| 503    | Service Unavailable             | 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的 Retry-After 头信息中                                                            |
| 504    | Gateway Time-out                | 充当网关或代理的服务器，未及时从远端服务器获取请求                                                                                                               |
| 505    | HTTP Version not supported      | 服务器不支持请求的 HTTP 协议的版本，无法完成处理                                                                                                                 |

## HTTP content-type

Content-Type（内容类型），一般是指网页中存在的 Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些 PHP 网页点击的结果却是下载一个文件或一张图片的原因。

Content-Type 标头告诉客户端实际返回的内容的内容类型。

语法格式：

```http
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

常见的媒体格式类型如下：

- text/html ： HTML 格式
- text/plain ：纯文本格式
- text/xml ： XML 格式
- image/gif ：gif 图片格式
- image/jpeg ：jpg 图片格式
- image/png：png 图片格式

以 application 开头的媒体格式类型：

- application/xhtml+xml ：XHTML 格式
- application/xml： XML 数据格式
- application/atom+xml ：Atom XML 聚合格式
- application/json： JSON 数据格式
- application/pdf：pdf 格式
- application/msword ： Word 文档格式
- application/octet-stream ： 二进制流数据（如常见的文件下载）
- application/x-www-form-urlencoded ： <form encType="">中默认的 encType，form 表单数据被编码为 key/value 格式发送到服务器（表单默认的提交数据的格式）

另外一种常见的媒体格式是上传文件之时使用的：

- multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式

## HTTP 请求 URL

HTTP 协议使用 URI 定位互联网上的资源。正是因为 URI 的特定功能，在互联网上任意位置的资源都能访问到。URL 带有请求对象的标识符。

比如 `http://www.example.com:80/path/to/myfile.htmlkey1=value1&key2=value2#SomewhereInTheDocument`

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTQ0MDA3OS0xMzM4Njg0NTcxLnBuZw?x-oss-process=image/format,png)

`http://`告诉浏览器使用何种协议。对于大部分 Web 资源，通常使用 HTTP 协议或其安全版本，HTTPS 协议。另外，浏览器也知道如何处理其他协议。例如， `mailto:` 协议指示浏览器打开邮件客户端；`ftp:`协议指示浏览器处理文件传输。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTQ0ODgzOC0yNjc2ODc5NzIucG5n?x-oss-process=image/format,png)

`www.example.com` 既是一个域名，也代表管理该域名的机构。它指示了需要向网络上的哪一台主机发起请求。当然，也可以直接向主机的 [IP address](https://developer.mozilla.org/en-US/docs/Glossary/IP_address) 地址发起请求。但直接使用 IP 地址的场景并不常见。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTQ1Njg0OS0xMDA2MTM4NzQ0LnBuZw?x-oss-process=image/format,png)

两个主机之间要发起 TCP 连接需要两个条件，主机 + 端口。它表示用于访问 Web 服务器上资源的入口。如果访问的该 Web 服务器使用 HTTP 协议的标准端口（HTTP 为 80，HTTPS 为 443）授予对其资源的访问权限，则通常省略此部分。否则端口就是 URI 必须的部分。

上面是请求 URL 所必须包含的部分，下面就是 URL 具体请求资源路径

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTUwNDQ4OC0yMDU1MTc0ODEyLnBuZw?x-oss-process=image/format,png)

`/path/to/myfile.html` 是 Web 服务器上资源的路径。以端口后面的第一个 `/` 开始，到 `?` 号之前结束，中间的 每一个`/` 都代表了层级（上下级）关系。这个 URL 的请求资源是一个 html 页面。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTUxMzE1Mi0xODM5MjMzOTY5LnBuZw?x-oss-process=image/format,png)

`?key1=value1&key2=value2` 是提供给 Web 服务器的额外参数。如果是 GET 请求，一般带有请求 URL 参数，如果是 POST 请求，则不会在路径后面直接加参数。这些参数是用 & 符号分隔的`键/值对`列表。key1 = value1 是第一对，key2 = value2 是第二对参数

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDEvMTUxNTExMS0yMDIwMDExMDIwMTUyMDEwNi0yMDk3NTM5MzAwLnBuZw?x-oss-process=image/format,png)

`#SomewhereInTheDocument` 是资源本身的某一部分的一个锚点。锚点代表资源内的一种“书签”，它给予浏览器显示位于该“加书签”点的内容的指示。 例如，在 HTML 文档上，浏览器将滚动到定义锚点的那个点上；在视频或音频文档上，浏览器将转到锚点代表的那个时间。值得注意的是 # 号后面的部分，也称为片段标识符，永远不会与请求一起发送到服务器。

## 非 HTTP/1.1 首部字段

在 HTTP 协议通信交互中使用到的首部字段，不限于 RFC2616 中定义的 47 种首部字段。还有 Cookie、Set-Cookie 和 Content-Disposition 等在其他 RFC 中定义的首部字段，它们的使用频率也很高。
这些非正式的首部字段统一归纳在 RFC4229 HTTP Header Field Registrations 中。

### End-to-end 首部和 Hop-by-hop 首部

HTTP 首部字段将定义成缓存代理和非缓存代理的行为，分成 2 种类型。

一种是 `End-to-end` 首部 和 `Hop-by-hop` 首部

#### End-to-end（端到端） 首部

这些标头必须发送给消息的最终接收者 : 请求的服务器，或响应的客户端。中间代理必须重新传输未经修改的标头，并且缓存必须存储这些信息

#### Hop-by-hop（逐跳） 首部

分在此类别中的首部只对单次转发有效，会因通过缓存或代理而不再转发。

下面列举了 HTTP/1.1 中的逐跳首部字段。除这 8 个首部字段之外，其他所有字段都属于端到端首部。

**Connection、Keep-Alive、Proxy-Authenticate、Proxy-Authorization、Trailer、TE、Transfer-Encoding、Upgrade**

## HTTP 的优点和缺点

### HTTP 的优点

#### 简单灵活易扩展

HTTP 最重要也是最突出的优点是 **简单、灵活、易于扩展**。

HTTP 的协议比较简单，它的主要组成就是 `header + body`，头部信息也是简单的文本格式，而且 HTTP 的请求报文根据英文也能猜出来个大概的意思，降低学习门槛，能够让更多的人研究和开发 HTTP 应用。

所以，在简单的基础上，HTTP 协议又多了`灵活` 和 `易扩展` 的优点。

HTTP 协议里的请求方法、URI、状态码、原因短语、头字段等每一个核心组成要素都没有被制定死，允许开发者任意定制、扩充或解释，给予了浏览器和服务器最大程度的信任和自由。

#### 应用广泛、环境成熟

因为过于简单，普及，因此应用很广泛。因为 HTTP 协议本身不属于一种语言，它并不限定某种编程语言或者操作系统，所以天然具有**跨语言、跨平台**的优越性。而且，因为本身的简单特性很容易实现，所以几乎所有的编程语言都有 HTTP 调用库和外围的开发测试工具。

随着移动互联网的发展， HTTP 的触角已经延伸到了世界的每一个角落，从简单的 Web 页面到复杂的 JSON、XML 数据，从台式机上的浏览器到手机上的各种 APP、新闻、论坛、购物、手机游戏，你很难找到一个没有使用 HTTP 的地方。

#### 无状态

无状态其实既是优点又是缺点。因为服务器没有记忆能力，所以就不需要额外的资源来记录状态信息，不仅实现上会简单一些，而且还能减轻服务器的负担，能够把更多的 CPU 和内存用来对外提供服务。

### HTTP 的缺点

#### 无状态

既然服务器没有记忆能力，它就无法支持需要连续多个步骤的`事务`操作。每次都得问一遍身份信息，不仅麻烦，而且还增加了不必要的数据传输量。由此出现了 `Cookie` 技术。

#### 明文

HTTP 协议里还有一把优缺点一体的双刃剑，就是**明文传输**。明文意思就是协议里的报文（准确地说是 header 部分）不使用二进制数据，而是用简单可阅读的文本形式。

对比 TCP、UDP 这样的二进制协议，它的优点显而易见，不需要借助任何外部工具，用浏览器、Wireshark 或者 tcpdump 抓包后，直接用肉眼就可以很容易地查看或者修改，为我们的开发调试工作带来极大的便利。

当然缺点也是显而易见的，就是`不安全`，可以被监听和被窥探。因为无法判断通信双方的身份，不能判断报文是否被更改过。

#### 性能

HTTP 的性能不算差，但不完全适应现在的互联网，还有很大的提升空间。

## Session、Cookie、Token

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDQvMTUxNTExMS0yMDIwMDQwNTA5MDkyMDc0NS0xNDIyNTEzNTUyLnBuZw?x-oss-process=image/format,png)

### Cookie 和 Session

HTTP 协议是一种`无状态协议`，即每次服务端接收到客户端的请求时，都是一个全新的请求，服务器并不知道客户端的历史请求记录；Session 和 Cookie 的主要目的就是为了弥补 HTTP 的无状态特性。

### Session 是什么

客户端请求服务端，服务端会为这次请求开辟一块`内存空间`，这个对象便是 Session 对象，存储结构为 `ConcurrentHashMap`。Session 弥补了 HTTP 无状态特性，服务器可以利用 Session 存储客户端在同一个会话期间的一些操作记录。

### Session 如何判断是否是同一会话

服务器第一次接收到请求时，开辟了一块 Session 空间（创建了 Session 对象），同时生成一个 sessionId ，并通过响应头的 **Set-Cookie：JSESSIONID=XXXXXXX **命令，向客户端发送要求设置 Cookie 的响应； 客户端收到响应后，在本机客户端设置了一个 **JSESSIONID=XXXXXXX **的 Cookie 信息，该 Cookie 的过期时间为浏览器会话结束；

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDQvMTUxNTExMS0yMDIwMDQwNTA5MDMyMTQzOC0yMDMyODE0ODMxLnBuZw?x-oss-process=image/format,png)

接下来客户端每次向同一个网站发送请求时，请求头都会带上该 Cookie 信息（包含 sessionId ）， 然后，服务器通过读取请求头中的 Cookie 信息，获取名称为 JSESSIONID 的值，得到此次请求的 sessionId。

### Session 的缺点

Session 机制有个缺点，比如 A 服务器存储了 Session，就是做了负载均衡后，假如一段时间内 A 的访问量激增，会转发到 B 进行访问，但是 B 服务器并没有存储 A 的 Session，会导致 Session 的失效。

### Cookies 是什么

HTTP 协议中的 Cookie 包括 `Web Cookie` 和`浏览器 Cookie`，它是服务器发送到 Web 浏览器的一小块数据。服务器发送到浏览器的 Cookie，浏览器会进行存储，并与下一个请求一起发送到服务器。通常，它用于判断两个请求是否来自于同一个浏览器，例如用户保持登录状态。

> HTTP Cookie 机制是 HTTP 协议无状态的一种补充和改良

Cookie 主要用于下面三个目的

- `会话管理`

登陆、购物车、游戏得分或者服务器应该记住的其他内容

- `个性化`

用户偏好、主题或者其他设置

- `追踪`

记录和分析用户行为

Cookie 曾经用于一般的客户端存储。虽然这是合法的，因为它们是在客户端上存储数据的唯一方法，但如今建议使用现代存储 API。Cookie 随每个请求一起发送，因此它们可能会降低性能（尤其是对于移动数据连接而言）。

### 创建 Cookie

当接收到客户端发出的 HTTP 请求时，服务器可以发送带有响应的 `Set-Cookie` 标头，Cookie 通常由浏览器存储，然后将 Cookie 与 HTTP 标头一同向服务器发出请求。

#### Set-Cookie 和 Cookie 标头

`Set-Cookie` HTTP 响应标头将 cookie 从服务器发送到用户代理。下面是一个发送 Cookie 的例子

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDQvMTUxNTExMS0yMDIwMDQwNTA5MDM1MDg3NC0xNjIyMTU4MDgucG5n?x-oss-process=image/format,png)

此标头告诉客户端存储 Cookie

现在，随着对服务器的每个新请求，浏览器将使用 Cookie 头将所有以前存储的 Cookie 发送回服务器。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDQvMTUxNTExMS0yMDIwMDQwNTA5MDM1ODA1Ny0xMDc5NTUzMzY4LnBuZw?x-oss-process=image/format,png)

有两种类型的 Cookies，一种是 Session Cookies，一种是 Persistent Cookies，如果 Cookie 不包含到期日期，则将其视为会话 Cookie。会话 Cookie 存储在内存中，永远不会写入磁盘，当浏览器关闭时，此后 Cookie 将永久丢失。如果 Cookie 包含`有效期` ，则将其视为持久性 Cookie。在到期指定的日期，Cookie 将从磁盘中删除。

还有一种是 `Cookie的 Secure 和 HttpOnly 标记`，下面依次来介绍一下

#### 会话 Cookies

上面的示例创建的是会话 Cookie ，会话 Cookie 有个特征，客户端关闭时 Cookie 会删除，因为它没有指定`Expires`或 `Max-Age` 指令。

但是，Web 浏览器可能会使用会话还原，这会使大多数会话 Cookie 保持永久状态，就像从未关闭过浏览器一样。

#### 永久性 Cookies

永久性 Cookie 不会在客户端关闭时过期，而是在`特定日期（Expires）`或`特定时间长度（Max-Age）`外过期。例如

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
1
```

#### Cookie 的 Secure 和 HttpOnly 标记

安全的 Cookie 需要经过 HTTPS 协议通过加密的方式发送到服务器。即使是安全的，也不应该将敏感信息存储在 cookie 中，因为它们本质上是不安全的，并且此标志不能提供真正的保护。

**HttpOnly 的作用**

- 会话 Cookie 中缺少 HttpOnly 属性会导致攻击者可以通过程序(JS 脚本、Applet 等)获取到用户的 Cookie 信息，造成用户 Cookie 信息泄露，增加攻击者的跨站脚本攻击威胁。
- HttpOnly 是微软对 Cookie 做的扩展，该值指定 Cookie 是否可通过客户端脚本访问。
- 如果在 Cookie 中没有设置 HttpOnly 属性为 true，可能导致 Cookie 被窃取。窃取的 Cookie 可以包含标识站点用户的敏感信息，如 ASP.NET 会话 ID 或 Forms 身份验证票证，攻击者可以重播窃取的 Cookie，以便伪装成用户或获取敏感信息，进行跨站脚本攻击等。

### Cookie 的作用域

`Domain` 和 `Path` 标识定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。

`Domain` 标识指定了哪些主机可以接受 Cookie。如果不指定，默认为当前主机(**不包含子域名**）。如果指定了`Domain`，则一般包含子域名。

例如，如果设置 `Domain=mozilla.org`，则 Cookie 也包含在子域名中（如`developer.mozilla.org`）。

例如，设置 `Path=/docs`，则以下地址都会匹配：

- `/docs`
- `/docs/Web/`
- `/docs/Web/HTTP`

### JSON Web Token 和 Session Cookies 的对比

`JSON Web Token ，简称 JWT`，它和 `Session`都可以为网站提供用户的身份认证，但是它们不是一回事。

在探讨 JWT 和 Session Cookies 之前，有必要需要先去理解一下它们的相同之处。

它们既可以对用户进行身份验证，也可以用来在用户单击进入不同页面时以及登陆网站或应用程序后进行身份验证。

如果没有这两者，那你可能需要在每个页面切换时都需要进行登录了。因为 HTTP 是一个无状态的协议。这也就意味着当你访问某个网页，然后单击同一站点上的另一个页面时，服务器的`内存中`将不会记住你之前的操作。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDQvMTUxNTExMS0yMDIwMDQwNTA5MDQ0NzE2OC0xNDEyODkyMjMwLnBuZw?x-oss-process=image/format,png)

因此，如果你登录并访问了你有权访问的另一个页面，由于 HTTP 不会记录你刚刚登录的信息，因此你将再次登录。

**JWT 和 Session Cookies 就是用来处理在不同页面之间切换，保存用户登录信息的机制**。

也就是说，这两种技术都是用来保存你的登录状态，能够让你在浏览任意受密码保护的网站。通过在每次产生新的请求时对用户数据进行身份验证来解决此问题。

所以 JWT 和 Session Cookies 的相同之处是什么？那就是它们能够支持你在发送不同请求之间，记录并验证你的登录状态的一种机制。

### 什么是 Session Cookies

Session Cookies 也称为`会话 Cookies`，在 Session Cookies 中，用户的登录状态会保存在`服务器`的`内存`中。当用户登录时，Session 就被服务端安全的创建。

在每次请求时，服务器都会从会话 Cookie 中读取 SessionId，如果服务端的数据和读取的 SessionId 相同，那么服务器就会发送响应给浏览器，允许用户登录。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDQvMTUxNTExMS0yMDIwMDQwNTA5MDQ1NjgxNi0xNTY3MjYxODE0LnBuZw?x-oss-process=image/format,png)

### 什么是 Json Web Tokens

Json Web Token 的简称就是 JWT，通常可以称为 `Json 令牌`。它是`RFC 7519` 中定义的用于`安全的`将信息作为 `Json 对象`进行传输的一种形式。JWT 中存储的信息是经过`数字签名`的，因此可以被信任和理解。可以使用 HMAC 算法或使用 RSA/ECDSA 的公用/专用密钥对 JWT 进行签名。

使用 JWT 主要用来下面两点

- `认证(Authorization)`：这是使用 JWT 最常见的一种情况，一旦用户登录，后面每个请求都会包含 JWT，从而允许用户访问该令牌所允许的路由、服务和资源。`单点登录`是当今广泛使用 JWT 的一项功能，因为它的开销很小。
- `信息交换(Information Exchange)`：JWT 是能够安全传输信息的一种方式。通过使用公钥/私钥对 JWT 进行签名认证。此外，由于签名是使用 `head` 和 `payload` 计算的，因此你还可以验证内容是否遭到篡改。

JWT 主要由三部分组成，每个部分用 `.` 进行分割，各个部分分别是

- `Header`
- `Payload`
- `Signature`

<img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDIwLmNuYmxvZ3MuY29tL2Jsb2cvMTUxNTExMS8yMDIwMDQvMTUxNTExMS0yMDIwMDQwNTA5MDUxMDUzMi0xMDE3MDc0MzgyLnBuZw?x-oss-process=image/format,png" alt="img" style="zoom:50%;" />

### JWT 和 Session Cookies 的不同

JWT 和 Session Cookies 都提供安全的用户身份验证，但是它们有以下几点不同

#### 密码签名

JWT 具有加密签名，而 Session Cookies 则没有。

#### JSON 是无状态的

JWT 是`无状态`的，因为声明被存储在`客户端`，而不是服务端内存中。

身份验证可以在`本地`进行，而不是在请求必须通过服务器数据库或类似位置中进行。 这意味着可以对用户进行多次身份验证，而无需与站点或应用程序的数据库进行通信，也无需在此过程中消耗大量资源。

#### 可扩展性

Session Cookies 是存储在服务器内存中，这就意味着如果网站或者应用很大的情况下会耗费大量的资源。由于 JWT 是无状态的，在许多情况下，它们可以节省服务器资源。因此 JWT 要比 Session Cookies 具有更强的`可扩展性`。

#### JWT 支持跨域认证

Session Cookies 只能用在`单个节点的域`或者它的`子域`中有效。如果它们尝试通过第三个节点访问，就会被禁止。如果你希望自己的网站和其他站点建立安全连接时，这是一个问题。

使用 JWT 可以解决这个问题，使用 JWT 能够通过`多个节点`进行用户认证，也就是我们常说的`跨域认证`。

### JWT 和 Session Cookies 的选型

我们上面探讨了 JWT 和 Cookies 的不同点，相信你也会对选型有了更深的认识，大致来说

对于只需要登录用户并访问存储在站点数据库中的一些信息的中小型网站来说，Session Cookies 通常就能满足。

如果你有企业级站点，应用程序或附近的站点，并且需要处理大量的请求，尤其是第三方或很多第三方（包括位于不同域的 API），则 JWT 显然更适合。

如何禁用 Cookies 后，使用 Session

- 如果禁用了 Cookies，服务器仍会将 sessionId 以 cookie 的方式发送给浏览器，但是，浏览器不再保存这个 cookie (即 sessionId) 了。
- 如果想要继续使用 session，需要采用 `URL 重写` 的方式来实现
