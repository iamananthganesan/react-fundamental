import React from 'react'

function FunctionalChildComponent(props) {
  return (
    <div>
      <h2>{props.greetingMessage}</h2>
      <h2>Child Component</h2>
    </div>
  )
}

export default FunctionalChildComponent
