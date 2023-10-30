import { View, Image, Text, TouchableOpacity } from "react-native"
import { publicFiles } from "../../../config/env"
import { styles } from "./Styles"
 

type CardData = {
    fotoPerfil: string,
    nome: string,
    sobrenome:string,
    descricaoCurta:string,
    categoria:string,
    atendimentos:object,
}

export const SpecialistInfo = (Prop : CardData) => {
 console.log("FOTO",Prop)
  return (
    <View style={styles.container}>
        <View style={styles.cardSpecImgContainer}>
             <Image style={styles.cardSpecImgProfile} source={{uri:`${publicFiles}/${Prop.image}`}} />
        </View>
        <View style={styles.cardSpecInfo}>
            <Text>{Prop.nome} {Prop.sobrenome} </Text>
            <Text>{ Prop.descricaoCurta }</Text>
            <Text>{Prop.categoria}</Text>
        </View>
    </View>
  )
}
