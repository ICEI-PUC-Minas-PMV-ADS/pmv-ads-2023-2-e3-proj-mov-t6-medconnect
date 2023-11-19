import {View, Text, Image, TouchableOpacity} from "react-native"
import { publicFiles } from "../../../config/env"
import { IConsulta, IEspecialista } from "../../api/interfaces"
import { styles } from "./Styles"

import { useNavigation } from "@react-navigation/native"

type Prop = {
  consulta:IConsulta,
  especialista:IEspecialista
}
export const CardHistory = ({consulta, especialista}: Prop) => {

  const navigation = useNavigation() 

  return (
    <View>
     { 
      especialista && consulta ?   
        (
        <View style={styles.cardContainer}>
            <View  style={styles.cardContainer.image}>
                
                <Image 
                      source={{uri:`${publicFiles}/${especialista.fotoPerfil}`}}
                      style={styles.cardContainer.image.fotoPerfil}
                      resizeMode="contain"
                />
          </View>
            <View>
              <Text>Profissional: {especialista.nome}</Text>
              <Text>Especialidade: {"Cirurgia Bareatrica"}</Text>
              <Text>Data: {consulta.dataConsulta.split("T")[0]}</Text>
              <Text>Hora: {consulta.dataConsulta.split("T")[1]}</Text>
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate("AppointmentCall",{especialista:especialista})} style={styles.cardContainer.cardSpecBtnView}>
                <Text style={styles.cardContainer.cardSpecBtnViewText}>Visualizar</Text>
            </TouchableOpacity>
          </View>
          )
          :
          (
            <View><Text>Nenhuma consulta agendada...</Text></View>            
          )
      }

    </View>
  )
}
