import { Image, Text, TouchableOpacity } from "react-native"

import { styles } from "./Styles"

interface IconData {
    icon: any,
    category: string,
    background: string,
}

export const MenuIcon = ({icon, category, background="D2D2D2"}: IconData) => {
  return (
   <TouchableOpacity style={[styles.container,  {backgroundColor: background}]}>
    <Image 
        source={icon}
        style={[styles.icon]}
    />
    <Text  style={styles.textStyle}>{category}</Text>
   </TouchableOpacity>
  )
}
