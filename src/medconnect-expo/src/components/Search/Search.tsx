import { TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { styles } from "./styles"

export const Search = () => {
  return (
   <View  style={styles.content}>

    <TextInput 
        placeholder="Pesquisar..."
        style={styles.inputSearch}
      />
      <View  style={styles.searchIcon}>
        <Icon 
          name="search-outline" 
          size={16} 
          color="#333"
          />
      </View>
     
   </View>
  )
}
