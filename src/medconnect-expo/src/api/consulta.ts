import { IP_SERVER } from "../../config/env.ts";
export class Consulta {
  async AddConsulta() {
    try {
      const url = `http://${IP_SERVER}:5000/api/consultas`;
      const formData = {
        DataConsulta: "2023-10-21T20:00:00",
      };
      //const formData = new FormData();
      //formData.append();
      // let teste = formData.getAll("DataConsulta");
      // console.log(typeof teste);
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
