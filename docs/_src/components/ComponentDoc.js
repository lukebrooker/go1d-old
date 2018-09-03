import React from 'react'
import find from 'lodash/find'
import components from '../proptypes.json'
import { Base, View, Text } from '../../../src'

const getDocs = (displayName) => find(Object.values(components), (component) => component.displayName === displayName)

const Prop = ({
  name = '',
  type = 'N/A',
  required = false,
  defaultValue = {},
  description = 'N/A'
}) => (
  <Text element='tr' fontFamily='mono'>
    <Base element='td'>{name}</Base>
    <Base element='td'>{type}</Base>
    <Base element='td'>{required ? 'true' : 'false'}</Base>
    <Base element='td'>{defaultValue.value || 'none'}</Base>
    <Base element='td'>{description}</Base>
  </Text>
)

export const ComponentDoc = ({ component = '' }) => {
  const {
    props = {}
  } = getDocs(component)
  return (
    <View>
      <View marginY={3}>
        <Text element='h3' fontSize={3} fontWeight='bold'>Props & methods</Text>
      </View>
      <Base element='table' display='table'>
        <Base element='tbody'>
          <Base element='tr'>
            <Base element='th'>Name</Base>
            <Base element='th'>Type</Base>
            <Base element='th'>Required</Base>
            <Base element='th'>Default</Base>
            <Base element='th'>Description</Base>
          </Base>
          {Object.keys(props).map((key) => (
            <Prop key={key} name={key} {...props[key]} />
          ))}
        </Base>
      </Base>
    </View>
  )
}

export default ComponentDoc
