CSS3新特性
====
选择器

@Font-face 特性

Word-wrap & Text-overflow 样式
>Word-wrap:<br>
设置word-wrap: break-word的话，在单词换行的情况下，可保持单词的完整性。

>Text-overflow:<br>
它与word-wrap是协同工作的，word-wrap设置或检索当当前行超过指定容器的边界时是否断开转行，而text-overflow则设置或检索当当前行超过指定容器的边界时如何显示,我们在父容器设置overflow: hidden,然后设置“text-overflow”属性，有“clip”和“ellipsis”两种可供选择。"clip"表示直接切割，"ellipsis"表示用省略号代替。

文字渲染（Text-decoration）
* Text-fill-color: 文字内部填充颜色
* Text-stroke-color: 文字边界填充颜色
* Text-stroke-width: 文字边界宽度

CSS3 的多列布局（multi-column layout）
* Column-count：表示布局几列。
* Column-rule：表示列与列之间的间隔条的样式
* Column-gap：表示列于列之间的间隔

边框和颜色（color, border）
* 支持rgba和hsl表示颜色,支持圆角，阴影等效果。

CSS3 的渐变效果（Gradient）

CSS3 的阴影（Shadow）和反射（Reflect）效果

CSS3 的背景效果
* “Background Clip”，该属确定背景画区
* “Background Origin”，用于确定背景的位置，它通常与background-position 联合使用，您可以从border、padding、content 来计算background-position（就像background-clip）。
* “Background Size”，常用来调整背景图片的大小，注意别和clip 弄混，这个主要用于设定图片本身。
* “Background Break”属性，CSS3 中，元素可以被分成几个独立的盒子（如使内联元素span 跨越多行），background-break 属性用来控制背景怎样在这些不同的盒子中显示。
* 多背景图片支持

CSS3 的盒子模型
````
display: -webkit-box;
display: -moz-box;
-webkit-box-orient: horizontal;
-moz-box-orient: horizontal;
````
“display: -webkit-box; display: -moz-box;”，它针对webkit和gecko浏览器定义了该元素的盒子模型。注意这里的“-webkit-box-orient: horizo​​ntal;”，他表示水平排列的盒子模型。
````
.flex {
     -webkit-box-flex: 1;
     -moz-box-flex: 1;
 }

 .flex2 {
     -webkit-box-flex: 2;
     -moz-box-flex: 2;
 }
````

CSS3 的Transitions, Transforms 和Animation
>Transitions
* transition-property：用于指定过渡的性质，比如transition-property:backgrond 就是指backgound 参与这个过渡
* transition-duration：用于指定这个过渡的持续时间
* transition-delay：用于制定延迟过渡的时间
* transition-timing-function：用于指定过渡类型，有ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier

>Transforms
* 指拉伸，压缩，旋转，偏移等等一些图形学里面的基本变换。

>Animation
````
@-webkit-keyframes anim1 {
    0% {
        Opacity: 0;
 Font-size: 12px;
    }
    100% {
        Opacity: 1;
 Font-size: 24px;
    }
 }
 .anim1Div {
    -webkit-animation-name: anim1 ;
    -webkit-animation-duration: 1.5s;
    -webkit-animation-iteration-count: 4;
    -webkit-animation-direction: alternate;
    -webkit-animation-timing-function: ease-in-out;
 }
````