import {useEffect} from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer"
import { DashboardScreen } from '../screens'
import { Button, Text, useWindowDimensions } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

export const SideMenu = () => {

    const Drawer = createDrawerNavigator()
    const { width } = useWindowDimensions();


  return (
    <Drawer.Navigator 
      screenOptions={{headerShown:false, drawerType: (width >= 600 ? 'permanent' : 'front')}}  >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />  
        
    </Drawer.Navigator>
  )
}
