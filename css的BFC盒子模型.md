BFC盒子（Block Formatting Contexts）

特性：
  (1)内部的box会在垂直方向，从顶部开始一个接着一个地放置；
  (2)box垂直方向的距离由margin(外边距)决定。属于同一个BFC的两个相邻box的margin会发生叠加；
  (3)BFC的区域不会与float box叠加；
  (4)BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，也不会被外面的元素影响；
  (5)计算BFC高度时，浮动元素也参与计算；
  (6)每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也
     是如此。

触发BFC：
  (1)设置除 float:none 以外的属性值（如：left | right）就会触发BFC;
  (2)设置除 overflow: visible 以外的属性值（如： hidden | auto | scroll）就会触发BFC;
  (3)设置 display属性值为: inline-block | flex | inline-flex | table-cell | table-caption 就会触发BFC;
  (4)设置 position 属性值为：absolute | fixed 就会触发BFC；
  (5)使用 fieldset 元素（可以给表单元素设置环绕边框的html元素）也会触发BFC
