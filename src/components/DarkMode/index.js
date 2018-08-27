import React from 'react'
import { generateTheme } from '../../foundations'
import Theme from '../Theme'

const DarkMode = (props) => (
  <Theme.Provider value={generateTheme({ darkMode: true })} {...props} />
)

export default DarkMode
