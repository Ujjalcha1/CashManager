import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Colors, OpenSansBold, Screens} from "../constant";

type HeaderProps = {
  title?: string;
};

const Header = ({title}: HeaderProps) => {
  const route = useRoute();
  const routeName = route.name;
  const navigate = useNavigation();

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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate.goBack()}>
            <Ionicons
              name="chevron-back"
              size={25}
              color={Colors.white}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>{title ?? "Cash Manager"}</Text>
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
