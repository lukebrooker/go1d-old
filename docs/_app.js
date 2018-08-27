// _app.js
import React from 'react'
import {
  // SidebarLayout,
  ScopeProvider
} from '@compositor/x0/components'
import {
  Provider as RebassProvider
} from 'rebass'
import groupBy from 'lodash/groupBy'
import * as systemScope from '../src'
import * as docsScope from './_src/components'
import foundations from '../src/foundations'
import SidebarLayout from './_src/components/SidebarLayout'

const navOrder = [
  '',
  '/foundations',
  '/components',
  '/patterns'
]

const scope = {
  ...systemScope,
  ...docsScope
}

const createNav = routes => {
  const navGrouped = groupBy(routes, (r) => r.dirname)
  const nav = navOrder.reduce((navItems, item) => (
    [...navItems, ...navGrouped[item]]
  ), [])

  return nav.map((item) => (
    !item.props.menuTitle && !item.props.title
      ? item
      : { ...item, name: item.props.menuTitle || item.props.title }
  ))
}

const App = ({
  routes,
  ...props
}) => (
  <ScopeProvider scope={scope}>
    <RebassProvider theme={{
      fonts: {
        sans: foundations.type.family.sansSerif,
        mono: foundations.type.family.code
      },
      fontSizes: foundations.type.scale.lg,
      fontWeights: foundations.type.weight,
      space: foundations.spacing.map((s) => s + 'px'),
      colors: {
        black: foundations.colors.default,
        blue: foundations.colors.accent,
        gray: foundations.colors.soft
      }
    }}>
      <SidebarLayout routes={createNav(routes)} {...props} title='GO1D' />
    </RebassProvider>
  </ScopeProvider>
)

export default App
