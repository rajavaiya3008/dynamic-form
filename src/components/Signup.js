import React from 'react'
import Form from '../shared/Form'
import { formAttributes,formValidation } from '../description/signupForm'
import { validateAllData } from '../utils/validation'

const Signup = () => {

    const handleSubmit = (formData,setFormError) => {
        const error = validateAllData(formData,formValidation)
        if(Object.keys(error).length){
            setFormError(error)
            return
        }
        console.log('Signup Successful')
    }

    const buttonAttributes = [
        {
            name:'Signup',
            onClick:handleSubmit
        }
    ]

  return (
    <div>
        <Form {...{formAttributes,formValidation,buttonAttributes}}/>
    </div>
  )
}

export default Signup