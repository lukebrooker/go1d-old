import React from 'react'
import Button from '../Button'
import Theme from '../Theme'
import { isDark } from '../../foundations'

const textColor = {
  accent: 'background',
  danger: 'background',
  background: 'subtle'
}

const getTextColor = (color, colors) => (
  (textColor[color] || isDark(colors[color]))
)

const ButtonFilled = ({
  element = 'button',
  color = 'background',
  children,
  css,
  ...props
}) => (
  <Theme.Consumer>
    {({ colors = {}, shadows }) => (
      <Button
        backgroundColor={color}
        color={getTextColor(color, colors)}
        css={[
          {
            background: `${colors.gradients.warmOverlay}, ${colors[color]}`,
            boxShadow: shadows.soft,
            textShadow: getTextColor(color, colors) === 'background' && shadows.text,
            '&:hover, &:focus': {
              background: `${colors.gradients.lightWarmOverlay}, ${colors[color]}`,
              boxShadow: shadows.strong,
              transform: 'translateY(-1px)'
            },
            '&:active': {
              background: `${colors.gradients.darkWarmOverlay}, ${colors[color]}`,
              boxShadow: shadows.crisp,
              transform: 'translateY(1px)'
            }
          },
          css
        ]}
        {...props}
      >
        {children}
      </Button>
    )}
  </Theme.Consumer>
)

ButtonFilled.displayName = 'ButtonFilled'

export default ButtonFilled
