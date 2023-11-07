import {View, Text, Image} from "react-native"
import { publicFiles } from "../../../config/env"
import { IConsulta, IEspecialista } from "../../api/interfaces"


type Prop = {
  consulta:IConsulta,
  especialista:IEspecialista
}
export const CardHistory = ({consulta, especialista}: Prop) => {
  console.log(especialista.fotoPerfil)
  return (
    <View>
     { 
      especialista && consulta ?   
        (
        <>
          <View>
              
              <Image 
                    source={{uri:`${publicFiles}/${especialista.fotoPerfil}`}}
                    style={{width: 50, height: 50}}
                    
              />
        </View>

            <Text>Profissional: {especialista.nome}</Text>
            <Text>Especialidade: {"Cirurgia Bareatrica"}</Text>
            <Text>Data: {consulta.dataConsulta.split("T")[0]}</Text>
            <Text>Hora: {consulta.dataConsulta.split("T")[1]}</Text>
          </>
          )
          :
          (
            <View><Text>Nenhuma consulta agendada...</Text></View>            
          )
      }

    </View>
  )
}
