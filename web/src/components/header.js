import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import { Columns, below } from './layout'

const NavLink = styled(Link)`
  font-family: Noto Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-decoration: none;
  appearance: none;
  color: ${props => props.color || colors.ink};
  transition: color ease-in-out 200ms;
  transition: scale ease-in-out 200ms;
  :hover {
    cursor: pointer;
    color: ${colors.green};
  }
  :active {
    cursor: pointer;
    color: ${colors.fire};
    transform: scale(0.99);
    transform-origin: left;
  }
`
const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto auto;
  align-self: start;
  padding: 24px 0px;
  grid-column-gap: 16px;
  .active {
    color: ${colors.fire};
  }
  ${below.med`
  padding: 16px 0px;
  `}
`

const Header = () => (
  <Nav>
    <NavLink
      // color={colors.fire}
      className="JustifyStart"
      activeClassName="active"
      to="/"
    >
      not shite.
    </NavLink>

    <NavLink
      activeClassName="active"
      className="JustifyEnd"
      partiallyActive
      to="/work/"
    >
      work.
    </NavLink>
  </Nav>
)

Header.propTypes = {}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
