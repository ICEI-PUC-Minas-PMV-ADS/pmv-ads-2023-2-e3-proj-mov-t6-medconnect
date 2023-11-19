import { DrawerScreenProps } from "@react-navigation/drawer"
import { View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons" 
import { DrawerActions } from "@react-navigation/native"

interface Props extends DrawerScreenProps<any, any>{}

export const SideMenuButton = ({navigation}: Props) => {
 
  return (
    <View>
        <Icon 
            name="menu-outline" 
            size={30} 
            color="#FFF"
            onPress={ ()=> navigation.dispatch(DrawerActions.toggleDrawer())}
            />
    </View>
  )
}
