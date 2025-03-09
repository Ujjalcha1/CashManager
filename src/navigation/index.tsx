import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import AuthScreen from "../pages/Auth/AuthScreen";
import HomeScreen from "../pages/Home";
import {RootStackParamList} from "./navigationTypes";
import {Screens} from "../constant";

const Stack = createNativeStackNavigator<RootStackParamList>();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.Auth}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animation: "slide_from_right",
          animationDuration: 300,
        }}>
        <Stack.Screen name={Screens.Auth} component={AuthScreen} />
        <Stack.Screen name={Screens.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
