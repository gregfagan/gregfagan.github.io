import React from 'react';
import View from 'View';
import Text from 'Text';

export default class Game extends React.Component {
  render() {
    let { name, screenshot } = this.props;
    // console.log(screenshot)
    let style = _.assign({}, styles.base, { backgroundImage: `url(${screenshot})` })
    
    return (
      <View grow={1} style={style}>
        <Text>{name}</Text>
      </View>
    );
  }
}

let styles = {
  base: {
    padding: '5%',
    color: 'white',
    background: 'black',
    backgroundSize: 'cover'
  }
}