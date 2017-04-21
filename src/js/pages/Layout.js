import React from 'react'

import Counter from '../components/Counter.js'
import Button from '../components/Button.js'
import BinaryChoice from '../components/BinaryChoice.js'
import {Form, Field} from '../components/Form.js'

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit (formState) {
    console.log(formState)
  }

  render () {
    return (<div id='layout' className='main'>
      <h1>Layout Component</h1>
      <p>This is a piece of text</p>
      <Counter />
      <Button />
      <Button>Default</Button>
      <Button type='error' onClick={() => { window.alert('click!') }}>Error</Button>
      <Button disabled type='error' onClick={() => { window.alert('click!') }}>Disabled</Button>
      <Button type='success' onClick={() => { window.alert('click!') }}>Success</Button>
      <Button primary type='warning' onClick={() => { window.alert('click!') }}>Warning</Button>
      <Button type='info' wiggle onClick={() => { window.alert('click!') }}>Info</Button>
      <br />
      <div style={{display: 'flex', alignItems: 'center'}}><BinaryChoice type='checkbox' /> <BinaryChoice type='slider' /></div>
      <br />
      <Form submit={{type: 'button', handler: this.handleFormSubmit}}>
        <Field placeholder='holding' type='text' />
        <Field type='long-text' />
        <Field checked type='checkbox' />
        <Field type='slider' />
        <Field type='dropdown' options={[{value: 'one'}, {value: 'two', text: 'Two'}]} />
      </Form>
    </div>)
  }
}
