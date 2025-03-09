import React, {useState} from "react";
import {Image, ScrollView, StyleSheet, Text} from "react-native";
import Container from "../../components/Container";

import {Colors, Images, RobotoMedium} from "../../constant";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">
        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
        {isLogin ? <LoginForm /> : <RegisterForm />}
        {isLogin ? (
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text style={styles.link} onPress={() => setIsLogin(false)}>
              Register
            </Text>
          </Text>
        ) : (
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text style={styles.link} onPress={() => setIsLogin(true)}>
              Login
            </Text>
          </Text>
        )}
      </ScrollView>
    </Container>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  link: {color: Colors.secondary, cursor: "pointer"},
  footerText: {
    ...RobotoMedium,
    color: Colors.white,
  },
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
