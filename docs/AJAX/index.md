---
title: AJAX
---

# AJAX

## 什么是 AJAX ？

AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。

AJAX 是一种用于创建快速动态网页的技术。

通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

有很多使用 AJAX 的应用程序案例：新浪微博、Google 地图、开心网等等。

## XMLHttpRequest 对象

**XMLHttpRequest 是 AJAX 的基础。**

所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

### 创建 XMLHttpRequest 对象

所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。

#### 创建 XMLHttpRequest 对象的语法：

```javascript
variable = new XMLHttpRequest();
```

#### 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：

```js
variable = new ActiveXObject("Microsoft.XMLHTTP");
```

为了应对所有的现代浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。如果支持，则创建 XMLHttpRequest 对象。如果不支持，则创建 ActiveXObject ：

```javascript
var xmlhttp;
if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
```

## 向服务器发送请求

XMLHttpRequest 对象用于和服务器交换数据。

如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：

```javascript
xmlhttp.open("GET", "test1.txt", true);
xmlhttp.send();
```

| 方法                         | 描述                                                                                                                                        |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| open(_method_,_url_,_async_) | 规定请求的类型、URL 以及是否异步处理请求。_method_：请求的类型；GET 或 POST*url*：文件在服务器上的位置*async*：true（异步）或 false（同步） |
| send(_string_)               | 将请求发送到服务器。_string_：仅用于 POST 请求                                                                                              |

### GET 还是 POST？

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

然而，在以下情况中，请使用 POST 请求：

- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：

```javascript
xmlhttp.open("POST", "ajax_test.asp", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");
```

| 方法                               | 描述                 |
| :--------------------------------- | :------------------- |
| setRequestHeader(_header_,_value_) | 向请求添加 HTTP 头。 |

- _header_: 规定头的名称
- _value_: 规定头的值

### url - 服务器上的文件

open() 方法的 _url_ 参数是服务器上文件的地址：

```javascript
xmlhttp.open("GET", "ajax_test.asp", true);
```

该文件可以是任何类型的文件，比如 .txt 和 .xml，或者服务器脚本文件，比如 .asp 和 .php （在传回响应之前，能够在服务器上执行任务）。

### 异步 - True 或 False？

AJAX 指的是异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。

XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true：

```javascript
xmlhttp.open("GET", "ajax_test.asp", true);
```

对于 web 开发人员来说，发送异步请求是一个巨大的进步。很多在服务器执行的任务都相当费时。AJAX 出现之前，这可能会引起应用程序挂起或停止。

通过 AJAX，JavaScript 无需等待服务器的响应，而是：

- 在等待服务器响应时执行其他脚本
- 当响应就绪后对响应进行处理

### Async = true

当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数：

```javascript
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
  }
};
xmlhttp.open("GET", "test1.txt", true);
xmlhttp.send();
```

### Async = false

如需使用 async=false，请将 open() 方法中的第三个参数改为 false：

```javascript
xmlhttp.open("GET", "test1.txt", false);
```

我们不推荐使用 async=false，但是对于一些小型的请求，也是可以的。

请记住，JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。

**注释：**当您使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面即可：

```javascript
xmlhttp.open("GET", "test1.txt", false);
xmlhttp.send();
document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
```

## 服务器响应

如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

| 属性         | 描述                       |
| :----------- | :------------------------- |
| responseText | 获得字符串形式的响应数据。 |
| responseXML  | 获得 XML 形式的响应数据。  |

### responseText 属性

如果来自服务器的响应并非 XML，请使用 responseText 属性。

responseText 属性返回字符串形式的响应，因此您可以这样使用：

```javascript
document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
```

### responseXML 属性

如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性：

