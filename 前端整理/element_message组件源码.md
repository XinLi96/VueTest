#### element框架message组件源码 
如果项目中引入了element，可以从node_modules里找到element-ui来查看源码，如果没有引入可以从github上搜索element源码库，来查看源码。

下面我们来一步步的查看源码，首先来看message是如何挂载到Vue上，并找到组件的引入位置。
```
/* src/index.js */
import Message from '../packages/message/index.js';
//在index中引入message组件，并将其挂载到Vue对象的原型链上
Vue.prototype.$message = Message;
```
下面，我们来找到message组件的源文件。
```
/* packages/message/index.js */
import Message from './src/main.js';
export default Message;
```
在上面我们看到index的主要作用是将message暴露给外界，而message的实现细节是在main.js中。

这里需要先要了解一个Vue.extend的概念，在Vue的组件封装当中Vue.extend是一个常用必备的函数，来自官网的释义：使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
```
/* packages/message/src/main.js */
import Vue from 'vue';
import Main from './main.vue';
import { PopupManager } from 'element-ui/src/utils/popup';
import { isVNode } from 'element-ui/src/utils/vdom';
//将引入的message组件构造成一个子类，便于后面的实例化
let MessageConstructor = Vue.extend(Main);

//保存message实例化变量
let instance;
//保存多个message实例的数组
let instances = [];
//用于多个message的唯一id值
let seed = 1;

const Message = function(options) {
  //用于判断当前运行的平台
  if (Vue.prototype.$isServer) return;
  options = options || {};
  //当只输入字符串时
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;
  
  //将关闭的函数钩子保存到options中
  options.onClose = function() {
    Message.close(id, userOnClose);
  };
  //实例化message对象
  instance = new MessageConstructor({
    data: options
  });
  //为一个实例设置一个ID
  instance.id = id;
  //判断内容是不是HTML片段
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  }
  //挂载返回实例自身
  //$mount在下文作释义
  instance.vm = instance.$mount();
  //将标签添加为body的子标签
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  //设置z-index层级，后调用的层级越高
  instance.dom.style.zIndex = PopupManager.nextZIndex();
  //放入保存的实例数组中
  instances.push(instance);
  返回实例
  return instance.vm;
};

//判断message的图标类型
['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

//message关闭函数
Message.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    //通过对比唯一id来找到想要关闭的message
    if (id === instances[i].id) {
      //如果关闭的函数有被定义，则执行挂在钩子上的函数
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      //将关闭的message实例，移出数组
      instances.splice(i, 1);
      break;
    }
  }
};

//关闭全部message实例
Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

//将message模块暴露给外界
export default Message;
```
vm.$mount()：如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。
这个方法返回实例自身，因而可以链式调用其它实例方法。