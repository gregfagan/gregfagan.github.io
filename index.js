import 'normalize.css'
import './nooverflow.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home.js'

if (typeof global.document !== 'undefined') {
  ReactDOM.render(
    React.createElement(Home),
    document.getElementById('app')
  )

  // No reason to scroll on mobile, prevents some unpleasant
  // behavior with the background.
  document.ontouchmove = e => e.preventDefault()
}
