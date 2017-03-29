import React from 'react'
import ReactDOM from 'react-dom'

import Triangles from './geometric-art/triangles-canvas'
import colorFnGenerator from './geometric-art/color'
import { withWindowState } from 'react-window-state'

import { Linkedin, Github, Twitter } from './icons'

const colorFn = colorFnGenerator(200, 490, 275, 325)

const Info = () => {
  const centeringStyle = {
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  }

  const containerStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1.2em',
    background: 'rgba(0, 0, 0, 0.5)',
  }

  const iconStyle = {
    marginLeft: '1em',
    display: 'flex',
  }

  const textStyle ={
    color: 'white',
    margin: '1.2em',
    textDecoration: 'none',
  }

  return (
    <div style={centeringStyle}>
      <div style={containerStyle}>
        <a style={{...iconStyle, marginLeft: 0}} href="https://github.com/gregfagan"><Github /></a>
        <a style={iconStyle} href="https://linkedin.com/in/gregorysfagan"><Linkedin /></a>
        <a style={iconStyle} href="https://twitter.com/gregfagan"><Twitter /></a>
        <a style={textStyle} href="resume.html">resume</a>
      </div>
    </div>
  )
}

const Home = ({win}) => (
  <div>
    <Triangles
      width={win.width}
      height={win.height}
      sideLength={60}
      spacing={2}
      color={colorFn}
    />
    <Info/>
  </div>
)

export default withWindowState(Home)
