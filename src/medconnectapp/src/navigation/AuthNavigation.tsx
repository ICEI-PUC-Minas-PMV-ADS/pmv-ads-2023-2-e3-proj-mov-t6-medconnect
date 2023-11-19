import { createStackNavigator} from  "@react-navigation/stack"
import { HomeScreen, LoginScreen, RecoverPasswordScreen } from "../screens"
import CadastroScreen from "../screens/Register/components/CadastroScreen"

const Stack = createStackNavigator()
export const AuthNavigation = () => {
    
    return(
        <Stack.Navigator  screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={CadastroScreen} />
            <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
        </Stack.Navigator>
    )
}