关于promise
====
Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行。

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

Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以Resolved最后输出。
````
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('Resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// Resolved
````

异步加载图片的代码示例：
````
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}
````

用Promise对象实现的 Ajax 操作的例子:
````
var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
````

* 调用resolve或reject并不会终结 Promise 的参数函数的执行。在函数前面加上return可以阻止后面代码的执行。

Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
````
var p = Promise.all([p1, p2, p3]);
````
p的状态由p1、p2、p3决定，分成两种情况。
（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

Promise应用的面试题:
> 题目：红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）三个亮灯函数已经存在：
````
function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

var tic = function(timmer, cb){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            cb();
            resolve();
        }, timmer);
    });
};

var d = new Promise(function(resolve, reject){resolve();});
var step = function(def) {
    def.then(function(){
        return tic(3000, red);
    }).then(function(){
        return tic(2000, green);
    }).then(function(){
        return tic(1000, yellow);
    }).then(function(){
        step(def);
    });
}

step(d);
````
可以看到虽然Promise可以用来解决回调地狱问题，但是仍然不可避免的会有回调出现，更好的解决方案是利用Generator来减少回调:
````
var tic = function(timmer, str){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(str);
            resolve(1);
        }, timmer);
    });
};


function *gen(){
    yield tic(3000, 'red');
    yield tic(1000, 'green');
    yield tic(2000, 'yellow');
}

var iterator = gen();
var step = function(gen, iterator){
    var s = iterator.next();
    if (s.done) {
        step(gen, gen());
    } else {
        s.value.then(function() {
            step(gen, iterator);
        });
    }
}

step(gen, iterator);
````















