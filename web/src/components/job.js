import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Stack, Columns } from './layout'
import { Title, Subtitle, TextLink, Overline } from './text'
import { colors } from '../utils/colors'

const AnimatedJob = styled(Columns)`
  animation-name: fadeInUpSlight;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-duration: 800ms;
  animation-fill-mode: both;
  animation-delay: ${props => `${props.delay * 150}ms`};
`
const StyledImg = styled(Img)`
  transition: transform 200ms ease-in-out;
`

const LinkWrapper = styled.a`
  padding: 8px;
  appearance: none;
  text-decoration: none;
  border-radius: 4px;
  transition: transform 200ms ease-in-out;
  :hover {
    cursor: pointer;
    ${StyledImg} {
      transform: scale(1.1);
    }
    background-color: ${colors.off_white};
  }
`

export const Job = ({
  title,
  place,
  description,
  url,
  startDate,
  endDate = 'present',
  className,
  delay,
}) => {
  const data = useStaticQuery(graphql`
    query {
      arrow: file(relativePath: { eq: "Arrow.png" }) {
        childImageSharp {
          fixed(width: 16) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <LinkWrapper href={url} target="_blank">
      <AnimatedJob delay={delay} spacing={3} className={className}>
        <Stack>
          <Overline color={colors.fire}>{description}</Overline>
          <Subtitle>
            {title} at {/* <Subtitle as="span" color={colors.green}> */}
            {place}
            {/* </Subtitle> */}
          </Subtitle>
        </Stack>
        <StyledImg
          className="AlignCenter JustifyEnd"
          fixed={data.arrow.childImageSharp.fixed}
        />
      </AnimatedJob>
    </LinkWrapper>
  )
}
