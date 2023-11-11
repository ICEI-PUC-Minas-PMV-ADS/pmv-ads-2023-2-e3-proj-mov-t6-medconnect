import {useEffect} from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer"
import { DashboardScreen, RegisterScreen, SearchScreen } from '../screens'
import { useWindowDimensions } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import CadastroScreen from '../screens/Register/components/CadastroScreen'

export const SideMenu = () => {

    const Drawer = createDrawerNavigator()
    const { width } = useWindowDimensions();

//drawerType: (width >= 720 ? 'permanent' : 'front')
  return (
    <Drawer.Navigator 
      screenOptions={{headerShown:false }}  >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />                 
        <Drawer.Screen name="Cadastro" component={CadastroScreen} />   
        <Drawer.Screen name="Search" component={SearchScreen} />       
    </Drawer.Navigator>
  )
}
