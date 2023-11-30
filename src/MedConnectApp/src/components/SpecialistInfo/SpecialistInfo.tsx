import { View, Image, Text, TouchableOpacity, ScrollView, FlatList } from "react-native"
import { publicFiles } from "../../../config/env"
import { styles } from "./Styles"
import { IEspecialista } from "../../api/interfaces"
 

export const SpecialistInfo = ({especialista} : IEspecialista) => {
  
  return (
    <View style={styles.container}>
        <View style={styles.profInfo}>
              <View style={styles.cardSpecImgContainer}>
                  <Image style={styles.cardSpecImgProfile} source={{uri:`${publicFiles}/${especialista.fotoPerfil}`}} />
              </View>
              <View style={styles.cardSpecInfo}>
                  <Text style={styles.cardTextInfo}>{especialista.nome} {especialista.sobrenome} </Text>
                  <Text style={styles.cardTextInfo}>{ especialista.descricaoCurta.substring(0, 100)+"..."  }</Text>
                  <Text style={styles.cardTextInfo}>{especialista.especialidade}</Text>
              </View>
            </View>
          <View>
           <Text style={{width: 340}}>{especialista.descricaoDetalhada.substring(0, 400)+"..." }</Text>
           
           <ScrollView horizontal>
            {
              especialista.imagemsPublicidade.map((img) => (
                <Image 
                    key={img.id}
                    source={{uri: `${publicFiles}/${img.urlImage}`}} 
                    style={{width: 220, height: 180, margin:5}}
                   />
              ))
            }
            </ScrollView>
          
        </View>
    </View>
  )
}
