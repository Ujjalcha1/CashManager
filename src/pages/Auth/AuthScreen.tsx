import {Image, ScrollView, StyleSheet} from "react-native";
import React from "react";
import Container from "../../components/Container";
import {Colors, Images} from "../../constant";
import Input from "../../components/Input";
import Button from "../../components/Button";

const AuthScreen = () => {
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button title="Log in" />
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
});
