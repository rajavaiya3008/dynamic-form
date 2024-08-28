export const validation = (name,value,formValidation) => {
    const validationField = formValidation[name]

    const error = {}

    validationField.some((field) => {
        if(field.required && !value){
            error[name] = field.message;
            return true;
        }
        if(field.pattern && !value.match(field.pattern)){
            error[name] = field.message;
            return true;
        }
        return false
    })

    return error;
}

export const validateAllData = (data,validate) => {

    let error = {};

    for(let key in validate){
        validate[key].some((field) => {
            if(field.required && !data[key]){
                error[key] = field.message;
                return true;
            }
            if(field.pattern && !data[key].match(field.pattern)){
                error[key] = field.message;
                return true;
            }
            return false
        })
    }
    
    return error;
}
