大栗踩坑记
====
#### 前端常用的加密方法
* Base64编码
* 哈希算法（Hash常用MDS和SHA1）
* 加盐（add salt）
#### element的分页组件问题：
当改变当前页面为1时（包括其他数字），数据被改变了但是分页组件的当前页面高亮显示却没有变化。解决方式可以为 将分页的总数total设置为null，然后再去请求接口获取数据，这样就可以出发高亮显示了。
#### 1、element中表格的多选狂框列表头不支持更改？
> 解决方法为使用css伪元素进行元素定位并更改背景颜色和内容，将表头的多选框进行覆盖。
````
//在vue中使用组件引用，因为scoped的局部限制导致css不能被选中，所以将scoped去掉便可成功。
<style lang='scss'>
.detailDia {
  td{
    text-align: center;
    .el-select {
      width: 120px !important;
    }
  }
  thead>tr>th:last-child::after{
    content: "关键属性";
    background-color: #ffffff;
    color: #909399;
    position: absolute;
    left: 0;
    top: 12px;
    z-index: 10000;
  }
}
</style>
````
#### Css的currentColor值:当前的标签所继承的文字颜色。(可以跟随当前标签的设置而改变颜色)
#### css选择器
* 元素选择器
* 关系选择器
* 属性选择器
* 伪类选择器
* 伪对象选择器

元素选择器：
* *选择所有的元素
* E元素选择器、选择指定的元素
* #Id id选择器
* .class 类选择器

关系选择器：
* E F 包含选择器（选择所有包含在E元素里面的F元素）
* E>F 子选择器（选择所有作为E元素的子元素F）
* E+F 相邻选择器（选择紧贴在E元素之后的F元素）
* E～F 兄弟选择器（选择E元素所有兄弟元素F）

属性选择器：
* E[att] 选择具有att属性的E元素
* E[att="val"] 选择具有att属性且属性值等于val的E元素
* E[att^="val"] 选择具有att属性且属性值为以val开头的字符串的E元素
* E[att$="val"] 选择具有att属性且属性值为以val结尾的字符串的E元素
* E[att*="val"]	选择具有att属性且属性值为包含val的字符串的E元素

伪类选择器（常用）：
* E:link 设置超链接a在未被访问前的样式
* E:hover 设置元素鼠标在其悬停时的样式
* E:first-child 匹配父元素的第一个子元素E
* E:last-child 匹配父元素的最后一个子元素E
* E:nth-child(n) 匹配父元素的第n个子元素E
* E:nth-last-child(n) 匹配父元素的倒数第n个子元素E
* E:not(s) 匹配不含有s选择符的元素E

伪对象选择器：
* E:before/E::before 在目标元素E的前面插入的内容（content）
* E:after/E::after 在目标元素E的后面插入的内容（content）
* E:first-letter/E::first-letter 设置元素内的第一个字符的样式
* E:first-line/E::first-line 设置元素内的第一行的样式
* E::placeholder 设置元素文字占位符的样式

### webpack实现代码拆分的方式（分包）：
* Entry Points：多入口分开打包
* Prevent Duplication：去重，抽离公共模块和第三方库
* Dynamic Imports：动态加载
  
### Webpack打包的优化方向可分为两个大方向：1、体积优化 2、速度优化
在速度方面常用的优化方式为：
* 减少文件搜索范围
* 增强代码压缩工具
* 加速代码构建速度
* 利用缓存
* 将不常变化的静态文件抽离

### 单元测试-Jest
