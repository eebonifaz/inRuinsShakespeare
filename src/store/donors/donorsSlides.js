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
        addNewEmail: (state, action ) => {
            if( action.payload == 'emails' ){  
                state.active.emails = [ ...state.active.emails, { 
                    key: state.active.emails.length + 1,
                    value: ""
                } ]
            }
            if( action.payload == 'phones' ){  
                state.active.phones = [ ...state.active.phones, {
                    key: state.active.phones.length + 1,
                    value: ""
                } ]
            }
            if( action.payload == 'comments' ){  
                state.active.comments = [ ...state.active.comments, {
                    key: state.active.comments.length + 1,
                    value: ""
                } ]
            }
        }
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
    addNewEmail,
} = donorSlice.actions;