import React from 'react'
import BasePortableText from '@sanity/block-content-to-react'
import styled from 'styled-components'
import serializers from './serializers'
import { colors } from '../utils/colors'

const StyledPortableText = styled(BasePortableText)`
  display: grid;
  grid-row-gap: 24px;
  max-width: 680px;
  justify-content: stretch;
  h1 {
    font-style: ${props => props.fontStyle || `normal`};
    font-weight: normal;
    font-size: 64px;
    line-height: 115.7%;
    color: ${colors.ink};
  }
  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 115.7%;
    color: ${colors.ink};
  }
  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 115.7%;
    color: ${props => props.color || colors.fire};
  }
  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 100%;
    color: ${props => props.color || colors.ink};
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: ${colors.ink};
  }

  blockquote {
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    text-align: left;
    border-left: 2px solid ${colors.light_purplish};
    padding-left: 24px;
    color: ${colors.medium_grey};
  }

  ul {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: ${colors.ink};
    li:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  ol {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: ${colors.ink};
    li:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.green};
    transition: background-color 200ms ease-in-out;
    :hover {
      color: ${colors.fire};
    }
    :visited {
      color: ${colors.green};
    }
  }
`

const PortableText = ({ blocks }) => (
  <StyledPortableText
    blocks={blocks}
    serializers={serializers}
    // TODO: put into .env files
    dataset="production"
    projectId="h2w4qpx8"
  />
)

export default PortableText
