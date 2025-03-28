import {Dimensions, StyleProp} from "react-native";
import {RootStackParamList} from "../navigation/navigationTypes";

// Colors
export const Colors = {
  primary: "#033751",
  secondary: "#FFC700",
  black: "#000000",
  white: "#FFFFFF",
  lightWhite: "#DADBDD",
  gray: "#9DA3B4",
  placeholder: "#9DA3B4",
  error: "#FF0000",
  success: "#00FF00",
  warning: "#FFA500",
  info: "#0000FF",
  light: "#F3F3F3",
  link: "#0000FF",
};

//Window
export const size = {
  window_height: Dimensions.get("window").height,
  window_width: Dimensions.get("window").width,
  screen_height: Dimensions.get("screen").height,
  screen_width: Dimensions.get("screen").width,
};

//Imagaes
export const Images = {
  logo: require("../assets/images/logo.png"),
};

// FONT
export const RobotoMedium: StyleProp<any> = {
  fontFamily: "Roboto-Medium",
  fontWeight: "500",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoRegular: StyleProp<any> = {
  fontFamily: "Roboto-Regular",
  fontWeight: "400",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoBold: StyleProp<any> = {
  fontFamily: "Roboto-Bold",
  fontWeight: "700",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoLight: StyleProp<any> = {
  fontFamily: "Roboto-Light",
  fontWeight: "300",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoThin: StyleProp<any> = {
  fontFamily: "Roboto-Thin",
  fontWeight: "100",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoItalic: StyleProp<any> = {
  fontFamily: "Roboto-Italic",
  fontWeight: "400",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoMediumItalic: StyleProp<any> = {
  fontFamily: "Roboto-MediumItalic",
  fontWeight: "500",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoBoldItalic: StyleProp<any> = {
  fontFamily: "Roboto-BoldItalic",
  fontWeight: "700",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoLightItalic: StyleProp<any> = {
  fontFamily: "Roboto-LightItalic",
  fontWeight: "300",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoThinItalic: StyleProp<any> = {
  fontFamily: "Roboto-ThinItalic",
  fontWeight: "100",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoBlack: StyleProp<any> = {
  fontFamily: "Roboto-Black",
  fontWeight: "900",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoBlackItalic: StyleProp<any> = {
  fontFamily: "Roboto-BlackItalic",
  fontWeight: "900",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedRegular: StyleProp<any> = {
  fontFamily: "RobotoCondensed-Regular",
  fontWeight: "400",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedItalic: StyleProp<any> = {
  fontFamily: "RobotoCondensed-Italic",
  fontWeight: "400",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedBold: StyleProp<any> = {
  fontFamily: "RobotoCondensed-Bold",
  fontWeight: "700",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedLight: StyleProp<any> = {
  fontFamily: "RobotoCondensed-Light",
  fontWeight: "300",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedLightItalic: StyleProp<any> = {
  fontFamily: "RobotoCondensed-LightItalic",
  fontWeight: "300",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedMedium: StyleProp<any> = {
  fontFamily: "RobotoCondensed-Medium",
  fontWeight: "500",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedMediumItalic: StyleProp<any> = {
  fontFamily: "RobotoCondensed-MediumItalic",
  fontWeight: "500",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedBoldItalic: StyleProp<any> = {
  fontFamily: "RobotoCondensed-BoldItalic",
  fontWeight: "700",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedBlack: StyleProp<any> = {
  fontFamily: "RobotoCondensed-Black",
  fontWeight: "900",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedBlackItalic: StyleProp<any> = {
  fontFamily: "RobotoCondensed-BlackItalic",
  fontWeight: "900",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedThin: StyleProp<any> = {
  fontFamily: "RobotoCondensed-Thin",
  fontWeight: "100",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedThinItalic: StyleProp<any> = {
  fontFamily: "RobotoCondensed-ThinItalic",
  fontWeight: "100",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedExtraBold: StyleProp<any> = {
  fontFamily: "RobotoCondensed-ExtraBold",
  fontWeight: "800",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedExtraBoldItalic: StyleProp<any> = {
  fontFamily: "RobotoCondensed-ExtraBoldItalic",
  fontWeight: "800",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedExtraLight: StyleProp<any> = {
  fontFamily: "RobotoCondensed-ExtraLight",
  fontWeight: "200",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedExtraLightItalic: StyleProp<any> = {
  fontFamily: "RobotoCondensed-ExtraLightItalic",
  fontWeight: "200",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedSemiBold: StyleProp<any> = {
  fontFamily: "RobotoCondensed-SemiBold",
  fontWeight: "600",
  color: Colors.black,
  fontSize: 18,
};
export const RobotoCondensedSemiBoldItalic: StyleProp<any> = {
  fontFamily: "RobotoCondensed-SemiBoldItalic",
  fontWeight: "600",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const OpenSansRegular: StyleProp<any> = {
  fontFamily: "OpenSans-Regular",
  fontWeight: "400",
  color: Colors.black,
  fontSize: 18,
};
export const OpenSansBold: StyleProp<any> = {
  fontFamily: "OpenSans-Bold",
  fontWeight: "700",
  color: Colors.black,
  fontSize: 18,
};
export const OpenSansItalic: StyleProp<any> = {
  fontFamily: "OpenSans-Italic",
  fontWeight: "400",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const OpenSansLight: StyleProp<any> = {
  fontFamily: "OpenSans-Light",
  fontWeight: "300",
  color: Colors.black,
  fontSize: 18,
};
export const OpenSansLightItalic: StyleProp<any> = {
  fontFamily: "OpenSans-LightItalic",
  fontWeight: "300",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const OpenSansSemiBold: StyleProp<any> = {
  fontFamily: "OpenSans-SemiBold",
  fontWeight: "600",
  color: Colors.black,
  fontSize: 18,
};
export const OpenSansSemiBoldItalic: StyleProp<any> = {
  fontFamily: "OpenSans-SemiBoldItalic",
  fontWeight: "600",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};
export const OpenSansExtraBold: StyleProp<any> = {
  fontFamily: "OpenSans-ExtraBold",
  fontWeight: "800",
  color: Colors.black,
  fontSize: 18,
};
export const OpenSansExtraBoldItalic: StyleProp<any> = {
  fontFamily: "OpenSans-ExtraBoldItalic",
  fontWeight: "800",
  fontStyle: "italic",
  color: Colors.black,
  fontSize: 18,
};

// Filter options
export const FilterOptions = [
  {label: "All", value: 0},
  {label: "Daily", value: 1},
  {label: "Weekly", value: 2},
  {label: "Monthly", value: 3},
  {label: "Yearly", value: 4},
];

//Screens
export const Screens: {[key in keyof RootStackParamList]: key} = {
  Home: "Home",
  Auth: "Auth",
  Cash: "Cash",
};

//Keyboard numbers
export const KeyboardNumbers = [
  {value: "7", label: "7", icon: null},
  {value: "8", label: "8", icon: null},
  {value: "9", label: "9", icon: null},
  {value: "/", label: "/", icon: null},
  {value: "4", label: "4", icon: null},
  {value: "5", label: "5", icon: null},
  {value: "6", label: "6", icon: null},
  {value: "*", label: "*", icon: null},
  {value: "1", label: "1", icon: null},
  {value: "2", label: "2", icon: null},
  {value: "3", label: "3", icon: null},
  {value: "-", label: "-", icon: null},
  {value: ",", label: ",", icon: null},
  {value: "0", label: "0", icon: null},
  {value: ".", label: ".", icon: null},
  {value: "+", label: "+", icon: null},
  {value: "00", label: "00", icon: null},
  {value: "000", label: "000", icon: null},
  {value: "c", label: "c", icon: null},
  {value: "x", label: null, icon: "backspace"},
];
