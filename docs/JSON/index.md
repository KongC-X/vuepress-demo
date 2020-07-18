---
title: JSON
---

# JSON

- JSON: JavaScript Object Notation(JavaScript 对象表示法)
- JSON 是存储和交换文本信息的语法。类似 XML。
- JSON 比 XML 更小、更快，更易解析。

> {
> “sites”: [
> > { “name”:“菜鸟教程” , “url”:“www.runoob.com” },
> > { “name”:“google” , “url”:“www.google.com” },
> > { “name”:“微博” , “url”:“www.weibo.com” }
> > ]
> }

## JSON 概念

##### 1.什么是 JSON ？

- JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）
- JSON 是轻量级的文本数据交换格式
- JSON 独立于语言：JSON 使用 Javascript 语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持 JSON。
- JSON 具有自我描述性，更易理解

##### 2.JSON - 转换为 JavaScript 对象

- JSON 文本格式在语法上与创建 JavaScript 对象的代码相同。
- 由于这种相似性，无需解析器，JavaScript 程序能够使用内建的 eval() 函数，用 JSON 数据来生成原生的 JavaScript 对象。

##### 3.实例

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>JavaScript 创建 JSON 对象</h2>
    <p>
      网站名称: <span id="jname"></span><br />
      网站地址: <span id="jurl"></span><br />
      网站 slogan: <span id="jslogan"></span><br />
    </p>
    <script>
      var JSONObject = {
        name: "菜鸟教程",
        url: "www.runoob.com",
        slogan: "学的不仅是技术，更是梦想！",
      };
      document.getElementById("jname").innerHTML = JSONObject.name;
      document.getElementById("jurl").innerHTML = JSONObject.url;
      document.getElementById("jslogan").innerHTML = JSONObject.slogan;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820104850376.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 4.与 XML 相同之处

- JSON 是纯文本
- JSON 具有"自我描述性"（人类可读）
- JSON 具有层级结构（值中存在值）
- JSON 可通过 JavaScript 进行解析
- JSON 数据可使用 AJAX 进行传输

##### 5.与 XML 不同之处

- 没有结束标签
- 更短
- 读写的速度更快
- 能够使用内建的 JavaScript eval() 方法进行解析
- 使用数组
- 不使用保留字

##### 6.为什么使用 JSON？

对于 AJAX 应用程序来说，JSON 比 XML 更快更易使用：

- 使用 XML：
  读取 XML 文档
  使用 XML DOM 来循环遍历文档
  读取值并存储在变量中
- 使用 JSON：
  读取 JSON 字符串
  用 eval() 处理 JSON 字符串

## JSON 语法

JSON 语法是 JavaScript 语法的子集。

##### 1.JSON 语法规则

- 数据在名称/值对中
- 数据由逗号分隔
- 大括号保存对象
- 中括号保存数组

##### 2.JSON 名称/值对

JSON 数据的书写格式是：名称/值对。

名称/值对包括字段名称（在双引号中），后面写一个冒号，然后是值：

> {
> key1:value1,
> key2:value2,
> …
> }

> “name” : “菜鸟教程”

这很容易理解，等价于这条 JavaScript 语句：

> name = “菜鸟教程”

##### 3.JSON 值

数字（整数或浮点数）
字符串（在双引号中）
逻辑值（true 或 false）
数组（在中括号中）
对象（在大括号中）
null

##### 4.JSON 数字

JSON 数字可以是整型或者浮点型：

> { “age”:30 }

##### 5.JSON 对象

JSON 对象在大括号（{}）中书写：

对象可以包含多个名称/值对：

> { “name”:“菜鸟教程” , “url”:“www.runoob.com” }

这一点也容易理解，与这条 JavaScript 语句等价：

> name = “菜鸟教程”
> url = “www.runoob.com”

##### 6.JSON 数组

JSON 数组在中括号中书写：

数组可包含多个对象：

