import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { validation } from "../utils/validation";
import Button from "./Button";

const Form = ({ formAttributes, formValidation, buttonAttributes }) => {
  console.log("form rendered");
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validation(name, value, formValidation);
    setFormError(error);
    console.log("formData", formData);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {formAttributes.map((field, i) => {
        const value = formData[field.name] || "";
        const error = formError[field.name];
        return (
          <CustomInput {...{ ...field, value, error, handleChange }} key={i} />
        );
      })}
      {buttonAttributes.map((btn, i) => (
        <Button {...{ ...btn, formData, setFormError }} key={i} />
      ))}
    </form>
  );
};

export default Form;
