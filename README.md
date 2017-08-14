# VueTest
Vue的一些练习
Vue的新项目在运行如果出现Can not Get错误，是因为vue自带的代码检查规范，解决此问题进入项目的build文件夹的webpack.base.conf.js里面找到rules数组的第一个删掉。

父组件向子组件传值成功，总结一下：
子组件在props中创建一个属性，用以接收父组件传过来的值
父组件中注册子组件
在子组件标签中添加子组件props中创建的属性
把需要传给子组件的值赋给该属性

子组件向父组件传值成功
总结一下：
子组件中需要以某种方式例如点击事件的方法来触发一个自定义事件
将需要传的值作为$emit的第二个参数，该值将作为实参传给响应自定义事件的方法
在父组件中注册子组件并在子组件标签上绑定对自定义事件的监听

引入的@符号是webpack配置中可以定义的基本路径，相当于相对的路径。配置文件为build/webpack.base.conf.js


Vue项目开始先写有哪些路由，需要做哪些部分，然后根据每一部分的路由看写哪个文件然后在配置一下路由信息用于查看跳转。

当出现一些非代码错误时，首先看一下自己配置的路由信息是否暴露出来了，如果没有解决，再尝试重新安装一下路由和依赖模块，在网络环境不稳定的地方可能会有些丢失。

配置路由的时候，先从上级开始配置，然后逐步向下，当有嵌套路由的时候，父子之间的布局是个问题，有待于解决？？？？？
解决上述问题，使用绝对定位，对页面的位置进行定位，以达到页面能够正常显示。

在引入bootstrap.js的时候需要先将jQuery引入，引入bootstrap.css的时候可能会出现错误，尝试将路径重新写一下，或者改变引入的顺序。


<router-link> 组件支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 <a> 标签，可以通过配置 tag 属性生成别的标签.。


<router-link> 比<a>标签的优点
====
1：无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
2：在 HTML5 history 模式下，router-link 会拦截点击事件，让浏览器不再重新加载页面。
3：当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了。

to 属性表示目标路由的链接。
replace 属性被设置时，当点击时会调用router.replace，于是导航后不会留下history记录。
tag 将<router-link>渲染成某种标签，例如<li>
例如：
<router-link to="/foo" tag="li">foo</router-link>
<!-- 渲染结果 --> 
<li>foo</li>
active-class 设置 链接激活时使用的css类名。
exact <router-link to="/"> 将会点亮各个路由，使用exact属性如下：
<!-- 这个链接只会在地址为 / 的时候被激活 -->
 <router-link to="/" exact>


<router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件。<router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。
name 属性被设置时，则会渲染对应的路由配置中components下的相应组件。

配置路由的格式：
const router = new VueRouter({ 
routes: [ 
// 下面的对象就是 
route record {
 path: '/foo', component: Foo, 
children: [ 
// 这也是个route record
route record { path: 'bar', component: Bar } 
] 
} 
] 
})
当 URL 为 /foo/bar，$route.matched 将会是一个包含从上到下的所有对象。


Router构造配置：

mode 属性可选值为：hash、history、abstract
hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
history: 依赖 HTML5 History API 和服务器配置。
abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。

linkActiveClass属性，全局配置<router-link>的默认激活类名

导航钩子：
每个钩子方法接收三个参数：
to: Route: 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: Function: 一定要调用该方法来 resolve 这个钩子。

Vuex的状态管理状态图：





Vue的过渡效果：
会有 6 个(CSS)类名在 enter/leave 的过渡中切换
1.v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
2.v-enter-active: 定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
3.v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效（于此同时 v-enter 被删除），在 transition/animation 完成之后移除。
4.v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。5.v-leave-active: 定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。 这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
6.v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效（于此同时 v-leave 被删除），在 transition/animation 完成之后移除。

对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。使用 <transition name="my-transition"> 可以重置前缀，比如 v-enter 替换为 my-transition-enter。
