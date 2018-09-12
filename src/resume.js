import React from 'react'
import styled from 'styled-components'
import content from './resume.json'

const Page = styled.div`
  font-size: 14px;
  padding: 2em;
  max-width: 800px;
  margin: auto;
  font-family: 'Inconsolata', sans-serif;
`

const Title = styled.h1`
  font-family: 'Merriweather', sans-serif;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
`

const HorizontalBlock = styled(Block)`
  flex-direction: row;
`

const ContentSectionTitle = styled(Title)`
  font-size: 1.2em;
  flex-grow: 1;
  border-bottom: 1px solid black;
`

const ContentSection = ({ title, children }) => (
  <Block>
    <ContentSectionTitle>{title}</ContentSectionTitle>
    {children}
  </Block>
)

const ContentBlock = styled(Block)`
  margin-bottom: 1.2em;
`

const ContentDetails = styled.div`
  margin-top: 0.4em;
  margin-bottom: 0.4em;
`

const ContentTitle = styled(Title)`
  margin: 0em;
  font-size: 1.1em;
  line-height: 1.5em;
`

const TwoColumn = ({ left, right }) => (
  <HorizontalBlock>
    <span style={{ flex: 1 }}>{left}</span>
    <span>{right}</span>
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
  padding-left: 1.4em;
  line-height: 1.2em;
`

const Employment = ({ title, employer, when, tech, what }) => (
  <ContentBlock>
    <ContentTitle>{title}</ContentTitle>
    <ContentDetails>
      <TwoColumn left={employer} right={when} />
      <ContentDescriptor>{tech}</ContentDescriptor>
    </ContentDetails>
    <ContentList>
      {what.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ContentList>
  </ContentBlock>
)

const Project = ({ title, tech, what }) => (
  <ContentBlock>
    <ContentTitle>{title}</ContentTitle>
    <ContentDetails style={{ marginTop: 0 }}>
      <ContentDescriptor>{tech}</ContentDescriptor>
    </ContentDetails>
    <ContentList>
      {what.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ContentList>
  </ContentBlock>
)

const Education = ({ degree, where, when }) => (
  <ContentBlock>
    <ContentTitle>{degree}</ContentTitle>
    <TwoColumn left={where} right={when} />
  </ContentBlock>
)

export default () => {
  return (
    <Page>
      <Title>Greg Fagan</Title>
      <ContentSection title="Employment">
        {content.employment.map((e, i) => (
          <Employment {...e} key={i} />
        ))}
      </ContentSection>
      <ContentSection title="Projects">
        {content.projects.map((e, i) => (
          <Project {...e} key={i} />
        ))}
      </ContentSection>
      <ContentSection title="Education">
        <Education {...content.education} />
      </ContentSection>
    </Page>
  )
}
