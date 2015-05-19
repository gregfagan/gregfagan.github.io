var _ = require('lodash');
var React = require('react/addons');
var App = require('App');
require('normalize.css');

var data = require('data.json');

React.render(<App data={data}/>, document.getElementById('app'));