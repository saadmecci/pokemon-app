import React from 'react';

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import SearchPokemon from './SearchPokemon';

const useStyles = makeStyles({
    mainContainer: {
        justifyContent: 'center',
        padding: '2rem 10rem 1rem 10rem'
    },
    subContainer: {
        justifyContent: 'center',
    }
});

const MainContainer = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainContainer}>
            <Grid container className={classes.subContainer}>
                <SearchPokemon />
            </Grid>
        </Grid>
    )
}

export default MainContainer;