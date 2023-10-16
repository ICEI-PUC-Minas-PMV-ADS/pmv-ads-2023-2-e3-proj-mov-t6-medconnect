import { StyleSheet } from "react-native";
import { globalStyles } from "../../../theme";

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 4,
    margin: 5,
    alignItems: "center",
  },
  buttonLogin: {
    backgroundColor: globalStyles.primaryColor,
  },
  buttonTextLogin: {
    color: globalStyles.colorSearchBg,
    fontSize: 18,
  },
});
