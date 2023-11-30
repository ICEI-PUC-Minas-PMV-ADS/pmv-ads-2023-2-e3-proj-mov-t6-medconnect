import { IP_SERVER } from "../../config/env.ts";
export class Consulta {
  async newConsulta(data: Object, token: string) {
    console.log(data);
    try {
      const url = `http://${IP_SERVER}:5000/api/consultas`;
      const formData = {
        DataConsulta: data,
      };
     
      const params = {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}` 
          },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(token: string) {
   
    try {
      const url = `http://${IP_SERVER}:5000/api/Consultas/GetAll`;
           
      const params = {
        method: "GET",
        headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}` 
          },       
      };

      const response = await fetch(url, params);
      const result = await response.json();
      console.log(result)
      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async cancel(consultaId:string, token: string){
    try {
      const url = `http://${IP_SERVER}:5000/api/Consultas/${consultaId}`;
           
      const params = {
        method: "PUT",
        headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}` 
          },       
      };

      const response = await fetch(url, params);
      const result = await response.json();
      console.log(result)
      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  
}
