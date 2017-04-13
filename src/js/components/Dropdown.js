import React from 'react'
import PropTypes from 'prop-types'

export class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({value: e.target.value})
    this.props.handleChange(e)
  }

  render () {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option selected value='' disabled />
        {this.props.children}
      </select>
    )
  }
}

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export function Option (props) {
  return <option value={props.value}>{props.text || props.value}</option>
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string
}
