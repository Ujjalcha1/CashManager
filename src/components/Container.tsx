import {StatusBar} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "./Header";
import {Colors} from "../constant";

type ContainerProps = {
  children: React.ReactNode;
  style?: object;
  headerTitle?: string;
};

import {StyleSheet} from "react-native";

const Container = ({children, style, headerTitle}: ContainerProps) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <Header title={headerTitle} />
      {children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
