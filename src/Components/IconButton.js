import React from 'react'

const IconButton = ({func, icon, text, cName}) => {
  return (
   <button onClick={func} className={cName}>{icon} {text}</button>
  )
}

export default IconButton