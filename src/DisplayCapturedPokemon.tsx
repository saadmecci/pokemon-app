import React, {FC} from 'react';

import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Pokemon } from './types';

type CapturedPokemonProps = {
    capturedPokemon: Pokemon[];
    releasePokemon: (uniqueId: string) => void;
};

const useStyles = makeStyles({
    centerContent: {
        justifyContent: 'center',
        backgroundColor: '#CE3129',
        padding: '1rem 1rem 1rem 1rem',
        borderStyle: 'solid',
        borderWidth: '0.4rem 0.4rem 0.4rem 0',
        borderRadius: '1rem'
    }
});

const DisplayCapturedPokemon: FC<CapturedPokemonProps> = ({
    capturedPokemon,
    releasePokemon
}) => {
    const classes = useStyles();
    return (
        <Grid item direction="column" className={classes.centerContent}>
            {capturedPokemon.map((pokemon) => {
                return (
                    <Grid item onClick={() => releasePokemon(pokemon.uniqueId)}>
                        <img src={pokemon.image} alt='front of pokemon' height='100px' width='100px'/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default DisplayCapturedPokemon;