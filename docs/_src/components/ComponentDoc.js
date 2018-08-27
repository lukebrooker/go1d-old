import React from 'react'
import find from 'lodash/find'
import components from '../proptypes.json'

const getType = (displayName) => find(components, (component) => component.displayName === displayName)

export const ComponentDoc = ({ component = '' }) => (
  <div>
    Parsed {getType}
  </div>
)

export default ComponentDoc
