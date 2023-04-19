import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";

export const NavBar = ({drawerWidth = 240}) => {

    const dispatch = useDispatch();
    const { displayName } = useSelector( state => state.auth );

    const onLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <AppBar 
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` }
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none'}}}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction="row" justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant="h6" noWrap component={'div'}></Typography>

                    
                    <IconButton
                            color='error'
                            onClick={ onLogout }
                        >
                            <Typography variant="h6" color={'white'} noWrap component={'div'} >
                                Hi, {displayName}
                            </Typography>
                            <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
