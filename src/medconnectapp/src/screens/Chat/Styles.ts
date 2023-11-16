import { StyleSheet, Dimensions } from "react-native";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    msgArea:{
        position:"absolute",
        paddingVertical: "3%",
        zIndex:99,
        width: widthScreen,
        height: heightScreen*0.75 ,
        
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
    },
 
    msgTextArea:{
        height: heightScreen * 0.06,
        borderRadius:5,
        paddingHorizontal:"5%",
        backgroundColor: "#333" ,
        margin: "2%",  
        justifyContent:"center",   
       
    },
    textMsg:{
       
        color:"#FFF",
 
    },
    otherAccount:{
        
        alignSelf: "flex-start",
    },
    msgContainer:{
        flexDirection:"row",
        alignSelf:"flex-end",
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal: "5%",
    },
    msgContainerUser:{

    },

    profileImgContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      },
      profileImg: {
        width: 35,
        height: 35,
        borderRadius: 20,
      },
     
})