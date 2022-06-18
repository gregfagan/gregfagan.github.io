import React from 'react'
import styled from '@emotion/styled'
import content from './resume.json'

const Page = styled.article`
  font-size: 14px;
  padding: 2em;
  max-width: 800px;
  margin: auto;
  font-family: 'Inconsolata', sans-serif;
`

const Title = styled.h1`
  font-family: 'Merriweather', sans-serif;
`

const Block = styled('div', {
  shouldForwardProp: (prop) => prop !== 'content' && prop !== 'horizontal',
})`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  margin-bottom: ${(props) => props.content && '1.2em'};
`

const SectionTitle = styled(Title)`
  font-size: 1.2em;
  flex-grow: 1;
  border-bottom: 1px solid black;
`

const Section = ({ title, children }) => (
  <Block as="section">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Block>
)

const Details = styled.div`
  margin-top: 0.4em;
  margin-bottom: 0.4em;
`

const ContentTitle = styled(Title)`
  margin: 0em;
  font-size: 1.1em;
  line-height: 1.5em;
`

const TwoColumn = ({ left, right }) => (
  <Block horizontal>
    <span style={{ flex: 1 }}>{left}</span>
    <span>{right}</span>
  </Block>
)

const Descriptor = styled.span`
  color: #666;
  font-size: 0.9em;
  font-weight: 400;
  font-style: italic;
  margin: 0em;
  line-height: 1.3em;
`

const List = styled.ul`
  margin: 0em;
  padding-left: 1.4em;
  line-height: 1.2em;
`

const Employment = ({ title, employer, when, tech, what }) => (
  <Block content>
    <ContentTitle>{title}</ContentTitle>
    <Details>
      <TwoColumn left={employer} right={when} />
      <Descriptor>{tech}</Descriptor>
    </Details>
    <List>
      {what.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </List>
  </Block>
)

const Project = ({ title, tech, what }) => (
  <Block content>
    <ContentTitle>{title}</ContentTitle>
    <Details style={{ marginTop: 0 }}>
      <Descriptor>{tech}</Descriptor>
    </Details>
    <List>
      {what.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </List>
  </Block>
)

const Education = ({ degree, where, when }) => (
  <Block content>
    <ContentTitle>{degree}</ContentTitle>
    <TwoColumn left={where} right={when} />
  </Block>
)

export default () => {
  return (
    <Page>
      <Title>Greg Fagan</Title>
      <Section title="Employment">
        {content.employment.map((e, i) => (
          <Employment {...e} key={i} />
        ))}
      </Section>
      <Section title="Projects">
        {content.projects.map((e, i) => (
          <Project {...e} key={i} />
        ))}
      </Section>
      <Section title="Education">
        <Education {...content.education} />
      </Section>
    </Page>
  )
}
