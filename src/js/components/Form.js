import React from 'react'
import PropTypes from 'prop-types'

import BinaryChoice from './BinaryChoice.js'
import Button from './Button.js'
import {Dropdown, Option} from './Dropdown.js'

import '../../css/Form.css'

export class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: {}
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    let fieldId = 0
    this.children = React.Children.map(this.props.children,
      (child) => {
        const id = 'form-field-' + (fieldId++)
        const {type, value, checked} = child.props
        const newObj = {}
        newObj[id] = {type, value: (type === 'checkbox' || type === 'slider' ? (checked || false) : (value || ''))}
        this.state.fields = Object.assign({}, this.state.fields, newObj)
        return React.cloneElement(child, {handleChange: this.handleFieldChange, id})
      }
    )
  }

  handleFieldChange (id, type, value) {
    const nextState = {}
    nextState[id] = {
      type,
      value
    }
    this.setState({fields: Object.assign({}, this.state.fields, nextState)})
  }

  handleSubmit (e) {
    e.preventDefault()
    try {
      this.props.submit.handler(this.state)
    } catch (err) {
      console.log('No Submit Handler. Error:', err.message)
    }
  }

  render () {
    const {submit} = this.props
    return (
      <form id={this.props.id} className='form'>
        {this.children}
        {submit.type === 'button' && <Button onClick={this.handleSubmit}>Submit</Button>}
        {submit.type === 'primary' && <Button primary onClick={this.handleSubmit}>Submit</Button>}
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
      value: (this.props.value || this.props.checked) || ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    e.persist()
    e.preventDefault()
    this.setState({value: e.target.value || e.target.dataset.value}, () => {
      this.props.handleChange(e.target.id, this.props.type, e.target.value || e.target.dataset.value)
    })
  }

  render () {
    switch (this.props.type) {
      case 'text':
        return <input id={this.props.id} placeholder={this.props.placeholder} onChange={this.handleChange} type='text' value={this.state.value} />
      case 'long-text':
        return <textarea id={this.props.id} placeholder={this.props.placeholder} onChange={this.handleChange} value={this.state.value} />
      case 'checkbox':
      case 'slider':
        return <BinaryChoice checked={typeof this.state.value === 'boolean' ? this.state.value : false} id={this.props.id} onChange={this.handleChange} type={this.props.type} />
      case 'dropdown':
        return (<Dropdown id={this.props.id} value={this.state.value} onChange={this.handleChange}>
          {this.props.options.map(opt => <Option key={opt.value} value={opt.value} text={opt.text} />)}
        </Dropdown>)
    }
  }
}

Field.propTypes = {
  type: PropTypes.oneOf(['text', 'long-text', 'checkbox', 'slider', 'dropdown']).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  options: PropTypes.array
}
