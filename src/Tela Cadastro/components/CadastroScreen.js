import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';

import { insertCadastro } from '../services/ServiceCadastroDb'; 

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  
  const [email, setEmail] = useState('');

  const handleCadastrar = async () => {
    if (nome && sobrenome && cpf && email) {
      try {
        const rowsAffected = await insertCadastro({ nome, sobrenome, cpf, email });
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
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Tecnologia e Saúde</Text>
          <Text style={styles.subtitle}>Cadastre-se</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={20} color="blue" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
              placeholderTextColor="blue"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={20} color="blue" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Sobrenome"
              value={sobrenome}
              onChangeText={setSobrenome}
              placeholderTextColor="blue"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={20} color="blue" style={styles.icon} />
            <TextInputMask
              style={styles.input}
              placeholder="CPF (apenas números)"
              type={'cpf'}
              value={cpf}
              onChangeText={(text) => setCpf(text)}
              keyboardType="numeric"
              placeholderTextColor="blue"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={20} color="blue" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              placeholderTextColor="blue"
            />
          </View>

          <Button title="Cadastrar" onPress={handleCadastrar} color="blue" />
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

export default CadastroScreen;
