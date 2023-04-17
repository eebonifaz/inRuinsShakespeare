import { AddOutlined, SaveOutlined } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { list_label } from '../fields/textfield';
import { selectFields } from '../fields/selectfield';
import { multiplefield } from '../fields/multiplefield';

const today = new Date;


export const DonadoresCreate = () => {
    const { active } = useSelector( state => state.donor )

    console.log( active );
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' >{today.toDateString()}</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <Box 
                sx={{
                    '& > :not(style)': { m: 1, width: '31%' }, 
                    width: "100%", 
                    display: "flex",
                    flexWrap: "wrap"
                }}
                noValidate
                autoComplete="off"
                >
                {
                    list_label.map( 
                        ({key, label}) => { 
                            return ( 
                                <TextField 
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    placeholder={`Entry a ${label}`}
                                    label={`${label}`}
                                    sx={{ border: 'none', mb: 1 }}
                                /> 
                            )
                        }
                    )
                }
                </Box>
                <Box 
                    sx={{
                        '& > :not(style)': { m: 1, width: '50%' }, width: "100%", display: "flex"
                    }}
                    noValidate
                    autoComplete="off"                
                >
                    {
                        selectFields.map(
                            ({key,label,map: listado}) => ( 
                                <FormControl fullWidth>
                                    <InputLabel id="value-text" >{label}</InputLabel>
                                    <Select
                                        labelId="value-text"  
                                        value={""}
                                        label={label} 
                                        key={key}
                                    >
                                        <MenuItem value="">
                                        <em>None</em>
                                        </MenuItem>                                        
                                        {
                                            listado.map(
                                                ({name}) => (
                                                    <MenuItem value={name}>{name}</MenuItem>
                                                )
                                            )
                                        } 
                                    </Select>   
                                </FormControl> 
                            )
                        )
                    } 
                </Box>
                <Box  
                    noValidate
                    autoComplete="off"                
                    sx={{ width:"100%"}}
                >
                    {
                        multiplefield.map(
                            ({key, label}) => ( 
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
                                        >
                                            <AddOutlined sx={{ fontSize: 20 }} />
                                        </IconButton>
                                    </Box>
                                </>
                            )
                        )
                    }
                </Box>
            </Grid>
    

        </Grid>
    )
}
