import { DrawerScreenProps } from '@react-navigation/drawer';
import {View }from 'react-native';
import { Carousel } from '../../components/carousel/Carousel';
import { HeaderContainer } from '../../components/header/HeaderContainer';
import { Search } from '../../components/Search';
import { styles } from './styles';


interface Props extends DrawerScreenProps<any, any>{}

export const DashboardScreen = ({navigation} :Props) => {


  return (
   <View style={styles.content}>
    <HeaderContainer navigation={navigation}/> 
    <Search />
    <Carousel />
  </View>
  )
}
