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

为了避免埋坑，不要使用==、！=，改用===，！==。

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

JavaScript实现斐波那契数列？
````
function fb(n){
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }else{
        return fb(n-1)+fb(n-2);
    }
}
console.log(fb(8));
````

arguments.callee是一个指向正在执行的函数的指针(可以用它来实现对递归函数的调用)

闭包是指有权访问另一个函数作用域中的变量的函数

处理帧动画需要使用css3的animation属性，在此属性中时间变化曲线设置为step（n），一般n为动画分为多少帧就是多少，以达到动态变化的效果。
````
animation: play3 2s steps(36) infinite;
@keyframes play3 {
    from { background-position: 0px;}
      to { background-position: -7200px;}
}
````

前端对网页进行标记可以通过对url的操作,然后在每一次加载页面的时候对页面的地址进行判断：
````
window.location.href = "http://m.bendi.163.com/fps/frontends/local_special/new_year/index.html?currentNum=" + currentNum;

/* 判断网页是否为回流状态 */
var query = location.search.substring(1);
var urlArr = query.split('&');
var resNum;
for(var i = 0;i < urlArr.length;i++){
    if(urlArr[i].match('currentNum')){
        resNum = urlArr[i].split('=')[1];
        $('#toChangeFont').html('查看').parent().removeClass('shareEvent').addClass('locationEvent');
        var imgUrl = 'http://nos.netease.com/fps-pro/frontends/local_special/new_year/img/'+resNum+'.jpg';
        $('#keyImg').attr('src',imgUrl);
        $('#wrapper').css('transform','rotateY('+ 180 +'deg)');
        console.log(resNum);
    }
}
````
微信h5获取微信用户信息（对于不同的公众号可以配置不用的域名，需要修改appId）：
````
var GLOBLE_PARAMS = (function () {
    var args = {};
    var query1 = location.search.substring(1);

    var pairs = query1.split("&"); // Break at ampersand
    for(var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue;
        var argname = pairs[i].substring(0,pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[argname] = value;
    }
    return args;
})();
var GLOBLE_ACTION_ID = 483;//公众账号信息可替换
var userInfo = {};
function getUser(){
    var code = "";
    if(GLOBLE_PARAMS["code"]){
        code = GLOBLE_PARAMS["code"];
    }
    if( localStorage.getItem("token")){
    }else{
        if(!code || code === ""){
            var url = window.location.href;//加载页面的地址
            window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa50c7134ab27bf7f&redirect_uri=" + encodeURIComponent(url) + "&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect";
        }else{
            $.ajax({
                type : "get",
                dataType : "jsonp",
                data : {
                    appId : "wxa50c7134ab27bf7f",//公众账号可替换
                    code : code,
                    isAuth : true
                },
                url: "http://game.house.163.com/web/user/wx/init2",
                success : function(ret) {
                    userInfo = ret;
                    // alert(userInfo.nickname);
                },
                error:function(){
                    alert(arguments);
                    for(var i = 0;i < arguments.length;i++){
                        alert(arguments[i]);
                    }
                }
            });
        }
    }
}
getUser();
````

JSON.parse()和JSON.stringify()：
* parse用于从一个字符串中解析出json对象
````
//注意：单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常。
var str = '{"name":"huangxiaojian","age":"23"}';
JSON.parse(str)
Object
    age: "23"
    name: "huangxiaojian"
    __proto__: Object
````
* stringify()用于从一个对象解析出字符串
````
var a = {a:1,b:2};
JSON.stringify(a)
"{"a":1,"b":2}"
````

移动端页面使用audio的自动播放的时候会不好使(在移动端需要有交互才能播放音乐)：
````
//移动端自动播放音频的解决方法
<audio src="bg.mp3" id="Jaudio" class="media-audio" autoplay preload loop="loop"></audio>  


function audioAutoPlay(id){  
    var audio = document.getElementById(id),  
        play = function(){  
            audio.play();  
            document.removeEventListener("touchstart",play, false);  
        };  
    audio.play();  
    document.addEventListener("WeixinJSBridgeReady", function () { //微信端打开 
        play();  
    }, false);  
    document.addEventListener('YixinJSBridgeReady', function() {  //易信端打开
        play();  
    }, false);  
    document.addEventListener("touchstart",play, false);  //touchstart事件
}  
audioAutoPlay('Jaudio');  
````

全局变量不能通过 delete 操作符删除，而直接在 window 对象上的定义的属性可以。
````
var age = 29;
window.color = "red";
//在 IE < 9 时抛出错误，在其他所有浏览器中都返回 false
delete window.age;
//在 IE < 9 时抛出错误，在其他所有浏览器中都返回 true
delete window.color; //returns true
alert(window.age); //29
alert(window.color); //undefined
````

客户端检测方法：能力检测、怪癖检测、用户代理检测（使用的权重由大到小）。

如果页面中多个元素的ID值相同，getElementById()只返回文档中第一次出现的元素。

在一个体积较大的项目中，在编写js部分的时候，应该将每个js功能模块封装成函数然后在通过初始化或者是达到摸个条件的时候利用函数调用，这样有利于js代码的查看和维护。

有哪些常用的设计模式：
* 工厂模式
> 主要好处就是可以消除对象间的耦合，通过使用工程方法而不是new关键字。将所有实例化的代码集中在一个位置防止代码重复。
* 构造函数模式
> 使用构造函数的方法 ，即解决了重复实例化的问题 ，又解决了对象识别的问题

函数防抖和函数节流？
* 函数防抖是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次
````
//函数防抖
var timer = false
document.getElementById("debounce").onScroll = function() {
        clearTimeout(timer)  
        timer = setTimeout(function(){
            console.log(‘函数防抖’) 
  }, 300)     
}
````
* 函数节流是指一定时间内js方法只跑一次
````
//函数节流
var canScroll = true;
document.getElementById('throttle').onScroll = function() {
    if (!canScroll) {
        return;
    }
    canScroll = false;
    setTimeout(function(){
        console.log('函数节流');
        canScroll = true;
    },300)       
}
````
判断网页是不是微信客户端浏览器打开的：可以通过获取navigator.userAgent，看其得到的字符串中是否包含micromessenger字段。

不支持 innerHTML 的元素有： <col> 、 <colgroup> 、<frameset> 、 <head> 、 <html> 、 <style> 、 <table> 、 <tbody> 、 <thead> 、 <tfoot> 和 <tr> 。

使用canvas和input实现图片上传并预览（转成base64并进行压缩）：
````
var distSrc;
var imgSrc = document.getElementById('imgOrigin');//获取上传图片的input框
$('#imgOrigin').change(function(){//监控上传的图片是否变化
    var file = this.files[0];//获取上传的图片

    var img_this = new Image();
    img_this.src = window.URL.createObjectURL(file);//获取上传图片的地址此次是用于画在canvas上
    $('.uploadIcon').eq(0).attr('src',window.URL.createObjectURL(file));//实现预览效果，固定大小的预览效果
    console.log(img_this);
    var ctx = $('.huaban')[0].getContext('2d');//获取画板
    img_this.onload = function(){
        var width = img_this.width;
        var height = img_this.height;
        $('.huaban').eq(0).attr('width',width+'px').attr('height',height+'px');
        ctx.drawImage(img_this,0,0,width,height,0,0,width,height);
        distSrc = $('.huaban')[0].toDataURL("image/jpeg",0.3);//利用canvas将图片转成base64并且压缩，后面的参数范围为0-1，越小画质越低
        $('.uploadIcon').attr('src',distSrc);

        var reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(){
            // var distSrc = this.result;
            $.ajax({//后台上传的接口
                url: "url",
                type: 'post',
                dataType: 'json',
                data: {
                    picdata: distSrc
                },
                success: function(data) {
                    //上传成功的返回信息
                },
                error: function(e) {
                    alert('图片合成失败，请重新上传');
                }
                
            });
        }

    }
});
````
在前端利用url传递信息标志时，可能会遇到我们所要传递的参数是中文，如果直接进行拼接会变成乱码不能正常获取，在拼接之前先使用encode将中文进行转码，在获取的地方使用decode进行译码，这样就可以成功传递了！！！

给子元素设置margin-top的时候父元素也会向下移动的解决方法：
* 使用padding-top
* 给父元素加over-flow:hidden;

在设计稿宽度大于640或750的时候需要对pc端和移动端都自适应：
````
<meta name="viewport" id="viewport" content="target-densitydpi=device-dpi,width={设计稿宽度},user-scalable=no" />
在每一个背景上都设置background: url() center center no-repeat;属性
````

css3执行动画的状态：
* none：不改变默认行为。    
* forwards ：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。    
* backwards：在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。    
* both：向前和向后填充模式都被应用。

去掉移动点击事件出现阴影：
* a,img,button,input,textarea,div{-webkit-tap-highlight-color:rgba(255,255,255,0);}

css3和html5的新特性一般ie6/7/8是不支持的。

meta标签的属性含义：
* name属性主要用于描述网页，比如网页的关键词，叙述等（keywords(关键字)、description(网站内容的描述)、viewport(移动端的窗口)、 robots(定义搜索引擎爬虫的索引方式)）
* content中的内容是对name填入类型的具体描述，便于搜索引擎抓取

单例模式：该模式的一个类只有一个实例，即一个类只有一个对象实例。
````
//构建单例模式、es5方法
var CreateDiv = function (html) {
    this.html = html;
    this.init();
};

CreateDiv.prototype.init = function () {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
};

var ProxySingletonCreateDiv = (function () {
    var instance;
    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html);
        }
        return instance;
    }
})();

