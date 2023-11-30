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

    async updatePhoto(token:string, data:object){
        const url = `http://${IP_SERVER}:5000/api/user/updatephoto/`
        try {
            const formData = new FormData();
           
                formData.append("photo", {
                    uri: data.uri,
                    name: data.name,
                    type: data.type,
                });
           

            const params = {
                method:"PATCH",
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                },
                body: formData,
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if(response.status !== 200) throw result;

            return result;

        } catch (error) {
            throw error
        }
    }
}