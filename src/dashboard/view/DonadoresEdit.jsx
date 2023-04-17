import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const today = new Date;

export const DonadoresEdit = () => {
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
                {
                    ["name", "firstname", "lastname", "companyname", "typeperson", "street", "city", "province", "postalcode", "amount", "monthly", "eblast", "attendance"].map( 
                        text => (
                            <TextField 
                                type="text"
                                variant="filled"
                                fullWidth
                                placeholder={`Entry a ${text}`}
                                label={`${text}`}
                                sx={{ border: 'none', mb: 1 }}
                            />
                        )
                    )
                }
            </Grid>
    

        </Grid>
    )
}
