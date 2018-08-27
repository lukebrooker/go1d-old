import React from 'react'
import colorable from 'colorable'
import head from 'lodash/head'
import View from '../../../src/components/View'
import Text from '../../../src/components/Text'
import Theme from '../../../src/components/Theme'
import { themedGreys, colors } from '../../../src/foundations'

export const Color = ({
  color,
  background = 'light',
  ...props = {}
}) => {
  const a11y = head(colorable({ color: props.color, ...themedGreys.lightMode, accent: colors.accent }, { compact: true }))
  return (
    <Theme.Consumer>
      {({ spacing }) => (
        <View css={{
          backgroundColor: color,
          padding: spacing[4],
          marginBottom: spacing[6],
          minHeight: spacing[9],
          width: spacing[11],
          maxWidth: '100%',
          borderRadius: 4
        }}>
          <Text fontSize={4}>{props.colorKey} | {props.color}</Text>
          {a11y.combinations.map((color) => (
            <div>
              <Text color={color.name}>{color.name} - AA: {color.accessibility.aa ? 'Pass' : 'Fail'} | </Text>
              <Text color={color.name} fontSize={3}>AA Large:{color.accessibility.aaLarge ? 'Pass' : 'Fail'}</Text>
              <Text color={color.name} fontSize={3}>AAA:{color.accessibility.aaa ? 'Pass' : 'Fail'}</Text>
              <Text color={color.name} fontSize={3}>AAA Large:{color.accessibility.aaaLarge ? 'Pass' : 'Fail'}</Text>
            </div>
          ))}
        </View>
      )}
    </Theme.Consumer>
  )
}

export default Color
