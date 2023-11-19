import { useEffect, useState, useRef } from "react";
import { Text, View, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native"
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import Icon  from "react-native-vector-icons/Ionicons";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./Styles";
import { publicFiles } from "../../../config/env";

export const ChatScreen = () => {
  const {user} = useAuth()
  const [connect, setConnect] = useState<HubConnection>(null)
  const [messages, setMessages] = useState([{u: "adm", m:"Olá, como posso te ajudar?"}]);
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

  return (
    <SafeAreaView>
      <ScrollView 
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd({animated: true})}
        style={styles.msgArea}>

        
    {
      messages.map((msg, index) => (
        
      <View key={index} style={[styles.msgContainer, user.email === msg.u ? styles.msgContainerUser : styles.otherAccount]}>
       {
          user.email === msg.u ? (
            <>
            <View 
               
                style={styles.msgTextArea}>
        
                <Text 
                  style={styles.textUserMsg}
                  >{msg.m}
                </Text>
                
            </View>
            <View style={styles.profileImgContainer}>
              <Image 
                  source={{uri: `${publicFiles}/${user.fotoPerfil}`}}
                  style={styles.profileImg} 
              />           
            </View>
            </>
      ) : 
      
      (
        <>
         <View style={styles.profileImgContainer}>
              <Image 
                  source={{uri: `${publicFiles}/${user.fotoPerfil}`}}
                  style={styles.profileImg} 
              />           
            </View>
            <View 
                key={index}
                style={styles.msgOtherArea}>
        
                <Text 
                  style={styles.textOtherMsg}
                  key={index}>{msg.m}
                </Text>
                
            </View>
           
            </>

      )}
      </View> 
     
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
            <Icon name="send" color="#405254" size={25}/>
          </TouchableOpacity>
        </View>


       
    </SafeAreaView>
  );
};
