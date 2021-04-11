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
const StyledSVG = styled.svg`
  transition: transform 200ms ease-in-out;
`

const LinkWrapper = styled.a`
  padding: 16px;
  background: #ffffff;
  justify-self: stretch;
  box-shadow: 0px 4px 20px rgba(193, 164, 235, 0.3);
  border-radius: 16px;
  appearance: none;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  :hover {
    cursor: pointer;
    ${StyledSVG} {
      transform: scale(1.1);
    }
    /* background-color: ${colors.off_white}; */
    box-shadow: 0px 6px 36px rgba(193, 164, 235, 0.4);
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
        {/* <StyledImg
          className="AlignCenter JustifyEnd"
          fixed={data.arrow.childImageSharp.fixed}
        /> */}
        <StyledSVG
          className="AlignCenter JustifyEnd"
          width="10"
          height="19"
          viewBox="0 0 10 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L9.00001 9.50001L1 17.5"
            stroke={colors.green}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </StyledSVG>
      </AnimatedJob>
    </LinkWrapper>
  )
}
