import React from 'react'

export default class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      interval: undefined
    }
  }

  componentDidMount () {
    let interval = setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
    this.setState({interval})
  }

  componentWillUnmount () {
    clearInterval(this.state.interval)
  }

  render () {
    return <p>{this.state.count} seconds since launch</p>
  }
}
