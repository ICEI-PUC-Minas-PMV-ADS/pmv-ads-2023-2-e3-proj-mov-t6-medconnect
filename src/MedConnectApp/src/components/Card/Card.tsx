import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { publicFiles } from "../../../config/env"
import { styles } from "./Styles"
import { IEspecialista } from "../../api/interfaces"
 

type CardData = {
    fotoPerfil: string,
    nome: string,
    sobrenome:string,
    descricaoCurta:string,
    especialidade:string,
    atendimentos:object,
}

export const Card = ({especialista}: IEspecialista) => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.cardSpecImgContainer}>
             <Image 
                  style={styles.cardSpecImgProfile} 
                  source={{uri:`${publicFiles}/${especialista.fotoPerfil}`}} 
                  resizeMode="contain"  
                />
        </View>
        <View style={styles.cardSpecInfo}>
            <Text style={styles.titleInfo}>{especialista.nome} {especialista.sobrenome} </Text>
            <Text style={styles.description}>
                { especialista.descricaoCurta.length > 100 
                   ? especialista.descricaoCurta.substring(0, 100)+"..." 
                   : especialista.descricaoCurta
                }</Text>
            <Text style={[styles.subtitleInfo, {color:"#1f5e29"}]}>{especialista.especialidade}</Text>
           
            <TouchableOpacity onPress={() => navigation.navigate("Specialist", {especialista: especialista} )} style={styles.cardSpecBtnView}>
                <Text style={styles.cardSpecBtnViewText}>Visualizar</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}
