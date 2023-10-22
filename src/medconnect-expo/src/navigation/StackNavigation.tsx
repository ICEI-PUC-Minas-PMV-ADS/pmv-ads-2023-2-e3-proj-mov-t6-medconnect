import {createStackNavigator} from "@react-navigation/stack"
import React from 'react'
import { IndexScreen } from "../screens/IndexScreen"

import {RegisterScreen} from "../screens/Register";
import { AppointmentScreen, DashboardScreen, HomeScreen, LoginScreen, RecoverPasswordScreen, SearchScreen, SpecialistScreen } from "../screens"
 
import { ValidarCampos } from "../screens/exemplo"
import { BottomNavigation } from "./BottomNavigation"
import CadastroScreen from "../screens/Register/components/CadastroScreen";

const Stack = createStackNavigator()

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="IndexScreen" component={IndexScreen} />       
        <Stack.Screen name="Dashboard" options={{headerShown: false}} component={BottomNavigation} />
        <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />     
        <Stack.Screen name="ValidarCampos" component={ValidarCampos} />
        <Stack.Screen name="Specialist" component={SpecialistScreen} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
    </Stack.Navigator>
  )
}
