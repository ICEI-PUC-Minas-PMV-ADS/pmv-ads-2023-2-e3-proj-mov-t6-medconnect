import { DrawerScreenProps } from '@react-navigation/drawer';
import {View }from 'react-native';
import { Carousel } from '../../components/carousel/Carousel';
import { HeaderContainer } from '../../components/header/HeaderContainer';


interface Props extends DrawerScreenProps<any, any>{}

export const DashboardScreen = ({navigation} :Props) => {


  return (
   <View>
    <HeaderContainer navigation={navigation}/> 
    <Carousel />
  </View>
  )
}
