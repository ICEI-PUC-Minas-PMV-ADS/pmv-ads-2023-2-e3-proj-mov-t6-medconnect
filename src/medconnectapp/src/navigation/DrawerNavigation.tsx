import {DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator} from "@react-navigation/drawer"
import { View, useWindowDimensions, Image, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native'
import { useAuth } from '../hooks/useAuth'
import { publicFiles } from '../../config/env'
import { StackNavigation } from "./StackNavigation"

import { Auth } from "../api";


export const Start = () => {

    const Drawer = createDrawerNavigator()
    const { width } = useWindowDimensions();

//drawerType: (width >= 720 ? 'permanent' : 'front')
  return (
    <Drawer.Navigator 
      screenOptions={{headerShown:false }} 
      drawerContent={(props) => <Menu {...props} />}
      >
        <Drawer.Screen name="stackNavigator" component={StackNavigation} />
    
    </Drawer.Navigator>
  )
}

const Menu = ( props: DrawerContentComponentProps) => {
  const { user, token, setToken, setUser } = useAuth();
  const authController = new Auth();

  const logout = async() => {
    setToken(null);
    await authController.removeToken();
    setUser(null)
  }

  return(
   <DrawerContentScrollView>
      <View>
          <View style={styles.content}>
        
        <View style={styles.profileImgContainer}>
            <Image 
                source={{uri: `${publicFiles}/${user.fotoPerfil}`}}
                style={styles.profileImg} 
            />           
        </View>
        <Text style={styles.userName}>Olá {user.nome}</Text>
      </View> 
      
      <View>
        <TouchableOpacity onPress={() => logout()}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>

      </View>
   </DrawerContentScrollView>
  )
}
const widthScreen = Dimensions.get("screen").width

export const styles = StyleSheet.create({
  
  content: {
    backgroundColor:"red",
    alignItems: 'center',
    gap: 10,
  },
  profileImgContainer: {
    width: widthScreen * 0.3,
    height: widthScreen * 0.3,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:  widthScreen * 0.2,
  },
  profileImg: {
    width: widthScreen * 0.3,
    height: widthScreen * 0.3,
    borderRadius:  widthScreen * 0.2,
  },
  userName: {
    fontSize: widthScreen * 0.07,
    color: '#000',
    fontWeight: "bold"
  },
});
