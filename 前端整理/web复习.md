面试整理
=====
一面
------

CSS盒模型
_____
基本概念:标准模型+IE模型

标准模型和IE模型区别<br>
* 标准模型的宽度是content
* IE模型的宽和高是content+padding+border

CSS如何设置这两种模型<br>
* box-sizing：conten-box；用于标准浏览器
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
* BFC子元素即使是float也会参与
DOM事件类
______
基本概念：DOM事件的级别<br>

* DOM0 element.onclick=function(){}<br>
  可以直接加on属性后面写js代码（事件会被后面的事件覆盖）
* DOM2 element.addEventListener('click',function(){},false)<br>
  改变了事件的定义方式
* DOM3 element.addEventLitener('keyup',function(){},false)<br>
  事件的定义类型增加了，如鼠标事件、键盘事件

DOM事件模型<br>
* 事件捕获
* 事件冒泡

DOM事件流<br>
>鼠标点击之后怎么传到页面之上的
* 捕获->目标阶段->冒泡

描述DOM事件捕获的具体流程<br>
* window->document->html->body->父元素->目标元素

Event对象的常见应用<br>
* event.preventDefault()
* event.stopPropagation()
* event.stopimmediatePropagation()<br>
注册了两个事件的时候可以在执行完第一个事件之后阻止第二个事件执行
* event.currentTarget<br>
当前所绑定的事件的元素
* event.trget<br>
当前被点击的元素

自定义事件
````
var eve = new Event('custom');
ev.addEventListener('custom',function(){
    console.log('custome);
});
ev.dispatchEvent(eve);
````
上面的event方法只能指定方法名，不能指定参数，使用customEvent可以指定参数。
