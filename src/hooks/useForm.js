import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewEmail } from '../store/donors/donorsSlides';

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    const dispatch = useDispatch()
    // useEffect(() => {
    //     createValidators();
    // }, [ formState ])

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])
    
    
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        }); 
    }

    const onSelectChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        }); 
        console.log( formState )
    }

    const onMultiple = (e, key) => {
        const { target } = e
        const { name, value } = target;
        
        console.log( name  )
        console.log( value )
        console.log( key )
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const addElementArray = ( target ) => {

        dispatch( addNewEmail( target ) );
        // setFormState({
        //     ...formState,
        //     'emails': 'hola',
        // });
        
        console.log( formState )
    }

    const createValidators = () => {
        
        const formCheckedValues = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        addElementArray,
        onSelectChange,
        onMultiple,
        ...formValidation,
        isFormValid
    }
}