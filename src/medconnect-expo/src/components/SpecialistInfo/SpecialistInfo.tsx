import { View, Image, Text, TouchableOpacity } from "react-native"
import { publicFiles } from "../../../config/env"
import { styles } from "./Styles"
 

type CardData = {
    image: string,
    nome: string,
    sobrenome:string,
    descricaoCurta:string,
    categoria:string,
}

export const SpecialistInfo = ({
      image, 
      nome = "", 
      sobrenome="", 
      descricaoCurta = "Doutor especialista em cirurgia plasticas, doutor especialista em cirurgia plasticas... ",
      categoria="Cirurgia Plastica"  
    } : CardData) => {
 console.log(`${publicFiles}`)
  return (
    <View style={styles.container}>
        <View style={styles.cardSpecImgContainer}>
             <Image style={styles.cardSpecImgProfile} source={{uri:`${publicFiles}/${image}`}} />
        </View>
        <View style={styles.cardSpecInfo}>
            <Text>{nome} {sobrenome} </Text>
            <Text>{ descricaoCurta }</Text>
            <Text>{categoria}</Text>
        </View>
    </View>
  )
}
