import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Image from '../components/image'
import SEO from '../components/seo'
import Page from '../components/page'
import { TextLink, MassiveHeading } from '../components/text'
import { Columns, Stack, below } from '../components/layout'
import { JobList } from '../components/joblist'
import { colors } from '../utils/colors'

const StyledImage = styled(Img)`
  align-self: center;
  justify-self: end;
  width: 360px;
  ${below.med`
    grid-row: 1;
    justify-self: center;
    // width:  300px;
    margin: 40px 0px;
  `}
`

const StyledStack = styled(Stack)`
  justify-self: start;
  justify-items: start;
  ${below.med`
  justify-items: stretch;
    justify-self: stretch;
  `}
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profileImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 360) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Page>
      <SEO title="Home" description="Welcome to my portfolio" />
      <Columns smallCount={1} spacing={20} className="AlignCenter">
        <StyledStack spacing={8} smallSpacing={10}>
          <MassiveHeading>
            Oh, hello, I’m Tanya
            <MassiveHeading as="span" color={colors.fire}>
              .
            </MassiveHeading>
          </MassiveHeading>
          <JobList className="JustifyStretch" />
        </StyledStack>
        <StyledImage fluid={data.profileImage.childImageSharp.fluid} />
      </Columns>
    </Page>
  )
}

export default IndexPage
