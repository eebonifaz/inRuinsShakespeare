import { useSelector } from "react-redux";
import { getAllMarcasService, signInApiWithEmailAndPassword } from "./service";


export const loginApiWithEmailPassword = async({ email, password }) => {
    
    try {

        const result = await signInApiWithEmailAndPassword({ email, password });
        
        if( result.status == 200 ){
            const { token, usuario } = result.data;
            const { name, uid } = usuario; 
            return {
                ok: true,
                uid, name, token 
            }
        }else{
            return { ok: false, errorMessage: error.message }
        } 
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}


export const getAllMarcas = async(token) => {
    
    try {
        return await getAllMarcasService(token);  
    } catch (error) { 
        return { ok: false, errorMessage: error.message }
    }

}