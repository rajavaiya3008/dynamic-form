import { emailValidation, nameValidation, passwordValidation } from "../utils/validationConstatnt";

export const formAttributes = [
  {
    type: "text",
    name: "name",
    placeholder: "Enter Name",
  },
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
    name:nameValidation,
    email:emailValidation,
    password:passwordValidation
}