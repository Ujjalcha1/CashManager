import {useNavigation, NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../../navigation/navigationTypes";
import {Formik} from "formik";
import React from "react";
import * as Yup from "yup";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const LoginForm = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const onSubmit = (values: {email: string; password: string}) => {
    console.log("Form Data:", values);
    navigation.navigate("Home");
  };

  return (
    <Formik
      initialValues={{email: "", password: ""}}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({handleSubmit}) => (
        <>
          <Input placeholder="Email" name="email" />
          <Input placeholder="Password" name="password" isPassword />
          <Button title="Log in" onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
