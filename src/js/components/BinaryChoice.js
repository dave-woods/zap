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
    e.persist()
    this.setState({checked: !this.state.checked}, () => {
      try {
        this.props.onChange(e)
      } catch (err) {
        // fail silently
        // console.log('No handler available', err.message)
      }
    })
  }

  render () {
    return (<div onKeyPress={(e) => { if (e.which === 32 || e.which === 13) e.target.click() }} tabIndex='0' data-value={this.state.checked} id={this.props.id} onClick={this.handleClick.bind(this)} className={this.props.type + (this.state.checked ? ' checked' : '')}>
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
