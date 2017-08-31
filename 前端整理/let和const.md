let和const
====
let声明的变量只在它所在的代码块有效。
````
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
````
函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。
````
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
````
var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。
let命令不存在变量提升。
````
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
````

暂时性死区:
````
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
````
上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

let不允许在相同作用域内，重复声明同一个变量。
````
// 报错
function () {
  let a = 10;
  var a = 1;
}

// 报错
function () {
  let a = 10;
  let a = 1;
}
````

在块级作用域中声明函数（只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。）：
* 允许在块级作用域内声明函数。
* 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
* 同时，函数声明还会提升到所在的块级作用域的头部。

块级作用域是一个语句，将多个操作封装在一起，没有返回值。在块级作用域之前加上do，使它变为do表达式，这样就可以返回值了。
````
let x = do {
  let t = f();
  t * t + 1;
};
````

const声明一个只读的常量。一旦声明，常量的值就不能改变(改变的时候则会报错)。

const的作用域与let命令相同：只在声明所在的块级作用域内有效。
````
if (true) {
  const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined
````
const声明的常量，也与let一样不可重复声明。

const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。

浏览器里面，顶层对象是window，Node 里面，顶层对象是global。

全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。

















