import React from 'react';
import View from 'View';

export default class Avatar extends React.Component {
  render() {
    let { network, username, size, ...other } = this.props;
    return <View tag='img' src={`https://avatars.io/${network}/${username}?size=${size || 'medium'}`} {...other} />;
  }
}