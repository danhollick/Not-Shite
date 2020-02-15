import styled from 'styled-components'
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Page from '../components/page'
import SEO from '../components/seo'
import { Heading, MassiveHeading, Title } from '../components/text'
import { Stack, UnstyledLink, below } from '../components/layout'
import PortableText from '../components/portableText'
import { colors } from '../utils/colors'
import { PostPreview } from '../components/postPreview'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        asset {
          url
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      title
      description
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`


const CaseStudytemplate = props => {
  const { data, errors} = props
  const post = data && data.post
  return (
    // <Page>
    //   {errors && <SEO title="GraphQL Error" />}

    //   {post && (
    //     <SEO
    //       title={post.title || 'Untitled'}
    //       description={JSON.stringify(post.description)}
    //       image={post.mainImage.asset.url}
    //     />
    //   )}
    //   {post && <BlogPost {...post} />}
    // </Page>
  )
}

export default CaseStudytemplate
