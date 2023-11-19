import { IP_SERVER } from "../../config/env.ts";
export class Especialista {
  async getAll() {
    try {
      const url = `http://${IP_SERVER}:5000/api/especialistas`;
      const params = {
        method: "GET",
        headers: {},
      };
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw Error;

      return result;
   
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  }

  async getOne(eId: string){
    try {
      const url = `http://${IP_SERVER}:5000/api/especialistas/${eId}`;
      const params = {
        method: "GET",
      };
      const response = await fetch(url, params);
      const result = await response.json();

      if(response.status != 200) throw Error;

      return result;
      
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  }
}
