import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import {Colors, OpenSansBold} from "../constant";

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Button = ({title, onPress, style, textStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.box, style]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
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
    justifyContent: "center",
  },
  buttonText: {
    ...OpenSansBold,
  },
});
