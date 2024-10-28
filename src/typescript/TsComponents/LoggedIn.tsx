import React, { useState } from 'react'

const LoggedIn = () => {

const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div>
        <button onClick={()=> setIsLoggedIn(true)}>Login</button>
        <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
    
        <div>
            User is {isLoggedIn ? "Logged In" : "Logged Out"}
        </div>
    </div>
  )
}

export default LoggedIn