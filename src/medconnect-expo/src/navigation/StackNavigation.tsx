import {createStackNavigator} from "@react-navigation/stack"
import React from 'react'
import { IndexScreen } from "../screens/IndexScreen"

import {RegisterScreen} from "../screens/Register";
import { DashboardScreen, HomeScreen, LoginScreen, RecoverPasswordScreen, ScheduleScreen, SearchScreen, SpecialistScreen } from "../screens"
 
import { ValidarCampos } from "../screens/exemplo"
import { BottomNavigation } from "./BottomNavigation"
import CadastroScreen from "../screens/Register/components/CadastroScreen";

const Stack = createStackNavigator()

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={CadastroScreen} />
        <Stack.Screen name="Dashboard" options={{headerShown: false}} component={BottomNavigation} />
        <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ValidarCampos" component={ValidarCampos} />
        <Stack.Screen name="Specialist" component={SpecialistScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
    </Stack.Navigator>
  )
}
