import { useSelector } from "react-redux";
import { getAllMarcas } from "../api/providers";

export const loadMarcas = async ( token ) => {

    const result = await getAllMarcas( token ); 
    const marcas = [];
    result.data.marcas.forEach(marca => {
        marcas.push({id: marca._id, ...marca})
    });
    return  marcas;

    //     const collectionRef = collection( FirebaseDB, 'donors');
    //     const docs = await getDocs(collectionRef);
    
    //     const donors = [];
    //     docs.forEach( doc => {
    //         donors.push({id: doc.id, ...doc.data()})
    //     });
    //     console.log( donors )
    //     return donors;
}