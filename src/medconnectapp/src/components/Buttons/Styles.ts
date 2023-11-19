import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../../theme";

const heightBody = Dimensions.get("window").height * -0.45;

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 4,
    margin: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonLogin: {
    backgroundColor: globalStyles.primaryColor,
  },
  buttonTextLogin: {
    color: globalStyles.colorSearchBg,
    fontSize: 18,
  },
});
