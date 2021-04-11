import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Page from '../components/page'
import { RecentPosts } from '../components/recentPosts'
import { MassiveHeading } from '../components/text'
import { colors } from '../utils/colors'
import { Stack } from '../components/layout'

const SecondPage = () => (
  <Page>
    <SEO title="Work" />
    <Stack className="AlignCenter">
      <MassiveHeading>
        Case studies
        <MassiveHeading as="span" color={colors.fire}>
          .
        </MassiveHeading>
      </MassiveHeading>
      <RecentPosts />
    </Stack>
  </Page>
)

export default SecondPage
