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