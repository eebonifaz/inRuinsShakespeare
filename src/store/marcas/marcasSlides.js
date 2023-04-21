import { createSlice } from "@reduxjs/toolkit";


export const marcasSlides = createSlice({
    name: 'donor',
    initialState: {
        isSaving: false,
        messageSaved: '',
        marcas: [],
        active: null,
        page: 'list'
    },
    reducers: { 
        creatingNewDonor: ( state, action ) => {
            state.isSaving = true;
        },
        addNewDonor: ( state, action ) => {
            state.donors.push( action.payload );
            state.isSaving = false;
        },
        setActiveDonor: ( state, action ) => {  
            state.active = action.payload ;
        },
        setMarcas: ( state, action ) => {
            state.marcas = action.payload;
        },
        setSaving: ( state, action ) => {

        },
        setPage: ( state, action ) => {
            state.page = action.payload;
        }, 
    }
});

export const {
    creatingNewDonor,
    addNewDonor,
    setActiveDonor,
    setMarcas,
    setSaving,
    updatesDonors,
    setPage,
    addNewEmail,
} = marcasSlides.actions;