---
title: Bootstrap4
---

## Bootstrap4 总结

Bootstrap 4 网格系统有以下 5 个类:
.col- 针对所有设备
.col-sm- 平板 - 屏幕宽度等于或大于 576px
.col-md- 桌面显示器 - 屏幕宽度等于或大于 768px)
.col-lg- 大桌面显示器 - 屏幕宽度等于或大于 992px)
.col-xl- 超大桌面显示器 - 屏幕宽度等于或大于 1200px)

Bootstrap 4 默认的 **font-size** 为 16px, **line-height** 为 1.5。

默认的 **font-family** 为 "Helvetica Neue", Helvetica, Arial, sans-serif。

此外，所有的 **<p>** 元素 **margin-top: 0** 、 **margin-bottom: 1rem** (16px)。

### 颜色

```html
<div class="container">
  <h2>代表指定意义的文本颜色</h2>
  <p class="text-muted">柔和的文本。</p>
  <p class="text-primary">重要的文本。</p>
  <p class="text-success">执行成功的文本。</p>
  <p class="text-info">代表一些提示信息的文本。</p>
  <p class="text-warning">警告文本。</p>
  <p class="text-danger">危险操作文本。</p>
  <p class="text-secondary">副标题。</p>
  <p class="text-dark">深灰色文字。</p>
  <p class="text-light">浅灰色文本（白色背景上看不清楚）。</p>
  <p class="text-white">白色文本（白色背景上看不清楚）。</p>
</div>
```

### 图像

**.rounded** 类可以让图片显示圆角效果

**.rounded-circle** 类可以设置椭圆形图片

**.img-thumbnail** 类用于设置图片缩略图(图片有边框)

使用 **.float-right** 类来设置图片右对齐，使用 **.float-left** 类设置图片左对齐

图像有各种各样的尺寸，我们需要根据屏幕的大小自动适应。

我们可以通过在 **<img>** 标签中添加 **.img-fluid** 类来设置响应式图片。

**.img-fluid** 类设置了 **max-width: 100%;** 、 **height: auto;** :

### alert

提示框可以使用 **.alert** 类, 后面加上 **.alert-success**, **.alert-info**, **.alert-warning**, **.alert-danger**, **.alert-primary**, **.alert-secondary**, **.alert-light** 或 **.alert-dark** 类来实现

提示框中在链接的标签上添加 **alert-link** 类来设置匹配提示框颜色的链接

我们可以在提示框中的 div 中添加 **.alert-dismissible** 类，然后在关闭按钮的链接上添加 **class="close"** 和 **data-dismiss="alert"** 类来设置提示框的关闭操作。

**提示:** &times; (×) 是 HTML 实体字符，来表示关闭操作，而不是字母 "x"。

**.fade** 和 **.show** 类用于设置提示框在关闭时的淡出和淡入效果

### Badges

徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要将 **.badge** 类加上带有指定意义的颜色类 (如 **.badge-secondary**) 添加到 **<span>** 元素上即可。 徽章可以根据父元素的大小的变化而变化

使用 **.badge-pill** 类来设置药丸形状徽章

### 进度条

创建一个基本的进度条的步骤如下：

- 添加一个带有 **.progress** 类的 <div>。
- 接着，在上面的 <div> 内，添加一个带有 class **.progress-bar** 的空的 <div>。
- 添加一个带有百分比表示的宽度的 style 属性，例如 **style="width:70%"** 表示进度条在 **70%** 的位置。

默认情况下进度条为蓝色

可以使用 `.progress-bar-striped` 类来设置条纹进度条

使用 `.progress-bar-animated` 类可以为进度条添加动画

### 分页

创建一个基本的分页可以在 **<ul>** 元素上添加 **.pagination** 类。然后在 **<li>** 元素上添加 **.page-item** 类

当前页可以使用 **.active** 类来高亮显示

**.disabled** 类可以设置分页链接不可点击

**.pagination-lg** 类设置大字体的分页条目，**.pagination-sm** 类设置小字体的分页条目

**.breadcrumb** 和 **.breadcrumb-item** 类用于设置面包屑导航

### 卡片

通过 Bootstrap4 的 **.card** 与 **.card-body** 类来创建一个简单的卡片

**.card-header**类用于创建卡片的头部样式， **.card-footer** 类用于创建卡片的底部样式

