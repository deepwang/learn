import React from 'react';
import ReactDOM from 'react-dom';
import Example from '../Higher-Order-Components/Example';
import AsyncLoad from '../setState-async-load/AsyncLoad';

ReactDOM.render(
  <div>
    <AsyncLoad />
  </div>, document.getElementById('root'))