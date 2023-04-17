import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItemButton, ListItemText } from '@mui/material' 
import { useDispatch } from 'react-redux'
import { setActiveDonor } from '../../store/donors';

export const SideBarItem = ({donor}) => {

    const dispatch = useDispatch();

    const onClickDonor = () => {
        dispatch( setActiveDonor({...donor}) );
    }

  return (
    <ListItemButton  onClick={onClickDonor} >
        <ListItemButton>
            <TurnedInNot />
        </ListItemButton>
        <Grid container>
            <ListItemText primary={`${donor.firstname} ${donor.lastname}`} />  
        </Grid>
    </ListItemButton>
  )
}