> {
> “sites”: [
> > { “name”:“菜鸟教程” , “url”:“www.runoob.com” },
> > { “name”:“google” , “url”:“www.google.com” },
> > { “name”:“微博” , “url”:“www.weibo.com” }
> > ]
> }

在上面的例子中，对象 “sites” 是包含三个对象的数组。每个对象代表一条关于某个网站（name、url）的记录。

##### 7.JSON 布尔值

JSON 布尔值可以是 true 或者 false：

> { “flag”:true }

##### 8.JSON null

JSON 可以设置 null 值：

> { “runoob”:null }

##### 9.JSON 使用 JavaScript 语法

因为 JSON 使用 JavaScript 语法，所以无需额外的软件就能处理 JavaScript 中的 JSON。

通过 JavaScript，您可以创建一个对象数组，并像这样进行赋值：

> var sites = [
> > { “name”:“runoob” , “url”:“www.runoob.com” },
> > { “name”:“google” , “url”:“www.google.com” },
> > { “name”:“微博” , “url”:“www.weibo.com” }
> > ];

可以像这样访问 JavaScript 对象数组中的第一项（索引从 0 开始）

> sites[0].name;

返回的内容是：runoob

可以像这样修改数据：

> sites[0].name=“菜鸟教程”;

eg：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>JavaScript 创建 JSON 对象</h2>
    <p>第一个网站名称: <span id="name1"></span></p>
    <p>第一个网站修改后的名称: <span id="name2"></span></p>

    <script>
      var sites = [
        { name: "runoob", url: "www.runoob.com" },
        { name: "google", url: "www.google.com" },
        { name: "微博", url: "www.weibo.com" },
      ];

      document.getElementById("name1").innerHTML = sites[0].name;
      // 修改网站名称
      sites[0].name = "菜鸟教程";
      document.getElementById("name2").innerHTML = sites[0].name;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820105426592.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 10.JSON 文件

- JSON 文件的文件类型是 “.json”
- JSON 文本的 MIME 类型是 “application/json”

## JSON 对象

##### 1.对象语法

实例：

> { “name”:“runoob”, “alexa”:10000, “site”:null }
> JSON 对象使用在大括号({})中书写。

对象可以包含多个 key/value（键/值）对。

key 必须是字符串，value 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。

key 和 value 中使用冒号(:)分割。

每个 key/value 对使用逗号(,)分割。

##### 2.访问对象值

- 可以使用点号（.）来访问对象的值：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>你可以使用点号（.）来访问 JSON 对象的值：</p>

    <p id="demo"></p>

    <script>
      var myObj, x;
      myObj = { name: "runoob", alexa: 10000, site: null };
      x = myObj.name;
      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820122112169.png)

- 也可以使用中括号（[]）来访问对象的值：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>你也可以使用中括号（[]）来访问 JOSN 对象的值：</p>

    <p id="demo"></p>

    <script>
      var myObj, x;
      myObj = myObj = { name: "runoob", alexa: 10000, site: null };
      x = myObj["name"];
      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820122226455.png)

##### 3.循环对象

- 可以使用 for-in 来循环对象的属性：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>使用 for-in 来循环对象的属性:</p>

    <p id="demo"></p>

    <script>
      var myObj = { name: "runoob", alexa: 10000, site: null };
      for (x in myObj) {
        document.getElementById("demo").innerHTML += x + "<br>";
      }
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820122609716.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

- 在 for-in 循环对象的属性时，使用中括号（[]）来访问属性的值：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>在 for-in 循环对象的属性时，使用中括号（[]）来访问属性的值：</p>

    <p id="demo"></p>

    <script>
      var myObj = { name: "runoob", alexa: 10000, site: null };
      for (x in myObj) {
        document.getElementById("demo").innerHTML += myObj[x] + "<br>";
      }
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820123629905.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 4.嵌套 JSON 对象

- JSON 对象中可以包含另外一个 JSON 对象：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820124104755.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

