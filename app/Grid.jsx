import _ from 'lodash';
import React from 'react';
import View from 'View';

export default class Grid extends React.Component {
  render() {
    let { columns=4, margin=1, children, ...other } = this.props
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