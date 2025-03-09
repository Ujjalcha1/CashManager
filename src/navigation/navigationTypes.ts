import type {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
};

export type AuthScreenType = NativeStackScreenProps<RootStackParamList, "Auth">;
export type HomeScreenType = NativeStackScreenProps<RootStackParamList, "Home">;
