import styled from 'styled-components'
import { colors } from '../utils/colors'

export const MassiveHeading = styled.h1`
  font-style: ${props => props.fontStyle || `normal`};
  /* font-family: Noto Sans; */
  font-weight: normal;
  font-size: 88px;
  line-height: 115.7%;
  color: ${props => props.color || colors.ink};
`

export const Heading = styled.h2`
  /* font-family: Noto Sans; */
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: normal;
  font-size: 64px;
  line-height: 115.7%;
  color: ${props => props.color || colors.ink};
`

export const SubHeading = styled.h3`
  font-family: Noto Serif;
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: normal;
  font-size: 32px;
  line-height: 115.7%;
  color: ${props => props.color || colors.fire};
`
export const Title = styled.h3`
  font-family: Noto Serif;
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: normal;
  font-size: 24px;
  line-height: 115.7%;
  color: ${props => props.color || colors.fire};
`

export const Subtitle = styled.h5`
  /* font-family: Noto Sans; */
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: normal;
  font-size: 24px;
  line-height: 115.7%;
  color: ${props => props.color || colors.ink};
`

export const Overline = styled.p`
  font-style: ${props => props.fontStyle || `normal`};
  font-family: Noto Serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 115.7%;
  color: ${props => props.color || colors.green};
`

export const Body = styled.p`
  font-style: ${props => props.fontStyle || `normal`};
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${props => props.color || colors.ink};
`

export const TextLink = styled.a`
  appearance: none;
  text-decoration: none;
  transition: transform 200ms ease-in-out;
  :hover {
    cursor: pointer;
    color: ${props => props.hoverColor || colors.green};
  }
  color: ${props => props.color || colors.green};
`
