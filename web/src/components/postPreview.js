import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Stack, HoverWrapper } from './layout'
import { colors } from '../utils/colors'
import { Title, Subtitle, Overline } from './text'

const StyledImg = styled(Img)`
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`

const PostContainer = styled.div`
  height: 100%;
  transition: transform ease-in-out 200ms;
  animation-name: fadeInUpSlight;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-duration: 800ms;
  animation-fill-mode: both;
  animation-delay: ${props => `${props.delay * 150}ms`};
  :hover {
    transform: scale(1.05);
  }
  @keyframes fadeInUpSlight {
    from {
      opacity: 0;
      transform: translate3d(0, 5%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

export const PostPreview = ({
  title,
  mainImage,
  categories,
  publishedAt,
  className,
  delay = 0,
}) => (
  <HoverWrapper>
    <PostContainer delay={delay}>
      <Stack>
        <StyledImg fluid={mainImage.asset.fluid} className={className} />
        <Stack className="AlignEnd" padding={[2, 0]}>
          <Overline>{categories[0].title}</Overline>
          <Subtitle>{title}</Subtitle>
        </Stack>
      </Stack>
    </PostContainer>
  </HoverWrapper>
)
