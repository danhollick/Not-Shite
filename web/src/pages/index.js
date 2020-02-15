import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Image from '../components/image'
import SEO from '../components/seo'
import Page from '../components/page'
import { TextLink, MassiveHeading } from '../components/text'
import { Columns, Stack } from '../components/layout'
import { JobList } from '../components/joblist'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profileImage.png" }) {
        childImageSharp {
          fixed(width: 360) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Page>
      <SEO title="Home" />
      <Columns className="AlignCenter">
        <Stack spacing={5} className="JustifyStart">
          <MassiveHeading>
            Oh, hello, <br /> I’m Tanya.
          </MassiveHeading>
          <JobList />
        </Stack>
        <Img
          className="JustifyEnd AlignCenter"
          fixed={data.profileImage.childImageSharp.fixed}
        />
      </Columns>
    </Page>
  )
}

export default IndexPage
