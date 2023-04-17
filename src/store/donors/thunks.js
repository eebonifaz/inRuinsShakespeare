import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewDonor, creatingNewDonor, setActiveDonor, setDonors } from "./donorsSlides"
import { loadDonors } from "../../helpers/loadDonors"

const newDonor = {
    name: '',
    firstname: '',
    lastname: '',
    companyname: '',
    typeperson: '',
    street: '',
    city: '',
    province: '',
    postalcode: '',
    amount: '',
    monthly: '',
    createdate: '',
    eblast: '',
    attendance: '',
    type_person: '',
    donor_level: '',
    emails: [],
    phones: [],
    comments: [],
    date: new Date().getTime(),
}

export const startNewDonors = () => {
  return  async ( dispatch, getState ) => {
    dispatch( creatingNewDonor() );
 

    const newDoc = doc( collection( FirebaseDB, `donors`  ) )
    await setDoc( newDoc, newDonor );

    newDonor.id = newDoc.id;
    

    dispatch( addNewDonor(newDonor) );
    dispatch( setActiveDonor(newDonor) );
    
  }
}

export const startLoadingDonors = () => {
  return  async ( dispatch, getState ) => {
    const donors = await loadDonors();

    dispatch( setDonors(donors) );
  }
}

