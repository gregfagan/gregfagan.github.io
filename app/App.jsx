import React from 'react';
import Grid from 'Grid';
import Card from 'Card';

import AboutMe from 'AboutMe';
import Work from 'Work';
import Game from 'Game';

export default class App extends React.Component {
  render() {
    let data = this.props.data;
    let { description, avatar, social, works, games } = data;

    let aboutView = <AboutMe avatar={avatar} description={description} social={social}/>;
    let workViews = _.map(works, (work) => <Work {...work}/>)
    let gameViews = _.map(games, (game) => <Game {...game}/>)
    let views = [ aboutView, ...workViews, ...gameViews ];

    return <Grid style={style}>{ _.map(views, this.renderCard) }</Grid>;
  }

  renderCard(face, key) { return <Card key={key}>{face}</Card> }
}

let style = {
  // background: '#0F2A42',
  // color: 'white'
}