import {useEffect, useState} from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {Animated, SafeAreaView, ScrollView, Text, View, Image }from 'react-native';
import { Carousel } from '../../components/carousel/Carousel';
import { HeaderContainer } from '../../components/header/HeaderContainer';
import { styles } from './styles';

import { IEspecialista } from '../../api/interfaces';
import { Search } from '../../components/Search';
import { ButtonPrimary } from '../../components/Buttons';


interface Props extends DrawerScreenProps<any, any>{}

export const SpecialistScreen = ({navigation, route} :Props) => {
  route.params.especialista.fotoPerfil = require("../../assets/images/persona02.png");
  const { especialista } = route.params;

  const goAgendamento = () => {
    navigation.navigate("Appointment", {especialista:especialista})
  }
 
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([{
            nativeEvent:{
              contentOffset: {y : scrollY}
            }
          }],
          { useNativeDriver: false}
          )}
      >
       
        <Animated.View style={
          [styles.header,
             {
              height: scrollY.interpolate({
                inputRange: [20,200,250],
                outputRange:[125,10,0],
                extrapolate: 'clamp'
              }),
              opacity:scrollY.interpolate({
                inputRange: [1,20,150],
                outputRange: [1,1,0],
                extrapolate: 'clamp'
              })
            }
        ]}>
          <HeaderContainer route={route} navigation={navigation}>
          
          </HeaderContainer>      
        </Animated.View>
    

       <View style={styles.body}>

           <Image source={especialista.fotoPerfil} /> 
           <Text style={styles.menuTitle}>Dr: {especialista.nome} {especialista.sobrenome} </Text>
           <Text>{especialista.descricaoCurta}</Text> 
       
            <ButtonPrimary 
               onPress={goAgendamento}
               textButton='Agendar Consulta'/>
        </View>
          
       
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}