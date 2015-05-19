import _ from 'lodash';
import React from 'react';
import View from 'View';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.onResize = this.forceUpdate.bind(this, null);
  }
  
  componentWillMount() { window.addEventListener('resize', this.onResize); }
  componentWillUnmount() { window.removeEventListener('resize', this.onResize); }

  render() {
    let { minWidth=220, minMargin=10, style, children, ...other } = this.props;
    let columns = Math.max(1, Math.floor(window.innerWidth / minWidth));
    let width = Math.floor((window.innerWidth - 2*minMargin)/columns - 2*minMargin);
    let cellStyle = {
      width: width,
      margin: minMargin
    }

    return (
      <View wrap={true} direction='row' style={_.extend({}, { padding: minMargin }, style)} {...other}>
      {
        _.map(children, (cell, i) => React.addons.cloneWithProps(cell, { key: i, style: _.extend({}, cellStyle, cell.props.style) }))
      }
      </View>
    );
  }
}