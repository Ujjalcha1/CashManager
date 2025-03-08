import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import {Colors, OpenSansBold} from "../constant";

type ButtonProps = {
  title: string;
};

const Button = ({title}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.box}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.secondary,
    width: "50%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    ...OpenSansBold,
  },
});
