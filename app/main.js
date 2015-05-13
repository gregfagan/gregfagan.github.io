var _ = require('lodash');
var React = require('react/addons');
var data = require('data.json');

var App = require('App');

React.render(<App data={data}/>, document.getElementById('app'));