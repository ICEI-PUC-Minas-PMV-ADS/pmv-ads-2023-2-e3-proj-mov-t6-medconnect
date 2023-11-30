import { useState } from "react";
import {View,Text,Image,TouchableOpacity, TextInput, SafeAreaView, ScrollView, Animated, StyleSheet, Dimensions, Button} from "react-native"

import { publicFiles } from "../../../config/env"
import { useAuth } from "../../hooks/useAuth"

import { HeaderContainer } from "../../components/header/HeaderContainer";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { launchImageLibrary } from "react-native-image-picker";
import { User } from "../../api";
import { imgFormat } from "../../utils";
import { styles } from './../Search/styles';
import { ButtonPrimary } from "../../components/Buttons";

interface Props extends DrawerScreenProps<any, any>{}

const widthScreen = Dimensions.get("screen").width
const heightScreen = Dimensions.get("screen").height

export const Settings = ({navigation, route}: Props) => {

  let options = {
    storageOptions:{
      path:"image"
    }
  };

  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  const {user, token, setUser} = useAuth();
  const userController = new User();

  const openGallery = async () => {
    launchImageLibrary(options, response => {
      if(!response.didCancel){
        const file = imgFormat(response.assets[0].uri)
        console.log(response)
        updatePhoto(file)
        
      }
    })
  }

  const updatePhoto = async (data:object) => {
    try {
      const response = await userController.updatePhoto(token, data);
      if(response){
        setUser(response)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
      
            
        <SafeAreaView>
            <View style={styles.container}>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([{
                  nativeEvent:{
                    contentOffset: {y : scrollY}
                  }
                }],
                { useNativeDriver: false}
                )}
            >
            
              <Animated.View style={
                [styles.header,
                  {
                    height: scrollY.interpolate({
                      inputRange: [20,200,250],
                      outputRange:[125,10,0],
                      extrapolate: 'clamp'
                    }),
                    opacity:scrollY.interpolate({
                      inputRange: [1,20,150],
                      outputRange: [1,1,0],
                      extrapolate: 'clamp'
                    })
                  }
              ]}>
                <HeaderContainer route={route} navigation={navigation}>          
                </HeaderContainer>  
              
              </Animated.View>
          
          <View style={st.container}>
                        
               <View style={st.profileImgContainer}>
                <Image 
                    source={{uri: `${publicFiles}/${user.fotoPerfil}`}}
                    style={st.profileImg} 
                />               
              </View>
              <TouchableOpacity
                onPress={() => openGallery()}
              >
                <Text>Alterar Foto</Text>
              </TouchableOpacity>
              <Text>{user.nome} {user.sobrenome}</Text>  

                <View style={st.inputs}>
                  
                  <Text style={st.inputs.titleInputs}>Alterar Senha</Text>
                
                  <TextInput
                    style={st.inputPass}
                    placeholder="Senha"
                  />
                  
                  <TextInput
                    style={st.inputPass}
                    placeholder="Confirmar Senha"
                  />  
                   <ButtonPrimary 
               onPress={() => {}}
               textButton='ALTERAR SENHA'/>
               
                </View>

            </View>
            
       
       </ScrollView>
      </View>
    </SafeAreaView>
  )
}


const st = StyleSheet.create({
 container:{
  alignItems: "center",
  width: "100%", 
 },
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
      width: "100%",
      height: heightScreen * 0.07,
      borderWidth: 1,
    
    },

    inputs:{
      width: "100%",
      gap:10, 
      marginTop:heightScreen*0.05,
      justifyContent:"center",
      alignItems: "center",
      paddingHorizontal: widthScreen*0.05,
      

      titleInputs:{
        alignSelf:"flex-start",
        fontSize: widthScreen * 0.05,
        fontWeight: "500"
      }
    },
})