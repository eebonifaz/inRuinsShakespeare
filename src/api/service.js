import axios from "axios";
import { urlApi } from "./config";



// function signInWithEmailAndPassword(auth: Auth, email: string, password: string): Promise<UserCredential>;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


export const signInApiWithEmailAndPassword = ({ email, password }) => { 
    let data = JSON.stringify({correo:email, password }); 
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/auth/login`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    return axios.request(config); 
 
}


export const getAllMarcasService = (token) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity, 
    url: `${urlApi}/api/marcas`,
    headers: { 
      'x-token': token
    }
  };

  return axios.request(config); 
}