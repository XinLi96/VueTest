关于promise
====
promise是异步编程的一种解决方案。

promise对象的特点：
> 对象的状态不受外界影响。
* Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Fulfilled（已成功）和Rejected（已失败）。

> 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
* Promise对象的状态改变，只有两种可能：从Pending变为Fulfiled和从Pending变为Rejected。

基本用法：
````
var promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
````
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
* resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 Pending 变为 Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
* reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 Pending 变为 Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

Promise实例生成以后，可以用then方法分别指定Resolved状态和Rejected状态的回调函数。
````
promise.then(function(value) {
  // 成功执行的函数
}, function(error) {
  // 失败执行的函数
});
````

