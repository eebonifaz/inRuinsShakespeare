import { loadMarcas } from "../../helpers/loadMarcas";
import { setMarcas } from "./marcasSlides";

export const startLoadingMarcas = ( token ) => {
    return  async ( dispatch, getState ) => {
         
      const marcas = await loadMarcas( token);
      console.log( marcas )
      dispatch( setMarcas(marcas) );
    }
  }