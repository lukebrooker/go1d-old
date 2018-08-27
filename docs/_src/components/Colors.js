import React from 'react'
import Color from './Color'
import { foundations } from '../../../src/'

export const Colors = () => (
  <div>
    {Object.keys(foundations.colors).map((key) => (
      <Color key={key} colorKey={key} color={foundations.colors[key]} />
    ))}
  </div>
)

export default Colors
