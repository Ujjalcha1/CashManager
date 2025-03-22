import React, {ReactNode} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";

type CardProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const Card = ({children, style}: CardProps) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
