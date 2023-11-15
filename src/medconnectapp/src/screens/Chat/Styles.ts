import { StyleSheet, Dimensions } from "react-native";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    msgArea:{
        position:"absolute",
        zIndex:99,
        width: widthScreen,
        height: heightScreen*0.75 ,
        backgroundColor:"red"
    },
    actions:{        
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf:"flex-end",  
        alignItems: "flex-end",        
        
        position:"relative",
        zIndex:10,
        bottom:"10%",
        
        input:{
            width:"85%",
            height: 50,
            borderWidth: 0.2,
            borderColor: "#666"
        },

        sendMsg:{
                width: 50, 
                height: 50,
                backgroundColor: "blue",
                borderRadius: 25,
                justifyContent:"center",
                alignItems:"center"
        }
    }
})