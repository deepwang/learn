import React,{ Component } from 'react';
import HigherOrder from '../Higher-Order-Components/HigherOrderComponents';
import '../css/HigherOrder.css'

class Example extends Component {
    render() {
        return (<div>
                    <p className="title">React高阶组件实例</p>
                    <p className="item">success!this is defined {this.props.username}</p>
                </div>)
    }
}

Example = HigherOrder(Example);

export default  Example;