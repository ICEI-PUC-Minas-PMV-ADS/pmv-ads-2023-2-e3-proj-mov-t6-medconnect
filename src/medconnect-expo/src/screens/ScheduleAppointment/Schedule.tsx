import {useEffect, useState} from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {Animated, SafeAreaView, ScrollView, Text, View, Image, Button, FlatList }from 'react-native';
import { Carousel } from '../../components/carousel/Carousel';
import { HeaderContainer } from '../../components/header/HeaderContainer';
import { styles } from './styles';

import { IEspecialista } from '../../api/interfaces';
import { Search } from '../../components/Search';
import { ButtonPrimary } from '../../components/Buttons';
import { Calendario } from '../../components/Calendar/Calendar';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends DrawerScreenProps<any, any>{}

export const ScheduleScreen = ({navigation, route} :Props) => {
  route.params.especialista.fotoPerfil = require("../../assets/images/persona02.png");
  const { especialista } = route.params;
 
  console.log(especialista.atendimentos)
  const [scrollY, setScrollY] = useState(new Animated.Value(0))

  const dateAtend = (data:string) => {
    let dateAt = new Date(data);
    console.log(dateAt.getDate() + " " + (dateAt.getMonth() + 1) + " " +  dateAt.getFullYear())
    return (dateAt.getDate() + " / " + (dateAt.getMonth() + 1) + " / " +  dateAt.getFullYear())
  }

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
          
          <Calendario />
          
          <ScrollView>
            
            {
              especialista.atendimentos.map((ag:any) => 
              (
                <TouchableOpacity style={{marginRight:5, width:150, height:30,  }} >
                  <Text>{dateAtend(ag.dataAtendimento)}</Text>
                </TouchableOpacity>
              ))
            }


            {/*
              especialista.atendimentos &&
              <FlatList 
                data={especialista.atendimentos}
                renderItem={ (agenda) =>  <Button title={" " + agenda.dataAtendimento} />}
                keyExtractor={agenda => agenda.atendimentoId}
              />
              
          */}

          </ScrollView>

        </View>
          
       
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}