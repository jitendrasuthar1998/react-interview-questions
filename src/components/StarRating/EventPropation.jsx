import React from 'react'

const EventPropagation = () => {
  return (
    <div onClick={()=> console.log("event reached to parent div")}>
        <div>
            <button onClick={(e)=> {
                e.stopPropagation();
                console.log("event from button clicked")
            }}>Click</button>
        </div>
    </div>
  )
}

export default EventPropagation