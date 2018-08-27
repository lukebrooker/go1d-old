import React from 'react'
import PropTypes from 'prop-types'
import { withReducer } from 'recompose'
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom'
import { View, Text, Theme, DarkMode } from '../../../src/'

const unhyphenate = str => str.replace(/(\w)(-)(\w)/g, '$1 $3')
const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
const format = str => upperFirst(unhyphenate(str))
const depthPad = ({ to = '' }) =>
  (1 + to.split('/').filter(s => s.length).slice(1).length) * 16

const Layout = (props) => (
  <View
    {...props}
    css={{
      '@media (min-width: 760px)': {
        flexDirection: 'row'
      }
    }}
  />
)

const Sidebar = (props) => (
  <DarkMode>
    <Theme.Consumer>
      {({ colors, breakpoints }) => (
        <View
          paddingY={4}
          backgroundColor='background'
          {...props}
          css={{
            minWidth: 280,
            color: colors.subtle,
            [breakpoints.md]: {
              position: 'fixed',
              height: '100vh',
              overflow: 'auto',
              overflowX: 'hidden'
            }
          }}
        />
      )}
    </Theme.Consumer>
  </DarkMode>
)

const Link = (props) => (
  <Theme.Consumer>
    {({ colors, spacing }) => (
      <View
        {...props}
        element={RouterNavLink}
        flexDirection='row'
        alignItems='center'
        paddingRight={6}
        paddingY={2}
        css={{
          paddingLeft: depthPad(props) + 12,
          borderLeft: '4px solid',
          borderColor: 'transparent',
          color: colors.faded,
          '&::before': {
            content: '""',
            position: 'absolute',
            height: spacing[2],
            width: spacing[2],
            borderRadius: spacing[1],
            marginLeft: `-${spacing[3]}`,
            backgroundColor: 'transparent'
          },
          '&:hover': {
            backgroundColor: colors.soft,
            '&::before': {
              backgroundColor: colors.muted
            }
          },
          '&.active, &:focus': {
            color: colors.contrast,
            outline: 'none',
            '&::before': {
              backgroundColor: colors.accent
            }
          }
        }}
      />
    )}
  </Theme.Consumer>
)

const Nav = ({
  routes = [],
  handleMenuToggle,
  menuOpen,
  ...props
}) => (
  <View element='ul' {...props}>
    {routes.map(route => (
      <View element='li' key={route.key}>
        {/^https?:\/\//.test(route.path)
          ? <RouterNavLink pl={3} href={route.path}>
            {route.name}
          </RouterNavLink>
          : <Link to={route.path} exact>
            {format(route.name)}
          </Link>}
      </View>
    ))}
  </View>
)

const Main = (props) => (
  <View
    {...props}
    paddingLeft={280}
    width='100%'
  />
)

const Hero = ({
  title = '',
  lead = '',
  ...props
}) => (
  <View
    backgroundColor='soft'
  >
    <View
      paddingTop={8}
      paddingBottom={7}
      paddingX={4}
      marginX='auto'
      width='100%'
      css={{
        maxWidth: 768
      }}
    >
      <View marginBottom={3}>
        <Text
          element='h1'
          fontSize={6}
          fontWeight='bold'
          color='default'
          lineHeight='display'
        >
          {title}
        </Text>
      </View>
      <Text
        element='p'
        fontSize={3}
        color='subtle'
        lineHeight='prose'
      >
        {lead}
      </Text>
    </View>
  </View>
)

const MaxWidth = (props) => (
  <View
    {...props}
    width='100%'
    marginX='auto'
    paddingX={4}
    paddingBottom={5}
    css={{
      maxWidth: 768
    }}
  />
)

const SidebarTitles = (props) => (
  <View
    {...props}
    paddingX={5}
    paddingTop={3}
    paddingBottom={5}
  />
)

const SidebarTitle = (props) => (
  <View marginBottom={2}>
    <Text
      element='h2'
      fontSize={3}
      fontWeight='bold'
      color='contrast'
      lineHeight='display'
    >
      GO1D
    </Text>
  </View>
)

const Content = (props) => (
  <Theme.Consumer>
    {({ colors, type }) => (
      <View
        paddingY={6}
        css={{
          color: colors.default,
          fontSize: type.scale[3]
        }}
        {...props}
      />
    )}
  </Theme.Consumer>
)

const PrevNextLink = ({ title, path, name = '' }) => (
  <View element={RouterLink} to={path}>
    <Text color='subtle' fontSize={2}>{title}</Text>
    <View marginTop={2}>
      <Text fontSize={3} fontWeight='bold'>
        {format(name)}
      </Text>
    </View>
  </View>
)

const Pagination = ({ previous, next }) => (
  <View flexDirection='row' justifyContent='space-between'>
    {previous &&
      <PrevNextLink
        title='Previous'
        path={previous.path}
        name={previous.name}
      />
    }
    {next &&
      <PrevNextLink
        title='Next'
        path={next.path}
        name={next.name}
      />
    }
  </View>
)

const SidebarLayout = ({
  routes = [],
  children,
  route,
  title = 'GO1D',
  logo,
  menuOpen = false,
  handleMenuToggle
}) => {
  const opts = route ? route.props : {}
  if (opts.layout === false) return children
  const Wrapper = opts.fullWidth ? React.Fragment : MaxWidth

  const index = routes.findIndex(r => r.path === route.path)
  const pagination = {
    previous: routes[index - 1],
    next: routes[index + 1]
  }

  return (
    <Layout>
      <Sidebar open={menuOpen} onClick={handleMenuToggle}>
        <SidebarTitles>
          <SidebarTitle>GO1D</SidebarTitle>
          <Text element='p' fontSize={1} color='subtle'>GO1 Design System</Text>
        </SidebarTitles>
        <Nav
          title={title}
          logo={logo}
          routes={routes}
          handleMenuToggle={handleMenuToggle}
          menuOpen={menuOpen}
        />
      </Sidebar>
      <Main tabIndex={menuOpen ? -1 : undefined}>
        <Hero {...opts} />
        <Wrapper>
          <Content>
            {children}
          </Content>
          {!opts.hidePagination && <Pagination {...pagination} />}
        </Wrapper>
      </Main>
    </Layout>
  )
}

SidebarLayout.propTypes = {
  routes: PropTypes.array.isRequired
}

export default withReducer(
  'menuOpen',
  'handleMenuToggle',
  menuOpen => !menuOpen,
  false
)(SidebarLayout)
