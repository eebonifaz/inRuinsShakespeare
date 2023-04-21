import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { startLoadingMarcas } from '../store/marcas/thunks';
import { logout } from '../store/auth';

// import { FirebaseAuth } from '../firebase/config';
// import { login, logout } from '../store/auth';
// import { startLoadingMarcas } from '../store/marcas';



export const useCheckAuth = () => {
  
    const { status, token } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log( token ) 
        // if( !token ) return dispatch( logout() );
        // onAuthStateChanged( FirebaseAuth, async( user ) => {
        // if ( !user ) return dispatch( logout() );

        // const { uid, email, displayName, photoURL } = user;
        // dispatch( login({ uid, email, displayName, photoURL }) );
        // })
        () => {
            dispatch( startLoadingMarcas( token ) ); 
            if( !token ) return dispatch( logout() );
        }


    }, []);

    return status;
} 