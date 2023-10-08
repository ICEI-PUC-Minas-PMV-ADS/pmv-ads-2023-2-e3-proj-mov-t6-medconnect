import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'usuario' && password === 'senha') {
      alert('Login bem-sucedido');
    } else {
      alert('Login falhou. Verifique seu usuário e senha.');
    }
  };

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
        <Text style={styles.title}>Tela de Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor="gray"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <AntDesign name="user" size={24} color="gray" style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <AntDesign name="lock" size={24} color="gray" style={styles.icon} />
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <Button title="Login" onPress={handleLogin} color="#4C4DDC" />
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
