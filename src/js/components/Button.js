import React from 'react'
import PropTypes from 'prop-types'

import '../../css/Button.css'

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'info']),
  wiggle: PropTypes.bool,
  primary: PropTypes.bool,
  disabled: PropTypes.bool
}

function Button ({onClick, type = 'default', disabled = false, wiggle, primary, children = '\xa0'}) {
  return <button disabled={disabled} onClick={onClick} className={'button-' + type + (wiggle ? ' wiggle' : '') + (primary ? ' primary' : '')}>{children}</button>
}

export default Button
