import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Stack, UnstyledLink, below } from './layout'
import { Title } from './text'
import { PostPreview } from './postPreview'

const recentPostsQuery = graphql`
  query RecentPostsQuery {
    posts: allSanityPost(sort: { fields: publishedAt, order: DESC }, limit: 3) {
      nodes {
        title
        slug {
          current
        }
        categories {
          title
        }
        publishedAt(fromNow: true)
        mainImage {
          asset {
            fluid(maxWidth: 336) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

const RecentModule = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: end;
  grid-column-gap: 80px;
  ${below.med`
    grid-template-columns: 1fr;
    grid-row-gap:56px;
  `}
`

export const RecentPosts = ({ className }) => {
  const data = useStaticQuery(recentPostsQuery)
  return (
    <Stack padding={[10, 0]} className={className}>
      <RecentModule>
        {data.posts.nodes.map((post, i) => (
          <UnstyledLink to={`/work/${post.slug.current || post.slug}/`}>
            <PostPreview key={i} delay={i} {...post} />
          </UnstyledLink>
        ))}
      </RecentModule>
    </Stack>
  )
}
