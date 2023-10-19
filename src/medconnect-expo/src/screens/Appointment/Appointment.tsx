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

export const AppointmentScreen = ({navigation, route} :Props) => {
  route.params.especialista.fotoPerfil = require("../../assets/images/persona02.png");
  const { especialista } = route.params;
  
  const [dataAgendamento, setDataAgendamento] = useState("");

  console.log(especialista.atendimentos)
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  
  const dateAtend = (data:string) => {
    let dateAt = new Date(data);
    return (dateAt.getDate() + " / " + (dateAt.getMonth() + 1) + " / " +  dateAt.getFullYear())
  }

  const timeAtend = (data:string) => {
    let dateAt = new Date(data);
    return (dateAt.getHours() + "h" + (dateAt.getMinutes() + 1))
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
          
         
          
          <ScrollView>

          <View style={styles.pedidoConsulta}>
              <Text>Data da consulta:</Text>
              <View>
                <Text style={styles.textHour}>ESCOLHER DIA</Text>
                <Calendario setDataAgendamento={setDataAgendamento}/> 
              </View>
          </View>
          <View style={styles.pedidoConsulta}>
             <Text>Horarios Disponiveis:</Text>
          </View>
            
          <ScrollView horizontal style={styles.btnHours}>                 
            {
              especialista.atendimentos.map((ag:any) => 
              (
                  <TouchableOpacity style={styles.btnHour} >
                    <Text style={styles.textHour}>{timeAtend(ag.dataAtendimento)}</Text>                 
                  </TouchableOpacity>
              ))
            }
            </ScrollView>
          
            <Text>Data da consulta:</Text>
            <Text>{dataAgendamento}</Text>
            <Text>Horario da consulta:</Text>
            <Text>{dataAgendamento}</Text>
            <Text>Data do Agendamento:{Date.now()}</Text>
            <ButtonPrimary 
               onPress={{}}
               textButton='Confirmar Agendamento'/>

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