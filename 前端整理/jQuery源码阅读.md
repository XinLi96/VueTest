jQuery源码阅读
====
一、从一个立即执行函数的闭包将所有的方法和属性引入，避免污染全局变量

二、提前定义一些对象、数组、字符串变量，并保存了一些常用的方法concat、slice等
````
//定义和保存的部分代码
var arr = [];
var document = window.document;
var getProto = Object.getPrototypeOf;
var slice = arr.slice;
var concat = arr.concat;
var push = arr.push;
var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;

//定义toArray的方法，通过call改变this的指向
toArray: function() {
    return slice.call( this );
},
````

三、