- 你可以使用点号(.)或者中括号([])来访问嵌套的 JSON 对象

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>访问 JSON 内嵌对象。</p>

    <p id="demo"></p>

    <script>
      myObj = {
        name: "runoob",
        alexa: 10000,
        sites: {
          site1: "www.runoob.com",
          site2: "m.runoob.com",
          site3: "c.runoob.com",
        },
      };
      document.getElementById("demo").innerHTML += myObj.sites.site1 + "<br>";
      // 或者
      document.getElementById("demo").innerHTML += myObj.sites["site1"];
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820124212119.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 5.修改值

- 可以使用点号(.)来修改 JSON 对象的值：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>修改 JSON 对象的值。</p>

    <p id="demo"></p>

    <script>
      var myObj,
        i,
        x = "";
      myObj = {
        name: "runoob",
        alexa: 10000,
        sites: {
          site1: "www.runoob.com",
          site2: "m.runoob.com",
          site3: "c.runoob.com",
        },
      };
      myObj.sites.site1 = "www.google.com";

      for (i in myObj.sites) {
        x += myObj.sites[i] + "<br>";
      }

      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820124707667.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

- 可以使用中括号([])来修改 JSON 对象的值：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>使用中括号([])来修改 JSON 对象的值。</p>

    <p id="demo"></p>

    <script>
      var myObj,
        i,
        x = "";
      myObj = {
        name: "runoob",
        alexa: 10000,
        sites: {
          site1: "www.runoob.com",
          site2: "m.runoob.com",
          site3: "c.runoob.com",
        },
      };
      myObj.sites["site1"] = "www.google.com";

      for (i in myObj.sites) {
        x += myObj.sites[i] + "<br>";
      }

      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

##### 6.删除对象属性

- 可以使用 delete 关键字来删除 JSON 对象的属性：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>删除 JSON 对象属性。</p>

    <p id="demo"></p>

    <script>
      var myObj,
        i,
        x = "";
      myObj = {
        name: "runoob",
        alexa: 10000,
        sites: {
          site1: "www.runoob.com",
          site2: "m.runoob.com",
          site3: "c.runoob.com",
        },
      };
      delete myObj.sites.site1;

      for (i in myObj.sites) {
        x += myObj.sites[i] + "<br>";
      }

      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019082017074188.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

- 可以使用中括号([])来删除 JSON 对象的属性：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>删除 JSON 对象属性。</p>

    <p id="demo"></p>

    <script>
      var myObj,
        i,
        x = "";
      myObj = {
        name: "runoob",
        alexa: 10000,
        sites: {
          site1: "www.runoob.com",
          site2: "m.runoob.com",
          site3: "c.runoob.com",
        },
      };
      delete myObj.sites["site1"];

      for (i in myObj.sites) {
        x += myObj.sites[i] + "<br>";
      }

      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190820170655152.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

## JSON 数组

##### 1.数组作为 JSON 对象

> 实例
> [ “Google”, “Runoob”, “Taobao” ]

JSON 数组在中括号中书写。

JSON 中数组值必须是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。

JavaScript 中，数组值可以是以上的 JSON 数据类型，也可以是 JavaScript 的表达式，包括函数，日期，及 undefined。

##### 2.JSON 对象中的数组

- 对象属性的值可以是一个数组：

> 实例
> {
> “name”:“网站”,
> “num”:3,
> “sites”:[ “Google”, “Runoob”, “Taobao” ]
> }

- 可以使用索引值来访问数组：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>访问 JSON 对象数组值。</p>

    <p id="demo"></p>

    <script>
      var myObj, x;
      myObj = {
        name: "网站",
        num: 3,
        sites: ["Google", "Runoob", "Taobao"],
      };
      x = myObj.sites[0];
      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019082109430876.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 3.循环数组

- 可以使用 for-in 来访问数组：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>你可以使用 for-in 来访问数组:</p>

    <p id="demo"></p>

    <script>
      var myObj,
        i,
        x = "";
      myObj = {
        name: "网站",
        num: 3,
        sites: ["Google", "Runoob", "Taobao"],
      };

      for (i in myObj.sites) {
        x += myObj.sites[i] + "<br>";
      }

      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190821094750150.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

