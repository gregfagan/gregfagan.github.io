import React from 'react';
import View from 'View';
import Avatar from 'Avatar';
import Text from 'Text';

export default class App extends React.Component {
  render() {
    var data = this.props.data;
    var { about, portrait } = data;

    return (
      <View tag='header' direction='row' wrap={true} justify='center' align='center'>
        <Avatar network='facebook' username='gregfagan' style={styles.avatar}/>
        <Text basis={320} style={styles.about}>{about}</Text>
      </View>
    );
  }
}

let styles = {
  avatar: {
    borderRadius: '50%',
    marginLeft: 20,
  },
  about: {
    margin: 20,
    maxWidth: 640
  }
}