import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"

import { BottomNavigation } from './BottomNavigation'

const Stack = createStackNavigator()

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>    
        <Stack.Screen name="bottomNav" component={BottomNavigation} />       
    </Stack.Navigator>
  )
}