- 也可以使用 for 循环：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>使用 for 循环访问数组:</p>

    <p id="demo"></p>

    <script>
      var myObj,
        i,
        x = "";
      myObj = {
        name: "网站",
        num: 3,
        sites: ["Google", "Runoob", "Taobao"],
      };

      for (i = 0; i < myObj.sites.length; i++) {
        x += myObj.sites[i] + "<br>";
      }

      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190821094838616.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 4.嵌套 JSON 对象中的数组

- JSON 对象中数组可以包含另外一个数组，或者另外一个 JSON 对象：

> 实例
> myObj = {
> “name”:“网站”,
> “num”:3,
> “sites”: [
> { “name”:“Google”, “info”:[ “Android”, “Google 搜索”, “Google 翻译” ] },
> { “name”:“Runoob”, “info”:[ “菜鸟教程”, “菜鸟工具”, “菜鸟微信” ] },
> { “name”:“Taobao”, “info”:[ “淘宝”, “网购” ] }
> ]
> }

- 可以使用 for-in 来循环访问每个数组：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>循环内嵌数组：</p>

    <p id="demo"></p>

    <script>
      var myObj,
        i,
        j,
        x = "";
      myObj = {
        name: "网站",
        num: 3,
        sites: [
          { name: "Google", info: ["Android", "Google 搜索", "Google 翻译"] },
          { name: "Runoob", info: ["菜鸟教程", "菜鸟工具", "菜鸟微信"] },
          { name: "Taobao", info: ["淘宝", "网购"] },
        ],
      };

      for (i in myObj.sites) {
        x += "<h1>" + myObj.sites[i].name + "</h1>";
        for (j in myObj.sites[i].info) {
          x += myObj.sites[i].info[j] + "<br>";
        }
      }

      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190821100836655.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 5.修改数组值

- 可以使用索引值来修改数组值：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>修改 JSON 对象数组值。</p>

    <p id="demo"></p>

    <script>
      var myObj,
        i,
        x = "";
      myObj = {
        name: "网站",
        num: 3,
        sites: ["Google", "Runoob", "Taobao"],
      };
      myObj.sites[1] = "Github";

      for (i in myObj.sites) {
        x += myObj.sites[i] + "<br>";
      }

      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190821101138141.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 6.删除数组元素

- 可以使用 delete 关键字来删除数组元素：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <p>删除数组元素</p>

    <p id="demo"></p>

    <script>
      var myObj,
        i,
        x = "";
      myObj = {
        name: "网站",
        num: 3,
        sites: ["Google", "Runoob", "Taobao"],
      };
      delete myObj.sites[1];

      for (i in myObj.sites) {
        x += myObj.sites[i] + "<br>";
      }

      document.getElementById("demo").innerHTML = x;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190821101304936.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

## JSON.parse()

JSON 通常用于与服务端交换数据。

在接收服务器数据时一般是字符串。

我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

- 语法

> JSON.parse(text[, reviver])

- 参数说明：
  - text:必需， 一个有效的 JSON 字符串。
  - reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。

##### 1.JSON 解析实例

例如我们从服务器接收了以下数据：

> { “name”:“runoob”, “alexa”:10000, “site”:“www.runoob.com” }

我们使用 JSON.parse() 方法处理以上数据，将其转换为 JavaScript 对象：

> var obj = JSON.parse(’{ “name”:“runoob”, “alexa”:10000, “site”:“www.runoob.com” }’);

解析前要确保你的数据是标准的 JSON 格式，否则会解析出错。
你可以使用我们的在线工具检测：https://c.runoob.com/front-end/53。

解析完成后，我们就可以在网页上使用 JSON 数据了：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>从 JSON 对象中创建 JavaScript 对象</h2>

    <p id="demo"></p>

    <script>
      var obj = JSON.parse(
        '{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }'
      );
      document.getElementById("demo").innerHTML = obj.name + "：" + obj.site;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190821104328748.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 2.从服务端接收 JSON 数据

