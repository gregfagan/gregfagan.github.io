import React from 'react';
import AboutMe from 'AboutMe';
import View from 'View';
import Grid from 'Grid';
import Card from 'Card';
import Text from 'Text';

export default class App extends React.Component {

  render() {
    let data = this.props.data;
    let { description, avatar, social, works } = data;

    let about = <AboutMe avatar={avatar} description={description} social={social} style={styles.about}/>;
    let cards = [ about ].concat(_.map(works, this.renderWork));

    return  <Grid columns={3}>{ _.map(cards, this.renderCard) }</Grid>;
  }

  renderCard(face, key) { return <Card key={key}>{face}</Card> }
  renderWork(work) { return <View style={styles.work}><Text>{work.name}</Text></View> }
}

let styles = {
  about: {
    padding: '10%'
  },
  work: {
    padding: '5%',
    color: 'white',
    backgroundColor: 'darkGrey'
  }
}
