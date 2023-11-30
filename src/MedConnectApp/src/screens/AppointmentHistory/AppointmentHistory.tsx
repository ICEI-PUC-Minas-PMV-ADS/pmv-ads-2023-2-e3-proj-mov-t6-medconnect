import { useCallback, useMemo, useEffect, useState } from "react";
import { CardHistory } from "../../components/CardHistory/CardHistory"
import { DrawerScreenProps } from "@react-navigation/drawer";
import {Consulta} from "../../api"
import { Especialista } from "../../api";
import { useAuth } from "../../hooks/useAuth";
import { View, Text, SafeAreaView, ScrollView, Animated, Image } from "react-native";
import { HeaderContainer } from "../../components/header/HeaderContainer";
import {styles} from "./Styles";

const consultaController      = new Consulta();
const especialistaController  = new Especialista();

interface Props extends DrawerScreenProps<any, any>{}

export const AppointmentHistory = ({navigation, route} :Props) => {
  const {token} = useAuth()
  const [consultas, setConsultas] = useState([])
  const [especialistas, setEspecialistas] = useState([])
  const [scrollY, setScrollY] = useState(new Animated.Value(0))

  const getAllConsultas = async() => {
    try {
      const result = await consultaController.getAll(token);             
      setConsultas(result)     
    } catch (error) {
      console.log(error)
    }
  }
  console.log("====TAM====>", consultas.length)

  const getEspecialista = async(eId:string)=> {
    let response = await especialistaController.getOne(eId) 
    setEspecialistas([...especialistas, response])
  }

 useEffect(() => {
  
    (async() => {
      await getAllConsultas()
    })()
 
},[])
 

useEffect(() => {
  const getEspecialistas = async () => {
    const especialistasArray = await Promise.all(
      consultas.map(async (c) => {
        const response = await especialistaController.getOne(c.especialistaId);
        return response;
      })
    );

    setEspecialistas(especialistasArray);
  };

  if(consultas)
  if (consultas.length > 0) {
    getEspecialistas();
  }
}, [consultas]);

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
        <Text>Agendamentos</Text>
        {
          consultas.length > 0 ?
           ( 
            
          especialistas.map((espec, index) => (
            <CardHistory key={index} 
              consultas={consultas}
              setConsultas={setConsultas}
              consulta={consultas[index]}
              especialista={espec}/>
          ))
           ):
           ( 
            <View
            style={styles.nothing}
          >
            <Text style={{fontSize:20}}>
              Nenhuma consulta agendada...
            </Text>
            <Image 
               source={require("./../../assets/images/medical-checkup.png")}
               style={{width: 100, height: 100, opacity:0.5}}

              />
          </View>      
           )
        
        }

      </View>
 
     
    </ScrollView>
    </View>
  </SafeAreaView>
)
}
