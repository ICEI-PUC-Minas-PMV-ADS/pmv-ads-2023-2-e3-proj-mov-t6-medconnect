import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {Schema} from "./ValidateSchema";
import { useAuth } from '../../hooks/useAuth';

export const LoginScreen = () => {

   const {token, setToken, startLogin} = useAuth()

  const navigation = useNavigation()

  const {control, handleSubmit, formState: {errors} }= useForm({
    resolver: yupResolver(Schema)
  })


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
/*
  const loginUser = async() => {
    let tokenlogin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhYjFkM2Q0OS0wZTc3LTRjNDAtYmExNi1jNWMzMTVlMTg4MGYiLCJqdGkiOiJjYmE1NzdmNi1iZjhhLTQxYzgtYjkyNC00NDc3YmQ4MGE4NjkiLCJleHAiOjE2OTk3NTM1NTksImlzcyI6IlRva2VuX0lzc3VlciIsImF1ZCI6IlRva2VuX0F1ZGllbmNlIn0.WUjq-fNzHDSjC5wgY2m1nbMl89jgkdmZELmc1iwTIXI";
    setToken(tokenlogin);          
    await login(token);      
  }
    */

  const handleLogin = (data: any) => {
    const {username, password} = data
    startLogin(username,password)
   
    /* if (username === 'usuario' && password === 'senha1') {
         
     
      /* (async()=>{
        
        await loginUser();
       } )();
      
    } else {
      alert('Login falhou. Verifique seu usuário e senha.');
    }*/
  };

  const handleForgotPassword = () => {
    navigation.navigate("RecoverPassword")
    //alert('Um e-mail de recuperação de senha foi enviado.');
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
        <Text style={styles.title}>Tela de Login</Text>
        <View style={[styles.inputContainer,
          { borderWidth: errors.username && 1,
            borderColor: errors.username && 'red'}
          ]}>
          
        <Controller 
              control={control}
              name="username"
              render={({field: {onChange, onBlur, value}}) => (  

                <TextInput
                  style={[styles.input ]}
                  placeholder="Usuário"
                  placeholderTextColor="gray"
                  onChangeText={onChange}
                  value={value}
                />

          )}
          />
          <AntDesign name="user" size={24} color="gray" style={styles.icon} />
        </View>
        
        { errors.username && <Text> { errors.username.message} </Text>}

        <View style={[styles.inputContainer,
          { borderWidth: errors.password && 1,
            borderColor: errors.password && 'red'}
          ]}>
        <Controller 
              control={control}
              name="password"
              render={({field: {onChange, onBlur, value}}) => (  

              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={onChange}
                value={value}
              />
              
              )}             
           />
          
          <AntDesign name="lock" size={24} color="gray" style={styles.icon} />
        </View>
        { errors.password && <Text> { errors.password.message} </Text>}

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <Button title="Login" onPress={handleSubmit(handleLogin)} color="#4C4DDC" />
        <Text style={styles.createAccount}>
          Não tem cadastro? <Text style={styles.link}>Clique aqui</Text>
        </Text>
      </View>
      <View style={styles.sideBar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
    left: 10, // Posição do ícone em relação à borda esquerda
  },
  input: {
    paddingLeft: 40, // Espaço à esquerda para acomodar o ícone
    flex: 1,
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  createAccount: {
    marginTop: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
