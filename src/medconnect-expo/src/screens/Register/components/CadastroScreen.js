import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons" 
import { TextInputMask } from 'react-native-masked-text';
import {useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {Schema} from "./ValidateSchema";
import { useAuth } from '../../../hooks/useAuth';
const apiUrl = 'https://localhost:7009/api/Usuarios';

const CadastroScreen = () => {

  const {register} = useAuth();
  
  const {control, handleSubmit, formState: {errors} }= useForm({
    resolver: yupResolver(Schema)
  });

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const handleRegister = async(data) => {
    const {nome, sobrenome, cpf, email, password} = data;
    (async() => {
      await register(nome, sobrenome, cpf, email, password)
    })()
  }

  const handleCadastrar = async () => {
    if (nome && sobrenome && cpf && email) {
      const data = {
        nome,
        sobrenome,
        cpf,
        email,
      };

      try {
        const response = await axios.post(apiUrl, data);

        if (response.status === 200) {
          Alert.alert('Cadastro realizado com sucesso!');
          setNome('');
          setSobrenome('');
          setCpf('');
          setEmail('');
        } else {
          Alert.alert('Não foi possível cadastrar. Motivo:', response.data.message || 'Erro desconhecido');
        }
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
        Alert.alert('Erro ao cadastrar. Tente novamente mais tarde.');
      }
    } else {
      Alert.alert('Preencha todos os campos antes de cadastrar.');
    }
  };

  const handleGetUsuarios = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log('Usuários:', response.data);
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
    }
  };

  const handlePutUsuario = async (id) => {
   
    const data = {
      nome: 'Novo Nome',
      sobrenome: 'Novo Sobrenome',
      cpf: '12345678901',
      email: 'novemail@example.com'
    };

    try {
      const response = await axios.put(`${apiUrl}/${id}`, data);

      if (response.status === 200) {
        console.log('Usuário atualizado com sucesso!');
      } else {
        console.error('Não foi possível atualizar o usuário. Motivo:', response.data.message || 'Erro desconhecido');
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  const handleDeleteUsuario = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      console.log('Usuário excluído com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  };
/*
  useEffect(() => {
   
    handleGetUsuarios();
  }, []);
*/
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Tecnologia e Saúde</Text>
          <Text style={styles.subtitle}>Cadastre-se</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={[styles.inputContainer, 
              { borderWidth: errors.nome && 1,
                borderColor: errors.nome && '#ff3777'  
              }]}>
          <Icon name="person" size={20} color="blue" style={styles.icon}/>
          
          <Controller 
              control={control}
              name="nome"
              render={({field: {onChange, onBlur, value}}) => (  
                <TextInput
                  style={styles.input}
                  placeholder="Nome"
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor="blue"
                />
              )}
            />
          </View>

          <View style={[styles.inputContainer, 
              { borderWidth: errors.sobrenome && 1,
                borderColor: errors.sobrenome && '#ff3777'  
              }]}>
            <Icon name="person" size={20} color="blue" style={styles.icon} />
          
         <Controller 
             control={control}
              name="sobrenome"
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
          <View style={[styles.inputContainer, 
              { borderWidth: errors.cpf && 1,
                borderColor: errors.cpf && '#ff3777'  
              }]}>
            <Icon name="lock-closed" size={20} color="blue" style={styles.icon} />
      
       <Controller 
          control={control}
              name="cpf"
              render={({field: {onChange, onBlur, value}}) => (      
            <TextInputMask
              style={styles.input}
              placeholder="CPF (apenas números)"
              type={'cpf'}
              value={value}
              onChangeText={onChange}
              keyboardType="numeric"
              placeholderTextColor="blue"
            />
                )}
            />
          </View>
          <View style={[styles.inputContainer, 
              { borderWidth: errors.email && 1,
                borderColor: errors.email && '#ff3777'  
              }]}>
            <Icon name="mail" size={20} color="blue" style={styles.icon} />
        <Controller 
          control={control}
              name="email"
              render={({field: {onChange, onBlur, value}}) => (     
        
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="email-address"
                  placeholderTextColor="blue"
                />
              )}
            />
          </View>

          <View style={[styles.inputContainer, 
              { borderWidth: errors.password && 1,
                borderColor: errors.password && '#ff3777'  
              }]}>

            <Icon name="key" size={20} color="blue" style={styles.icon} />
       <Controller 
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}}) => (     
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
              placeholderTextColor="blue"
            />
               )}
            />
          </View>
          <Button title="Cadastrar" onPress={handleSubmit(handleRegister)} color="blue" />
        </View>
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
});

export default CadastroScreen;
