详解this
====
浏览器宿主的全局环境中，this指的是window对象。
````
console.log(this === window); //true
````
浏览器中在全局环境下，使用var声明变量其实就是赋值给this或window。
````
var foo = "bar";
console.log(this.foo); //logs "bar"
console.log(window.foo); //logs "bar"
````
任何情况下，创建变量时没有使用var或者let(ECMAScript 6)，也是在操作全局this。
````
foo = "bar";

function testThis() {
  foo = "foo";
}

console.log(this.foo); //logs "bar"
testThis();
console.log(this.foo); //logs "foo"
````
除了DOM的事件回调或者提供了执行上下文（后面会提到）的情况，函数正常被调用（不带new）时，里面的this指向的是全局作用域。
````
foo = "bar";

function testThis() {
  this.foo = "foo";
}

console.log(this.foo); //logs "bar"
testThis();
console.log(this.foo); //logs "foo"
````
当用调用函数时使用了new关键字，此刻this指代一个新的上下文(实例)，不再指向全局this。
````
foo = "bar";

function testThis() {
  this.foo = "foo";
}

console.log(this.foo); //logs "bar"
new testThis();
console.log(this.foo); //logs "bar"

console.log(new testThis().foo); //logs "foo"
````

在DOM事件的处理函数中，this指代的是被绑定该事件的DOM元素。
````
function Listener() {
    document.getElementById("foo").addEventListener("click",
       this.handleClick);
}
Listener.prototype.handleClick = function (event) {
    console.log(this); //logs "<div id="foo"></div>"
}

var listener = new Listener();
document.getElementById("foo").click();
````
HTML标签的属性中是可能写JS的，这种情况下this指代该HTML元素。

````
<div id="foo" onclick="console.log(this);"></div>
<script type="text/javascript">
document.getElementById("foo").click(); //logs <div id="foo"...
</script>
````
* 无法重写this，因为它是一个关键字。