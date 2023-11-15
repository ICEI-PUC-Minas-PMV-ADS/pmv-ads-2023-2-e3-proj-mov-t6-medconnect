import { useEffect, useState, useRef } from "react";
import { Text, View,Button, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native"
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export const ChatScreen = () => {

  const [connect, setConnect] = useState<HubConnection>(null)
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();   

  useEffect(() => {
    const connection = new HubConnectionBuilder()
    .withUrl('http://192.168.1.6:5000/chat')
    .build();
    
    
    connection.on('ReceiveMessage', (user, message) => {    
      setMessages(prevMessages => [...prevMessages, message])
    });

    if(!connect)
      setConnect(connection)
 
  },[]);

  
  useEffect(() => {
 
   if(connect){ 

      connect.start()
      .then(() => {
        console.log('Conectado');
      })
      .catch((error) => {
        console.error(error);
      });

  
}
  }, [connect])


  const send = () => {
   
      connect.invoke('SendMessage', 'Usuário', 'Olá, mundo!')
        .catch((error) => {
          console.error(error);
      });
      
    
  }

  useEffect(() => {
    console.log(messages)
  }, [messages])
  
  return (
    <SafeAreaView>
      <ScrollView 
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd({animated: true})}
        style={{
            position:"absolute",
            zIndex:99,
            width: widthScreen,
            height: heightScreen*0.75 ,
            backgroundColor:"red"
      }}>

        
    {
      messages.map((msg, index) => (
        <Text key={index}>{msg}</Text>
      ))
     }

  </ScrollView>
        <View style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignSelf:"flex-end",  
          alignItems: "flex-end",        
          
          position:"relative",
          zIndex:10,
          bottom:"10%",
          
        }}>
          <TextInput 
            value=""
            placeholder="Enviar Mensagem"
            onChangeText={() => {}}
            style={{
              width:"85%",
              height: 50,
              borderWidth: 0.2,
              borderColor: "#666"
            }}
          />
       
          <TouchableOpacity 
            style={{
                width: 50, 
                height: 50,
                backgroundColor: "blue",
                borderRadius: 25,
                justifyContent:"center",
                alignItems:"center"
              }}
            onPress={() => send()} >
            <Text style={{color: "white"}}>enviar</Text>
          </TouchableOpacity>
        </View>


       
    </SafeAreaView>
  );
};
