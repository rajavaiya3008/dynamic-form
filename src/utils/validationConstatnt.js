export const name = "NAME";
export const email = "EMAIL";
export const password = "PASSWORD";

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
    pattern: /^.*[a-z].*$/,
    message: "Enter One Lowercase Later",
  },
  {
    pattern: /^.*[A-Z].*$/,
    message: "Enter One Uppercase Later",
  },
  {
    pattern: /^.*[0-9].*$/,
    message: "Enter One Number",
  },
  {
    length: 6,
    message: "Password Must be 6 char",
  },

  //   {
  //     pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
  //     message: "Enter Valid Password",
  //   },
];

export const nameValidation = [
  { required: true, message: "Please Enter Name" },
  {
    pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
    message: "Enter Valid Name",
  },
];

export const dateValidation = [
  { required: true, message: "Please Select Date" },
  {
    pattern: /^(?:19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    message: "Invalid date format. Please use YYYY-MM-DD.",
  },
  {
    date: Date.now(),
    message: "This Date is the Future Date that is Invalid",
  },
];
