import React from 'react'

import '../../../assets/styles/Button.css'

Button.propTypes = {
  onClick: React.PropTypes.func,
  type: React.PropTypes.oneOf(['default', 'success', 'warning', 'error', 'info']),
  wiggle: React.PropTypes.bool,
  primary: React.PropTypes.bool
}

function Button ({onClick, type = 'default', wiggle, primary, children = '\xa0'}) {
  return <button onClick={onClick} className={'button-' + type + (wiggle ? ' wiggle' : '') + (primary ? ' primary' : '')}>{children}</button>
}

export default Button
