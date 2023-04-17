import { IconButton, Typography } from "@mui/material"
import { DashboardLayaut } from "../layaut/DashboardLayaut"
import { NothingSelectedView } from "../view"
import { DonadoresCreate } from "../view/DonadoresCreate"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { setPage, startNewDonors } from "../../store/donors"
import { DonadoresList } from "../view/DonadoresList"
import { DonadoresEdit } from "../view/DonadoresEdit"
 
 

export const DonadoresPage = () => {

  const dispatch = useDispatch(); 

  const onClickNewDonors = () => {
    // dispatch( startNewDonors() );
    dispatch( setPage( 'create' )  )
  }

  const { isSaving, active, page } = useSelector( state => state.donor )
   
  return (
    <DashboardLayaut>
        {
          {
            'list': <DonadoresList />,
            'create': <DonadoresCreate />,
            'edit': <DonadoresEdit />
          }[page]
        }
        
  
        <IconButton
          onClick={ onClickNewDonors }
            size='large'
            disabled={ isSaving }
            sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
            }}
        >
            <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
    </DashboardLayaut>
  )
}
