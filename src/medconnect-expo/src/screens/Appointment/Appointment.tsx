import {useEffect, useState} from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {Animated, SafeAreaView, ScrollView, Text, View, Image, Button, FlatList, Alert }from 'react-native';

import { HeaderContainer } from '../../components/header/HeaderContainer';
import { styles } from './styles';

import { ButtonPrimary } from '../../components/Buttons';
import { Calendario } from '../../components/Calendar/Calendar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Consulta } from '../../api';
import { Card } from '../../components/Card';
import { publicFiles } from '../../../config/env';
import { useAuth } from '../../hooks/useAuth';


interface Props extends DrawerScreenProps<any, any>{}

export const AppointmentScreen = ({navigation, route} :Props) => {
  const {token} = useAuth();
  const { especialista } = route.params;

  const consultaController = new Consulta();

  const [dataAgendamento, setDataAgendamento] = useState("");
  const [horaAgendamento, setHoraAgendamento] = useState("");
  const [datas, setDatas] = useState([])

  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  
 
  const timeAtend = (data:string) => {
    let dateAt = new Date(data);
    return (dateAt.getHours() + ":" + (dateAt.getMinutes()))
  }

  const sendConsulta = async () =>{

    (dataAgendamento.trim().length > 0 && horaAgendamento.trim().length > 0) 
      ? await consultaController.newConsulta(
            { "especialistaId": especialista.atendimentos[0].especialistaId,
              "dataConsulta":`${dataAgendamento}T${horaAgendamento}`
            }, token)
      : Alert.alert("Por favor, escolha um dia e horário...");
  }

  const splitDate = ( date: string ) => {
    return date.split("T")[0];
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

        <Image style={{width: 100, height: 150}} source={{uri : `${publicFiles}/${especialista.fotoPerfil}`}} />    
        <Text>{especialista.nome} {especialista.sobrenome}</Text>  
       <ScrollView>

          <View style={styles.pedidoConsulta}>
              <Text>Data da consulta:</Text>
              <View>
                <Text style={styles.textHour}>ESCOLHER DIA</Text>
                <Calendario 
                  atendimentos={especialista.atendimentos}
                  setDataAgendamento={setDataAgendamento}/> 
              </View>
          </View>
          <View style={styles.pedidoConsulta}>
             <Text>Horarios Disponiveis:</Text>
          </View>
            
          <ScrollView horizontal style={styles.btnHours}>                 
            {
              especialista.atendimentos.map((ag:any) => 
              (
                  <TouchableOpacity key={ag.dataAtendimento} onPress={() => setHoraAgendamento(timeAtend(ag.dataAtendimento))} style={styles.btnHour} >
                    <Text style={styles.textHour}>{timeAtend(ag.dataAtendimento)}</Text>                 
                  </TouchableOpacity>
              ))
            }
            </ScrollView>
          
            <Text>Data da consulta:</Text>
            <Text>{dataAgendamento}</Text>
            <Text>Horario da consulta:</Text>
            <Text>{horaAgendamento}</Text>
            <Text>Data do Agendamento:{}</Text>
            <Text>Protocolo:{Date.now()}</Text>
           
            <ButtonPrimary 
               onPress={() => sendConsulta()}
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