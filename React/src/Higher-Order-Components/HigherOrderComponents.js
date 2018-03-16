import React,{ Component } from 'react';

let name = 'example';
// 在这里定义一个高阶函数，用来构造组件，函数参数为需要用到TemplateComponent组件state的组件
export default (InputComponent) => {
    class TemplateComponent extends Component {
        constructor() {
            super();
            this.state = {
                username: ''
            }
        }

        componentDidMount() {
            this.setState({
                username: name
            })
        }

        render() {
            return <InputComponent username={this.state.username} />
        }
    }

    return TemplateComponent
}