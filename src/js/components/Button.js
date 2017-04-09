import React from 'react'
import PropTypes from 'prop-types'

import '../../../assets/styles/Button.css'

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'info']),
  wiggle: PropTypes.bool,
  primary: PropTypes.bool
}

function Button ({onClick, type = 'default', wiggle, primary, children = '\xa0'}) {
  return <button onClick={onClick} className={'button-' + type + (wiggle ? ' wiggle' : '') + (primary ? ' primary' : '')}>{children}</button>
}

export default Button