var a = new ProxySingletonCreateDiv('sven1');
var b = new ProxySingletonCreateDiv('sven2');

alert(a === b); //true


//es6方法
class Cache {
  static getInstance() {
    if (!Cache.instance) {
      Cache.instance = new Cache();
    }
    return Cache.instance;
  }
}

var cache = Cache.getInstance();
````

e.currentTarget和e.target的区别？
* e.currentTarget指的是注册了事件监听器的对象
* e.target指的是该对象里的子对象，也是触发这个事件的对象！

判断一个变量是数组还是对象的方法：
* instanceOf
* constructor
* 使用typeof加length属性typeof o.length，对象返回undefined、数组返回number

闭包的应用场景：
* 使用闭包代替全局变量
* 函数外或在其他函数中访问某一函数内部的参数
* 在函数执行之前为要执行的函数提供具体参数

前端路由是直接找到与地址匹配的一个组件或对象并将其渲染出来。改变浏览器地址而不向服务器发出请求有两种方式: 
* 在地址中加入#以欺骗浏览器，地址的改变是由于正在进行页内导航 
* 使用H5的window.history功能，使用URL的Hash来模拟一个完整的URL

vue的生命周期：
* beforeCreate/created
* beforeMount/mounted
* beforeUpdate/updated
* beforeDestroy/destroyed

