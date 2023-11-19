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
        width: "95%",
        height: "100%",
        flexDirection: "row",
        alignSelf:"center" ,
        alignItems: "flex-end",        
        
        position:"relative",
        zIndex:10,
        bottom:"10%",
        
        input:{
            width:"85%",
            height: 60,
            borderWidth: 0.2,
            borderColor: "#333",
            paddingRight: "10%",
    
        },

        sendMsg:{
                
                width: 60, 
                height: 60,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor: "#93c7cc", 
        }
    },
 
    msgTextArea:{
        height: heightScreen * 0.06,
        borderWidth:1,
        borderColor: "#999",
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal:"5%",
        backgroundColor: "#D6E5F3" ,
        margin: "2%",  
        justifyContent:"center",   
        top: -10,
    },
    msgOtherArea:{
        height: heightScreen * 0.06,
        borderWidth:1,
        borderColor: "#999",
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderRadius:5,
        paddingHorizontal:"5%",
        backgroundColor: "#275FDA" ,
        margin: "2%",  
        justifyContent:"center",   
        top: -10,
    },
    textUserMsg:{       
        color:"#2E2E2E",
     },
    textOtherMsg:{       
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