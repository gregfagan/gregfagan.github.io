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
  const centeringStyle = {
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  };
  
  const containerStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1.2em',
    background: 'rgba(0, 0, 0, 0.5)',
  };
  
  const iconStyle = {
    marginLeft: '1em',
    display: 'flex',
  }
  
  return (
    <div style={centeringStyle}>
      <div style={containerStyle}>
        <a style={{...iconStyle, marginLeft: 0}} href="https://github.com/gregfagan"><Github /></a>
        <a style={iconStyle} href="https://linkedin.com/in/gregorysfagan"><Linkedin /></a>
        <a style={iconStyle} href="https://twitter.com/gregfagan"><Twitter /></a>
      </div>
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

// No reason to scroll on mobile, prevents some unpleasant
// behavior with the background.
document.ontouchmove = e => e.preventDefault();