**.bg-primary**, **.bg-success**, **.bg-info**, **.bg-warning**, **.bg-danger**, **.bg-secondary**, **.bg-dark** 和 **.bg-light**

我们可以在头部元素上使用 **.card-title** 类来设置卡片的标题 。 **.card-text** 类用于设置卡片正文的内容。 **.card-link** 类用于给链接设置颜色。

我们可以给 **<img>** 添加 **.card-img-top**（图片在文字上方） 或 **.card-img-bottom**（图片在文字下方 来设置图片卡片

如果图片要设置为背景，可以使用 **.card-img-overlay** 类

### 下拉菜单

Bootstrap4 下拉菜单依赖于 popper.min.js

**.dropdown** 类用来指定一个下拉菜单。

我们可以使用一个按钮或链接来打开下拉菜单， 按钮或链接需要添加 **.dropdown-toggle** 和 **data-toggle="dropdown"** 属性。

在<div>  元素上添加  .dropdown-menu  类来设置实际下拉菜单，然后在下拉菜单的选项中添加  .dropdown-item  类。

**.dropdown-divider** 类用于在下拉菜单中创建一个水平的分割线

**.dropdown-header** 类用于在下拉菜单中添加标题

.active 类会让下拉菜单的选项高亮显示 (添加蓝色背景)。

如果要禁用下拉菜单的选项，可以使用**.disabled** 类

如果我们想让下拉菜单右对齐，可以在元素上的 .dropdown-menu 类后添加 **.dropdown-menu-right** 类。

如果你希望下拉菜单向右弹出，可以在 div 元素上添加 **"dropright"** 类，默认向下，其他方向同理

### 折叠

**.collapse** 类用于指定一个折叠元素 (实例中的 <div>); 点击按钮后会在隐藏与显示之间切换。

控制内容的隐藏与显示，需要在 <a> 或 <button> 元素上添加 **data-toggle="collapse"** 属性。 **data-target="#id"** 属性是对应折叠的内容 (<div id="demo">)。

**注意:** <a> 元素上你可以使用 **href** 属性来代替 **data-target** 属性

默认情况下折叠的内容是隐藏的，你可以添加 **.show** 类让内容默认显示

**注意:** 使用 **data-parent** 属性来确保所有的折叠元素在指定的父元素下，这样就能实现在一个折叠选项显示时其他选项就隐藏。

### 导航

如果你想创建一个简单的水平导航栏，可以在 **<ul>** 元素上添加 **.nav**类，在每个 **<li>** 选项上添加 **.nav-item** 类，在每个链接上添加 **.nav-link** 类

**.justify-content-center** 类设置导航居中显示， **.justify-content-end** 类设置导航右对齐。

**.flex-column** 类用于创建垂直导航

使用 **.nav-tabs** 类可以将导航转化为选项卡。然后对于选中的选项使用 .active 类来标记。

**.nav-pills** 类可以将导航项设置成胶囊形状。

**.nav-justified** 类可以设置导航项齐行等宽显示。

如果你要设置选项卡是动态可切换的，可以在每个链接上添加 **data-toggle="tab"** 属性。 然后在每个选项对应的内容的上添加 **.tab-pane** 类。

如果你希望有淡入效果可以在 **.tab-pane** 后添加 **.fade**类

### 导航栏

导航栏一般放在页面的顶部。

我们可以使用 **.navbar** 类来创建一个标准的导航栏，后面紧跟: **.navbar-expand-xl|lg|md|sm** 类来创建响应式的导航栏 (大屏幕水平铺开，小屏幕垂直堆叠)。

导航栏上的选项可以使用 **<ul>** 元素并添加 **class="navbar-nav"** 类。 然后在 **<li>** 元素上添加 **.nav-item** 类， **<a>** 元素上使用 **.nav-link** 类

通过删除 **.navbar-expand-xl|lg|md|sm** 类来创建垂直导航栏

**.navbar-brand** 类用于高亮显示品牌/Logo

如果使用图片，可以使用 **.navbar-brand** 类来设置图片自适应导航栏。

导航栏的表单 **<form>** 元素使用 **class="form-inline"** 类来排版输入框与按钮

你也可以使用其他的输入框类，如 **.input-group-addon** 类用于在输入框前添加小标签。

