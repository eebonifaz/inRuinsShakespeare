import { AddOutlined } from "@mui/icons-material"
import { Box, IconButton, TextField } from "@mui/material" 
import { useState } from "react"


export const InputInfinite = ( {campos} ) => {
    const {key, label} = campos 

    const handleClick = () => { 
    }
    console.log( listas )
    return (
        <> 
                    <TextField
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a ${label}`}
                        label={`${label}`}
                        sx={{ border: 'none', mb: 1, width: "100%" }}
                    />  
            <Box sx={{ display: 'flex', justifyContent: "flex-end"}} >
                <IconButton 
                    size='large' 
                    sx={{
                    color: 'white',
                    backgroundColor: 'primary.main',
                    ':hover': { backgroundColor: 'primary.main', opacity: 0.9 },  
                    }}
                    onClick={ () => {handleClick} }
                >
                    <AddOutlined sx={{ fontSize: 20 }} />
                </IconButton>
            </Box>        
        </>
    )

}