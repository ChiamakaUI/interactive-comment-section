import React from 'react'

const IconButton = ({func, icon, text}) => {
  return (
   <button onClick={func}>{icon} {text}</button>
  )
}

export default IconButton