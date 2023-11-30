import React, { useState } from 'react';
import {Image, View, Text, FlatList, StyleSheet, ScrollView, SafeAreaView, Animated } from 'react-native';
import { HeaderContainer } from '../../components/header/HeaderContainer';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { styles } from './../Search/styles';

interface Props extends DrawerScreenProps<any, any>{}

const RemedioPage = ({route, navigation} :Props) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))

  const [remedios, setRemedios] = useState([
    { id: '1',icon: require('./../../assets/images/comprimido.png'), nome: 'Paracetamol', tempo: 'A cada 6 horas' },
    { id: '2',icon: require('./../../assets/images/comprimido.png'), nome: 'Ibuprofeno', tempo: 'A cada 8 horas' },
    { id: '3',icon: require('./../../assets/images/gota.png'), nome: 'Dipirona', tempo: 'A cada 4 horas' },
    { id: '4',icon: require('./../../assets/images/capsula.png'), nome: 'Amoxicilina', tempo: 'A cada 12 horas' },
    { id: '5',icon: require('./../../assets/images/comprimido.png'), nome: 'Omeprazol', tempo: 'Antes das refeições' },
    { id: '6',icon: require('./../../assets/images/capsula.png'), nome: 'Cetirizina', tempo: 'A cada 24 horas' },
    // Adicione mais remédios conforme necessário
  ]);

  const outrosRemedios = [
    { nome: 'Centrum', quantidade: '1 capsule', horarios: ['9:00', '13:00', '20:00'] },
    { nome: 'Sinupret', quantidade: '2 pills' },
    { nome: 'Mixture', quantidade: '1 dotting sp.' },
    // Adicione mais remédios conforme necessário
  ];

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
  
  <View style={styles.containerMenuIcons}>
 
      <Text style={st.header}>Lista de Remédios</Text>
          <FlatList
            data={remedios}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={st.itemContainer}>
                 <Image source={item.icon} style={st.icon} resizeMode='cover' />
                <Text style={st.nome}>{item.nome}</Text>
                <Text style={st.tempo}>{item.tempo}</Text>
              </View>
            )}
          />
          
    </View>
    
       
       </ScrollView>
      </View>
    </SafeAreaView>
   );
 }


const st = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between"
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tempo: {
    fontSize: 16,
    color: '#555',
  },
  item: {
    fontSize: 16,
    color: '#333',
  },
  icon:{
    width: 50,
    height: 40,
  }
});

export default RemedioPage;
