import React from 'react'
import useWindowResize from "../hooks/useWindowResize"

const WindowResize = () => {

const windowSize = useWindowResize();

  return (
    <div>
        <h1>Height:{windowSize.height}</h1>
        <h1>Width:{windowSize.width}</h1>
    </div>
  )
}

export default WindowResize