多个promise如何实现串联？
````
Promise.all([promises])
Promise.all([asyncRequest1(region), asyncRequest2(region), asyncRequest3(region), asyncRequest4(region)])
    .then(function (reses) {
      resolve(reses);
    })；
````

理解和使用Promise.all和Promise.race:
* Pomise.all:可以将多个Promise实例包装成一个新的Promise实例。成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
* Promise.race:Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

jquery是直接操作dom对象的，vue是通过改变数据再改变视图。

axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端。

axios的特征：
* 从浏览器中创建 XMLHttpRequest
* 从 node.js 发出 http 请求
* 支持 Promise API
* 拦截请求和响应
* 转换请求和响应数据
* 取消请求
* 自动转换JSON数据
* 客户端支持防止 CSRF/XSRF
```
// get请求
axios.get('/user?ID=12345')
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

//post请求
axios.post('/user', {
firstName: 'Fred',
lastName: 'Flintstone'
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
//执行多个并发请求
function getUserAccount() {
return axios.get('/user/12345');
}
 
function getUserPermissions() {
return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct, perms) {
//两个请求现已完成
}));
```

前端的几种存储方式：
* cookie
* localstorage
* sessionstorage
* 离线缓存（application cache）:配置mainfest文件分为CACHE MAINFEST、NETWORK、FALLBACK三部分
> 离线缓存的优点：
> 1、离线浏览
> 2、提升页面载入速度
> 3、降低服务器压力
* web sql：1、openDatabase 2、transaction 3、executeSql
* indexedDB

