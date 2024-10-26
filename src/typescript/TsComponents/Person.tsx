import React from 'react'
import { PersonProps } from "../types/Person.types"


const Person = (props:PersonProps) => {
  return (
    <div>Person name: {props.name.first}</div>
  )
}

export default Person