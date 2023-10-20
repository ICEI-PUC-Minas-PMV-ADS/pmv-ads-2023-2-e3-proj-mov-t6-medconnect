import { View, Image, Text, TouchableOpacity } from "react-native"
import { publicFiles } from "../../../config/env"
import { styles } from "./Styles"
 

type CardData = {
    image: any,
    nome: string,
    sobrenome:string,
    descricaoCurta:string,
    categoria:string,
}

export const Card = ({
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
            <TouchableOpacity style={styles.cardSpecBtnView}>
                <Text style={styles.cardSpecBtnViewText}>Visualizar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
