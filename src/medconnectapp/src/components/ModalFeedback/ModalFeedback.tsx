import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons" 
import { SafeAreaView } from "react-native-safe-area-context"
import { ButtonPrimary } from "../Buttons"
import { styles } from "./Styles"

import { useNavigation } from '@react-navigation/native'

export const ModalFeedback = ({onPress}: any) => {

  const navigation = useNavigation()  
  const confirm = () => {
    navigation.navigate("AppointmentHistory")
  }  

     return(
        <SafeAreaView style={styles.container}>
          <View style={styles.container.content}>
            <View  style={styles.container.content.info}>  
                <Text style={styles.infoSuccess}>Consulta Agendada</Text>
                <Text style={styles.infoSuccess}>Com Sucesso!</Text>
            </View>  

         
            <View style={styles.infoImage}> 
                <Icon name="checkmark" size={100} color="#FFF" />
            </View>

            <View>
                <Text style={styles.info.infoTitle}>Nome do Especialista</Text>
                <Text>Especialidade</Text>
                <Text>Data: 08/09/2023 </Text>
                <Text>Horário: 10:30AM</Text>
            </View>

            <View>
                <ButtonPrimary textButton="Visualizar Agenda" onPress={() => confirm()}/>  
            </View>  
          </View>
        </SafeAreaView>
     )
}