- 我们可以使用 AJAX 从服务器请求 JSON 数据，并解析为 JavaScript 对象。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>使用 XMLHttpRequest 来获取文件内容</h2>
    <p>
      文件内容是标准的 JSON 格式，可以使用 JSON.parse 方法将其转换为 JavaScript
      对象。
    </p>

    <p id="demo"></p>

    <script>
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          myObj = JSON.parse(this.responseText);
          document.getElementById("demo").innerHTML = myObj.name;
        }
      };
      xmlhttp.open("GET", "/try/ajax/json_demo.txt", true);
      xmlhttp.send();
    </script>

    <p>
      查看 JSON 文件数据
      <a href="/try/ajax/json_demo.txt" target="_blank">json_demo.txt</a>
    </p>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190821104859170.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

###### 2.1 XMLHttpRequest 对象的一个简单运用示例

XMLHttpRequest（）是一个构建 HTTP 请求的 JavaScript 对象（即构造器）。
XMLHttpRequest（）对象的用法，主要分为两个有效步骤：

- 发送请求——这一步，完成 XMLHttpRequest 对象的构建，并为其设置时间监听器。
- 处理响应——这一步，事件监听器会在服务器的响应信息到达时发出通知，然后代码就会忙于从中提取有用的信息

**发送请求 :**
1、创建一个对象，并为其设置一个能触发 readystatechange 事件的事件监听器

> var xhr = new XMLHttpRequest();
> xhr.onreadystatechange = callback;

2、调用 open()方法

> xhr.open(‘GET’, ‘myfile.txt’, true);

第一个参数是 http 请求的类型（GET、POST、HEAD 等）；第二个参数是请求目标的 URL（该示例请求的是与当前页面处于同一目录下的文本文件 myfile.txt）。第三个参数是布尔值，该值决定了请求是否按照异步的方式进行（true 表示异步请求，false 表示不是异步请求）。

3、发送请求

> xhr.send(’’); //该示例发送一个空字符串

**处理响应**
每个 XHR 对象中都有一个 readystate 属性。一旦该属性值改变就会触发 readystatechange 事件。该属性可能的状态中有：

0——未初始化状态
1——载入请求状态
2——载入请求完成状态
3——请求交互状态
4——请求完成状态

当请求的值为 4 时，说明服务端的响应信息已经返回，可以处理了。在 callback 函数中，除了确定 readyState 的值是 4 外，还要检查 http 请求的状态码。如果目标 URL 实际上不存在，就会收到一个值为 404 的状态码（表示未找到文件），正常情况下值为 200。状态码可以通过 XHR 对象的 statues 属性来获得。
一旦 xhr.readyState 值为 4 并且 xhr.status 值为 200，就可以通过 xhr.responseText 来访问目标 URL 中的内容了。下面代码演示了在 callback 中实现用 alert()方法来显示目标 URL 中的内容：

> function callback() {
> if (xhr.readyState < 4) {
> return;
> };
> if (xhr.status !== 200) {
> alert(‘the status code is not ok’);
> return;
> };
> alert(xhr.responseText);
> }

- responseText：获取字符串形式的响应数据
- responseXML：获取 XML 形式的响应数据
- status 和 statusText：以数字和文本形式返回 HTTP 状态码
- getAllResponseHeader()：获取所有的响应报头
- getResponseHeader()：查询响应中某个字段的值

##### 3.从服务端接收数组的 JSON 数据

- 如果从服务端接收的是数组的 JSON 数据，则 JSON.parse 会将其转换为 JavaScript 数组：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>内容是数组</h2>
    <p>内容是数组会转换为 JavaScript 数组。</p>

    <p id="demo"></p>

    <script>
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          myArr = JSON.parse(this.responseText);
          document.getElementById("demo").innerHTML = myArr[1];
        }
      };
      xmlhttp.open("GET", "/try/ajax/json_demo_array.txt", true);
      xmlhttp.send();
    </script>

    <p>
      查看服务端数据
      <a href="/try/ajax/json_demo_array.txt" target="_blank"
        >json_demo_array.txt</a
      >
    </p>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190822162618411.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019082216253739.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 4.异常

