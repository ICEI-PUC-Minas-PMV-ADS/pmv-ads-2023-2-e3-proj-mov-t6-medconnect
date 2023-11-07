import { createContext, useEffect, useState } from "react";
import {User} from "../api"

const userController = new User();
 

export const AuthContext = createContext();

export function AuthProvider(props){
   
    const { children } = props;
    const [user, setUser] = useState(null)
    const [token, setToken] = useState("")

    const login = async(token) => {
       try {
           const response = await userController.getUser(token)
           console.log("response ",response)
           setUser(response) 
           
       } catch (error) {
          console.log(error)
          setUser(null)
       }
       
    }
 
    const data = {
        user,
        token,
        setToken,
        login,       
    }

    return <AuthContext.Provider value= {data}>{children}</AuthContext.Provider>
}