import React from 'react';

export default class App extends React.Component {
  render() {
    var data = this.props.data;
    var { about, portrait } = data;

    return (
      <div>
        <img src={portrait}/>
        <p>{about}</p>
      </div>
    );
  }
}