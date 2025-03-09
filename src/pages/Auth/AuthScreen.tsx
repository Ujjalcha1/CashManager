import {Formik} from "formik";
import React from "react";
import {Image, ScrollView, StyleSheet} from "react-native";
import * as Yup from "yup";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import {Colors, Images} from "../../constant";

const AuthScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const onSubmit = (values: {email: string; password: string}) => {
    console.log("Form Data:", values);
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">
        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
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
      </ScrollView>
    </Container>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
