import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { SideMenu } from "./DrawerNavigation";
import Icon from "react-native-vector-icons/Ionicons" 
import { HomeScreen, LoginScreen, RegisterScreen } from "../screens";

export const BottomNavigation = () => {

  const Tab = createBottomTabNavigator();  

  return (
   <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="DashBoard" options={{tabBarIcon: ()=> <Icon name="home-outline" size={16} color="#999" />}}  component={SideMenu} />
    <Tab.Screen name="Login" options={{tabBarIcon: ()=> <Icon name="home-outline" size={16} color="#999" />}} component={LoginScreen} />
    <Tab.Screen name="Register" options={{tabBarIcon: ()=> <Icon name="home-outline" size={16} color="#999" />}} component={RegisterScreen} />
   </Tab.Navigator>
  )
}
