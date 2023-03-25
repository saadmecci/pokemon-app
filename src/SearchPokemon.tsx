import React from 'react';

import { Button, Grid, TextField } from '@mui/material';

// borderStyle: 'solid',
// borderWidth: '0.4rem',
// borderRadius: '1rem'

const SearchPokemon = () => {

    const handleSubmit = () => {
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container item>
                    <Grid item>
                        <TextField 
                            id="outlined-basic" 
                            label="name/id" 
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                            variant="contained"
                            sx={{
                                height: '3.5rem'
                            }}
                        >
                            Search
                        </Button>
                    </Grid>
            </Grid>
        </form>
    )
}

export default SearchPokemon;