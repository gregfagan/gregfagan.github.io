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
    let { minWidth=200, margin=1.5, children, ...other } = this.props
    let columns = Math.max(1, Math.floor(window.innerWidth / minWidth));
    let width = 1/columns * 100  - (2 * margin);
    let cellStyle = {
      width: `${width}%`,
      margin: `${margin}%`
    }

    return (
      <View wrap={true} direction='row' {...other}>
      {
        _.map(children, (cell, i) => React.addons.cloneWithProps(cell, { key: i, style: _.extend(cellStyle, cell.props.style) }))
      }
      </View>
    );
  }
}