import { Dimensions, StyleSheet } from "react-native"
import { globalMargin } from "../../../theme";

var heightBody = Dimensions.get("window").height * 0.82;

export const styles = StyleSheet.create({

    body: {
        alignSelf: "center",
        backgroundColor: "#FFF",
        width: "94%",
        height: heightBody,
        marginHorizontal: globalMargin.marginHorizontal,
        paddingHorizontal: globalMargin.marginHorizontal,
        paddingTop: 10,
        paddingBottom: 10,
        zIndex: 90,
        marginTop: -40,
    
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

      nothing:{
        width: "100%",
        height: "100%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        top: "-10%",
    }
    
})