import {View, Image} from "react-native"
import { publicFiles } from "../../../config/env"

type imgData = {
  image:string
}

export const ImagePerson = ({image}:imgData) => {
 
  return (
    <View>
      <Image source={{uri: `${publicFiles}/${image}`}} />

    </View>
  )
}