请求 [books.xml](https://www.w3school.com.cn/example/xmle/books.xml) 文件，并解析响应：

```javascript
xmlDoc = xmlhttp.responseXML;
txt = "";
x = xmlDoc.getElementsByTagName("ARTIST");
for (i = 0; i < x.length; i++) {
  txt = txt + x[i].childNodes[0].nodeValue + "<br />";
}
document.getElementById("myDiv").innerHTML = txt;
```

## onreadystatechange 事件

当请求被发送到服务器时，我们需要执行一些基于响应的任务。

每当 readyState 改变时，就会触发 onreadystatechange 事件。

readyState 属性存有 XMLHttpRequest 的状态信息。

下面是 XMLHttpRequest 对象的三个重要的属性：

| 属性               | 描述                                                                                                                                        |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。                                                                          |
| readyState         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。0: 请求未初始化 1: 服务器连接已建立 2: 请求已接收 3: 请求处理中 4: 请求已完成，且响应已就绪 |
| status             | 200: "OK"404: 未找到页面                                                                                                                    |

在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。

当 readyState 等于 4 且状态为 200 时，表示响应已就绪：

```javascript
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
  }
};
```

**注释：**onreadystatechange 事件被触发 5 次（0 - 4），对应着 readyState 的每个变化。

### 使用 Callback 函数

callback 函数是一种以参数形式传递给另一个函数的函数。

如果您的网站上存在多个 AJAX 任务，那么您应该为创建 XMLHttpRequest 对象编写一个*标准*的函数，并为每个 AJAX 任务调用该函数。

该函数调用应该包含 URL 以及发生 onreadystatechange 事件时执行的任务（每次调用可能不尽相同）：

```javascript
function myFunction() {
  loadXMLDoc("ajax_info.txt", function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
    }
  });
}
```

## AJAX 的优缺点

优点：

1. AJAX 使用 Javascript 技术向服务器发送异步请求；
2. AJAX 无须刷新整个页面；
3. 因为服务器响应内容不再是整个页面，而是页面中的局部，所以 AJAX 性能高；

缺点：

1. AJAX 并不适合所有场景，很多时候还是要使用同步交互；
2. AJAX 虽然提高了用户体验，但无形中向服务器发送的请求次数增多了，导致服务器压力增大；
3. 因为 AJAX 是在浏览器中使用 Javascript 技术完成的，所以还需要处理浏览器兼容性问题；

## 补充（代码详解）

### XMLHttpRequest

**前端的 register.html 文件**

```html
<form>
  <span id="msg">aaa</span>
  用户名：<input type="text" name="username" id="username" /> 昵称：<input
    type="text"
    name="nickname"
  />
  密码： <input type="password" name="password" />
  <input type="submit" value="注册" />
</form>

<!-- 显示ajax请求返回回来的数据 -->
<div class="showmsg"></div>
```

**前端基于 http 发送的一个异步请求**

**前端的 get 请求(重要)**

```javascript
<script>
        document.querySelector("#username").onblur = function(){
            // 1.获取用户数据
            var name = this.value;

            // 2，让异步对象发送请求
            // 2.1 创建异步对象
            var xhr = new XMLHttpRequest();
            // 2.2 设置 请求行 open(请求方式，请求url):
                // get请求如果有参数就需要在url后面拼接参数，
            xhr.open("get","validate.php?username="+name);
            // 2.3 设置 请求头 setRequestHeader('key':'value')
                // get方式不需要设置请求头
            // 2.4 设置 请求体:发送请求  send(参数：key=value&key=value)
                // 对于 get请求不需要在这个位置来传递参数
            xhr.send(null);

            // 响应报文：
            // 报文行：响应状态码 响应状态信息  200 ok
            // 报文头：服务器返回给客户端的一些额外信息
            // 报文体：服务器返回给客户端的数据 responseText:普通字符串  responseXML：符合xml格式的字符串
            // xhr.status:可以获取当前服务器的响应状态  200 》成功
            console.log(xhr.status);
            // 一个真正成功的响应应该两个方面：1.服务器成功响应  2.数据已经回到客户端并且可以使用了
            // 监听异步对象的响应状态 readystate
            // 0:创建了异步对象，但是还没有真正的去发送请求
            // 1.调用了send方法，正在发送请求
            // 2.send方法执行完毕了，已经收到服务器的响应内容--原始内容，还不可以使用
            // 3.正在解析数据
            // 4.响应内容解析完毕，可以使用了
            xhr.onreadystatechange = function(){
                //等待浏览器返回成功并且解析完毕
                if(xhr.status == 200 && xhr.readyState == 4){
                    console.log(xhr.responseText);
                    console.log("-----------");
                    document.querySelector(".showmsg").innerHTML = xhr.responseText;;
                }
            }
        };
    </script>
```

**前端的 post 请求(重要)**

```javascript
<script>
        document.querySelector("#username").onblur = function(){
            // 1.获取用户数据
            var name = this.value;
            // 2. 让异步对象发送post请求
            // 2.1 创建异步对象
            var xhr = new XMLHttpRequest();
            // 2.2 设置请求行 open(请求方式，请求url)
                // 2.post请求不需要拼接参数
            xhr.open("post","validate.php");
            // 2.3 设置请求头:setRequestHeader()
                // 2.post需要设置请求头：Content-Type:application/x-www-form-urlencoded
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    		//.如果没有设置，参数无法正确的传递到服务器(本质上说，如果没有参数，也不一定需要设置，不会影响请求的发送)
            // 2.4 设置请求体 send()
                // 2.post的参数在这个函数中设置(如果有参数)
            xhr.send("username="+name);

            // 3.让异步对象接收服务器的响应数据
            // 一个成功的响应有两个条件：1.服务器成功响应了  2.异步对象的响应状态为4(数据解析完毕可以使用了)
            // 当异步对象的响应状态发生改变的时候，会触发一个事件：onreadystatechange
            xhr.onreadystatechange = function(){
                // 判断服务器是否响应      判断异步对象的响应状态
                if(xhr.status == 200 && xhr.readyState == 4){
                    document.querySelector(".showmsg").innerHTML = xhr.responseText;
                }
            }
        };
    </script>
```

**处理后端的 php 文件**

```php
<?php
    header('content-type:text/html;charset=utf-8');
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        //获取用户名
        $name=$_POST['username'];
        //判断数据库中是否已有这个用户名
        $names=['jack','rose','tom','lili'];
        //有则注册失败，否则成功
        if(in_array($name,$names)){
            $str = '这个名字太火了，换一个吧！';
            echo $str;
        }else{
            $str = '恭喜，名字可用！';
            echo $str;
        }
    }
?>
```

**API 详解**

xhr.open() 发起请求，可以是 get、post 方式

xhr.setRequestHeader() 设置请求头

xhr.send() 发送请求主体 get 方式使用 xhr.send(null)

xhr.onreadystatechange = function () {} 监听响应状态

readstate 属性有五个状态：

- xhr.readyState = 0 时，（未初始化）还没有调用 send()方法
- xhr.readyState = 1 时，（载入）已调用 send()方法，正在发送请求
- xhr.readyState = 2 时，（载入完成）send()方法执行完成，已经接收到全部响应内容
- xhr.readyState = 3 时，（交互）正在解析响应内容
- xhr.readyState = 4 时，（完成）响应内容解析完成，可以在客户端调用了

```
不用记忆状态，只需要了解有状态变化这个概念
```

xhr.status 表示响应码，如 200

xhr.statusText 表示响应信息，如 OK

xhr.getAllResponseHeaders() 获取全部响应头信息

xhr.getResponseHeader(‘key’) 获取指定头信息

xhr.responseText、xhr.responseXML 都表示响应主体

**注 GET 和 POST 请求方式的差异（面试题）**

1、GET 没有请求主体，使用 xhr.send(null)

2、GET 可以通过在请求 URL 上添加请求参数

3、POST 可以通过 xhr.send(‘name=itcast&age=10’)

4、POST 需要设置

5、GET 大小限制约 4K，POST 则没有限制

### 使用异步对象发送读取 JSON 文件

#### JSON 格式的数据和特点

描述数据的一种格式

```json
[
  {
    "src": "./images/nav_1.png",
    "text": "京东超市"
  },
  {
    "src": "./images/nav_2.png",
    "text": "全球购物"
  },
  {
    "src": "./images/nav_3.png",
    "text": "京东市场"
  }
]
```

#### 规则和特点

| 关于 json 的描述                                              |
| ------------------------------------------------------------- |
| 1，一组花括号表示一个对象，一个对象通过键值对写入一堆相关数据 |
| 2，一组方括号表示一个数组，多组对象通过数组的方式装载         |
| 3，对象的所有属性都必须加上双引号，值没有 undefined           |
| 4，文件后缀名为.json，json 格式的数据内不允许写注释           |

#### 操作 json 的方法

| 前端(Javascript)操作 json 的方式 |                                               |
| -------------------------------- | --------------------------------------------- |
| JSON.parse(json 字符串)          | 将 json 格式的字符串转换为数组或者对象        |
| JSON.stringify(对象或者数组)     | 将字面量对象或者数组转换为 json 格式的字符串  |
| php 操作 json 的方式             |                                               |
| json_decode(json 字符串)         | 将 json 格式的字符串转换为 php 的数组或者对象 |
| json_encode(关联数组)            | 将 php 的数组转换为 json 字符串               |

#### 关于 json 的操作

```javascript
<script>
        // 让异步对象发送异步请求
        // 1.创建对象
        var xhr = new XMLHttpRequest();
        // 2.设置请求行
        xhr.open("get", "./server/nav-json.php");
        // 3.设置请求头:get不需要设置
        // 3.设置请求体
        xhr.send();

        // 让异步对象接收服务器响应数据:一个成功的响应包含两个条件：1.服务器成功响应了  2.数据解析完毕可以使用了
        xhr.onreadystatechange = function() {
            if (xhr.status == 200 && xhr.readyState == 4) {
                var result = xhr.responseText;
                var data = JSON.parse(result);
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += "<li>";
                    html += '<a href="#">';
                    html += '<img src="' + data[i].src + '" alt="">';
                    html += '<p>' + data[i].text + '</p>';
                    html += '</a>';
                    html += '</li>';
                }
                // 将生成的页面结构添加到dom元素中
                document.querySelector("ul").innerHTML = html;
            }
        }
    </script>
```

后端处理 php 文件的代码

```php
<?php
    echo file_get_contents("../data/nav.json");
?>
```

### 封装 AJAX 工具函数

```js
// type:请求方式
// url:请求url
// data:传递给服务器的参数
// callback:客户端的动态结构的渲染方式

// 下面的封装方式的缺点：
// 1.参数数量固定：用户在调用的时候必须传入四个参数
// 2.参数的顺序固定：用户在调用的时候必须按照顺序进行参数的传递
// 3.不方便后期封装功能的扩展与修改
// function ajax(type,url,data,callback){}

// 解决方式：通过传入对象的方式来设置参数
// option是一个对象，它里面包含着相关的属性：如type,url,data,callback
// 不方便后期功能的添加与扩展
// 会造成当前文件中存在着大量的全局变量，会造成全局变量污染
// function ajax(option){}
// function get(option){}
// function post(option){}
// 建议的封装方式：
var $ = {
  // 将{"name":"jack","age":20} 的参数要转换为 ?name=jack&age=20
  getpa: function (data) {
    if (data && typeof data == "object") {
      var str = "?";
      for (var key in data) {
        str = str + key + "=" + data[key] + "&";
      }
      str = str.substr(0, str.length - 1);
    }
    return str;
  },
  // option.type:请求方式
  // option.url:请求的url
  // option.data:当前请求所传递的参数:规定参数必须是以对象的形式传递{"name":"jack","age":20}
  // option.success:渲染方式
  ajax: function (option) {
    // 接收用户参数进行相应处理
    var type = option.type || "get";
    // location.href 可以获取当前文件的路径
    var url = option.url || location.href;
    // 接收参数:在js中最方便收集的数据类型为对象，所以我们就规定传递的参数必须是对象
    var data = this.getpa(option.data) || "";
    // 响应成功之后的回调
    var success = option.success;

    // 创建异步对象
    var xhr = new XMLHttpRequest();

    // 让异步对象发送请求
    // 请求行
    if (type == "get") {
      // 拼接参数
      url += data;
      data = null;
    }
    xhr.open(type, url);
    // 请求头
    if (type == "post") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    // 请求体
    xhr.send(data);

    // 让异步对象接收响应
    xhr.onreadystatechange = function () {
      // 一个成功的响应有两个条件：1.服务器成功响应 2.数据解析完毕可以使用
      if (xhr.status == 200 && xhr.readyState == 4) {
        // 接收响应的返回值
        // responseText   responseXML
        var rh = xhr.getResponseHeader("Content-Type");
        // 判断
        if (rh.indexOf("xml") != -1) {
          var result = xhr.responseXML;
        } else if (rh.lastIndexOf("json") != -1) {
          var result = JSON.parse(xhr.responseText);
        } else {
          var result = xhr.responseText;
        }

        // 接收数据之后，调用回调函数
        success && success(result);
      }
    };
  },
  get: function (option) {},
  post: function () {},
};
```

### jQuery 中的 ajax

| \$.ajax({这里传入一个字面量对象}) | 参数说明                               |
| --------------------------------- | -------------------------------------- |
| **url**                           | 接口地址                               |
| **type**                          | 请求方式                               |
| timeout                           | 请求超时，单位是毫秒                   |
| **dataType**                      | 服务器返回的格式, json / xml / jsonp   |
| **data**                          | 发送请求的数据                         |
| beforeSend: fucntion() { …code }  | 请求发起前的调用                       |
| **success: fucntion() { …code }** | 成功响应后的调用                       |
| **error: fucntion() { …code }**   | 错误响应时的调用，e 参数为报错信息     |
| complete: fucntion() { …code }    | 响应完成时的调用                       |
| **async**                         | true/false(默认 true,异步；false,同步) |

#### 完整的 jQuery 调用(重要)

```js
$.ajax({
  type: "post",
  url: "./server/nav-json.php",
  data: {}, //请求需要传递的参数
  // 设置请求超时:单位为毫秒，如果服务器的响应时间超过指定的时候，请求失败
  timeout: 3000,
  dataType: "json", // 设置响应数据的格式  xml json text html script jsonp
  // 发送请求之前的回调
  beforeSend: function () {
    // 在这个回调函数中，如果return false,那么本次请求会中止
    // return false;
  },
  success: function () {
    //请求成功之后的回调
  },
  // 请求失败之后的回调
  error: function (e) {
    if (e.statusText == "timeout") {
      alert("请求超时，请重试");
    }
  },
  // 无论请求是成功还是失败都会执行的回调
  complete: function () {
    console.log("实现一些全局成员的释放，或者页面状态的重置....");
  },
});
```

#### jQuery 中 ajax 的其他用法

**1.1\$.get()的使用**

本质上只能发送 get 请求

| \$.get(url, data, success, datatype) | 说明               |
| ------------------------------------ | ------------------ |
| url                                  | 所请求的 url       |
| data                                 | 请求所传递的数据   |
| success: function() { …code }        | 成功之后的回调     |
| datatype:                            | 需要返回的数据类型 |

```javascript
$.get(
  "./server/nav-json.php",
  function () {
    // 成功回调之后的函数
  },
  "json"
);
123;
```

**1.2\$.post()的使用**

参数一致，用法一直，目的一致

### 同源&跨域

同源策略是浏览器的一种安全策略，所谓同源是指，域名，协议，端口完全相同。

JavaScript 出于安全方面的考虑，不允许跨域调用其他页面的对象。那什么是跨域呢，简单地理解就是因为 JavaScript 同源策略的限制，a.com 域名下的 js 无法操作 b.com 或是 c.a.com 域名下的对象。
当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”。

**注意**：**跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了**。之所以会跨域，是因为受到了同源策略的限制，同源策略要求源相同才能正常进行通信，即协议、域名、端口号都完全一致

例如http://www.example.com/

| http://api.example.com/detail.html       | 不同源 | 域名不同       |
| ---------------------------------------- | ------ | -------------- |
| https//www.example.com/detail.html       | 不同源 | 协议不同       |
| http://www.example.com:8080/detail.html  | 不同源 | 端口不同       |
| http://api.example.com:8080/detail.html  | 不同源 | 域名、端口不同 |
| https://api.example.com/detail.html      | 不同源 | 协议、域名不同 |
| https://www.example.com:8080/detail.html | 不同源 | 端口、协议不同 |
| http://www.example.com/detail/index.html | 同源   | 只是目录不同   |

| 说明                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 第一：如果是协议和端口造成的跨域问题“前端”是无能为力的                                                                                         |
| 第二：在跨域问题上，域仅仅是通过“URL 的首部”来识别而不会根据域名对应的 IP 地址是否相同来判断。“URL 的首部”可以理解为“协议, 域名和端口必须匹配” |

**所有跨域都必须经信息提供方允许, 如果未经允许即可获取, 那是浏览器同源策略出现漏洞**

### 实现跨域

**1.服务器端设置 CORS 跨域(cross-origin resource sharing 跨域资源共享)**

```php
<?php
	// 设置跨域请求
	//header("Access-Control-Allow-Origin:*"); // * 允许代表所有域来请求
	header("Access-Control-Allow-Origin:http://day09.com");

	echo file_get_contens("nav.json");
?>
```

**2.jsonp 的实现原理**

页面中有几个标签允许跨域请求资源 `a链接的href` 、 `img的src` 、`link的href` 、`script的src`

1.主要是利用了 script 标签的天然的跨域特性来发送请求

2.它的实现方式：在发送请求的时候传递一个函数名称给后台，后台返回数据的时候会返回这个函数的调用形式，并且在()中拼接参数

3.ajax 和 jsonp 的本质不一样。ajax 的核心是通过 XMLHttpRequest 来发送请求，而 jsonp 是通过 script 标签来实现请求的发送

**实现方式**

1. 先定义一个函数，然后动态创建 script src 去请求资源
2. 在请求地址后面要加参数（参数名=函数名）
3. 后台拿到函数名，再以函数名调用的形式返回
4. 拿到数据直接调用

- 前端开启跨域请求(dataType:“jsonp”)

```javascript
<script>
    $.ajax({
        type:'get',
        // url:'getnav.php',
        url:'http://day8.com/getnav.php',
        // dataType:'json',
        // 开启跨域请求
        dataType:"jsonp",
        success:function(result){
            console.log("有没有调用、");
            var html = template("navTemp",{"items":result});
            document.querySelector("ul").innerHTML = html;
        }
    });
</script>
```

- 后端进行拼接(拼接字符串)

```php
<?php
    //这就是请求时所传递过来的函数名称
    $callback = $_GET["callback"];
    //读取数据
    $data = file_get_contents("nav.json");
    //返回调用函数的形式，只不过在这个形式中要传递前台需要的数据
    echo $callback.'('.$data.')';
?>
```

### XMLHttpRequest2.0

#### timeout(延迟)

timeout 代表延迟，可以当作属性设置延迟，单位为毫秒，也可以作为事件

a) 设置超时 xhr.timeout

