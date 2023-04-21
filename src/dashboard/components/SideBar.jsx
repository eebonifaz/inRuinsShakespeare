import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem";
import { setPage } from "../../store/donors";


export const SideBar = ({drawerWidth}) => {

    const { marcas } = useSelector( state => state.marca );
    const dispatch = useDispatch(); 
        
    const onDonnorList = ( event ) => { 
        event.preventDefault();
        dispatch( setPage( 'list' )  )
    };

    return (
        <Box
            component='nav'
            sx={{ width: {sm: drawerWidth}, flexShrink: { sm: 0} }} 
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component={'div'} >
                        <img src="https://pilegaltech.com/logo-lexvalor6.png" />
                    </Typography>
                </Toolbar>
                <Divider />

                <List> 
                    <ListItemButton  onClick={onDonnorList} >
                        <ListItemButton>
                            <TurnedInNot />
                        </ListItemButton>
                        <Grid container>
                            <ListItemText primary={`Mis Marcas`} />  
                        </Grid>
                    </ListItemButton>
                </List>
                {/* <List>
                    {
                        donors.map( donor => (
                            <SideBarItem donor={donor} key={donor.id} />
                        ))
                    }
                </List> */}
            </Drawer>
        </Box>
    )
}
