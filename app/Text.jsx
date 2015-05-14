import React from 'react';
import View from 'View';

export default class Text extends React.Component {
  render() {
    return <View tag='span' {...this.props}/>
  }
}