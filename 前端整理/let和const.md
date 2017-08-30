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






















