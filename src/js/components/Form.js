import React from 'react'
// import PropTypes from 'prop-types'

import BinaryChoice from './BinaryChoice.js'
import Button from './Button.js'
import {Dropdown, Option} from './Dropdown.js'

import '../../css/Form.css'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formObj: false,
      textValue: '',
      dropdownValue: ''
    }

    this.handleText = this.handleText.bind(this)
    this.handleDropdown = this.handleDropdown.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleText (e) {
    this.setState({textValue: e.target.value})
  }

  handleDropdown (e) {
    this.setState({dropdownValue: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    const sText = document.getElementById('submit-text')
    sText.innerHTML = 'Submitted ' + (this.state.textValue || 'nothing') + ' and ' + (this.state.dropdownValue || 'nothing')
    this.setState({formObj: true})
    setTimeout(() => { sText.innerHTML = '' }, 2000)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <input onChange={this.handleText} value={this.state.textValue} type='text' />
        <BinaryChoice type='checkbox' />
        <Dropdown handleChange={this.handleDropdown}>
          <Option value='one' />
          <Option value='two' text='Two' />
        </Dropdown>
        <Button onClick={this.handleSubmit}>Submit</Button>
        <span id='submit-text' />
      </form>
    )
  }
}
