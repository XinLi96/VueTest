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

一个人有240斤水，从A出发到B去卖水，每次最多可以携带60斤的水，每多走一公里需要消耗一斤的水、水可以多卖一元钱，问最多可以卖多少钱？
````
y=(60-2x)x
=-2x^2+60x
=-2(x-15)^2+450
(240÷60)x450=4x450=1800(元)
以上是安全返回的情况下
如果最后可以不返回：
（60-x）x=y
当x=30时最多，y为900+1800=2700元
````

````
var name = "the window";
var obj = {
    name: "my obj",
    getNameFunc: function(){
        return function(){
            return this.name;
        };
    }
};
console.log(obj.getNameFunc()());//the window
````

在eval()中创建的任何变量或函数都不会被提升。

overflow的可取值?
* visible 默认值。内容不会被修剪，会呈现在元素框之外。
* hidden 内容会被修剪，并且其余内容是不可见的。
* scroll 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
* auto 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
* inherit 规定应该从父元素继承 overflow 属性的值。

在前端使用localstorage实现本地存储功能的时候，localstorage存储的内容都是字符串，所以想要存储对象时，需要使用Json.stringfy()将对象转成字符串存进去，取出来的时候使用Json.parse()将字符串转换成对象。

在h5微信端时，辨别分享到朋友圈和好友的函数。
````
//微信客户端
    document.addEventListener('WeixinJSBridgeReady', function() {
        var shareObj = {
            title : "长宁区十大新闻人物评选：我刚刚为XXX点亮了梦想……",
            desc : "长宁区十大新闻人物正在评选，有你认识的人吗？",
            url : "http://m.home.163.com/fps/frontends/local_special/cn_vote/index.html",
            image : "http://nos.netease.com/fps-pro/frontends/local_special/cn_vote/img/info_head.png"
        }

        var arrName = JSON.parse(localStorage.getItem('shareName'));
        var friendTitle = '我刚刚为XXX点亮了梦想……';
        var shareTitle = shareObj.title;
        if(arrName.length > 0){
            shareTitle = shareTitle.replace(/XXX/ig,arrName[arrName.length-1]);
            friendTitle = friendTitle.replace(/XXX/ig,arrName[arrName.length-1]);
        }
        // 分享到朋友圈;
        WeixinJSBridge.on('menu:share:timeline', function(argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                'img_url': shareObj.image,
                'img_width': '300',
                'img_height': '300',
                'link': shareObj.url,
                'title': shareTitle
            }, function() {
                share_survey(true);
            });
        });
        // 发送给好友;
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                'img_url': shareObj.image,
                'link': shareObj.url,
                'desc': shareObj.desc,
                'title': friendTitle
            }, function() {
                //callBack
                share_survey(true);
            });
        });
    }, false);
````

重写滚动条样式(滚动条默认在移动端是不显示的)。
````
.personList::-webkit-scrollbar-track-piece {
    background-color: rgba(255, 255, 255, 0.3);
    border-left: 1px solid rgba(0, 0, 0, 0);
}
.personList::-webkit-scrollbar {
    width: 5px;
    height: 13px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .personList::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    background-clip: padding-box;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    min-height: 28px;
  }
  .personList::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
````

锚点的应用：适用于点击菜单使页面滑动到相应的部分(页面内和其它页面的都可以)
````
<a href="#div1"></a>
<a href="#div2"></a>
<div id="div1"></div>
<div id="div2"></div>
````

使用js获取页面内background-image属性值时，在pc端和移动端的输出值不一样
* pc端：url("地址")
* 移动端：url(地址)

重写原型对象切断了现有原型与任何之前已经存在的对象实例之间的联系；他们引用的仍然是最初的原型。