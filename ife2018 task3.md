## 熟悉CSS和HTML的基本属性及其用法
## 一定要学会思考（理论结合实际）
学习时一定要想，这部分知识我在什么情况下会用到。
>今天我看了ife其他人的代码，只看了两个人写的，写得很乱。这让我想起以前自己写代码也是这样，只顾完成任务，比如ife要求我们属性标签，有的同学就在自己的html文档里随便操作一两个标签就完事，其实这样是很不利于日后学习的，我看了后面还有更深入的学习。
>所以给我的感悟就是一定要学会思考，比如在我的文档上哪里应该用font-weight这个属性，哪里应该用h1，而不是只顾了解这个属性。
>在之前学习时，我也总这样，只顾了解，不去结合实际，导致自己实践能力很差。

现在来梳理一下task3的知识，按照ife给的问题。
## 什么是CSS，CSS是如何工作的
CSS是层叠样式表（Cascading Style Sheet）,它可以帮助我们做出精美的网页。
css是如何工作的，可以看下图（来自MDN）。在解析HTML时，会加载CSS并解析它，找到相应的选择器分别给定样式。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200515012203742.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwODkwNjAx,size_16,color_FFFFFF,t_70)
## CSS的基本语法是怎样的
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。
如下，h1是选择器，font-size：14px是一条声明。每条声明都是由属性与值组成。
```css
h1 {
	font-size:14px;
}
```
## CSS选择器是什么概念，简单选择器和属性选择器是什么
css和html要连接起来就是靠这个选择器，选择器有类选择器、元素选择器、id选择器、属性选择器以及许多组合选择器。
属性选择器指 类似 a[href=#]  ,匹配所有href=“#” 的元素。

## 文本样式都有哪些相关属性，对应哪些值
有点太多了，列举几个我记不住的。
这个指文字阴影，h-shadow指水平方向上的阴影位置，v-shadow指垂直方向上的。blur是模糊距离，越大越模糊范围越广。
```css
text-shadow: h-shadow v-shadow blur color;
```
例如 ： text-shadow: 5px 5px 5px #999;  
这个和box-shadow类似，网上有更详细的教程说明。
  先写这么多了。欢迎指正吐槽。
  
  **tesk3的运行结果：**
  https://codepen.io/klaus928/pen/VwvGwpZ?editors=1100
 
 *参考地址：https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting*
