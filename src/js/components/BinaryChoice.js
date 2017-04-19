import React from 'react'
import PropTypes from 'prop-types'

import '../../css/BinaryChoice.css'

export default class BinaryChoice extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: this.props.checked || false
    }
  }

  handleClick (e) {
    this.setState(prevState => {
      return {checked: !prevState.checked}
    })
    this.props.onChange(e)
  }

  render () {
    return (<div id={this.props.id} onClick={this.handleClick.bind(this)} className={this.props.type + (this.state.checked ? ' checked' : '')}>
      <div />
    </div>)
  }
}

BinaryChoice.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'slider']).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string
}
