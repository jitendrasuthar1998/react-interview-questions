/* eslint-disable react/prop-types */
import React from 'react'

const Post = ({postData}) => {
const {userId, id, title, completed} = postData;
  return (
    <div style={{border:"1px solid red", height:200, width:300}} key={id}>
        <p>User Id: {userId}</p>
        <p>Title : {title}</p>
        <p>Completed : {completed ? "Yes" : "No"}</p>
    </div>
  )
}

export default Post