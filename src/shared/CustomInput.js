import React from 'react'

const CustomInput = ({error,handleChange,...otherProps}) => {
  return (
    <div>
        <input 
        {...otherProps}
        onChange={(e) => handleChange(e)}
        />
        {
            error && <span>{error}</span>
        }
    </div>
  )
}

export default CustomInput