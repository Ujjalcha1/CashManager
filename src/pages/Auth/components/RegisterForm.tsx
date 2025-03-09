import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    mobile: Yup.string().required("Mobile number is required!"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const onSubmit = (values: {email: string; password: string}) => {
    console.log("Form Data:", values);
  };

  return (
    <Formik
      initialValues={{name: "", mobile: "", email: "", password: ""}}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({handleSubmit}) => (
        <>
          <Input placeholder="Name" name="name" />
          <Input placeholder="Mobile" name="mobile" />
          <Input placeholder="Email" name="email" />
          <Input placeholder="Password" name="password" isPassword />
          <Button title="Register" onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;
