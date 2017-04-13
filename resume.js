import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const content = {
  employment: [
    {
      title: "Software Developer",
      employer: "Self-Employed — Partnership with Intentional Futures",
      when: "2014-2015",
      tech: "Javascript, React, D3, HTML/CSS, Swift, Parse (back-end platform)",
      what: [
        "Developed single page data visualization web apps",
        "Prototyped an iOS game/social media experience",
        "Communicated engineering guidance and expertise to non-technical partners"
      ]
    },
    {
      title: "Software Development Engineer II",
      employer: "Microsoft",
      when: "2011-2013",
      tech: "C++, Lua",
      what: [
        "Built an Xbox 360 app connected to a RESTful commerce service for the pre-order of Xbox One consoles",
        "Developed front-end user experience for Xbox 360 cloud save game storage",
        "Shipped interactive Kinect tutorial app after several iterated prototypes"
      ]
    },
    {
      title: "Software Development Engineer",
      employer: "Microsoft",
      when: "2008-2011",
      tech: "C++, SQL",
      what: [
        "Supported Xbox LIVE tenure rewards feature with new database procedures",
        "Overhauled Xbox 360 network connectivity setup and troubleshooting app",
        "Updated Xbox 360 out-of-box set up experience"
      ]
    }
  ],
  education: {
    degree: "B.S. in Computer Engineering",
    where: "Texas A&M University",
    when: "2003-2007"
  },
  projects: [
    {
      title: "Game Development",
      tech: "Javascript, React, Unity, C#, XNA, Objective-C",
      what: [
        "Ludum Dare game jam entries: highest scoring #45 out of 736 games (2013-present)",
        "Iterative protoypes of a mobile touch based 2D platformer (2009-present)",
        "Built Klondike Solitaire to learn Javascript and React (2014-2015)",
        "Shipped a single-button mobile eat-em-up game for Windows Phone (2011)",
      ]
    },
    {
      title: "Exploration",
      tech: "Clojure, ClojureScript, Scheme, Javascript, NodeJS, C++",
      what: [
        "Study of functional programming; solving 4clojure.com koans (2014-present)",
        "Partial development of a companion app for Twitch.tv Diablo II speed runners (2016)"
      ]
    }
  ]
}

const Page = styled.div`
  font-size: 14px;
  padding: 2em;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
`

const HorizontalBlock = styled(Block)`
  flex-direction: row;
`

const ContentSectionTitle = styled.h2`
  flex-grow: 1;
  border-bottom: 1px solid black;
`

const ContentSection = ({title, children}) => (
  <Block>
    <ContentSectionTitle>{title}</ContentSectionTitle>
    { children }
  </Block>
)


const ContentBlock = styled(Block)`
  margin-bottom: 1.2em;
`

const ContentDetails = styled.div`
  margin-top: 0.4em;
  margin-bottom: 0.4em;
`

const ContentTitle = styled.h3`
  margin: 0em;
  font-size: 1.2em;
  line-height: 1.5em;
`

const TwoColumn = ({left, right}) => (
  <HorizontalBlock>
    <span style={{ flex: 1 }}>{ left }</span>
    <span>{ right }</span>
  </HorizontalBlock>
)

const ContentDescriptor = styled.span`
  color: #666;
  font-size: 0.9em;
  font-weight: 400;
  font-style: italic;
  margin: 0em;
  line-height: 1.3em;
`

const ContentList = styled.ul`
  margin: 0em;
  padding-left: 1.2em;
  line-height: 1.2em;
`

const Employment = ({title, employer, when, tech, what}) => (
  <ContentBlock>
    <ContentTitle>{title}</ContentTitle>
      <ContentDetails><TwoColumn left={employer} right={when} />
      <ContentDescriptor>{tech}</ContentDescriptor>
    </ContentDetails>
    <ContentList>
      { what.map((item, i) => <li key={i}>{item}</li>) }
    </ContentList>
  </ContentBlock>
)

export default () => {
  return (
    <Page>
      <h1>Greg Fagan</h1>
      <ContentSection title='Employment'>
        { content.employment.map((e, i) => <Employment {...e} key={i}/>) }
      </ContentSection>
    </Page>
  )
}
