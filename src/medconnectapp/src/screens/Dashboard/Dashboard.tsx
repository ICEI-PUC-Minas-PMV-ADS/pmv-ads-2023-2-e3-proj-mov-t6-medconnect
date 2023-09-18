import {useState} from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {Animated, SafeAreaView, ScrollView, Text, View }from 'react-native';
import { Carousel } from '../../components/carousel/Carousel';
import { HeaderContainer } from '../../components/header/HeaderContainer';
import { styles } from './styles';
import { Card } from '../../components/Card';
import { MenuIcon } from '../../components/MenuIconsCategories';


interface Props extends DrawerScreenProps<any, any>{}

export const DashboardScreen = ({navigation, route} :Props) => {

  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  return (
    <SafeAreaView>
      <View style={styles.container}>
      
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
          <HeaderContainer route={route} navigation={navigation} />      
        </Animated.View>
    
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
       
       <View style={styles.menuIcons}>
          <MenuIcon 
            icon={require('../../assets/images/medical-team.png')}
            category={"Profissionais"}
            background={"#e3ebeb"}  
          />          

          <MenuIcon 
            icon={require('../../assets/images/medical-checkup.png')}
            category={"Agendamentos"}
            background={"#e3ebeb"}  
          />   

          <MenuIcon 
            icon={require('../../assets/images/lungs.png')}
            category={"Exames"}
            background={"#e3ebeb"}  
          />   
        </View>

        <View style={styles.content}>
          <Carousel />              
        </View>

        <View style={styles.content}>
          <Text style={[styles.subtitle, {marginBottom: 5}]}>Especialistas</Text>
          <Card image = {require("../../assets/images/persona02.png")}/>
          <Card image = {require("../../assets/images/persona04.png")}/>
          <Card image = {require("../../assets/images/persona03.png")}/>
          <Card image = {require("../../assets/images/persona02.png")}/>
          <Card image = {require("../../assets/images/persona03.png")}/>
          <Card image = {require("../../assets/images/persona04.png")}/>            
       </View>

 
   
          
       
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}
