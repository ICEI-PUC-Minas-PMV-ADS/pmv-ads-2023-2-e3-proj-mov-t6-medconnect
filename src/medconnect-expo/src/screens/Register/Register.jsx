import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, SafeAreaView, Button, ScrollView, Alert} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInputMask} from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';

import {useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"


const Schema = yup.object({
  username: yup.string().required('Informe seu nome.'),
// email: yup.string().email('Email invalido').required('Informe seu email'),
 /* password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 digitos')
    .required('Informe uma senha.'), */
});


export const RegisterScreen = () => {


  const {control, handleSubmit, formState: {errors} }= useForm({
    resolver: yupResolver(Schema)
  })

  
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');

  const [email, setEmail] = useState('');

  const navigation = useNavigation()
  
  const handleCadastrar = async () => {

    Alert.alert('Cadastro realizado com sucesso!');
    navigation.navigate("Dashboard");
    
   /* if (nome && sobrenome && cpf && email) {
      try {
        const rowsAffected = await insertCadastro({
          nome,
          sobrenome,
          cpf,
          email,
        });
        if (rowsAffected > 0) {
          Alert.alert('Cadastro realizado com sucesso!');

          setNome('');
          setSobrenome('');
          setCpf('');
          setEmail('');
        } else {
          Alert.alert('Não foi possível cadastrar.');
        }
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
        Alert.alert('Erro ao cadastrar. Tente novamente mais tarde.');
      }
    } else {
      Alert.alert('Preencha todos os campos antes de cadastrar.');
    }
    */
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Tecnologia e Saúde</Text>
          <Text style={styles.subtitle}>Cadastre-se</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={[styles.inputContainer,               
                        { borderWidth: errors.username && 1,
                        borderColor: errors.username && '#ff3777'  
                }] }>
            <Icon name="person" size={20} color="blue" style={styles.icon} />
         
            <Controller 
              control={control}
              name="username"
              render={({field: {onChange, onBlur, value}}) => (  
         
              <TextInput
                 
                  placeholder="Nome"
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor="blue"
                  />
                  )}
              />

          </View>
          <View style={styles.inputContainer}>
            <Icon name="person" size={20} color="blue" style={styles.icon} />

            <Controller 
              control={control}
              name="lastname"
              render={({field: {onChange, onBlur, value}}) => (  
              <TextInput
                style={styles.input}
                placeholder="Sobrenome"
                value={value}
                onChangeText={onChange}
                placeholderTextColor="blue"
              />
              )}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name="lock-closed"
              size={20}
              color="blue"
              style={styles.icon}
            />
            <TextInputMask
              style={styles.input}
              placeholder="CPF (apenas números)"
              type={'cpf'}
              value={cpf}
              onChangeText={text => setCpf(text)}
              keyboardType="numeric"
              placeholderTextColor="blue"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="mail" size={20} color="blue" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              placeholderTextColor="blue"
            />
          </View>

          <Button title="Cadastrar" onPress={handleSubmit(handleCadastrar)} color="blue" />
        </View>

        <Text style={styles.loginText}>Já tem cadastro? Faça Login</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  topBar: {
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'blue',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
  },
});
