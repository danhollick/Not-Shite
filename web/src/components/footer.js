import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Columns } from './layout'
import { Title, TextLink, Overline } from './text'
import { colors } from '../utils/colors'

const ImgLinkWrapper = styled.a`
  appearance: none;
  text-decoration: none;
  transition: transform 200ms ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      dribble: file(relativePath: { eq: "IconDesatDribble.png" }) {
        childImageSharp {
          fixed(width: 24) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      instagram: file(relativePath: { eq: "IconDesatInstagram.png" }) {
        childImageSharp {
          fixed(width: 24) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      medium: file(relativePath: { eq: "IconDesatMedium.png" }) {
        childImageSharp {
          fixed(width: 24) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      linked: file(relativePath: { eq: "IconDesatLinkedIn.png" }) {
        childImageSharp {
          fixed(width: 24) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Columns>
      <Overline className="AlignCenter" color={colors.fire}>
        Built by{' '}
        <TextLink
          color={colors.fire}
          href="https://alcohollick.com/"
          target="_blank"
        >
          {' '}
          dan hollick
        </TextLink>{' '}
      </Overline>
      <Columns
        className="JustifyEnd AlignCenter"
        padding={[2, 0]}
        spacing={12}
        smallSpacing={2}
      >
        <ImgLinkWrapper
          href="https://dribbble.com/TanyaTheHuman"
          target="_blank"
        >
          <Img fixed={data.dribble.childImageSharp.fixed} />
        </ImgLinkWrapper>
        <ImgLinkWrapper
          href="https://medium.com/@tanyathehuman"
          target="_blank"
        >
          <Img fixed={data.medium.childImageSharp.fixed} />
        </ImgLinkWrapper>
        <ImgLinkWrapper
          href="https://www.instagram.com/tanya_thehuman/"
          target="_blank"
        >
          <Img fixed={data.instagram.childImageSharp.fixed} />
        </ImgLinkWrapper>
        <ImgLinkWrapper
          href="https://www.linkedin.com/in/tanya-the-human/"
          target="_blank"
        >
          <Img fixed={data.linked.childImageSharp.fixed} />
        </ImgLinkWrapper>
      </Columns>
    </Columns>
  )
}

export default Footer
