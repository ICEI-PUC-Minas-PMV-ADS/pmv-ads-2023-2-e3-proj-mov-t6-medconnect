import {useEffect, useState} from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {Animated, SafeAreaView, ScrollView, Text, View, TouchableOpacity }from 'react-native';
import { HeaderContainer } from '../../components/header/HeaderContainer';
import { Card } from '../../components/Card';
import { useAuth } from '../../hooks/useAuth';
import { IEspecialista } from '../../api/interfaces';
import { Especialista } from '../../api';
import { Search } from '../../components/Search';
import { styles } from './styles';

const especialistaController = new Especialista();
interface Props extends DrawerScreenProps<any, any>{}

export const SearchScreen = ({navigation, route} :Props) => {
 
  const { getAllEspecialistas } = useAuth();
  const [especialistas, setEspecialistas] = useState<IEspecialista[]>([]);
  const [espResult, setEspResult] = useState<IEspecialista[]>([]);
  
  const {especialistasRes} = route.params || [];
 
  useEffect(() => {
    (async()=>{
      const esp = await especialistaController.getAll();
      setEspecialistas(esp);    
      setEspResult(esp)
    })()
  }, [])

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
            <Search data={especialistas} setDataResult={setEspResult} especialistasRes={especialistasRes}/>
          </HeaderContainer>  
         
        </Animated.View>
    

       <View style={styles.containerMenuIcons}>
        <Text style={styles.menuTitle}>Resultados para a Pesquisa</Text>
      
        {espResult.map((espec) =>  (
         
         <TouchableOpacity   key={espec.especialistaId} onPress={() => navigation.navigate("Specialist", 
              {especialista:espec})
            }>

            <Card              
              especialista={espec}
            />  
          
          
         </TouchableOpacity>
          ))     
    }

        </View>


       
        {/*
        <View style={styles.content}>
          <Text style={[styles.subtitle, {marginBottom: 5}]}>Especialistas</Text>

         
        
        <FlatList
            data={especialistas}
            renderItem={(prop) => (
               <Card 
                image = {require("../../assets/images/persona02.png")}
                nome = {prop.nome} 
                sobrenome={prop.sobrenome}
                descricaoCurta = "Doutor especialista em cirurgia plasticas, doutor especialista em cirurgia plasticas... "
                categoria="Cirurgia Plastica"   
              />   )              
               }
               keyExtractor={card => card.especialistaId}              
              />

       </View>
       */}

 
   
          
       
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}