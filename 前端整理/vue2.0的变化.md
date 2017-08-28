Vue2.0的变化
=====
1.每个组件模板template,不再支持片段代码
````
　　　　//之前：

　　　　　　<template>
　　　　　　　　<h3>vue-router+vue-loader</h3>
　　　　　　　　<p>hshsh</p>
　　　　　　</template>

　　     //现在：必须有根元素
　　　　　　　　<template>
　　　　　　　　　　<div>
　　　　　　　　　　　　<h3>vue-router+vue-loader</h3>
　　　　　　　　　　　　<p>hshsh</p>

　　　　　　　　　　</div>
　　　　　　　　</template>
````
2.生命周期
* 之前：init　created　　beforeCompile　　compiled　　ready 　　beforeDestroy　　destroyed
* 　现在：

　　　　beforeCreate　　组件实例刚刚被创建，属性都没有

　　　　created　　        组件实例创建完毕，属性已经绑定

　　　　beforeMount　　模板编译之前

　　　　mounted　　　　模板编译之后，代替了之前的ready*

　　　　beforeUpdate　　组件更新之前

　　　　updated　　　　 组件更新完毕

　　　　beforeDestroy　 组件销毁之前

　　　　destroyed         组件销毁后

3.组件通信  vm.$emit()  vm.$on()
* 子级想拿到父级的数据：通过props

  之前子组件可以更改父组件信息，利用sync   eg:  :msg.sync="change"

  现在不允许

4.动画
````
.fade-enter-active,.fade-leave-active{transition:1s all ease;}
.fade-enter  初始状态
.fade-enter-active 变成什么样，元素显示出来的时候
.fade-leave
.fade-leave -active 变成什么样，元素离开的时候
````

5.路由vue-router和vue-loader
````
之前：<a v-link="{path:'/home'}">我是主页</a>
现在：<router-link to="/home">我是主页</router-link>它会自动解析成a v-link形式
 <router-view>没变
````

6.路由嵌套
````
const routes = [   //配置路由

　　　　　　{path:'/home',component:Home},

　　　　　　{path:'/news',component:News,

　　　　　　　　children:[

　　　　　　　　　　{path:'/newsname',component:newsNameDetail},

　　　　　　　　　　{}

　　　　　　　　]

　　　　　　}，

　　　　　　{path:'*',redirect:'/home'}   //重定向

　　　　　　...一个个json

　　　　];
````