###### 4.1 解析数据

- JSON 不能存储 Date 对象。
  如果你需要存储 Date 对象，需要将其转换为字符串,之后再将字符串转换为 Date 对象。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>将字符串转换为 Date 对象。</h2>

    <p id="demo"></p>

    <script>
      var text =
        '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}';
      var obj = JSON.parse(text);
      obj.initDate = new Date(obj.initDate);

      document.getElementById("demo").innerHTML =
        obj.name + "创建日期: " + obj.initDate;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190822163142427.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

- 我们可以启用 JSON.parse 的第二个参数 reviver，一个转换结果的函数，对象的每个成员调用此函数。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>字符串转换为 Date 对象</h2>

    <p id="demo"></p>

    <script>
      var text =
        '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}';
      var obj = JSON.parse(text, function (key, value) {
        if (key == "initDate") {
          return new Date(value);
        } else {
          return value;
        }
      });

      document.getElementById("demo").innerHTML =
        obj.name + "创建日期：" + obj.initDate;
    </script>
  </body>
</html>
```

###### 4.2 解析函数

- JSON 不允许包含函数，但你可以将函数作为字符串存储，之后再将字符串转换为函数

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>字符串转换为函数</h2>

    <p id="demo"></p>

    <script>
      var text =
        '{ "name":"Runoob", "alexa":"function () {return 10000;}", "site":"www.runoob.com"}';
      var obj = JSON.parse(text);
      obj.alexa = eval("(" + obj.alexa + ")");

      document.getElementById("demo").innerHTML =
        obj.name + " Alexa 排名：" + obj.alexa();
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190822163735940.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

- **不建议在 JSON 中使用函数。**

###### 4.3 浏览器支持

- 主流浏览器都支持 JSON.parse() 函数：

Firefox 3.5
Internet Explorer 8
Chrome
Opera 10
Safari 4

## JSON.stringify()

JSON 通常用于与服务端交换数据。
在向服务器发送数据时一般是字符串。
我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串。

##### 1. 语法

> JSON.stringify(value[, replacer[, space]])

**参数说明：**

- value:必需， 要转换的 JavaScript 值（通常为对象或数组）。
- replacer:可选。用于转换结果的函数或数组。
  如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。
  如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。
- space:可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：\t。

##### 2. JavaScript 对象转换

例如我们向服务器发送以下数据：

> var obj = { “name”:“runoob”, “alexa”:10000, “site”:“www.runoob.com”};

使用 JSON.stringify() 方法处理以上数据，将其转换为字符串：

> var myJSON = JSON.stringify(obj);

myJSON 为字符串。

我们可以将 myJSON 发送到服务器：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>将 JavaScript 对象转换为 JSON 字符串</h2>

    <p id="demo"></p>

    <script>
      var obj = { name: "runoob", alexa: 10000, site: "www.runoob.com" };
      var myJSON = JSON.stringify(obj);
      document.getElementById("demo").innerHTML = myJSON;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190822170442908.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 3. JavaScript 数组转换

- 我们也可以将 JavaScript 数组转换为 JSON 字符串：

> 实例
> var arr = [ “Google”, “Runoob”, “Taobao”, “Facebook” ];
> var myJSON = JSON.stringify(arr);

myJSON 为字符串。
我们可以将 myJSON 发送到服务器：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>将 JavaScript 数组转换为 JSON 对象</h2>

    <p id="demo"></p>

    <script>
      var arr = ["Google", "Runoob", "Taobao", "Facebook"];
      var myJSON = JSON.stringify(arr);
      document.getElementById("demo").innerHTML = myJSON;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190822170857874.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 4. 异常

###### 4.1 解析数据

JSON 不能存储 Date 对象。
JSON.stringify() 会将所有日期转换为字符串。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>JSON.stringify 将 Date 对象转换为字符串</h2>

    <p id="demo"></p>

    <script>
      var obj = {
        name: "Runoob",
        initDate: new Date(),
        site: "www.runoob.com",
      };
      var myJSON = JSON.stringify(obj);
      document.getElementById("demo").innerHTML = myJSON;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190822171029157.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)
之后你可以再将字符串转换为 Date 对象。

###### 4.2 解析函数

JSON 不允许包含函数，JSON.stringify() 会删除 JavaScript 对象的函数，包括 key 和 value。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>JSON.stringify 将删除对象中的函数</h2>

    <p id="demo"></p>

    <script>
      var obj = {
        name: "Runoob",
        alexa: function () {
          return 10000;
        },
        site: "www.runoob.com",
      };
      var myJSON = JSON.stringify(obj);
      document.getElementById("demo").innerHTML = myJSON;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190822171225265.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)
我们可以在执行 JSON.stringify() 函数前将函数转换为字符串来避免以上问题的发生：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>JSON.stringify 将移除对象中的函数</h2>

    <p>我们可以在执行 JSON.stringify() 函数前将函数转换为字符串来保留函数。</p>

    <p id="demo"></p>

    <script>
      var obj = {
        name: "Runoob",
        alexa: function () {
          return 10000;
        },
        site: "www.runoob.com",
      };
      obj.alexa = obj.alexa.toString();
      var myJSON = JSON.stringify(obj);
      document.getElementById("demo").innerHTML = myJSON;
    </script>
  </body>
</html>
```

