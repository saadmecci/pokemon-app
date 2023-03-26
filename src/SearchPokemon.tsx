import React, { useState } from 'react';

import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { Button, Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

import DisplayPokemonInfo from './DisplayPokemonInfo';
import DisplayCapturedPokemon from './DisplayCapturedPokemon';
import { Pokemon } from './types';

const useStyles = makeStyles({
    centerContent: {
        justifyContent: 'center',
        backgroundColor: '#CE3129',
        padding: '1rem 1rem 1rem 1rem',
        borderStyle: 'solid',
        borderWidth: '0.4rem',
        borderRadius: '1rem'
    }
});

const SearchPokemon = () => {

    const classes = useStyles();

    const [userInput, setUserInput] = useState('');
    const [pokemonToDisplay, setPokemonToDisplay] = useState<Pokemon | null>(null);
    const [capturedPokemon, setCapturedPokemon] = useState<Pokemon[] | []>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const pokemonToSearch = userInput.trim();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`)
            .then((response) => {
                console.log(response);
                const { 
                    data: {
                        id,
                        species: {
                            name
                        },
                        sprites: {
                            front_default
                        },
                        stats: [hp, attack, defense, , , speed],
                        types
                    } 
                } = response;
                setPokemonToDisplay({
                    uniqueId: uuid(),
                    displayId: id,
                    image: front_default,
                    name: name,
                    types: types,
                    hp: hp,
                    attack: attack,
                    defense: defense,
                    speed: speed
                })
            })
            .catch((error) => {
                console.error(error);
            });

        setUserInput('');
    }

    const capturePokemon = () => {
        if (capturedPokemon.length < 6) {
            setCapturedPokemon([...capturedPokemon, pokemonToDisplay]);
        }
    }

    const releasePokemon = (uniqueId: string) => {
        const capturedPokemonCopy = [...capturedPokemon];
        const pokemonToRelease = capturedPokemonCopy.find((pokemon) => pokemon.uniqueId === uniqueId);
        const index = capturedPokemonCopy.indexOf(pokemonToRelease);
        capturedPokemonCopy.splice(index, 1);
        setCapturedPokemon(capturedPokemonCopy);
    }

    return (
        <Grid container>
            <Grid item className={classes.centerContent}>
                <form onSubmit={handleSubmit}>
                    <Grid container item>
                        <Grid item>
                            <TextField 
                                id="outlined-basic" 
                                label="name/id" 
                                variant="outlined"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <Button 
                                type='submit'
                                variant="contained"
                                sx={{
                                    height: '3.4rem',
                                    textTransform: 'none'
                                }}
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {pokemonToDisplay ? 
                    <DisplayPokemonInfo 
                        pokemon={pokemonToDisplay}
                        capturePokemon={capturePokemon}
                    /> 
                : null}
            </Grid>
            {capturedPokemon.length ? 
                <DisplayCapturedPokemon 
                    capturedPokemon={capturedPokemon}
                    releasePokemon={releasePokemon}
                />
            : null}
        </Grid>
    )
}

export default SearchPokemon;