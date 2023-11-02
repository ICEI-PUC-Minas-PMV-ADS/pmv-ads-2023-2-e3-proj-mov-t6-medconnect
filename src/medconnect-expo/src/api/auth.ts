import AsyncStorage from "@react-native-async-storage/async-storage";

export class Auth {

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