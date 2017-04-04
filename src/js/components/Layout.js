import React from 'react'

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='main'>
      <h1>Layout Component</h1>
      <p>This is a piece of text</p>
    </div>)
  }
}
