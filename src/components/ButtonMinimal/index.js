import React from 'react'
import Button from '../Button'
import Theme from '../Theme'
import { darken } from '../../foundations'

const ButtonMinimal = ({
  element = 'button',
  color,
  children,
  css,
  ...props
}) => (
  <Theme.Consumer>
    {({ colors = {} }) => (
      <Button
        color={color}
        css={[
          {
            '&:hover, &:focus': {
              backgroundColor: colors.faded,
              color: darken(colors[color], 0.2)
            },
            '&:active': {
              backgroundColor: colors.muted,
              color: darken(colors[color], 0.3)
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

ButtonMinimal.displayName = 'ButtonMinimal'

export default ButtonMinimal
