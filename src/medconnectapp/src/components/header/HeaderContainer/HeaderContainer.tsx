import { DrawerScreenProps } from "@react-navigation/drawer"
import { View } from "react-native"
import { SideMenuButton } from "../SideMenuButton"
import { UserProfile } from "../UserProfile"
import { styles } from "./styles"
 
interface Props extends DrawerScreenProps<any, any>{}

export const HeaderContainer = ({navigation}:Props  ) => {
  return (
    <View style={styles.content}>
        <SideMenuButton navigation={navigation} />
        <UserProfile />
    </View>
 
  )
}
