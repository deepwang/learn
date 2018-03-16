import React,{ Component } from 'react';
import HigherOrder from '../Higher-Order-Components/HigherOrderComponents';

class Example extends Component {
    render() {
        return (<div>
                    <p>React高阶组件实例</p>
                    <p>success!this is defined {this.props.username}</p>
                </div>)
    }
}

Example = HigherOrder(Example);

export default  Example;