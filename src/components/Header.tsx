import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useRoute} from "@react-navigation/native";
import {Colors, OpenSansBold, Screens} from "../constant";

const Header = () => {
  const route = useRoute();
  const routeName = route.name;

  return (
    routeName !== Screens.Auth && (
      <View style={styles.container}>
        {routeName === Screens.Home ? (
          <Ionicons
            name="menu"
            size={25}
            color={Colors.white}
            style={styles.icon}
          />
        ) : (
          <Ionicons
            name="chevron-back"
            size={25}
            color={Colors.white}
            style={styles.icon}
          />
        )}
        <Text style={styles.headerText}>Cash Manager</Text>
      </View>
    )
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: {marginLeft: 10},
  container: {
    height: 60,
    backgroundColor: Colors.primary,
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    ...OpenSansBold,
    color: Colors.white,
    fontSize: 18,
    marginLeft: 10,
  },
});
