import { Dimensions, StyleSheet } from "react-native";

const widthScreen = Dimensions.get("screen").width
const heightScreen = Dimensions.get("screen").height

export const styles = StyleSheet.create({
 
    profileImgContainer: {
        width: widthScreen * 0.3,
        height: widthScreen * 0.3,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:  widthScreen * 0.2,
        zIndex:10
      },
      profileImg: {
        width: widthScreen * 0.3,
        height: widthScreen * 0.3,
        borderRadius:  widthScreen * 0.2,
        zIndex:10
      },

      inputPass:{
        width: "90%",
        height: heightScreen * 0.07,
        borderWidth: 1,
      }
})