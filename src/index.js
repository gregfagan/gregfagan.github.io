import React from 'react'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'

import { primary } from './color'
import { Linkedin, Github } from './icons'

const globalStyle = css`
  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Inconsolata, mono;
  }
`

const Link = styled.a`
  margin: 0.5em;
  color: ${primary};
  text-decoration: none;
  text-align: center;
`

export default () => (
  <>
    <Global styles={globalStyle} />
    <div>
      <Link href="https://github.com/gregfagan">
        <Github />
      </Link>
      <Link href="https://linkedin.com/in/gregorysfagan">
        <Linkedin />
      </Link>
    </div>
    <Link href="resume.html">résumé</Link>
  </>
)
