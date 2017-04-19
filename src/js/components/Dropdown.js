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
    e.persist()
    this.setState({value: e.target.value}, () => {
      this.props.onChange(e)
    })
  }

  render () {
    return (
      <select id={this.props.id} value={this.state.value} onChange={this.handleChange} className='dropdown'>
        <option value='' disabled />
        {this.props.children}
      </select>
    )
  }
}

Dropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string
}

export function Option (props) {
  return <option value={props.value}>{props.text || props.value}</option>
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string
}