b) 监听超时事件 xhr.ontimeout = function () {// code}

```javascript
<body>
    <button> 发送请求</button>
    <!-- <script src="../01-cross-origin/js/jquery.min.js"></script> -->
    <script>
        document.querySelector("button").onclick = function() {
            var xhr = new XMLHttpRequest();

            // 设置请求行
            xhr.open("get","01-timeout.php");
            // 设置请求头:get不需要设置
            // 设置请求体
            xhr.send(null);

            // 设置超时
            xhr.timeout = 2000;
            xhr.ontimeout = function(e){
                console.log(e);
            }

            // 接收响应
            xhr.onreadystatechange = function(){
                if(xhr.status == 200 && xhr.readyState == 4){
                    alert(xhr.responseText);
                }
            }
            // $.ajax({
            //     type: "get",
            //     url: "01-timeout.php",
            //     timeout: 3000,
            //     success: function(data) {
            //         console.log(data);
            //     },
            //     error: function() {
            //         console.log('超时了');
            //     }
            // })
        }
    </script>
</body>
```

#### FormData(获取表单元素)

form 内表单元素的 name 属性是必须的，但是不需要再一个个获取了

**formdata.append(“address”,“传智播客”)**;可以自由的追加参数

a) 提供了一个新的内建对象，可用于管理表单数据

