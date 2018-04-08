import React,{Component} from 'react';

export default class AsyncLoad extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
  }

  componentDidMount() {
    //由于setState不会立即改变React组件中state的值，所以两次setState中this.state.value都是同一个值0，故而，这两次输出都是0。因而count只被加1。【合并更新】
    //每次setState产生新的state会依次被存入一个队列，然后会根据isBathingUpdates变量判断是直接更新this.state还是放进dirtyComponent里回头再说。isBatchingUpdates默认是false，也就表示setState会同步更新this.state。但是，当React在调用事件处理函数之前就会调用batchedUpdates，这个函数会把isBatchingUpdates修改为true，造成的后果就是由React控制的事件处理过程setState不会同步更新this.state。
    this.setState({
      num:this.state.num+1
    })
    console.log(this.state.num)  //第一次打印

    this.setState({
      num:this.state.num+1
    })
    console.log(this.state.num) //第二次打印


    //在React中，如果是由React引发的事件处理（比如：onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.setState。 “除此之外”指的是：绕过React通过addEventListener直接添加的事件处理函数和setTimeout/setInterval产生的异步调用
    setTimeout(()=>{
      this.setState({
        num:this.state.num+1
      })
      console.log(this.state.num)  //第三次打印

      this.setState({
        num:this.state.num+1
      })
      console.log(this.state.num) //第四次打印
    },0)
  }

  render() {
    return (
      <div></div>
    )
  }
}