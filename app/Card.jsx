import _ from 'lodash';
import React from 'react';
import FixedAspectRatioView from 'FixedAspectRatioView';

export default class Card extends React.Component {
  render() {
    return <FixedAspectRatioView ratio={1} style={cardStyle} {...this.props}/>
  }
}

let cardStyle = {
  borderRadius: 3,
  overflow: 'hidden'
}