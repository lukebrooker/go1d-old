import PropTypes from 'prop-types'
import React from 'react'
import { css as emotion } from 'emotion'

const styleReset = ({
  margin: 0,
  padding: 0,
  textDecoration: 'none',
  color: 'inherit',
  border: 'none',
  textAlign: 'inherit',
  fontWeight: 'inherit',
  appearance: 'none',
  outline: 0
})

const Base = ({
  element: Element = 'div',
  children = '',
  css = {},
  ...props
}) => (
  <Element
    className={emotion(styleReset, css)}
    children={children}
    {...props}
  />
)

Base.propTypes = {
  /**
   * A css object or array of objects that's passed to emotion
   */
  css: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

Base.displayName = 'Base'

export default Base
