
# HTML
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [HTML](#html)
    - [1. HTML, XHTML, XML, SGML区别](#1-html-xhtml-xml-sgml区别)
    - [2. HTML5和HTML](#2-html5和html)
    - [3. XHTM严格在哪里](#3-xhtm严格在哪里)
    - [4. !DOCTYPE的作用](#4-doctype的作用)
    - [行内元素和块级元素](#行内元素和块级元素)
    - [行内元素和块级元素转换方式](#行内元素和块级元素转换方式)
    - [空元素](#空元素)
    - [HTML5语义化的好处](#html5语义化的好处)
    - [严格模式和混杂模式](#严格模式和混杂模式)
    - [严格模式与混杂模式的语句解析不同点有哪些？](#严格模式与混杂模式的语句解析不同点有哪些)
    - [为什么会有这两种模式？](#为什么会有这两种模式)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


本文知识点参考：https://github.com/CavsZhouyou/ Front-End-Interview-Notebook/blob/master/Html/Html<br>
https://juejin.cn/post/6905294475539513352 <br>
https://juejin.cn/post/6844904180943945742 \
https://zhuanlan.zhihu.com/p/111953553\
https://www.jianshu.com/p/800e6bb26590\

特此感谢，如有侵权，请联系我

### 1. HTML, XHTML, XML, SGML区别
关系：
![](https://s2.loli.net/2022/01/03/vObXACFnK3pehLa.png)
- HTML: Hyper Text Markup Language, 超文本标记语言，规范比较松散，用于规定怎么显示网页
- XHTML：可扩展的超文本标记语言，基于XML，作用与HTML类似，但语法更严格。
- XML: 可扩展的标记语言，主要用于存储数据和结构。
- SGML：Standard Generalized Markup Language，标准通用标记语言,是一种定义电子文档结构和描述其内容的国际标准语言（源自百度百科）

### 2. HTML5和HTML
HTML5是html的第5个版本
主要新增的特性有以下几点：
- 文档声明区别,
  - HTML5:
    `<!DOCTYPE html>`即可
  - html: 更复杂，标签里面还有PUBLIC W3C等内容，例如：
    - HTML 4.01 Strict :
      `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
    - HTML 4.01 Transitional ：`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">`
    - HTML 4.01 Frameset ：`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"  "http://www.w3.org/TR/html4/frameset.dtd">`
- HTML5新增许多语义化标签，例如：
  - ``` <header><article><footer>```

- HTML5支持使用canvas绘制图像
- HTML5使用`<audio>`和`<video>`标签来支持音频和视频控制,无需任何额外的插件如Flash、Silverlight等，就可以传输所有内容.

### 3. XHTM严格在哪里
- 标签名必须小写
- 标签必须关闭
- 必须正确嵌套
- 必须要有根元素


### 4. !DOCTYPE的作用
```
doctype是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档。

doctype在html中的作用就是触发浏览器的标准模式，如果html中省略了doctype，浏览器就会进入到Quirks模式的怪异状态，在这种模式下，有些样式会和标准模式存在差异。

在 html5 之后不再需要指定 DTD 文档，因为 html5 以前的 html 文档都是基于 SGML 的，所以需要通过指定 DTD 来定义文档中允许的属性以及一些规则。而 html5 不再基于 SGML 了，所以不再需要使用 DTD。
```

### 行内元素和块级元素
区别：
```
块级元素独占一行，其宽度自动填满父元素宽度

行内元素不独占一行，相邻行内元素排在同一行，直到排不下，才换行，其宽度随元素的内容而变化

块级元素可设置 width, height属性，行内元素设置width, height无效

块级元素可以设置margin 和 padding. 行内元素设置 width 无效，height 无效, 行内元素的水平方向的padding-left,padding-right,margin-left,margin-right 都产生边距效果，但竖直方向的padding-top,padding-bottom,margin-top,margin-bottom都不会产生边距效果
```

- 行内元素： a, b, span, img, input, select, strong;
- 块级元素： div, ul, li, dl（定义列表） dt, dd, h1-5, p等；

### 行内元素和块级元素转换方式
- 通过display转换
    ```
    display:none;不显示该元素，也不会保留该元素原先占有的文档流位置。
    display:block;转换为块级元素。
    display:inline;转换为行内元素。
    display:inline-block;转换为行内块元素。
    ```
- float:
    当把行内元素设置完浮动（float:left/right）后，该行内元素的display属性会被赋予block值，且拥有浮动特性。
- position: 当为行内元素进行定位时，position:absolute，与position:fixed。都会使原先的行内元素变为块级元素。

### 空元素
> 标签内没有内容的 HTML 标签被称为空元素。空元素是在开始标签中关闭的。常见的空元素有：br hr img input link meta


### HTML5语义化的好处
- 丢掉样式时能让页面呈现出清晰的结构
- 方便其他设备解析
- 有利于SEO：有利于爬虫爬取抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重
- 有利于团队开发和维护，代码可读性更好

### 严格模式和混杂模式
- 严格模式： 又称为标准模式，指浏览器按照W3C标准解析代码；
- 混杂模式： 又称怪异模式、兼容模式，是指浏览器用自己的方式解析代码.混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作
- 区分严格模式和混杂模式：
  - 如果文档包含严格的 DOCTYPE ，那么它一般以严格模式呈现。
  - 包含过渡 DTD 和 URI 的 DOCTYPE ，也以严格模式呈现，但有过渡 DTD 而没有 URI （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现。
  - DOCTYPE 不存在或形式不正确会导致文档以混杂模式呈现。
  - HTML5 没有 DTD ，因此也就没有严格模式与混杂模式的区别


### 严格模式与混杂模式的语句解析不同点有哪些？
- 盒模型
   ![](https://s2.loli.net/2022/01/03/COwU4917SZsjv2n.png)
- 严格模式下行内元素设置宽高无效，混杂模式有效
- 严格模式下设置高度百分比，若父元素没有高度，子元素高度无效
- margin: 0 auto 设置水平居中在IE无效
  - 解决方法，IE中：
    - `body{text-align:center};
  #content{text-align:left};`

### 为什么会有这两种模式？
> 历史原因：Netscape4（网景公司早期的浏览器）和IE4（微软公司早期的浏览器）实现CSS机制时，并没有遵循W3C提出的标准。Netscape4 提供了糟糕的支持，而IE4 虽然接近标准，但依旧未能完全正确的支持标准。尽管IE 5 修复了IE4 许多的问题，但是依然延续CSS实现中的其它故障（主要是盒模型问题）。<br>
> 为了保障自己的网站在各个浏览器上显示正确，网页开发者们不得不依据各个浏览器自身的规范来使用css，因此大部分网站的css实现并不符合W3C规范的标准。<br>
> 而随着标准一致性越来越重要，浏览器开发商不得不面临一个艰难的抉择：逐渐遵循W3C的标准是前进的方向。但是改变现有的 css，完全去遵循标准，会使许多旧网站或多或少受到破坏，如果浏览器突然以正确的方式解析现存的css，陈旧的网站的显示必然会受到影响。所以，所有的浏览器都需要提供两种模式：混杂模式服务于旧式规则，而严格模式服务于标准规则。