import React from 'react'
import FunctionalChildComponent from './FunctionalChildComponent'

function FunctionalParentComponent(props) {

  const greetMessage = "Hey bro watss up!"
  return (
    <div>
    <h2>Am functional parent component and i would like to send a greeting message to my child component</h2>
      <FunctionalChildComponent greetingMessage={greetMessage}/>
    </div>
  )
}

export default FunctionalParentComponent
