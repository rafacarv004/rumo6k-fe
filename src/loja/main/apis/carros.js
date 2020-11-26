
const baseUrl = "http://localhost:8080";

export const registrarCarro = async (params) => {
  return await fetch(baseUrl + "/carros", { 
      method: 'POST',  
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(params)
    });
}
