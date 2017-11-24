netease
====

代码规范：
* jQuery对象   $开头
* 对象         o开头
* 数组         a开头
* 字符串       s开头
* 整形         i开头
* 浮点型       f开头
* 布尔型       b开头
* 日期         d开头
* 正则类型     r开头

为了避免埋坑，不要使用==、！==，改用===，！==。

禁止使用未声明的变量，引入其它文件定义的全局变量可加window.前缀。

基本数据类型：
* number string boolean undefined null
* 保存的是一个具体的值

引用数据类型：
* object
* 保存的是一个地址，地址中存的内容不一定是什么

获取网页中的所有的源码？
* document.documentElement.outerHTML

JavaScript获取某年某月共有多少天？
```
function getDaysInOneMonth(year, month){  
    month = parseInt(month, 10);  
    var d= new Date(year, month, 0);  
    return d.getDate();  
}
```

* every() ：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true ，则返回 true 。(每一项都必须符合)
* filter() ：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
* forEach() ：对数组中的每一项运行给定函数。这个方法没有返回值。
* map() ：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
* some() ：对数组中的每一项运行给定函数，如果该函数对任一项返回 true ，则返回 true 。(至少有一项符合就可以)

函数的length属性表示函数希望接收的命名参数的个数。 

* num.toString(n):当n为10或空时，转换成十进制输出，当n为其它值时，转换成对应的进制。
* num.toFixed(n):显示几位小数（当位数多于保留的时候最接近末尾的进行四舍五入）。

在做移动端宣传类页面时，一般都是美工出一个大长图，然后图的底部具有报名和分享的功能，这类页面一般将按钮和表达都设置为透明状态然后定位到相应位置即可。再实现其该实现的功能，这样做开发比较快捷。



