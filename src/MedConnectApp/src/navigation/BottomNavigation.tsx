import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Start } from "./DrawerNavigation";
import Icon from "react-native-vector-icons/Ionicons" 
import { HomeScreen, LoginScreen, RegisterScreen, SearchScreen, Settings } from "../screens";
import { HomeNavigation } from "./BottomMenu/HomeNavigation";

export const BottomNavigation = () => {

  const Tab = createBottomTabNavigator();  

  return (
   <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="DashBoard" options={{tabBarIcon: ()=> <Icon name="home-outline" size={16} color="#999" />}}  component={HomeNavigation} />
    <Tab.Screen name="Buscar" options={{tabBarIcon: ()=> <Icon name="search" size={16} color="#999" />}} component={SearchScreen} />
    <Tab.Screen name="Configurações" options={{tabBarIcon: ()=> <Icon name="settings-outline" size={16} color="#999" />}} component={Settings} />
   </Tab.Navigator>
  )
}
