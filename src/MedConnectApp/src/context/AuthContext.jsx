import { createContext, useEffect, useState } from "react";
import {User} from "../api"
import { Auth } from "../api";
import { Alert } from "react-native";

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
    await login(token)
   })()
}, [token])

const startLogin = async(email, password) => {
    try {
        const response = await authController.login(email, password);
        setToken(response.token)
    } catch (error) {
        Alert.alert("Não foi possivel efetuar o login, verifique seu email e senha...")
    }
}
    const register = async (nome, sobrenome, cpf, email, password) => {
        try {
            const result = await authController.register(nome, sobrenome, cpf, email, password);
            const {token} = result 
            console.log(result)
            setToken(token)
            
        } catch (error) {
             Alert.alert("Não foi possivel efetuar o cadastro, Tente novamente mais tarde...")
        }
    }

    const login = async(token) => {
       try {
           const response = await userController.getUser(token)
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
        startLogin,   
        register  
    }

    return <AuthContext.Provider value= {data}>{children}</AuthContext.Provider>
}