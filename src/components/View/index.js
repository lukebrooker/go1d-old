import React from 'react'
import PropTypes from 'prop-types'
import isUndefined from 'lodash/isUndefined'
import Base from '../Base'
import Theme from '../Theme'

const applySpacing = (spacing = [], space) => {
  if (isUndefined(space)) {
    return
  }
  if (spacing[space]) {
    return spacing[space]
  }
  if (spacing[Math.abs(space)]) {
    return (spacing[Math.abs(space)] * -1)
  }
  if (space > spacing[spacing.length - 1] || Math.abs(space) > spacing[spacing.length - 1]) {
    return space
  }
  return console.error('Please use spacing scale for value smaller than ' + spacing[spacing.length - 1])
}

const View = ({
  element = 'div',
  display = 'flex',
  flexDirection = 'column',
  flexWrap,
  flex = '0 0 auto',
  alignItems,
  justifyContent,
  position,
  // Reset margins by default
  margin = 0,
  marginX = margin,
  marginY = margin,
  marginTop = marginY,
  marginBottom = marginY,
  marginRight = marginX,
  marginLeft = marginX,
  padding,
  paddingX = padding,
  paddingY = padding,
  paddingTop = paddingY,
  paddingBottom = paddingY,
  paddingRight = paddingX,
  paddingLeft = paddingX,
  color,
  backgroundColor,
  borderRadius,
  width,
  maxWidth,
  zIndex,
  css = {},
  ...props
}) => (
  <Theme.Consumer>
    {({ spacing: s, colors, transitions }) => (
      <Base
        element={element}
        css={[
          {
            display,
            alignItems,
            justifyContent,
            flexDirection,
            flexWrap,
            flex,
            position,
            width,
            maxWidth,
            zIndex,
            marginTop: applySpacing(s, marginTop),
            marginBottom: applySpacing(s, marginBottom),
            marginRight: applySpacing(s, marginRight),
            marginLeft: applySpacing(s, marginLeft),
            paddingTop: applySpacing(s, paddingTop),
            paddingBottom: applySpacing(s, paddingBottom),
            paddingRight: applySpacing(s, paddingRight),
            paddingLeft: applySpacing(s, paddingLeft),
            // fix flexbox bugs
            minHeight: 0,
            minWidth: 0,
            color: colors[color],
            backgroundColor: colors[backgroundColor],
            borderRadius: s[borderRadius],
            transition: transitions.subtle
          },
          css
        ]}
        {...props}
      />
    )}
  </Theme.Consumer>
)

View.propTypes = {
  /**
   * Set the direction of flexbox for the view
   */
  flexDirection: PropTypes.string
}

View.displayName = 'View'

export default View
