import React from 'react'
import { renderToString } from 'react-dom/server'
import path from 'path'
import fs from 'fs'

const out = path.join(process.cwd(), 'build')

if (!fs.existsSync(out)) {
  fs.mkdirSync(out)
}

const render = async (filename) => {
  const Content = (await import(path.join(__dirname, `${filename}.js`))).default
  const html = /* html */ `
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
  `
  fs.writeFileSync(path.join(out, `${filename}.html`), html)
}

;['index', 'resume'].forEach(render)
