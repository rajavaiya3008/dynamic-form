import React from 'react'
import Form from '../shared/Form'
import { formAttributes,formValidation } from '../description/loginForm'
import { validateAllData } from '../utils/validation'

const Login = () => {
    console.log('login rendered')

    const handleSubmit = (formData,setFormError) => {
        const error = validateAllData(formData,formValidation)
        if(Object.keys(error).length){
            setFormError(error)
            return
        }
        console.log('Login Successful')
    }

    const buttonAttributes = [
        {
            name:'Login',
            onClick:handleSubmit
        }
    ]
  return (
    <div>
        <Form {...{formAttributes,formValidation,buttonAttributes}}/>
    </div>
  )
}

export default Login