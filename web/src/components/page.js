import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../utils/colors'
import Header from './header'
import Footer from './footer'
import { below } from './layout'

const GlobalStyles = createGlobalStyle`


.fadeInUpSlight{
  animation-name: fadeInUpSlight;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-duration: 800ms;
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
.AlignEnd {
    align-self: end;
  }
  .AlignCenter {
    align-self: center;
  }
  .AlignStart {
    align-self: start;
  }
  .AligntStretch {
    align-self: stretch;
  }
  .JustifyEnd {
    justify-self: end;
  }
  .JustifyCenter {
    justify-self: center;
  }
  .JustifyStart {
    justify-self: start;
  }
  .JustifyStretch {
    justify-self: stretch;
  }
  html {
    scroll-behavior: smooth
  }
  body {
    font: 400 18px 'Noto Sans', sans-serif;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  p, span, a, h1, h2, h3, h4, h5, h6, form, fieldset, legend, label, input {
        margin:0px;
        padding: 0;
    }
`

const StyledPage = styled.div`
  background-color: ${colors.background};
  display: grid;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0px 40px;
  overflow-x: hidden;
  box-sizing: border-box;
  ${below.med`
    padding: 0px 16px;
    `}
`

const PageWrapper = styled.div`
  display: grid;
  justify-self: center;
  max-width: 1120px;
  width: 100%;
  grid-template-rows: auto 1fr auto;
`

const Main = styled.main`
  display: grid;
  row-gap: 140px;
`

const Page = ({ children }) => (
  <StyledPage>
    <GlobalStyles />
    <PageWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </PageWrapper>
  </StyledPage>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
