import { AddOutlined, SaveOutlined } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { list_label } from '../fields/textfield';
import { selectFields } from '../fields/selectfield';
import { multiplefield } from '../fields/multiplefield';
import { InputInfinite } from '../components/input/InputInfinite';
import { useForm } from '../../hooks/useForm';

const today = new Date;


export const DonadoresCreate = () => {
    const { active:donor } = useSelector( state => state.donor )

    const { 
        name, 
        first_name,
        last_name,
        company_name,
        street_address,
        city,
        province,
        postal_code,
        amount,
        monthly, 
        audit,
        eblasts,
        attendance,
        type_person,
        donor_level,
        emails,
        phones,
        comments,
        addElementArray,
        onSelectChange,
        onMultiple,
        onInputChange, formState } = useForm( donor );

        const onSubmit = () => {
            console.log( formState )
        }

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' >{today.toDateString()}</Typography>
            </Grid>
            <Grid item>
                <Button 
                    color="primary" 
                    sx={{ padding: 2 }}
                    onClick={onSubmit}    
                >
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
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a Name`}
                        label={`Name`}
                        sx={{ border: 'none', mb: 1 }}
                        name="name"
                        value={ name }
                        onChange={ onInputChange }
                    /> 
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a first_name`}
                        label={`first_name`}
                        sx={{ border: 'none', mb: 1 }}
                        name="first_name"
                        value={ first_name }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a last_name`}
                        label={`last_name`}
                        sx={{ border: 'none', mb: 1 }}
                        name="last_name"
                        value={ last_name }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a company_name`}
                        label={`company_name`}
                        sx={{ border: 'none', mb: 1 }}
                        name="company_name"
                        value={ company_name }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a street_address`}
                        label={`street_address`}
                        sx={{ border: 'none', mb: 1 }}
                        name="street_address"
                        value={ street_address }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a city`}
                        label={`city`}
                        sx={{ border: 'none', mb: 1 }}
                        name="city"
                        value={ city }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a province`}
                        label={`province`}
                        sx={{ border: 'none', mb: 1 }}
                        name="province"
                        value={ province }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a postal_code`}
                        label={`postal_code`}
                        sx={{ border: 'none', mb: 1 }}
                        name="postal_code"
                        value={ postal_code }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a amount`}
                        label={`amount`}
                        sx={{ border: 'none', mb: 1 }}
                        name="amount"
                        value={ amount }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a monthly`}
                        label={`monthly`}
                        sx={{ border: 'none', mb: 1 }}
                        name="monthly"
                        value={ monthly }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a audit`}
                        label={`audit`}
                        sx={{ border: 'none', mb: 1 }}
                        name="audit"
                        value={ audit }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a eblasts`}
                        label={`eblasts`}
                        sx={{ border: 'none', mb: 1 }}
                        name="eblasts"
                        value={ eblasts }
                        onChange={ onInputChange }
                    />  
                    <TextField 
                        type="text"
                        variant="standard"
                        fullWidth
                        placeholder={`Entry a attendance`}
                        label={`attendance`}
                        sx={{ border: 'none', mb: 1 }}
                        name="attendance"
                        value={ attendance }
                        onChange={ onInputChange }
                    />   
                </Box>
                <Box 
                    sx={{
                        '& > :not(style)': { m: 1, width: '50%' }, width: "100%", display: "flex"
                    }}
                    noValidate
                    autoComplete="off"                
                >
                    <FormControl fullWidth>
                        <InputLabel id="value-text-tp" >{`Type Person`}  </InputLabel>
                        <Select
                            labelId="value-text-tp"   
                            label={`Type Person`}  
                            value={ type_person || "" } 
                            refs="type_person"
                            name="type_person" 
                            onChange={ onSelectChange }
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="Kings & Queens">Kings & Queens</MenuItem>
                            <MenuItem value="Dukes & Duchesses">Dukes & Duchesses</MenuItem>
                            <MenuItem value="Jesters">Jesters</MenuItem>
                            <MenuItem value="Spirits">Spirits</MenuItem>
                            <MenuItem value="Lovers">Lovers</MenuItem>
                            <MenuItem value="Imps">Imps</MenuItem> 
                        </Select>   
                    </FormControl> 
                    <FormControl fullWidth>
                        <InputLabel id="value-text" >{`Donor Level`}</InputLabel>
                        <Select
                            labelId="value-text"   
                            label={`Donor Level`}  
                            value={ donor_level || `` }  
                            name="donor_level"  
                            refs="donor_level"
                            onChange={ onSelectChange }
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem> 
                            <MenuItem value="Natural">Natural</MenuItem>
                            <MenuItem value="Legal">Legal</MenuItem> 
                        </Select>   
                    </FormControl>
                </Box>
                <Box  
                    noValidate
                    autoComplete="off"
                    sx={{ width:"100%"}}
                >
                        {
                            emails?.map( ({key,value}) => ( 
                                <TextField
                                    type="text"
                                    variant="standard"
                                    fullWidth 
                                    placeholder={`Entry a Email`}
                                    label={`Email`}
                                    value={value}
                                    name='emails'
                                    onChange={ 
                                        (e) => 
                                            {   
                                                onMultiple(e, key)
                                            } 
                                    }
                                    sx={{ border: 'none', mb: 1, width: "100%" }}
                                />    
                            ))
                        }

                        <Box sx={{ display: 'flex', justifyContent: "flex-end"}} >
                            <IconButton 
                                size='large' 
                                sx={{
                                color: 'white',
                                backgroundColor: 'primary.main',
                                ':hover': { backgroundColor: 'primary.main', opacity: 0.9 },  
                                }}  
                                onClick={ () => {addElementArray('emails')} } 
                            >
                                <AddOutlined sx={{ fontSize: 20 }} />
                            </IconButton>
                        </Box>                         
                </Box>

                
                <Box  
                    noValidate
                    autoComplete="off"
                    sx={{ width:"100%"}}
                >
                        {
                            phones?.map( (value) => (
                                <>
                                    <TextField
                                        type="text"
                                        variant="standard"
                                        fullWidth
                                        key={value}
                                        placeholder={`Entry a Phones`}
                                        label={`Phones`}
                                        sx={{ border: 'none', mb: 1, width: "100%" }}
                                    />   
                                </>
                            ))
                        }

                        <Box sx={{ display: 'flex', justifyContent: "flex-end"}} >
                            <IconButton 
                                size='large' 
                                sx={{
                                color: 'white',
                                backgroundColor: 'primary.main',
                                ':hover': { backgroundColor: 'primary.main', opacity: 0.9 },  
                                }}  
                                onClick={ () => {addElementArray('phones')} } 
                            >
                                <AddOutlined sx={{ fontSize: 20 }} />
                            </IconButton>
                        </Box>                         
                </Box>


                
                <Box  
                    noValidate
                    autoComplete="off"
                    sx={{ width:"100%"}}
                >
                        {
                            comments?.map( (value) => (
                                <>
                                    <TextField
                                        type="text"
                                        variant="standard"
                                        fullWidth
                                        key={value}
                                        placeholder={`Entry a Comments`}
                                        label={`Comment`}
                                        sx={{ border: 'none', mb: 1, width: "100%" }}
                                    />   
                                </>
                            ))
                        }

                        <Box sx={{ display: 'flex', justifyContent: "flex-end"}} >
                            <IconButton 
                                size='large' 
                                sx={{
                                color: 'white',
                                backgroundColor: 'primary.main',
                                ':hover': { backgroundColor: 'primary.main', opacity: 0.9 },  
                                }}  
                                onClick={ () => {addElementArray('comments')} } 
                            >
                                <AddOutlined sx={{ fontSize: 20 }} />
                            </IconButton>
                        </Box>                         
                </Box>
            </Grid>
    

        </Grid>
    )
}
