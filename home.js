import React from 'react'
import ReactDOM from 'react-dom'

import { primary } from './color'
import { Linkedin, Github, Twitter } from './icons'

const IconTray = () => {
  const containerStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1.2em',
    paddingBottom: '0.8em'
  }

  const iconStyle = {
    marginLeft: '1em',
    display: 'flex',
  }

  return (
    <div style={containerStyle}>
      <a style={{...iconStyle, marginLeft: 0}} href="https://github.com/gregfagan"><Github /></a>
      <a style={iconStyle} href="https://linkedin.com/in/gregorysfagan"><Linkedin /></a>
      <a style={iconStyle} href="https://twitter.com/gregfagan"><Twitter /></a>
    </div>
  )
}

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
    flexDirection: 'column',
    alignItems: 'center',
  }

  const textStyle ={
    color: primary,
    fontFamily: 'Inconsolata, mono',
    textDecoration: 'none',
  }

  return (
    <div style={centeringStyle}>
      <div style={containerStyle}>
        <IconTray />
        <a style={textStyle} href="resume.html">resume</a>
       </div>
    </div>
  )
}

export default () => <Info/>
