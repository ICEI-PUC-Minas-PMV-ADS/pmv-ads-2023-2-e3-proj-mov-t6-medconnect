import AsyncStorage from "@react-native-async-storage/async-storage";
import { IP_SERVER } from "../../config/env";

export class Auth {

    async login(email: string,password:string){
       try {
        const url = `http://${IP_SERVER}:5000/api/auth/login`
       
        const data = {
            "Email": email,
            "Senha": password
        }
        const params = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
      
        const response = await fetch(url, params);
        const result = await response.json();
        
      if (response.status !== 200) throw result;

      return result;

       } catch (error) {
        console.log("error ===>", error)
        throw error
       }
    }
    
    async register(nome:string, sobrenome:string, cpf:string, email:string, password:string){
       try {
        const url = `http://${IP_SERVER}:5000/api/auth/register`
       
        const data = {
            "Nome" : nome,
            "Sobrenome" : sobrenome,
            "CPF" : cpf,
            "Email": email,
            "Senha": password
        }
        const params = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
      
        const response = await fetch(url, params);
        const result = await response.json();
        
      if (response.status !== 200) throw result;

      return result;

       } catch (error) {
        console.log("error ===>", error)
        throw error
       }
    }

    
    async setAccessToken(token: string){
        await AsyncStorage.setItem("accessToken",token);
    }

    async getAccessToken() {
        return await AsyncStorage.getItem("accessToken");
      }
    
    async removeToken(){
        await AsyncStorage.removeItem("accessToken"); 
    }

}