import { useEffect, useState } from "react"
import { TextInput, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { createFilter } from "react-search-input"
import Icon from "react-native-vector-icons/Ionicons"
import { styles } from "./styles"
import { IEspecialista } from "../../api/interfaces"

type searchData = {
  data: IEspecialista[],
  especialistasRes: IEspecialista[],
  setDataResult: any,
}

export const Search = ({data, setDataResult, especialistasRes}: searchData) => {
 
  const navigation = useNavigation();
  const KEYS = ["nome", "sobrenome", "descricaoCurta"];
  const [searchField, setSarchField] = useState("")
  useEffect(() => {
    if(especialistasRes)
    {especialistasRes.length < data.length ? setDataResult(especialistasRes) : setDataResult(data)}
  },[especialistasRes])

  const onSearch = (text:string) => {
    setSarchField(text)
    const resultSearch = data.filter(createFilter(text, KEYS));
    setDataResult(resultSearch);
   }

  const sendSearch = () => {
    navigation.navigate("Search", {especialistasRes:especialistasRes})
  }

  return (
   <View  style={styles.content}>

    <TextInput 
        placeholder="Pesquisar..."
        style={styles.inputSearch}
        value={searchField}
        onChangeText={(text) => onSearch(text)}
      />
      <TouchableOpacity onPress={() => sendSearch()} style={styles.searchIcon}>
        <Icon 
          name="search-outline" 
          size={16} 
          color="#333"
          />
      </TouchableOpacity>
     
   </View>
  )
}




