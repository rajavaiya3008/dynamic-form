import {
  emailValidation,
  passwordValidation,
} from "../utils/validationConstatnt";

export const formAttributes = [
  {
    type: "email",
    name: "email",
    placeholder: "Enter Email",
  },
  {
    type: "text",
    name: "password",
    placeholder: "Enter Password",
  },
];

export const formValidation = {
  email: emailValidation,
  password: passwordValidation,
};
