export class Especialista {
  async getAll() {
    try {
      const url = "http://192.168.1.6:5000/api/especialistas";
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
}
