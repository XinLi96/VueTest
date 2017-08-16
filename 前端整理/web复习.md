#面试整理
##一面
###页面布局
一、浮动布局
````
<section class="layout float">
      <style media="screen">
      .layout.float .left{
        float:left;
        width:300px;
        background: red;
      }
      .layout.float .center{
        background: yellow;
      }
      .layout.float .right{
        float:right;
        width:300px;
        background: blue;
      }
      </style>
      <h1>三栏布局</h1>
      <article class="left-right-center">
        <div class="left"></div>
        <div class="right"></div>
        <div class="center">
          <h2>浮动解决方案</h2>
          1.这是三栏布局的浮动解决方案；
          2.这是三栏布局的浮动解决方案；
          3.这是三栏布局的浮动解决方案；
          4.这是三栏布局的浮动解决方案；
          5.这是三栏布局的浮动解决方案；
          6.这是三栏布局的浮动解决方案；
        </div>
      </article>
````
二、绝对布局
````
<section class="layout absolute">
      <style>
        .layout.absolute .left-center-right>div{
          position: absolute;
        }
        .layout.absolute .left{
          left:0;
          width: 300px;
          background: red;
        }
        .layout.absolute .center{
          left: 300px;
          right: 300px;
          background: yellow;
        }
        .layout.absolute .right{
          right:0;
          width: 300px;
          background: blue;
        }
      </style>
      <h1>三栏布局</h1>
      <article class="left-center-right">
        <div class="left"></div>
        <div class="center">
          <h2>绝对定位解决方案</h2>
          1.这是三栏布局的浮动解决方案；
          2.这是三栏布局的浮动解决方案；
          3.这是三栏布局的浮动解决方案；
          4.这是三栏布局的浮动解决方案；
          5.这是三栏布局的浮动解决方案；
          6.这是三栏布局的浮动解决方案；
        </div>
        <div class="right"></div>
      </article>
    </section>
````
三、flex布局
````
<section class="layout flexbox">
      <style>
        .layout.flexbox{
          margin-top: 110px;
        }
        .layout.flexbox .left-center-right{
          display: flex;
        }
        .layout.flexbox .left{
          width: 300px;
          background: red;
        }
        .layout.flexbox .center{
          flex:1;
          background: yellow;
        }
        .layout.flexbox .right{
          width: 300px;
          background: blue;
        }
      </style>
      <h1>三栏布局</h1>
      <article class="left-center-right">
        <div class="left"></div>
        <div class="center">
          <h2>flexbox解决方案</h2>
          1.这是三栏布局的浮动解决方案；
          2.这是三栏布局的浮动解决方案；
          3.这是三栏布局的浮动解决方案；
          4.这是三栏布局的浮动解决方案；
          5.这是三栏布局的浮动解决方案；
          6.这是三栏布局的浮动解决方案；
        </div>
        <div class="right"></div>
      </article>
    </section>
````
四、表格布局
````
<section class="layout table">
      <style>
        .layout.table .left-center-right{
          width:100%;
          height: 100px;
          display: table;
        }
        .layout.table .left-center-right>div{
          display: table-cell;
        }
        .layout.table .left{
          width: 300px;
          background: red;
        }
        .layout.table .center{
          background: yellow;
        }
        .layout.table .right{
          width: 300px;
          background: blue;
        }
      </style>
      <h1>三栏布局</h1>
      <article class="left-center-right">
        <div class="left"></div>
        <div class="center">
          <h2>表格布局解决方案</h2>
          1.这是三栏布局的浮动解决方案；
          2.这是三栏布局的浮动解决方案；
          3.这是三栏布局的浮动解决方案；
          4.这是三栏布局的浮动解决方案；
          5.这是三栏布局的浮动解决方案；
          6.这是三栏布局的浮动解决方案；
        </div>
        <div class="right"></div>
      </article>
    </section>
````
五、网格布局
````
<section class="layout grid">
      <style>
        .layout.grid .left-center-right{
          width:100%;
          display: grid;
          grid-template-rows: 100px;
          grid-template-columns: 300px auto 300px;
        }
        .layout.grid .left-center-right>div{

        }
        .layout.grid .left{
          width: 300px;
          background: red;
        }
        .layout.grid .center{
          background: yellow;
        }
        .layout.grid .right{

          background: blue;
        }
      </style>
      <h1>三栏布局</h1>
      <article class="left-center-right">
        <div class="left"></div>
        <div class="center">
          <h2>网格布局解决方案</h2>
          1.这是三栏布局的浮动解决方案；
          2.这是三栏布局的浮动解决方案；
          3.这是三栏布局的浮动解决方案；
          4.这是三栏布局的浮动解决方案；
          5.这是三栏布局的浮动解决方案；
          6.这是三栏布局的浮动解决方案；
        </div>
        <div class="right"></div>
      </article>
    </section>
````
###DOM事件类
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
* event.stopimmediatePropagation()
* event.currentTarget
* event.trget

自定义事件