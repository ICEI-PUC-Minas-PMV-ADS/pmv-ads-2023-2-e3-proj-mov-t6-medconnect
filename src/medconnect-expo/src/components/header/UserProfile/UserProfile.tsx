import { View, Text, Image } from "react-native"

import {styles} from "./styles"
import { useAuth } from "../../../hooks/useAuth"
import { publicFiles } from "../../../../config/env";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Auth } from "../../../api";

const authController = new Auth();

export const UserProfile = () => {
  
  const { user, token, setToken, setUser } = useAuth();

  const logout = async() => {
    setToken(null);
    await authController.removeToken();
    setUser(null)
  }

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
    <TouchableOpacity onPress={() => logout()}>
      <Text>Sair</Text>
    </TouchableOpacity>
   </View>
  )
}
