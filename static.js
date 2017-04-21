import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import styled, { styleSheet } from 'styled-components'

import Home from './home.js'
import Resume from './resume'

export default (locals) => {
  // Only rendering one of two pages
  const appElement = React.createElement(
    locals.path === 'index.html' ? Home : Resume
  )

  const assets = Object.keys(locals.webpackStats.compilation.assets)
  const css = assets.filter(asset => asset.match(/\.css$/))

  const markup = ReactDOMServer.renderToStaticMarkup(appElement)

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Greg Fagan</title>
        ${ css.map(sheet => `<link href="${sheet}" rel="stylesheet">`).join('\n') }
        <style>${ styleSheet.getCSS() } </style>
        <link href="https://fonts.googleapis.com/css?family=Merriweather|Inconsolata" rel="stylesheet">
      </head>
      <body>
        ${ markup }
      </body>
    </html>
  `
}
