import React from 'react'

const Button = ({type,children}) => {
  return (
    <button className={`btn ${type === 'secondary' ? 'btn--secondary' : ""}`}>{children}</button>
  )
}

export default Button