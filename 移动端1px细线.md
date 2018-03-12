1.移动端1px细线问题出现原因。

为啥移动端css写好了border 1px，而实际看起来比1px要粗呢？因为这2个'px'是不一样的，在移动端的header内会写这样一行代码：<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">，这行代码定义了本页面的viewport的宽度为设备宽度,初始缩放值和最大缩放值都为1,并禁止了用户缩放。

css中的'px'只是一个抽象单位，在不同的设备或不同的环境中，css中的1px所代表的设备物理像素是不同的。在早先的移动设备中，屏幕的物理像素都比较低，如iphone3，分辨率为320px * 480px，在iphone3上一个css的px确实是对应的一个物理px，后来屏幕像素越来越高，如iphone4，分辨率为640*960，但屏幕尺寸却没有变化，这就意味着一个css像素等于4个物理像素(2 * 2)。

2.1px解决方案：

  (1)用小数来写：

  IOS8下已经支持带小数的px值, media query对应devicePixelRatio有个查询值-webkit-min-device-pixel-ratio, css可以写成这样：
  .border { border: 1px solid #999 }
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
      .border { border: 0.5px solid #999 }
  }
  @media screen and (-webkit-min-device-pixel-ratio: 3) {
      .border { border: 0.333333px solid #999 }
  }
  如果使用less/sass的话只是加了1句mixin

  缺点: 安卓与低版本IOS不适用, 这个或许是未来的标准写法, 现在不做指望

  (2)background渐变

  背景渐变, 渐变在透明色和边框色中间分割, frozenUI用的就是这种方法, 借用它的上边框写法:

  @media screen and (-webkit-min-device-pixel-ratio: 2){
    .ui-border-t {
        background-position: left top;
        background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.5,transparent),color-stop(0.5,#e0e0e0),to(#e0e0e0));
    }
  }

  缺点: 代码量大, 而且需要针对不同边框结构, frozenUI就定义9种基本样式，而且这只是背景, 这样做出来的边框实际是在原       本的border空间内部的, 如果元素背景色有变化的样式, 边框线也会消失，最后不能适应圆角样式

3.:before, :after与transform
  构建1个伪元素, 将它的长宽放大到2倍, 边框宽度设置为1px, 再以transform缩放到50%.
  .radius-border{
    position: relative;
  }
  @media screen and (-webkit-min-device-pixel-ratio: 2){
      .radius-border:before{
          content: "";
          pointer-events: none; /* 防止点击触发 */
          box-sizing: border-box;
          position: absolute;
          width: 200%;
          height: 200%;
          left: 0;
          top: 0;
          border-radius: 8px;
          border:1px solid #999;
          -webkit-transform(scale(0.5));
          -webkit-transform-origin: 0 0;
          transform(scale(0.5));
          transform-origin: 0 0;
      }
  }

  需要注意<input type="button">是没有:before, :after伪元素的

  优点: 其实不止是圆角, 其他的边框也可以这样做出来

  缺点: 代码量也很大, 占据了伪元素, 容易引起冲突

  4.使用淘宝flexible适配方案

    https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html
    https://www.w3cplus.com/css/fix-1px-for-retina.html


