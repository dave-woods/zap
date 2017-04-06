import React from 'react'

import Counter from '../components/Counter.js'
import Button from '../components/Button.js'

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div id='layout' className='main'>
      <h1>Layout Component</h1>
      <p>This is a piece of text</p>
      <Counter />
      <Button></Button>
      <Button>Default</Button>
      <Button type='error' onClick={() => { window.alert('click!') }}>Error</Button>
      <Button type='success' onClick={() => { window.alert('click!') }}>Success</Button>
      <Button type='warning' onClick={() => { window.alert('click!') }}>Warning</Button>
      <Button type='info' wiggle onClick={() => { window.alert('click!') }}>Info</Button>
    </div>)
  }
}
