import React from 'react'
import {useNavigation} from "@react-navigation/native"

import {View, Text, Button} from "react-native"

export const IndexScreen = () => {
  const navigation = useNavigation()  
  return (

    
    <View style={{gap: 10, marginHorizontal: 20}}>
        <Button title="Home" onPress={() => navigation.navigate("Home")}/>
        <Button title="Login" onPress={() => navigation.navigate("Login")}/>
        <Button title="Cadastro" onPress={() => navigation.navigate("Register")}/>
        <Button title="Recuperar Senha" onPress={() => navigation.navigate("RecoverPassword")}/>
        <Button title="Dashboard" onPress={() => navigation.navigate("Dashboard")}/>
        <Button title="Exemplo Validar Campos" onPress={() => navigation.navigate("ValidarCampos")}/>        
        <Button title="Search" onPress={() => navigation.navigate("Search")}/>        
        <Button title="Success" onPress={() => navigation.navigate("ModalFeedback")}/>        
        <Button title="Feed" onPress={() => navigation.navigate("Feedback")}/>        
        <Button title="Chat" onPress={() => navigation.navigate("ChatScreen")}/>        
        <Button title="Exames" onPress={() => navigation.navigate("Exames")}/>        
        <Button title="PDF" onPress={() => navigation.navigate("PDF")}/>        
         
         
    </View>
  )
}
