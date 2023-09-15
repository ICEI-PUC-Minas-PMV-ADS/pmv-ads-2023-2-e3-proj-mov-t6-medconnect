import React from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer"
import { DashboardScreen } from '../screens'
import { StackNavigation } from './StackNavigation'

export const SideMenu = () => {

    const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />     
    </Drawer.Navigator>
  )
}
