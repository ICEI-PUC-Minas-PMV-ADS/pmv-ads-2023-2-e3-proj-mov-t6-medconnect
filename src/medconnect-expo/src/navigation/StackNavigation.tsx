import {createStackNavigator} from "@react-navigation/stack"
import React from 'react'
import { IndexScreen } from "../screens/IndexScreen"

import { AppointmentHistory, AppointmentScreen, RecoverPasswordScreen, SpecialistScreen } from "../screens"
 
import { ValidarCampos } from "../screens/exemplo"
import { BottomNavigation } from "./BottomNavigation"
import { ModalFeedback } from "../components/ModalFeedback"

const Stack = createStackNavigator()

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="IndexScreen" component={IndexScreen} />  

           


        <Stack.Screen name="Dashboard" options={{}} component={BottomNavigation} />
        <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />     
        <Stack.Screen name="ValidarCampos" component={ValidarCampos} />
        <Stack.Screen name="Specialist" component={SpecialistScreen} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} options={{presentation: "modal"}}/>
        <Stack.Screen name="AppointmentHistory" component={AppointmentHistory} />
        <Stack.Screen name="Feedback" options={{presentation: "modal" , headerShown: false}}  component={ModalFeedback} />
        <Stack.Screen name="ModalFeedback" options={{presentation: "modal" , headerShown: false}}  component={ModalFeedback} />

    </Stack.Navigator>
  )
}
