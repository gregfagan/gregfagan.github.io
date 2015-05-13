import React from 'react';
import View from 'View';

export default class Avatar extends React.Component {
  render() {
    let { network, username, size='medium', ...other } = this.props;
    let widthAndHeight = sizeMap[network][size];
    return <View tag='img' src={`https://avatars.io/${network}/${username}?size=${size}`} {...widthAndHeight} {...other} />;
  }
}

function square(lengthOfSide) {
  return { width: lengthOfSide, height: lengthOfSide }
}

let sizeMap = {
  facebook: {
    large: square(130),
    medium: square(64),
    small: square(32)
  },
  twitter: {
    large: square(73),
    medium: square(48),
    small: square(48)
  },
  instagram: {
    large: square(150),
    medium: square(150),
    small: square(150)
  }
}