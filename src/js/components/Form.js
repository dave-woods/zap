import React from 'react'
// import PropTypes from 'prop-types'

import BinaryChoice from './BinaryChoice.js'
import Button from './Button.js'

import '../../css/Form.css'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formObj: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    this.setState({formObj: true})
  }

  render () {
    return (
      <div className='form'>
        <input type='text' /><BinaryChoice type='checkbox' />
        <Button onClick={this.handleSubmit}>Submit</Button>
        { this.state.formObj && <span>Submitted!</span> }
      </div>
    )
  }
}
