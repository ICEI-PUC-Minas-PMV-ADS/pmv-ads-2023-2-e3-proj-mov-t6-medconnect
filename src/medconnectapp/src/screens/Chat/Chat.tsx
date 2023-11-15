import { useEffect, useState, useRef } from "react";
import { Text, View,Button, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native"
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./Styles";

export const ChatScreen = () => {
  const {user} = useAuth()
  const [connect, setConnect] = useState<HubConnection>(null)
  const [messages, setMessages] = useState([{}]);
  const [msg,setMsg] = useState("")


  const scrollRef = useRef();   

  useEffect(() => {
    const connection = new HubConnectionBuilder()
    .withUrl('http://192.168.1.6:5000/chat')
    .build();
    
    
    connection.on('ReceiveMessage', (usermail, message) => {    
      
      setMessages(prevMessages => [...prevMessages, {u: usermail, m:message}])
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


  const send = (msgValue:string) => {
      if(msgValue.length > 0){
      connect.invoke('SendMessage', user.email , msgValue)
        .catch((error) => {
          console.error(error);
      });
      setMsg("");
    }
      
    
  }

  useEffect(() => {
    console.log(messages)
  }, [messages])
  
  return (
    <SafeAreaView>
      <ScrollView 
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd({animated: true})}
        style={styles.msgArea}>

        
    {
      messages.map((msg, index) => (
        <Text 
          
          key={index}>{msg.u}</Text>
      ))
     }

  </ScrollView>
        <View style={styles.actions}>
          <TextInput 
            value={msg}
            placeholder="Enviar Mensagem"
            onChangeText={(text) => setMsg(text)}            
            style={styles.actions.input}
          />
       
          <TouchableOpacity 
            style={styles.actions.sendMsg}
            onPress={() => send(msg)} >
            <Text style={{color: "white"}}>enviar</Text>
          </TouchableOpacity>
        </View>


       
    </SafeAreaView>
  );
};
