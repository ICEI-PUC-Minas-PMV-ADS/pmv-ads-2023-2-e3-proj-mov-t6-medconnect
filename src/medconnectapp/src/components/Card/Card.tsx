import { View, Image, Text, TouchableOpacity } from "react-native"
import { styles } from "./Styles"
 

type CardData = {
    image: any,
}

export const Card = ({image} : CardData) => {

  return (
    <View style={styles.container}>
        <View style={styles.cardSpecImgContainer}>
             <Image style={styles.cardSpecImgProfile} source={image} />
        </View>
        <View style={styles.cardSpecInfo}>
            <Text>DR. André Araujo Rocha</Text>
            <Text>Doutor especialista em cirurgia plasticas, doutor especialista em cirurgia plasticas... </Text>
            <Text>Categoria: Cirurgia Plastica</Text>
            <TouchableOpacity style={styles.cardSpecBtnView}>
                <Text style={styles.cardSpecBtnViewText}>Visualizar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
