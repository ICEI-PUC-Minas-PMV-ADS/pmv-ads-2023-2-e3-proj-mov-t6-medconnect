import { createContext, useState } from "react";
import { Especialista, Consulta } from "../api";

const especialistaController = new Especialista();
const consultaController = new Consulta();

export const AuthContext = createContext();

export function AuthProvider(props){
   
    const { children } = props;
    const [user, setUser] = useState(null)
  
    const getAllEspecialistas = async() => {
        
        try {

          const response = await especialistaController.getAll();  
          const response2 = await consultaController.AddConsulta();
          console.log(response2)       
          return response;       

        } catch (error) {
            console.log(error)
        }
        
    }

    const data = {
        user,
        getAllEspecialistas,
    }

    return <AuthContext.Provider value= {data}>{children}</AuthContext.Provider>
}