不建议在 JSON 中使用函数。

###### 4.3 浏览器支持

主流浏览器都支持 JSON.stringify() 函数：

Firefox 3.5
Internet Explorer 8
Chrome
Opera 10
Safari 4

## JSON 使用

JSON 最常见的用法之一，是从 web 服务器上读取 JSON 数据（作为文件或作为 HttpRequest），将 JSON 数据转换为 JavaScript 对象，然后在网页中使用该数据。

##### 1. JSON 实例 - 来自字符串的对象

创建包含 JSON 语法的 JavaScript 字符串：

> var txt = ‘{ “sites” : [’ +
> > ‘{ “name”:“菜鸟教程” , “url”:“www.runoob.com” },’ +
> > ‘{ “name”:“google” , “url”:“www.google.com” },’ +
> > ‘{ “name”:“微博” , “url”:“www.weibo.com” } ]}’;

由于 JSON 语法是 JavaScript 语法的子集，JavaScript 函数 eval() 可用于将 JSON 文本转换为 JavaScript 对象。

eval() 函数使用的是 JavaScript 编译器，可解析 JSON 文本，然后生成 JavaScript 对象。必须把文本包围在括号中，这样才能避免语法错误：

> var obj = eval ("(" + txt + “)”);

在网页中使用 JavaScript 对象：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
  </head>
  <body>
    <h2>从 JSON 字符串中创建对象</h2>
    <p>
      网站名: <span id="name"></span><br />
      网站地址: <span id="url"></span><br />
    </p>
    <script>
      var txt =
        '{ "sites" : [' +
        '{ "name":"菜鸟教程" , "url":"www.runoob.com" },' +
        '{ "name":"google" , "url":"www.google.com" },' +
        '{ "name":"微博" , "url":"www.weibo.com" } ]}';

      var obj = eval("(" + txt + ")");

      document.getElementById("name").innerHTML = obj.sites[0].name;
      document.getElementById("url").innerHTML = obj.sites[0].url;
    </script>
  </body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190823105721635.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)

##### 2. JSON 解析器

eval() 函数可编译并执行任何 JavaScript 代码。这隐藏了一个潜在的安全问题。

使用 JSON 解析器将 JSON 转换为 JavaScript 对象是更安全的做法。JSON 解析器只能识别 JSON 文本，而不会编译脚本。

在浏览器中，这提供了原生的 JSON 支持，而且 JSON 解析器的速度更快。

较新的浏览器和最新的 ECMAScript (JavaScript) 标准中均包含了原生的对 JSON 的支持。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190823113553302.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnFpbmdfaGFwcHk=,size_16,color_FFFFFF,t_70)
**使用 eval()函数**

