import { View, Text, Image } from "react-native"

import {styles} from "./styles"

export const UserProfile = () => {
  return (
   <View style={styles.content}>
    <Text>Olá João</Text>
    <View style={styles.profileImgContainer}>
        <Image 
            source={require('../../../assets/images/persona01.jpg')}
            style={styles.profileImg} 
        />
           
    </View>
  
   </View>
  )
}
