import React from 'react'
import PropTypes from 'prop-types'

import BinaryChoice from './BinaryChoice.js'
import Button from './Button.js'
// import {Dropdown, Option} from './Dropdown.js'

import '../../css/Form.css'

export class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.handleFieldChange = this.handleFieldChange.bind(this)
  }

  handleFieldChange (e) {
    const nextState = {}
    // classlist is updated after this function
    nextState[e.target.id] = e.target.value || !e.target.classList.contains('checked')
    this.setState(nextState)
  }

  render () {
    const {submit} = this.props
    let fieldId = 0
    const newChildren = React.Children.map(this.props.children,
      (child) => {
        const id = 'field-' + (fieldId++)
        return React.cloneElement(child, {handleChange: this.handleFieldChange, id})
      }
    )

    return (
      <form className='form'>
        {newChildren}
        {submit.type === 'button' && <Button onClick={submit.handler}>Submit</Button>}
        {submit.type === 'primary' && <Button primary onClick={submit.handler}>Submit</Button>}
      </form>
    )
  }
}

Form.propTypes = {
  submit: PropTypes.shape({
    type: PropTypes.oneOf(['button', 'primary', 'none']),
    handler: PropTypes.func.isRequired
  })
}

export class Field extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    switch (this.props.type) {
      case 'text':
        return <input id={this.props.id} onChange={this.props.handleChange} type='text' />
      case 'long-text':
        return <textarea id={this.props.id} onChange={this.props.handleChange} />
      case 'checkbox':
      case 'slider':
        return <BinaryChoice id={this.props.id} onChange={this.props.handleChange} type={this.props.type} />
    }
  }
}

Field.propTypes = {
  type: PropTypes.oneOf(['text', 'long-text', 'checkbox', 'slider', 'submit']).isRequired
}
