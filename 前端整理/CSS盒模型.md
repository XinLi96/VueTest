CSS盒模型
=====
基本概念:标准模型+IE模型

标准模型和IE模型区别
* 标准模型的宽度是content
* IE模型的宽和高是content+padding+border

CSS如何设置这两种模型<br>
* box-sizing：content-box；用于标准浏览器
* box-sizing：border-box；用于IE浏览器

Js如何设置获取盒模型对应的宽和高<br>
* dom.style.width/height<br>
  取到内联样式的宽和高
* dom.currentStyle.width/height<br>
  取到渲染之后的宽和高(只有IE支持)
* window.getComputedStyle(dom).width/height<br>
  取到渲染之后的宽和高(兼容到Firefox和Chrome)
* dom.getBoundingClientRect().width/height<br>
  取到渲染之后的宽和高(可以计算相对于窗口原点的left和top的值)
    
根据盒模型解释边距重叠<br>
* 父子元素的边距重叠（子元素的高度和margin-top）
* 兄弟元素的边距重叠（兄弟的上下边距显示最大边距）
* 空元素的边距重叠（空元素的上边距和下边距显示最大边距）

BFC或IFC（边距重叠解决方案）<br>
>BFC：块级格式化上下文<br>
>IFC：行内格式化上下文
* BFC的原理：BFC的渲染规则
* 一、BFC的垂直方向边距会发生重叠
* 二、BFC的box区域不会与浮动元素重叠（用于清除浮动）
* 三、BFC在页面上是一个独立的容器，外面的元素不会影响里面的元素
* 四、计算BFC高度的时候浮动元素也会参与计算
>如何创建BFC
* float不为none（默认值是none）
* position不是static和relative
* display的值是table相关的
* overflow的值不为visible
>BFC的使用场景
* BFC垂直方向边距重叠
* BFC不与float元素重叠
* BFC子元素即使是float也会参与父元素高度的计算
>盒模型中的各部分设百分比都是相对于谁的？
* width和height的百分比都是相对于父元素的width和height
* 当父元素的宽度和高度都存在时，margin-left和margin-top是相对于父元素的宽度，margin-top和margin-bottom是相对于父元素的高度；父元素的高度不存在时，都是相对于父元素的宽度
* 当父元素的宽度和高度都存在时，padding-left和padding-top是相对于父元素的宽度，padding-top和padding-bottom是相对于父元素的高度；父元素的高度不存在时，都是相对于父元素的宽度
* border不允许设置百分比