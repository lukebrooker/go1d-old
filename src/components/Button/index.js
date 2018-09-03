import React from 'react'
import View from '../View'
import Text from '../Text'
import Theme from '../Theme'

const sizes = {
  sm: 1,
  md: 2,
  lg: 3
}

const Button = ({
  element = 'button',
  size = 'md',
  color = 'subtle',
  backgroundColor = 'lightest',
  children,
  css,
  ...props
}) => (
  <Theme.Consumer>
    {({ colors, type }) => (
      <View
        element={element}
        flexDirection='row'
        alignItems='center'
        paddingY={size === 'lg' ? 3 : 2}
        paddingX={size === 'lg' ? 4 : 3}
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={1}
        css={[
          {
            cursor: 'pointer',
            '&:disabled': {
              opacity: 0.5,
              pointerEvents: 'none'
            }
          },
          css
        ]}
        {...props}
      >
        <Text
          lineHeight='ui'
          fontWeight='bold'
          fontSize={sizes[size]}
          color='inherit'
        >
          {children}
        </Text>
      </View>
    )}
  </Theme.Consumer>
)

Button.displayName = 'Button'

export default Button
