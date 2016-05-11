import 'normalize.css';
import './nooverflow.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Triangles from 'geometric-art/triangles-canvas';
import colorFnGenerator from 'geometric-art/color';
import WindowSize from 'react-window-size';

import { Linkedin, Github, Twitter } from './icons';

const colorFn = colorFnGenerator(200, 490, 275, 325);

const Info = () => {
  const containerStyle = {
    position: 'absolute',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0.5em',
    bottom: 0,
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.5)',
  };
  
  const textStyle = {
    flex: '1 0 auto',
    color: 'white',
    fontSize: 16,
  };
  
  const iconStyle = {
    marginLeft: '0.7em',
    display: 'flex',
  }
  
  return (
    <div style={containerStyle}>
      <span style={textStyle}>Building cool things with code.</span>
      <a style={iconStyle} href="https://www.linkedin.com/in/gregorysfagan"><Linkedin /></a>
      <a style={iconStyle} href="https://github.com/gregfagan"><Github /></a>
      <a style={iconStyle} href="https://twitter.com/gregfagan"><Twitter /></a>
    </div>
  );
};

const Page = props => (
  <div>
    <Triangles width={props.width} height={props.height} sideLength={60} spacing={2} color={colorFn} />
    <Info/>
  </div>
);

ReactDOM.render(
  React.createElement(WindowSize()(Page)),
  document.getElementById('app')
);