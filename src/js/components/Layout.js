import React from 'react'

import Counter from './Counter.js'
import Counter2 from './Counter2.js'
import Button from './Button.js'

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='main'>
      <h1>Layout Component</h1>
      <p>This is a piece of text</p>
      <Counter />
      <Counter2 />
      <Button>Default</Button>
      <Button type='error' onClick={() => { window.alert('click!') }}>Error</Button>
      <Button type='success' onClick={() => { window.alert('click!') }}>Success</Button>
      <Button type='warning' onClick={() => { window.alert('click!') }}>Warning</Button>
      <Button type='info' wiggle onClick={() => { window.alert('click!') }}>Info</Button>
    </div>)
  }
}
