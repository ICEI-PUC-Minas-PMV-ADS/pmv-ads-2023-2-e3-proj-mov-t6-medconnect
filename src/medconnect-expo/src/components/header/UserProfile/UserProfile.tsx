import { View, Text, Image } from "react-native"

import {styles} from "./styles"
import { useAuth } from "../../../hooks/useAuth"
import { publicFiles } from "../../../../config/env";

export const UserProfile = () => {
  
  const { user } = useAuth();
  console.log(`${publicFiles}/${user.fotoPerfil}`)
  return (
   <View style={styles.content}>
    <Text style={styles.userName}>Olá {user.nome}</Text>
    <View style={styles.profileImgContainer}>
        <Image 
            source={{uri: `${publicFiles}/${user.fotoPerfil}`}}
            style={styles.profileImg} 
        />
           
    </View>
  
   </View>
  )
}
