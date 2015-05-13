import React from 'react';
import View from 'View';
import Avatar from 'Avatar';
import Text from 'Text';

export default class AboutMe extends React.Component {
  render() {
    var { avatar, description } = this.props;

    return (
      <View tag='header' direction='row' wrap={true} justify='center' align='center' style={styles.container}>
        <Avatar network={avatar.network} username={avatar.username} size='large' width={75} height={75} style={styles.avatar}/>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

let styles = {
  container: {
    padding: 20
  },
  avatar: {
    borderRadius: '50%',
  },
  description: {
    marginLeft: 20,
    maxWidth: 640
  }
}