import React from 'react'

// union type
// status can only be one of them (loading, success, error)

type StatusProps = {
    status: "loading" | "success" | "error";
}

const Status = (props:StatusProps) => {

    switch(props.status){
        case "loading":
            return <h1>Loading..</h1>;
        case "success":
            return <h1>Success!</h1>;
        case "error":
            return <h1>Error!</h1>
        default:
            return <h1>Error not recognized.</h1>
    }


  return (
    <div>Status</div>
  )
}

export default Status