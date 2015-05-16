import _ from 'lodash';
import React from 'react';

import View from 'View';
import Avatar from 'Avatar';
import Text from 'Text';
import SocialLink from 'SocialLink';

export default class AboutMe extends React.Component {
  render() {
    var { avatar, description, social, ...other } = this.props;

    return (
      <View grow={1} justify='center' align='center' style={styles.container} {...other}>
        <Avatar network={avatar.network} username={avatar.username} style={styles.avatar}/>
        <View direction='row' wrap={true} justify='space-between' style={styles.socialBox}>
        {
          _.map(social, (username, network) => <SocialLink key={network} network={network} username={username} style={styles.socialLink}/>)
        }
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

let avatarSize = 100;
let socialLinkSize = avatarSize / 3;

let styles = { 
  container: {
    padding: '5%'
  },
  avatar: {
    borderRadius: '50%',
    width: avatarSize,
    height: avatarSize
  },
  socialBox: {
    maxWidth: avatarSize
  },
  socialLink: {
    width: socialLinkSize,
    height: socialLinkSize
  },
  description: {
    marginTop: 20,
    maxWidth: '18em',
    fontSize: '.75em'
  }
}