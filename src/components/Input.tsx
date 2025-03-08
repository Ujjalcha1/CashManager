import {StyleSheet, TextInput, View} from "react-native";
import React from "react";
import {Colors} from "../constant";

type InputProps = {
  placeholder: string;
};

const Input = ({placeholder}: InputProps) => {
  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBox: {
    width: "80%",
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 13,
  },
});
