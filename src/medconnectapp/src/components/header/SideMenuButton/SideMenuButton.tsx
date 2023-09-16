import { DrawerScreenProps } from "@react-navigation/drawer"
import { View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons" 

interface Props extends DrawerScreenProps<any, any>{}

export const SideMenuButton = ({navigation}: Props) => {
 
  return (
    <View>
        <Icon 
            name="menu-outline" 
            size={30} 
            color="#999"
            onPress={ ()=> navigation.toggleDrawer()}
            />
    </View>
  )
}
