import _ from 'lodash';
import React from 'react';
import FixedAspectRatioView from 'FixedAspectRatioView';

export default class Card extends React.Component {
  render() {
    let { style, ...other } = this.props;
    return <FixedAspectRatioView ratio={2/3} style={_.extend(cardStyle, style)} {...other}/>
  }
}

let cardStyle = {
  borderRadius: 3,
  overflow: 'hidden'
}