b) 首先要获取一个表单元素 form

c) 然后在实例化时 new FormData(form)，将表单元素 form 传进去

d) 会返回一个对象，此对象可以直接做为 xhr.send(formData)的参数

e) 此时我们的数据就是以二进制形式传递了(不需要设置请求头)

f) 注意我们这里只能以 post 形式传递，浏览器会自动为我们设置一个合适的请求头

```javascript
<body>
    <form id="form1">
        用户名：<input type="text" name="username"> 密码：
        <input type="password" name="password"> 电话：
        <input type="text" name="phone">
        <input type="button" value="发送ajax请求" id="sub">
    </form>
    <div></div>
    <img src="" alt="" width="80">
    <script>
        document.querySelector("#sub").onclick = function() {
            var xhr = new XMLHttpRequest();

            xhr.open("post","02-formData.php");
            // 1.手动拼接
            // 2.如果是jq,那么就可以使用表单序列化方法
            // 3.现在在XMLHttpRequest2.0   ,我们可以使用FormData来收集表单数据

            // 1.获取表单
            var myform = document.querySelector("#form1");
            // 2.将表单做为参数传递，在创建formData对象的时候
            var formdata = new FormData(myform);

            // 特点之一：可以自由的追加参数
            formdata.append("address","传智播客");
            // 3.生成的formData对象就可以直接做为异步对象的参数传递
            xhr.send(formdata);

            xhr.onreadystatechange = function(){
                if(xhr.status == 200 && xhr.readyState == 4){
                    console.log(xhr.responseText);
                }
            }

        }
    </script>
</body>
```

