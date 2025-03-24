import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import {useField} from "formik";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Colors} from "../constant";

type InputProps = {
  name: string;
  placeholder: string;
  isPassword?: boolean;
};

const Input = ({placeholder, name, isPassword}: InputProps) => {
  const [field, meta] = useField(name);
  const [secureText, setSecureText] = useState(isPassword);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={styles.main}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.placeholder}
          value={field.value}
          onChangeText={field.onChange(name)}
          onBlur={field.onBlur(name)}
          style={styles.textInput}
          secureTextEntry={secureText}
        />
        {isPassword && (
          <TouchableOpacity onPress={toggleSecureText}>
            <Ionicons name={secureText ? "eye-off" : "eye"} size={20} />
          </TouchableOpacity>
        )}
      </View>
      {meta.touched && meta.error && (
        <Text style={styles.errorText}>{meta.error}</Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  main: {width: "100%", alignItems: "center", marginVertical: 10},
  inputBox: {
    width: "80%",
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    height: 40,
    color: Colors.black,
  },
  errorText: {
    color: Colors.error,
    fontSize: 14,
    marginTop: 4,
    textAlign: "left",
    width: "80%",
  },
});
