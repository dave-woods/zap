import React from 'react'

function Button (props) {
  return <button onclick={props.onClick} className={props.type || 'defaultBtn'}>{props.children}</button>
}

export default Button
