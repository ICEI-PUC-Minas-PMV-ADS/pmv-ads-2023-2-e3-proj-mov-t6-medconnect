import {StyleSheet, Dimensions} from "react-native"

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:"row",
        marginVertical: "5%",
       
        image:{
            marginRight: 10,
            fotoPerfil:{
                width: widthScreen * 0.2,
                height: heightScreen * 0.1,
            }
        }
    }
})