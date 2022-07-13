import React from 'react'

const Button = ({inner, func}) => {
  return (
    <button onClick={func}>{inner}</button>
  )
}

export default Button