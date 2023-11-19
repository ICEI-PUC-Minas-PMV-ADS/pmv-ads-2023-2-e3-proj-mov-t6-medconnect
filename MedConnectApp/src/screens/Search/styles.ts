import { StyleSheet } from "react-native";
import { globalMargin } from "../../../theme/global.margin";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  header: {},
  content: {
    backgroundColor: "#FFF",
    width: "100%",
    flexDirection: "column",

    padding: 5,

    marginVertical: 10,
    alignSelf: "center",
    zIndex: 90,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,

    borderRadius: 2,
  },
  containerMenuIcons: {
    alignSelf: "center",
    backgroundColor: "#FFF",
    width: "98%",
    marginHorizontal: globalMargin.marginHorizontal - 10,
    paddingHorizontal: globalMargin.marginHorizontal - 10,
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 90,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,

    borderRadius: 2,
  },
  menuIcons: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  menuTitle: {
    marginBottom: 15,
  },
});
