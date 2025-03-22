import type {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Cash: {
    title: string;
    type: number;
  };
};

export type AuthScreenType = NativeStackScreenProps<RootStackParamList, "Auth">;
export type HomeScreenType = NativeStackScreenProps<RootStackParamList, "Home">;
export type CashScreenType = NativeStackScreenProps<RootStackParamList, "Cash">;
