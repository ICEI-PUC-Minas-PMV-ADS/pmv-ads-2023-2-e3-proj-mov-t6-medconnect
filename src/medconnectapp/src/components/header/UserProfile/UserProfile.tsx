import { View, Text, Image, TouchableOpacity } from "react-native"

import {styles} from "./styles"
import { useAuth } from "../../../hooks/useAuth"
import { publicFiles } from "../../../../config/env";

export const UserProfile = () => {
  
  const { user } = useAuth();


  console.log(`${publicFiles}/${user.fotoPerfil}`)
  return (
   <View style={styles.content}>
    
    <View style={styles.profileImgContainer}>
        <Image 
            source={{uri: `${publicFiles}/${user.fotoPerfil}`}}
            style={styles.profileImg} 
        />           
    </View>
    <Text style={styles.userName}>Olá {user.nome}</Text>
   </View>
  )
}


