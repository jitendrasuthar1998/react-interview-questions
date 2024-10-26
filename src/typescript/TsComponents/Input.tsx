import React, { useState } from 'react'

type InputProps = {
    value: string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props:InputProps) => {

    const [inputText, setInputText] = useState(props.value);

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    }

  return (
    <input type="text" value={inputText} onChange={handleInputChange}/>
  )
}

export default Input