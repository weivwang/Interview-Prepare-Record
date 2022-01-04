# CSS面试题复习总结

本文为原创，如需转载，请注明出处。
本篇文章参考了了网上的css面试题复习，同时融入的自己的实践。

参考博客/项目：
- <a href="https://juejin.cn/post/6969733494754770952">最近大厂面试题总结, shanyue 掘金博主</a>
-  <a href="https://blog.csdn.net/weixin_44135121/article/details/91430443">让元素水平垂直居中的四种方法 ，CSDN用户：杏子_1024</a>

本部分内容代码实战更多，请读者打开codePen进行亲自实验.
实现元素水平垂直居中的几种思路：
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