当需要进行大量DOM操作时，尽量使用DocumentFragement，它会让你的应用变的更快！
```
<ul id="list"></ul>
var frag = document.createDocumentFragment();
for(var x = 0; x < 10; x++) {
    var li = document.createElement("li");
    li.innerHTML = "List item " + x;
    frag.appendChild(li);
}
listNode.appendChild(frag);//使用DocumentFragement要比直接对DOM节点操作要快的多
```

Vue中的Object.freeze()会阻止修改现有的属性，也意味着相应系统无法再追踪变化。
````
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
<div id="app">
  <p>{{ foo }}</p>
  <!-- 这里的 `foo` 不会更新！ -->
  <button @click="foo = 'baz'">Change it</button>
</div>
````

v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。

v-if和v-show的比较：
* v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
* v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
* v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
* v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。

Vue源码：对应的目录有compiler（编译模板）、core（vue的核心）、entries（生产打包入口）、platforms（核心模块的平台模块）、server（处理服务端渲染）、sfc（处理单文件.vue）、shared（目录提供全局用到的工具函数）
* vue实现数据绑定的关键是Object.defineProperty(obj,prop,desciptor);（实现此部分的代码在core/observe下）
* 数据绑定部分主要关注三个类（observe、dep、watcher）
* 虚拟dom部分可以看一下core/vdom/create-element.js（比较两个不同的结构树使用的是diff算法）

HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)：
```
Vue.component('child', {
  // 在 JavaScript 中使用 camelCase
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
<!-- 在 HTML 中使用 kebab-case -->
<child my-message="hello!"></child>
```

由于JavaScript的限制，Vue不能检测以下变动的数组：
* 1、当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
* 2、当你修改数组的长度时，例如：vm.items.length = newLength
* 还有就是Vue不能检测对象属性的添加或删除

图片预加载实时显示加载进度：
````
/* 图片预加载 */
var imgArr = [
    '//nos.netease.com/fps-pro/frontends/home_special/hp_noise/img/bg2.jpg',
    '//nos.netease.com/fps-pro/frontends/home_special/hp_noise/img/alarm.gif',
    '//nos.netease.com/fps-pro/frontends/home_special/hp_noise/img/ts.png',
    '//nos.netease.com/fps-pro/frontends/home_special/hp_noise/img/hp.png',
    '//nos.netease.com/fps-pro/frontends/home_special/hp_noise/img/hand.png',
    '//nos.netease.com/fps-pro/frontends/home_special/hp_noise/img/load.gif',
];

function preLoad(urls, callback){
    this.urls = urls;
    this.imgNumbers = urls.length;
    this.loadImgNumbers = 0;
    var that = this;
    for(var i = 0; i < urls.length; i++) {
        var obj = new Image();
        obj.src = urls[i];
        obj.onload = function() {
            that.loadImgNumbers++;
            callback(parseInt((that.loadImgNumbers / that.imgNumbers) * 100));
        }
    }
}
preLoad(imgArr,function(percent){
    $('.jdNum').text(percent+'%');
    var kd = percent * 0.01 * 243;
    $('.jdtCon').width(kd);
    if(percent == 100){ 
        $('.loading').addClass('toHide');
    }
});
/* 图片预加载 */
````

父级元素设置display:table-cell; vertical-align:middle;时，子元素必须是inline元素，如果子元素是inline-block元素可以给这个元素直接加vertical-align:middle;，已达到子元素上下居中于子元素。

h5链接：
* http://home.163.com/special/daren/
* http://m.home.163.com/fps/frontends/local_special/cn_vote/index.html
* http://m.bendi.163.com/fps/frontends/local_special/new_year/index.html
* http://m.house.163.com/fps/frontends/house_special/life_zzj/index.html
* http://m.bendi.163.com/fps/frontends/local_special/38vote/index.html
* http://m.bendi.163.com/fps/frontends/local_special/bsj_ad/porsche.html
* http://m.bendi.163.com/fps/frontends/local_special/bsj_ad/audi.html