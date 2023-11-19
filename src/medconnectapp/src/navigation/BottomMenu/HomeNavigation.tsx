import { createStackNavigator } from "@react-navigation/stack"

import { AppointmentHistory, AppointmentScreen, ChatScreen, DashboardScreen, RecoverPasswordScreen, SearchScreen, SpecialistScreen } from "../../screens"
import AppointmentCall from "../../../AppointmentCall";
import { ModalFeedback } from "../../components/ModalFeedback";
import { IndexScreen } from "../../screens/IndexScreen";
 
export const HomeNavigation = () => {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator screenOptions={{ headerShown:false}}>    
     <Stack.Screen name="IndexScreen" component={IndexScreen} />
          <Stack.Screen name="Dashboard" options={{}} component={DashboardScreen} />
          <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} /> 
          <Stack.Screen name="Search" component={SearchScreen} />        
          <Stack.Screen name="Specialist" component={SpecialistScreen} />
          <Stack.Screen name="Appointment" component={AppointmentScreen} options={{presentation: "modal"}}/>
          <Stack.Screen name="AppointmentHistory" component={AppointmentHistory} />
          <Stack.Screen name="AppointmentCall" component={AppointmentCall} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="Feedback" options={{presentation: "modal" , headerShown: false}}  component={ModalFeedback} />
          <Stack.Screen name="ModalFeedback" options={{presentation: "modal" , headerShown: false}}  component={ModalFeedback} />
  
      </Stack.Navigator>
    )
  }