> Js 代码：
> var data="
> {
> root:
> [
> > {name:‘1’,value:‘0’},
> > {name:‘6101’,value:‘北京市’},
> > {name:‘6102’,value:‘天津市’},
> > {name:‘6103’,value:‘上海市’},
> > {name:‘6104’,value:‘重庆市’},
> > {name:‘6105’,value:‘渭南市’},
> > {name:‘6106’,value:‘延安市’},
> > {name:‘6107’,value:‘汉中市’},
> > {name:‘6108’,value:‘榆林市’},
> > {name:‘6109’,value:‘安康市’},
> > {name:‘6110’,value:‘商洛市’}
> > ]
> }";
> var dataObj=eval("("+data+")");//转换为 json 对象

**为什么要 eval 这里要添加 “("("+data+")");//”呢？**
**原因在于：eval 本身的问题。 由于 json 是以”{}”的方式来开始以及结束的，在 JS 中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。**
**加上圆括号的目的是迫使 eval 函数在处理 JavaScript 代码的时候强制将括号内的表达式（expression）转化为对象，而不是作为语 句（statement）来执行。举一个例子，例如对象字面量{}，如若不加外层的括号，那么 eval 会将大括号识别为 JavaScript 代码块的开始 和结束标记，那么{}将会被认为是执行了一句空语句。所以下面两个执行结果是不同的：**

> Js 代码
> alert(eval("{}"); // return undefined
> alert(eval("({})");// return object[Object]

对于这种写法，在 JS 中，可以到处看到。
如: (function()) {}(); 做闭包操作时等。

## JSONP

Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

为什么我们从不同的域（网站）访问数据需要一个特殊的技术( JSONP )呢？这是因为同源策略。

同源策略，它是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。

##### 1. JSONP 应用

###### 1.1 服务端 JSONP 格式数据

如客户想访问 : https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction。

假设客户期望返回数据：[“customername1”,“customername2”]。

真正返回到客户端的数据显示为: callbackFunction([“customername1”,“customername2”])。

服务端文件 jsonp.php 代码为：

```php
jsonp.php 文件代码
<?php
header('Content-type: application/json');
//获取回调函数名
$jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);
//json数据
$json_data = '["customername1","customername2"]';
//输出jsonp格式的数据
echo $jsoncallback . "(" . $json_data . ")";
?>
```

###### 1.2 客户端实现 callbackFunction 函数

```html
<script type="text/javascript">
  function callbackFunction(result, methodName) {
    var html = "<ul>";
    for (var i = 0; i < result.length; i++) {
      html += "<li>" + result[i] + "</li>";
    }
    html += "</ul>";
    document.getElementById("divCustomers").innerHTML = html;
  }
</script>
```

**页面展示:**

```html
<div id="divCustomers"></div>
```

**客户端页面完整代码:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JSONP 实例</title>
  </head>
  <body>
    <div id="divCustomers"></div>
    <script type="text/javascript">
      function callbackFunction(result, methodName) {
        var html = "<ul>";
        for (var i = 0; i < result.length; i++) {
          html += "<li>" + result[i] + "</li>";
        }
        html += "</ul>";
        document.getElementById("divCustomers").innerHTML = html;
      }
    </script>
    <script
      type="text/javascript"
      src="https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction"
    ></script>
  </body>
</html>
```

##### 2. jQuery 使用 JSONP

以上代码可以使用 jQuery 代码实例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JSONP 实例</title>
    <script src="https://cdn.static.runoob.com/libs/jquery/1.8.3/jquery.js"></script>
  </head>
  <body>
    <div id="divCustomers"></div>
    <script>
      $.getJSON(
        "https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=?",
        function (data) {
          var html = "<ul>";
          for (var i = 0; i < data.length; i++) {
            html += "<li>" + data[i] + "</li>";
          }
          html += "</ul>";

          $("#divCustomers").html(html);
        }
      );
    </script>
  </body>
</html>
```
