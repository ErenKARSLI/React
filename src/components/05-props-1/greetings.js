import React from 'react'
import Welcome from './welcome'
import "./welcome.scss"

const Greetings = () => {
  return (
    <div>
        <h1>Props</h1>
        <Welcome firstName="Ali" lastName= " Gel"/>
        <Welcome firstName="Veli" lastName=" Gel"/>

    </div>
  )
}

export default Greetings