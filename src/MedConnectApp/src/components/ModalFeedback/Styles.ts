import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../theme";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor: globalStyles.primaryColor,
        
        content: {
            width: "95%",
            height:"95%",
            justifyContent: "space-between",          
            paddingHorizontal: widthScreen*0.02,
            paddingVertical: heightScreen*0.05,
            margin:"5%",
            backgroundColor: "#FFF",
            alignSelf:"center",
            borderRadius: 5,
            
            info: {
                width: "95%",
                alignItems: "center",              
            }

        },
    
    },

    infoSuccess:{
        fontSize: widthScreen*0.07,
        fontWeight: "600",
        color:"#343434"
    },

    infoImage:{
        width: widthScreen*0.35,
        height: widthScreen*0.35,
        backgroundColor: "#198EB6",
        borderRadius: widthScreen*0.20,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 4,
        borderColor: "#8C8C8C",
        alignSelf: "center"
    },

        
    info: {
        width: "100%",
        infoTitle:{
            fontSize: widthScreen*0.05,
            color: "#333",
        }
    }
})