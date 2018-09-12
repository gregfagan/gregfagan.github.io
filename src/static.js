import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import Home from './home'
import Resume from './resume'

export default locals => {
  // Only rendering one of two pages
  const appElement = React.createElement(
    locals.path === 'index.html' ? Home : Resume,
  )
  const sheet = new ServerStyleSheet()
  const markup = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(appElement),
  )

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Greg Fagan</title>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather|Inconsolata" rel="stylesheet">
        <style>* { margin: 0; padding: 0; }</style>
        ${sheet.getStyleTags()}
      </head>
      <body>
        ${markup}
      </body>
    </html>
  `
}
