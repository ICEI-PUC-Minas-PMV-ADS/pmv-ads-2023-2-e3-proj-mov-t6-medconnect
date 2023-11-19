import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../theme/global.styles";

const width = Dimensions.get("window").width * 0.95;
const height = Dimensions.get("window").height * 0.95;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: height * 0.2,

    shadowColor: "#d4d0cf",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.0,
    shadowRadius: 0,
    borderWidth: 0.1,
    alignItems: "center",
    elevation: 2,
  },
  cardSpecImgContainer: {
    marginRight: 5,
    padding: "1%",
  },
  cardSpecImgProfile: {
    width: width * 0.22,
    height: width * 0.24,
    borderRadius: 5,
  },
  cardSpecInfo: {
    width: "79%",
    height: 100,
    justifyContent: "center",
  },
  cardSpecBtnView: {
    width: 70,
    height: 20,
    backgroundColor: globalStyles.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    bottom: 0,
    left: "-15%",
    borderRadius: 3,
  },
  cardSpecBtnViewText: {
    color: "#FFF",
    fontSize: 10,
  },
  titleInfo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#181a19",
  },
  description: {
    fontSize: 12,
    color: "#323233",
    width: "90%",
  },
  subtitleInfo: {
    fontSize: 12,
    fontWeight: "600",
    color: "#323233",
  },
});
