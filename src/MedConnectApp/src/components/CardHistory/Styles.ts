import {StyleSheet, Dimensions} from "react-native"
import { globalStyles } from "../../../theme";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:"row",
        marginVertical: "5%",
        borderBottomWidth: 0.2,
        borderBottomColor: "#333",
        paddingBottom: "5%",
        image:{
            marginRight: 10,
            fotoPerfil:{
                width: widthScreen * 0.2,
                height: heightScreen * 0.1,
            }
        },
        cardSpecBtnView: {
            width: 60,
            height: 20,
            backgroundColor: globalStyles.primaryColor,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end",
            bottom: -10,
            left: "-40%",
            borderRadius: 3,
            marginLeft: 2,
        },
        cardSpecBtnCancel:{},
          cardSpecBtnViewText: {
            color: "#FFF",
            fontSize: 10,
          },

          cancelada: {
            width: 80,
            height: 20,
            color: "#9c405a",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end",
            bottom: -10,
            left: "-40%",
            borderRadius: 3,
            marginLeft: 2,
        },
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