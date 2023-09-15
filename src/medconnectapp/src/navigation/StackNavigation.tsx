import {createStackNavigator} from "@react-navigation/stack"
import React from 'react'
import { IndexScreen } from "../screens/IndexScreen"

import { DashboardScreen, HomeScreen, LoginScreen, RecoverPasswordScreen, RegisterScreen } from "../screens"
import { SideMenu } from "./DrawerNavigation"
import { ValidarCampos } from "../screens/exemplo"

const Stack = createStackNavigator()

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={SideMenu} />
        <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
        <Stack.Screen name="ValidarCampos" component={ValidarCampos} />
    </Stack.Navigator>
  )
}