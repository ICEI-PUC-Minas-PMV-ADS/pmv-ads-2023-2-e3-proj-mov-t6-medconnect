import {DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator} from "@react-navigation/drawer"
import { View, useWindowDimensions, Image, Text, StyleSheet, Dimensions,TouchableOpacity, ImageBackground } from 'react-native'
import { useAuth } from '../hooks/useAuth'
import { publicFiles } from '../../config/env'
import { StackNavigation } from "./StackNavigation"
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native"

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
  const navigation = useNavigation();

  const logout = async() => {
    setToken(null);
    await authController.removeToken();
    setUser(null)
  }

  return(
   <DrawerContentScrollView>
      <View>
     
       <View style={styles.content}>
       <ImageBackground 
        source={require('../assets/images/doctor.jpg')}
        style={{width: "100%", height: "100%", position: "absolute", zIndex:1, opacity: 0.4}}
        resizeMode="cover"
        />
        <View style={styles.profileImgContainer}>
            <Image 
                source={{uri: `${publicFiles}/${user.fotoPerfil}`}}
                style={styles.profileImg} 
            />           
        </View>
        <Text style={styles.userName}>Olá {user.nome}</Text>
      </View> 
      
      <View>
      <TouchableOpacity style={styles.ItemMenu} onPress={() => navigation.navigate("Dashboard")}>
          <Icon name="home" color="#A5C3E7" size={30} />
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemMenu}  onPress={() => navigation.navigate("AppointmentHistory")}>
          <Icon name="document-attach-outline" size={30} color="#A5C3E7" />
          <Text>Agendamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemMenu}  onPress={() => navigation.navigate("PDF")}>
          <Icon name="documents-outline" size={30} color="#A5C3E7"/>
          <Text>Exames</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemMenu}  onPress={() => navigation.navigate("Remedios")}>
          <Icon name="calendar-outline" color="#A5C3E7" size={30} />
          <Text>Medicação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ItemMenu}  onPress={() => logout()}>
          <Icon name="calendar-outline" color="#A5C3E7" size={30} />
          <Text>Calendario</Text>
        </TouchableOpacity>

          <View style={{}}>
              <TouchableOpacity style={styles.ItemMenu}  onPress={() => navigation.navigate("Settings")}>
                <Icon name="settings-outline" color="#A5C3E7" size={30} />
                <Text>Configurações</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.ItemMenu}  onPress={() => logout()}>
                <Icon name="exit-outline" color="#A5C3E7" size={30} />
                <Text>Sair</Text>
              </TouchableOpacity>
          </View>

        </View>
      </View>
   </DrawerContentScrollView>
  )
}
const widthScreen = Dimensions.get("screen").width

export const styles = StyleSheet.create({
  
  content: {
    margin: "10%", 
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
    zIndex:10
  },
  profileImg: {
    width: widthScreen * 0.3,
    height: widthScreen * 0.3,
    borderRadius:  widthScreen * 0.2,
    zIndex:10
  },
  userName: {
    fontSize: widthScreen * 0.07,
    color: '#474747',
    fontWeight: "bold",
    zIndex:10
  },
  ItemMenu: {
    flexDirection: "row",
    alignItems:"center",
    paddingHorizontal: widthScreen * 0.05,
    paddingVertical: widthScreen * 0.04,
    gap:  widthScreen * 0.05,
   
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA"
  }
});
