import React from 'react';
import View from 'View';

export default class Avatar extends React.Component {
  render() {
    let { network, username, size='large', ...other } = this.props;
    return <View tag='img' src={`https://avatars.io/${network}/${username}?size=${size}`} {...other} />;
  }
}