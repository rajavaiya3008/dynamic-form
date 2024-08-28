import React from 'react'

const Button = ({name,onClick,formData,setFormError}) => {
  return (
    <button
    onClick={() => onClick(formData,setFormError)}
    >{name}</button>
  )
}

export default Button