传统获取表单元素方法

前端

```javascript
<body>
    <form id="form1">
        用户名：<input type="text" name="username" class="username"> 密码：
        <input type="password" name="password" class="pass"> 电话：
        <input type="text" name="phone" class="phone">
        <input type="button" value="发送ajax请求" id="sub">
    </form>
    <div></div>
    <img src="" alt="" width="80">
    <script>
        document.querySelector("#sub").onclick = function() {
            var xhr = new XMLHttpRequest();
            xhr.open("post", "02-formData.php");
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            var username = document.querySelector(".username").value;
            var password = document.querySelector(".pass").value;
            var phone = document.querySelector(".phone").value;
            var data = "username="+username+"&"+"password="+password+"&"+"phone="+phone;
            xhr.send(data);
            xhr.onreadystatechange = function() {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    console.log(data);
                }
            }

        }
    </script>
</body>
```

#### 上传文件的 POST 请求

**注意：**这里设置了请求头的话，数据无法传递

前端

```javascript
<body>
    <form id="form1">
        用户名：<input type="text" name="username"> 密码：
        <input type="password" name="password"> 头像：
        <input type="file" name="myfile" id="pic">
        <input type="button" value="发送ajax请求" id="sub">
    </form>
    <div class="progress">
        <div class="in"></div>
        <span>0%</span>
    </div>
    <img src="" alt="" class="photo">
    <script>
        document.querySelector("#sub").onclick = function() {
            var xhr = new XMLHttpRequest();
            xhr.open("post", "03-uploadFile.php");
            // 我想自己来设置一个请求头，看行不行--注意了，如果人为了设置了请求头，那么文件数据无法正确的传递
            // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

            var myform = document.querySelector("#form1");
            var formData = new FormData(myform);

            // 监听文件上传的进度:这个监听必须在send之前来设置
            xhr.upload.onprogress = function(e) {
                var current = e.loaded; //上传了多少
                var total = e.total; //总共
                var percent = current / total * 100 + "%";
                document.querySelector(".in").style.width = percent;
                document.querySelector("span").innerHTML = Math.floor(current / total * 100) + "%";

            }
            xhr.send(formData);
            xhr.onreadystatechange = function() {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    // console.log(xhr.responseText);
                    var data = JSON.parse(xhr.responseText);
                    document.querySelector(".photo").src = data["src"];

                }
            }
        }
    </script>
</body>
```

后端

```php
<?php
    move_uploaded_file($_FILES['myfile']['tmp_name'],"./upload/".$_FILES["myfile"]["name"]);
    $data = Array("src"=>"./upload/".$_FILES["myfile"]["name"]);
    echo json_encode($data);
?>
```

#### onprogress 监听文件上传的进度

**注意：这段代码一定要在 send 方法之前**

```javascript
// 监听文件上传的进度:这个监听必须在send之前来设置
xhr.upload.onprogress = function (e) {
  var current = e.loaded; //上传了多少
  var total = e.total; //总共
  var percent = (current / total) * 100 + "%";
  document.querySelector(".in").style.width = percent;
  document.querySelector("span").innerHTML =
    Math.floor((current / total) * 100) + "%";
};
xhr.send(formData);
```
