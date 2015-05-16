import React from 'react';
import Grid from 'Grid';
import Card from 'Card';

import AboutMe from 'AboutMe';
import Work from 'Work';

export default class App extends React.Component {
  render() {
    let data = this.props.data;
    let { description, avatar, social, works } = data;

    let aboutView = <AboutMe avatar={avatar} description={description} social={social}/>;
    let workViews = _.map(works, (work) => <Work {...work}/>)
    let views = [ aboutView, ...workViews ];

    return <Grid>{ _.map(views, this.renderCard) }</Grid>;
  }

  renderCard(face, key) { return <Card key={key}>{face}</Card> }
}