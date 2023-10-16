import { createContext, useState } from "react";
import { Especialista } from "../api";

const especialistaController = new Especialista();


export const AuthContext = createContext();

export function AuthProvider(props){
   
    const { children } = props;
    const [user, setUser] = useState(null)
  
    const getAllEspecialistas = async() => {
        
        try {

          const response = await especialistaController.getAll();         
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