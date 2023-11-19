import { createStackNavigator} from  "@react-navigation/stack"
import { HomeScreen, LoginScreen } from "../screens"
import CadastroScreen from "../screens/Register/components/CadastroScreen"

const Stack = createStackNavigator()
export const AuthNavigation = () => {
    
    return(
        <Stack.Navigator  screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={CadastroScreen} />
        </Stack.Navigator>
    )
}