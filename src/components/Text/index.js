import React from 'react'
import isUndefined from 'lodash/isUndefined'
import Base from '../Base'
import Theme from '../Theme'

const Text = ({
  element = 'span',
  fontWeight,
  fontFamily,
  fontStyle,
  lineHeight,
  fontSize = 2,
  color,
  css,
  ...props
}) => (
  <Theme.Consumer>
    {({ colors, type, breakpoints, transitions }) => (
      <Base
        element={element}
        css={[
          {
            color: isUndefined(color)
              ? colors.black
              : colors[color] || color,
            fontFamily: fontFamily
              ? type.family[fontFamily]
              : type.family.sansSerif,
            fontStyle: fontStyle,
            fontWeight: fontWeight && type.weight[fontWeight],
            lineHeight: lineHeight && type.leading[lineHeight],
            transition: transitions.subtle,
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            ...Object.keys(breakpoints).reduce((acc, bpKey) => ({
              ...acc,
              [breakpoints[bpKey]]: {
                fontSize: type.scale[bpKey][fontSize]
              }
            }), {})
          },
          css
        ]}
        {...props}
      />
    )}
  </Theme.Consumer>
)

Text.displayName = 'Text'

export default Text
