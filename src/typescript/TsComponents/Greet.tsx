import React from 'react'

type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

const Greet = (props:GreetProps) => {
    const {messageCount = 0, name, isLoggedIn} = props;
  return (
    <div>{
        isLoggedIn ? `Welcome ${name}! You have ${messageCount} unread message.` : `Please log in`
        }</div>
  )
}

export default Greet