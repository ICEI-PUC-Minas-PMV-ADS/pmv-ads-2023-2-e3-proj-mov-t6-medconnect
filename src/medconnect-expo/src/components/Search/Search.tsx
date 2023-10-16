import { TextInput, View } from "react-native"
import { createFilter } from "react-search-input"
import Icon from "react-native-vector-icons/Ionicons"
import { styles } from "./styles"

export const Search = ({data, setDataResult}: any) => {
 
  const KEYS = ["nome", "sobrenome", "descricaoCurta"]

  const onSearch = (text:string) => {
   const resultSearch = data.filter(createFilter(text, KEYS));
   setDataResult(resultSearch);
  }

  return (
   <View  style={styles.content}>

    <TextInput 
        placeholder="Pesquisar..."
        style={styles.inputSearch}
        onChangeText={(text) => onSearch(text)}
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
