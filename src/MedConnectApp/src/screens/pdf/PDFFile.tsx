import Pdf from "react-native-pdf"
import { publicFiles } from "../../../config/env";


export const PDFFile = () => {
    const source = { uri: `${publicFiles}/docs/client/docteste.pdf`, cache: true };
  return(
      <Pdf
        source={source}
        trustAllCerts={false}         
        style={{ width: "100%", height: "100%"}}     
    />
  )
   
}
