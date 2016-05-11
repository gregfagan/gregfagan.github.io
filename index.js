import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

const page = props => (
  <div>Hello, world.</div>
)

ReactDOM.render(
  React.createElement(page),
  document.getElementById('app')
);