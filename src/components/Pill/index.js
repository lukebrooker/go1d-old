import React from 'react'
import View from '../View'
import Text from '../Text'

const Pill = ({
  color = 'faded',
  children
}) => {
  return (
    <View
      display='inline-flex'
      backgroundColor={color}
      backgroundOpacity={color !== 'faded' && 'pill'}
      borderRadius={1}
      paddingX={2}
      paddingY={1}>
      <Text size={1}>{children}</Text>
    </View>
  )
}

Pill.displayName = 'Pill'

export default Pill
