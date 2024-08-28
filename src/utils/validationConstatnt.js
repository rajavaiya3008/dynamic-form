export const name = 'NAME'
export const email = "EMAIL"
export const password = "PASSWORD"

export const emailValidation = [
    { required: true, message: "Please Enter Email" },
    {
      pattern: /^[a-zA-Z0-9]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/,
      message: "Enter Valid Email",
    },
  ];

export const passwordValidation = [
    { required: true, message: "Please Enter Password" },
    {
        pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        message: "Enter Valid Password"
    }
]

export const nameValidation = [
    { required: true, message: "Please Enter Name" },
    {
        pattern:/^[A-Za-z][A-Za-z0-9_]{7,29}$/,
        message: "Enter Valid Name"
    }
]