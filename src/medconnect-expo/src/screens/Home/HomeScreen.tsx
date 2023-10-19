import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../../theme';
export function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
          <Text style={styles.headerText}>Tecnologia e{'\n'}Saúde</Text>
      </View>

      <View style={styles.principal}>
        
        <Image
          source={require("../../assets/images/person.png")}
          style={styles.medica}
          resizeMode="contain"
        />
        <View style={styles.footerContent}>
          <View style={styles.box}>
            <Text style={styles.footerTextBold}>
              O Mais Completo App de Telemedicina
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.footerText}>
              Tenha mais suporte à saúde com um aplicativo que te conecta aos melhores especialistas de saúde.
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.button, styles.buttonLogin]}
            onPress={() => {
              // Adicione ação de login aqui
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonTextLogin } onPress={ () => navigation.navigate("Login")}>Faça Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCadastro]}
            onPress={() => {
              // Adicione ação de cadastro aqui
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonTextCadastro} onPress={() => navigation.navigate("Register")}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.primaryColor,
    flexDirection: 'column',
  },
  header: {
    height: '12%',
    flexDirection: 'row',
    padding: 10,
    marginLeft: '10%',
    marginRight: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 61,
    height: 61,
  },
  headerText: {
    textAlign: 'center',
    color: "white",
    fontSize: 20,
  },
  principal: {
    height: '88%',
    padding: '2%',
  },
  medica: {
    zIndex: 1,
    width: "100%",
    height: "70%",
    marginLeft: "12%",
  },
  footerContent: {
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    left: '2%',
    height: '45%',
    width: '100%',
    marginBottom: '8%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: '3%',
  },
  box: {
    padding: 10,
    textAlign: 'center',
  },
  footerTextBold: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
  },
  buttonLogin: {
    backgroundColor: '#EEEEFC',
  },
  buttonCadastro: {
    backgroundColor: '#4C4DDC',
  },
  buttonTextLogin: {
    color: 'black',
    fontSize: 18,
  },
  buttonTextCadastro: {
    color: 'white',
    fontSize: 18,
  },
});