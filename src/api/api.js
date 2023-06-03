import axios from "axios"

export const api = axios.create({
    baseURL:"https://my-json-server.typicode.com/rogermfdev/json-server"
})



export const buscar = async (url, setData) =>{
  const respuestaCategorias = await api.get(url);
  setData(respuestaCategorias.data);
};

export const guardarDatos = async (ruta, datos) => {
    try {
      const response = await api.post(ruta, datos);
      console.log("Datos guardados en db.json:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al guardar los datos en db.json:", error);
      throw error;
    }
  }
  

  export const actualizarDatos = async (ruta, datos) => {
    try {
      const response = await api.put(ruta, datos);
      console.log("Datos actualizados en db.json:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar los datos en db.json:", error);
      throw error;
    }
  }

  export const borrarDatos = async (ruta) => {
    try {
      const response = await api.delete(ruta);
      console.log("Datos borrados en db.json:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al borrar los datos en db.json:", error);
      throw error;
    }
  };
  
