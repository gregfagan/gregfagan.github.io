import React from 'react'
import { renderToString } from 'react-dom/server'
import path from 'path'

const render = async () => {
  const page = process.argv[2]
  const Content = (await import(path.join(process.cwd(), page))).default
  console.log(/* html */ `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Greg Fagan</title>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather|Inconsolata" rel="stylesheet">
        <link href="https://unpkg.com/normalize.css@8.0.0/normalize.css" rel="stylesheet">
      </head>
      <body>
        ${renderToString(<Content />)}
      </body>
    </html>
  `)
}

render()
