import React from 'react';
import View from 'View';
import Text from 'Text';

export default class Work extends React.Component {
  render() {
    let { name } = this.props;
    return <View grow={1} style={styles.base}><Text>{name}</Text></View>
  }
}

let styles = {
  base: {
    padding: '5%',
    color: 'white',
    backgroundColor: 'darkGrey'
  }
}