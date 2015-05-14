import React from 'react';
import View from 'View';

let domain = {
  github: 'github.com',
  linkedin: 'linkedin.com/in',
  twitter: 'twitter.com'
}

let image = _.mapValues(domain, (domain, network) => require(`img/entypo/${network}-with-circle.svg`));

export default class SocialLink extends React.Component {
  render() {
    let { network, username, style, ...other } = this.props;
    return (
      <View tag='a' href={`https://${domain[network]}/${username}`} {...other}>
         <img src={image[network]} style={style}/>
      </View>
    );
  }
}