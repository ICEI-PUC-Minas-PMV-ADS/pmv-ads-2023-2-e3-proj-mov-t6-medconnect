import { createContext, useEffect, useState } from "react";
import { Especialista } from "../api";
import {User} from "../api"

const userController = new User();
const especialistaController = new Especialista();
 

export const AuthContext = createContext();

export function AuthProvider(props){
   
    const { children } = props;
    const [user, setUser] = useState()
  
    useEffect(() =>{
        (async() => {
            let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1NDY5NTNhMS0yOWE3LTQ0N2YtYTVmYy05OGQ3MzhiZDkwMzMiLCJqdGkiOiI5NjY3OTE5Ni1lM2MyLTQ0MGItODcwZC1kNTNkMjdjMTM3ZjkiLCJleHAiOjE2OTg4OTI0MTksImlzcyI6IlRva2VuX0lzc3VlciIsImF1ZCI6IlRva2VuX0F1ZGllbmNlIn0.NYgJXenhpfNPDwuobDAWJze1ZKD2cSqxeCTMRbJgyDc";
            await getUser(token);
        })();        
    },[])

    const getUser = async(token) => {
       try {
           const response = await userController.getUser(token)
           console.log(response)
           setUser(response) 
           
       } catch (error) {
        setUser(null)
       }
       
    }
    
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