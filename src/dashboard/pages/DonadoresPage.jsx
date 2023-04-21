import { IconButton, Typography } from "@mui/material"
import { DashboardLayaut } from "../layaut/DashboardLayaut"
import { NothingSelectedView } from "../view"
import { DonadoresCreate } from "../view/DonadoresCreate"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
// import { setPage, startNewDonors } from "../../store/donors"
import { DonadoresList } from "../view/DonadoresList"
import { DonadoresEdit } from "../view/DonadoresEdit"
 
 

export const DonadoresPage = () => {

  const dispatch = useDispatch(); 
 

 
  const { isSaving, active, page } = useSelector( state => state.marca )

   
  return (
    <DashboardLayaut>
        {
          {
            'list': <DonadoresList />,
            'create': <DonadoresCreate />,
            'edit': <DonadoresEdit />
          }[page]
        }
         
    </DashboardLayaut>
  )
}
