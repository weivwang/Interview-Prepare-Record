# CSS面试题复习总结

本文为原创，如需转载，请注明出处。
本篇文章参考了了网上的css面试题复习，同时融入的自己的实践。
### 目录
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [CSS面试题复习总结](#css%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%8D%E4%B9%A0%E6%80%BB%E7%BB%93)
    - [实现元素水平垂直居中的几种思路：](#%E5%AE%9E%E7%8E%B0%E5%85%83%E7%B4%A0%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%E7%9A%84%E5%87%A0%E7%A7%8D%E6%80%9D%E8%B7%AF)
    - [顺便复习一下CSS的transform](#%E9%A1%BA%E4%BE%BF%E5%A4%8D%E4%B9%A0%E4%B8%80%E4%B8%8Bcss%E7%9A%84transform)
    - [CSS实现经典三栏布局](#css%E5%AE%9E%E7%8E%B0%E7%BB%8F%E5%85%B8%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80)
    - [CSS in JS](#css-in-js)
    - [CSS选择器优先级](#css%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7)
    - [CSS position的取值和描述](#css-position%E7%9A%84%E5%8F%96%E5%80%BC%E5%92%8C%E6%8F%8F%E8%BF%B0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

参考博客/项目：
- <a href="https://juejin.cn/post/6969733494754770952">最近大厂面试题总结, shanyue 掘金博主</a>
-  <a href="https://blog.csdn.net/weixin_44135121/article/details/91430443">让元素水平垂直居中的四种方法 ，CSDN用户：杏子_1024</a>

本部分内容代码实战更多，请读者打开codePen进行亲自实验.
### 实现元素水平垂直居中的几种思路：
- flex布局（最常见，必须掌握）
  - 父元素设置：
    ```
    display: flex;
    align-items: center;
    justify-content: center;
    ```
    <a href="https://codepen.io/weivwang/pen/dyVemGO">codepen查看</a>
- transform
    使用transform: translate(x,y)来实现，需要根据子元素大小计算偏移量
    ```
    父元素占满整个屏幕：height: 100vh
    子元素: 假设宽度为70%，高70%，则偏移量：15% / 70% = 0.214，可以看出存在误差
    设置子元素为: transform: translate(21.4%, 21.4%)
    ```
    <a href="https://codepen.io/weivwang/pen/OJxZvOE">codepen查看</a>
- position
    ```
    父元素position设为fixed，上下左右均设置为0
    子元素position设为fixed，上下左右均设置为0，margin设置为auto
    ```
    <a href="https://codepen.io/weivwang/pen/jOGxxEO">codepen查看</a>

### 顺便复习一下CSS的transform
transform是做形变的, 主要包含scale, rotate, skew, translate, matrix
- rotate() ：通过指定的角度参数对原元素指定一个2D rotation（2D 旋转）
- translate(x,y)水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）；translateX(x)仅水平方向移动（X轴移动）；translateY(Y)仅垂直方向移动（Y轴移动）
- scale：缩放, 也分为scale(x,y),scaleX(x),scaleY(y);
  scale(t), t>1放大;t<1 缩小
- skew: skew(x,y)使元素在水平和垂直方向同时扭曲；skewX(x)仅使元素在水平方向扭曲变形；skewY(y)
- matrix(, , , , , ) ： 以一个含六值的(a,b,c,d,e,f)变换矩阵的形式指定一个2D变换，相当于直接应用一个[a b c d e f]变换矩阵。

transform-origin： 修改形变的基点

### CSS实现经典三栏布局
三栏布局：左右固定，中间自适应，尽量把中间的div放在最前面，内容比较多的时候最先加载
- float: 左右float, 中间固定 
    - <a href="https://codepen.io/weivwang/pen/gOGzjMX">codepen查看代码及效果</a>
- flex: <a href="https://codepen.io/weivwang/pen/vYejaWe">codepen查看代码及效果</a>
- absolute：<a href="https://codepen.io/weivwang/pen/OJxZwqa">codepen查看代码及效果</a>


### CSS in JS
styled-component: 这里有一篇博文讲的很好，内容稍多，可以看看：<a href="https://www.jianshu.com/p/2d5f037c7df9">简书用户, 陈鑫呀，styled-components的基本使用指南
</a>

### CSS选择器优先级
从大到小排列分别为：
- !important: 在属性后面写上这条样式，会覆盖掉页面上任何位置定义的元素的样式。
- 行内样式，在style属性里面写的样式
- id选择器
- class选择器
- 标签选择器
- 通配符选择器，例如（*）
- 浏览器自定义属性和继承的属性

### CSS position的取值和描述
容易漏掉sticky
|值|描述|
|--|--|
|absolute|生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。|
|fixed|生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。|
|relative|生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。|
|static|默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。|
|inherit|规定应该从父元素继承 position 属性的值。|
|sticky|粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。它的行为就像 position:relative; 而当页面滚动超出目标区域时它的表现就像 position:fixed;，它会固定在目标位置。（可以用来做固定导航栏）