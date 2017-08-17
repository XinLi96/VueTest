面试整理
=====
一面
------
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
