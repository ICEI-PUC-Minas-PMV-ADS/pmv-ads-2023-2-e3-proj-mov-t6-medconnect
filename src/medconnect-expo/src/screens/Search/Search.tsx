import { DrawerScreenProps } from "@react-navigation/drawer"
import {View, Text, SafeAreaView} from "react-native"
import { HeaderContainer } from "../../components/header/HeaderContainer"

interface Props extends DrawerScreenProps<any, any>{}

export const SearchScreen = ({navigation, route} :Props) => {
  return (
   <SafeAreaView>
       <HeaderContainer route={route} navigation={navigation} />    
   </SafeAreaView>
  )
}