使用 **.navbar-text** 类来设置导航栏上非链接文本，可以保证水平对齐，颜色与内边距一样。

导航栏可以固定在头部或者底部。

我们使用 **.fixed-top** 类来实现导航栏的固定 **.fixed-bottom** 类用于设置导航栏固定在底部

### 表单略过，需要的时候去官方文档或者菜鸟教程看一下

### 提示框

通过向元素添加 **data-toggle="tooltip"** 来来创建提示框。

**title** 属性的内容为提示框显示的内容

提示框要写在 jQuery 的初始化代码里: 然后在指定的元素上调用 **tooltip()** 方法。

以下实例可以在文档的任何地方使用提示框

```jquery
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
```

默认情况下提示框显示在元素上方。

可以使用 **data-placement** 属性来设定提示框显示的方向: top, bottom, left 或 right

### 弹出框

通过向元素添加 **data-toggle="popover"** 来来创建弹出框。

**title** 属性的内容为弹出框的标题，**data-content** 属性显示了弹出框的文本内容

弹出框要写在 jQuery 的初始化代码里: 然后在指定的元素上调用 **popover()** 方法。

以下实例可以在文档的任何地方使用弹出框

```jquery
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
```

默认情况下弹出框显示在元素右侧。

可以使用 **data-placement** 属性来设定弹出框显示的方向: top, bottom, left 或 right

默认情况下，弹出框在再次点击指定元素后就会关闭，你可以使用 **data-trigger="focus"** 属性来设置在鼠标点击元素外部区域来关闭弹出框

如果你想实现在鼠标移动到元素上显示，移除后消失的效果，可以使用 **data-trigger** 属性，并设置值为 "hover"

### 滚动监听

向您想要监听的元素（通常是 body）添加 **data-spy="scroll"** 。

然后添加 **data-target** 属性，它的值为导航栏的 id 或 class (**.navbar**)。这样就可以联系上可滚动区域。

注意可滚动项元素上的 id （\***\*） 必须匹配导航栏上的链接选项 （**[\*\*](#section1))。

可选项**data-offset** 属性用于计算滚动位置时，距离顶部的偏移像素。 默认为 10 px。

**设置相对定位:** 使用 data-spy="scroll" 的元素需要将其 CSS **position** 属性设置为 "relative" 才能起作用。

### flex

**.flex-row** 可以设置弹性子元素水平显示，这是默认的。

使用 **.flex-row-reverse** 类用于设置右对齐显示，即与 **.flex-row** 方向相反。

**.flex-column** 类用于设置弹性子元素垂直方向显示, **.flex-column-reverse** 用于翻转子元素

**.justify-content-\*** 类用于修改弹性子元素的排列方式，**\*** 号允许的值有：**start (默认), end, center, between 或 around**

.flex-fill 类强制设置各个弹性子元素的宽度是一样的

.flex-grow-1 用于设置子元素使用剩下的空间。

**提示:** 使用 **.flex-shrink-1** 用于设置子元素的收缩规则。

**.order** 类可以设置弹性子元素的排序，从 **.order-1** 到 **.order-12**，数字越低权重越高( **.order-1** 排在 **.order-2** 之前)

**.mr-auto** 类可以设置子元素右外边距为 **auto**，即 **margin-right: auto!important;**，**.ml-auto** 类可以设置子元素左外边距为 **auto**，即 **margin-left: auto!important;**

弹性容器中包裹子元素可以使用以下三个类： .flex-nowrap (默认), .flex-wrap 或 .flex-wrap-reverse。设置 flex 容器是单行或者多行。

我们可以使用 .align-content-\* 来控制在垂直方向上如何去堆叠子元素，包含的值有：.align-content-start (默认), .align-content-end, .align-content-center, .align-content-between, .align-content-around 和 .align-content-stretch。 这些类在只有一行的弹性子元素中是无效的。

如果要设置单行的子元素对齐可以使用 **.align-items-\*** 类来控制，包含的值有：**.align-items-start, .align-items-end, .align-items-center, .align-items-baseline, 和 .align-items-stretch (默认)**。

如果要设置指定子元素对齐对齐可以使用 .align-self-\* 类来控制，包含的值有：.align-self-start, .align-self-end, .align-self-center, .align-self-baseline, 和 .align-self-stretch (默认)。
