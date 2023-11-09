import { createContext, useEffect, useState } from "react";
import {User} from "../api"
import { Auth } from "../api";

const userController = new User();
const authController = new Auth() 

export const AuthContext = createContext();

export function AuthProvider(props){
   
    const { children } = props;
    const [user, setUser] = useState(null)
    const [token, setToken] = useState("")

    useEffect(() => {
        (async() => {
       
            let access = await authController.getAccessToken()
            if(access){
                
                console.log("Token" ,access)
                setToken(access)
            }
            else setUser(null)  
       
    })()     
},[])


useEffect(() => {
   (async()=>{
    console.log(token)
    await login(token)
   })()
}, [token])


    const login = async(token) => {
       try {
           const response = await userController.getUser(token)
           console.log("response ",response)
           await authController.setAccessToken(token)
           
           setUser(response) 
           
       } catch (error) {
          console.log(error)
          setUser(null)
       }
       
    }
 
    const data = {
        user,
        setUser,
        token,
        setToken,
        login,       
    }

    return <AuthContext.Provider value= {data}>{children}</AuthContext.Provider>
}