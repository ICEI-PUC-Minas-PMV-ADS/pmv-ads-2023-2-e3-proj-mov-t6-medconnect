import {useEffect} from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer"
import { DashboardScreen, RegisterScreen } from '../screens'
import { useWindowDimensions } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

export const SideMenu = () => {

    const Drawer = createDrawerNavigator()
    const { width } = useWindowDimensions();

//drawerType: (width >= 720 ? 'permanent' : 'front')
  return (
    <Drawer.Navigator 
      screenOptions={{headerShown:false }}  >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />          
        <Drawer.Screen name="Cadastro" component={RegisterScreen} />          
    </Drawer.Navigator>
  )
}
