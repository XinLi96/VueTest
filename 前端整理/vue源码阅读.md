#### vue构造函数的过程中有两个主要的文件，分别是core/instance/index.js文件以及core/index.js文件
* 前者是vue构造函数的定义文件，也可以叫其vue的出生文件，主要作用是定义Vue构造函数，并对其原型添加属性和方法，即实例属性和实例方法。
* 后者的主要作用是，为vue添加全局的API，也就是静态的方法和属性。
#### Vue 是一个 Multi-platform 的项目（web和weex），不同平台可能会内置不同的组件、指令，或者一些平台特有的功能等等，这就需要Vue根据不同的平台进行平台化地包装。

#### Vue提供了全局配置Vue.config.performance，我们通过将其设置为true，即开启性能追踪，可以追踪四个场景的性能：
* 组件初始化（component init）
* 编译（compile），将模板（template）编译成渲染函数
* 渲染（render），其实就是渲染函数的性能，或者说渲染函数执行且生成虚拟DOM（vnode）的性能
* 打补丁（patch），将虚拟DOM渲染为真实DOM的性能
