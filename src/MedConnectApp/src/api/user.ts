import { IP_SERVER } from "../../config/env";

export class User{
    async getUser(token:string){
        try{
            const url = `http://${IP_SERVER}:5000/api/user/`;
            const params = {
                method: "POST",
                headers:{
                    Authorization: `Bearer ${token}`
                },
            };
            
            const response = await fetch(url, params);
            const result   =  await response.json();

            if(response.status !== 200) throw result;
            console.log(response)
            return result

        }catch(error){
            throw error
        }
    }
}