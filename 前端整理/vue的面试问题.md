vue的面试问题
=====
v-if与v-show的区别？
* 在切换 v-if 块时，Vue.js 有一个局部编译/卸载过程，因为 v-if 之中的模板也可能包括数据绑定或子组件。
* v-show 简单得多——元素始终被编译并保留，只是简单地基于 CSS 切换。
* v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变 v-if 较好。

组件的定义方式？
```
// title.vue
<template>
  <div>{{title}}</div>
</template>
<script>
  export default {
    props: {
      title: String
    }
</script>

// index.vue
<template>
  <nav-title title="标题"></nav-title>
</template>
<script>
  import navTitle form 'title.vue'
  export default {
    el: '#app',
    components: {
      navTitle
    }
  }
</script>
```