import {View, Text, Image} from "react-native"
import { publicFiles } from "../../../config/env"
import { IConsulta, IEspecialista } from "../../api/interfaces"
import { styles } from "./Styles"


type Prop = {
  consulta:IConsulta,
  especialista:IEspecialista
}
export const CardHistory = ({consulta, especialista}: Prop) => {

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
                      
                />
          </View>
            <View>
              <Text>Profissional: {especialista.nome}</Text>
              <Text>Especialidade: {"Cirurgia Bareatrica"}</Text>
              <Text>Data: {consulta.dataConsulta.split("T")[0]}</Text>
              <Text>Hora: {consulta.dataConsulta.split("T")[1]}</Text>
            </View>
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
