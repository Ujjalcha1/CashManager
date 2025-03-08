import {StatusBar} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({children}: ContainerProps) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export default Container;
