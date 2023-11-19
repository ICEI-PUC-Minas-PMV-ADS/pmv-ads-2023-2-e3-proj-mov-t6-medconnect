import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../theme';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {Schema} from "./ValidateSchema";

export const RecoverPasswordScreen = () => {

  const navigation = useNavigation()

  const {control, handleSubmit, formState: {errors} }= useForm({
    resolver: yupResolver(Schema)
  })


  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    alert('Um e-mail de recuperação de senha foi enviado.');
  };

  const screenHeight = Dimensions.get('window').height;

  return (

  <View style={styles.container}>
      <View style={styles.sideBar}></View>
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t6-medconnect/blob/main/docs/img/Logo.jpg?raw=true',
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Recuperar Senha</Text>

        <Text style={styles.recuperarsenha}>Um e-mail será enviado ao endereço de e-mail cadastrado, com instruções para redefinir sua senha
        </Text>
        <View style={[styles.inputContainer,
          { borderWidth: errors.email && 1,
            borderColor: errors.email && 'red'}
          ]}>

        <Controller 
              control={control}
              name="email"
              render={({field: {onChange, value}}) => (  

                <TextInput
                  style={[styles.input ]}
                  placeholder="E-mail Cadastrado"
                  placeholderTextColor="gray"
                  onChangeText={onChange}
                  value={value}
                />

          )}

         />
         <Icon name="user" size={24} color="gray" style={styles.icon} /> 
        </View>

        { errors.email && <Text> { errors.email.message} </Text>}

        <TouchableOpacity
            style={[styles.button, styles.buttonText]}
            onPress={() => {
              // Adicione ação de cadastro aqui
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonTextRedefinir} onPress={handleSubmit(handleForgotPassword)}>Cadastre-se</Text>
          </TouchableOpacity>

      </View>
      <View style={styles.sideBar}></View>
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: globalStyles.primaryColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sideBar: {
      flex: 1.5,
      backgroundColor: '#4C4DDC',
    },
    content: {
      flex: 7,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      color: 'black',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
      height: 40,
      width: '100%',
    },
    icon: {
      position: 'absolute',
      left: 10,
    },
    input: {
      paddingLeft: 40,
      flex: 1,
    },

    logo: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginBottom: 20,
    },
    recuperarsenha: {
      color: 'gray',
      marginTop: 10,
      marginBottom: 10,
      textAlign: 'center',
    },
    buttonTextRedefinir: {
      color: 'white',
      fontSize: 18,
    },
    button: {
      padding: 10,
      borderRadius: 10,
      margin: 5,
      alignItems: 'center',
      zIndex:5,
    },
    buttonText: {
      backgroundColor: '#4C4DDC',
    },
  });