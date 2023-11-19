import { Image, Text, TouchableOpacity } from "react-native"

import { styles } from "./Styles"

interface IconData {
    icon: any,
    category: string,
    background: string,
    onPress: any
}

export const MenuIcon = ({onPress, icon, category, background="D2D2D2"}: IconData) => {
  return (
   <TouchableOpacity onPress= {()=> onPress()} style={[styles.container,  {backgroundColor: background}]}>
    <Image 
        source={icon}
        style={[styles.icon]}
        resizeMode="contain"
    />
    <Text  style={styles.textStyle}>{category}</Text>
   </TouchableOpacity>
  )
}
