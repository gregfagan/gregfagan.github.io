import 'normalize.css'
import './nooverflow.css'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Home from './home.js'
import Resume from './resume'

export default (locals) => {
  // Only rendering one of two pages
  const isHome = locals.path === 'index.html'
  const appComponent = isHome ? Home : Resume
  const appElement = React.createElement(appComponent)

  const assets = Object.keys(locals.webpackStats.compilation.assets)
  const css = assets.filter(asset => asset.match(/\.css$/))
  const js = assets
    .filter(() => isHome) // only need script on home page
    .filter(asset => asset.match(/\.js$/))
    .filter(asset => !asset.match(/static/))

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Greg Fagan</title>
        ${ css.map(sheet => `<link href="${sheet}" rel="stylesheet">`).join('\n') }
      </head>
      <body>
        <div id='app'>${ReactDOMServer.renderToString(appElement)}</div>
        ${ js.map(script => `<script src='${script}' type='text/javascript' async></script>`).join('\n') }
      </body>
    </html>
  `
}
