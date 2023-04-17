import { createSlice } from "@reduxjs/toolkit";


export const donorSlice = createSlice({
    name: 'donor',
    initialState: {
        isSaving: false,
        messageSaved: '',
        donors: [],
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
        setDonors: ( state, action ) => {
            state.donors = action.payload;
        },
        setSaving: ( state, action ) => {

        },
        setPage: ( state, action ) => {
            state.page = action.payload;
        },
        updatesDonors: ( state, action ) => {

        },
    }
});

export const {
    creatingNewDonor,
    addNewDonor,
    setActiveDonor,
    setDonors,
    setSaving,
    updatesDonors,
    setPage,
} = donorSlice.actions;