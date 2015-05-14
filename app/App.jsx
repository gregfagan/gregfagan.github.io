import React from 'react';
import AboutMe from 'AboutMe';

export default class App extends React.Component {

  render() {
    var data = this.props.data;
    var { description, avatar, social } = data;

    return (
      <AboutMe avatar={avatar} description={description} social={social}/>
    );
  }
}