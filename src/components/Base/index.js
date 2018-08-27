import PropTypes from 'prop-types'
import React from 'react'
import { css as emotion } from 'emotion'

const Base = ({
  element: Element = 'div',
  children = '',
  css = {},
  ...props
}) => (
  <Element
    className={emotion(css)}
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
