JS运行机制
====
````
console.log(1);
setTimeout(function(){
    console.log(2);
},0)
console.log(3);
//1,3,2
````
> 如何理解JS的单线程
* js是单线程的，js在一个时间点只能做一件事情。
> 什么是任务队列
* setTimeout和setInterval是异步任务，在js中同步运行的是同步任务，执行到异步任务的时候先挂起，
同步任务处理完之后才会去处理异步任务
````
for(var i = 0;i < 4;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
//4,4,4,4
````
* 在for循环中，setTimeout会把自己交给时间模块管理，只有到了时间才会被加入到异步队列
中
* 当时间设置为0ms的时候，之前的版本是最小10ms现在是4ms（定时器的时间最小值）。
>什么是Event Loop（事件循环）
![22](https://github.com/XinLi96/VueTest/blob/master/img/eventLoop.png)
* 同步队列的执行完才会去异步队列执行

>异步任务有哪些？
* setTimeout和setInterval
* DOM事件（比如：点击事件）
* ES6中的promise
