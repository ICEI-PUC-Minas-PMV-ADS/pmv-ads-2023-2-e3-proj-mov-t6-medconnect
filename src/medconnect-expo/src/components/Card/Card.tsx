import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
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

export const Card = (Prop: CardData) => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.cardSpecImgContainer}>
             <Image 
                  style={styles.cardSpecImgProfile} 
                  source={{uri:`${publicFiles}/${Prop.fotoPerfil}`}} 
                  resizeMode="contain"  
                />
        </View>
        <View style={styles.cardSpecInfo}>
            <Text style={styles.titleInfo}>{Prop.nome} {Prop.sobrenome} </Text>
            <Text style={styles.description}>
                { Prop.descricaoCurta.length > 100 
                   ? Prop.descricaoCurta.substring(0, 100)+"..." 
                   : Prop.descricaoCurta
                }</Text>
            <Text style={[styles.subtitleInfo, {color:"#1f5e29"}]}>{Prop.categoria}</Text>
           
            <TouchableOpacity onPress={() => navigation.navigate("Specialist", {especialista: Prop} )} style={styles.cardSpecBtnView}>
                <Text style={styles.cardSpecBtnViewText}>Visualizar</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}
