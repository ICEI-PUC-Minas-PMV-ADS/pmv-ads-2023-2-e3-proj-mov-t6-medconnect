import {useEffect, useState} from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {Animated, SafeAreaView, ScrollView, Text, View }from 'react-native';
import { Carousel } from '../../components/carousel/Carousel';
import { HeaderContainer } from '../../components/header/HeaderContainer';
import { styles } from './styles';
import { Card } from '../../components/Card';
import { MenuIcon } from '../../components/MenuIconsCategories';
import { FlatList } from 'react-native-gesture-handler';
import { Especialista } from "../../api";
import { IEspecialista } from '../../api/interfaces';
import { Search } from '../../components/Search';


const especialistaController = new Especialista();
interface Props extends DrawerScreenProps<any, any>{}

export const DashboardScreen = ({navigation, route} :Props) => {
  
  const [especialistas, setEspecialistas] = useState<IEspecialista[]>([]);
  const [especialistasRes, setEspecialistasRes] = useState<IEspecialista[]>([]);
  

  useEffect(() => {
    (async()=>{
      const esp = await especialistaController.getAll();
      setEspecialistas(esp);    
      setEspecialistasRes(esp)
    })()
  }, [])

  console.log("especialistas", especialistas)
 
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
            <Search data={especialistas}  setDataResult={setEspecialistasRes} especialistasRes={especialistasRes}/>
          </HeaderContainer>      
        </Animated.View>
    

       <View style={styles.containerMenuIcons}>
        <Text style={styles.menuTitle}>Menu</Text>
        <View style={styles.menuIcons}>
            <MenuIcon 
              onPress={() => navigation.navigate("AppointmentHistory")}
              icon={require('../../assets/images/medical-team.png')}
              category={"Profissionais"}
              background={"#e3ebeb"}  
            />          

            <MenuIcon 
              onPress={() => navigation.navigate("AppointmentHistory")}
              icon={require('../../assets/images/medical-checkup.png')}
              category={"Agendamentos"}
              background={"#e3ebeb"}  
            />   

            <MenuIcon 
              onPress={() => navigation.navigate("PDF")}
              icon={require('../../assets/images/lungs.png')}
              category={"Exames"}
              background={"#e3ebeb"}  
            />   
          </View>
        </View>

        <View style={styles.content}>
          <Carousel />              
        </View>

        <View style={styles.content}>
          <Text style={[styles.subtitle, {marginBottom: 5}]}>Especialistas</Text>

         
        
       {/*  <FlatList
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
              /> */}

        {especialistas.map((especialista) =>  (
           
               <Card 
                  key={especialista.especialistaId}
                  especialista={especialista}
              />  
              
              ))     
        }
        
          
       
        

       </View>

 
   
          
       
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}
