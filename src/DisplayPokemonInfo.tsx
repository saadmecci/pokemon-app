import React, {FC} from 'react';

import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

import { Pokemon } from './types';
import { capitalizeFirstLetter } from './utils';

type DisplayPokemonProps = {
    pokemon: Pokemon;
    capturePokemon: () => void;
};


const DisplayPokemonInfo: FC<DisplayPokemonProps> = ({
    pokemon: {
        uniqueId,
        displayId,
        image,
        name,
        types,
        hp,
        attack,
        defense,
        speed,
    },
    capturePokemon
}) => {

    const pokemonTypes = types.map(({ type: { name } }) => capitalizeFirstLetter(name)).join(', ');

    return (
        <Grid container>
            <Grid container item>
                <Grid item>
                    <img src={image} alt='front of pokemon' height='200px' width='200px'/>
                </Grid>
                <Grid item>
                    <Typography>{capitalizeFirstLetter(name)}</Typography>
                    <Typography>#{displayId}</Typography>
                    <Typography>{pokemonTypes}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                    <Table 
                        sx={{
                            [`& .${tableCellClasses.root}`]: {
                            borderBottom: 'none'
                            },
                            backgroundColor: '#CE3129'
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>HP</TableCell>
                                <TableCell>Attack</TableCell>
                                <TableCell>Defense</TableCell>
                                <TableCell>Speed</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{hp.base_stat}</TableCell>
                                <TableCell>{attack.base_stat}</TableCell>
                                <TableCell>{defense.base_stat}</TableCell>
                                <TableCell>{speed.base_stat}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid container>
                <Button 
                    variant='contained'
                    sx={{
                        height: '3.4rem',
                        textTransform: 'none'
                    }}
                    onClick={() => capturePokemon()}
                >
                    Capture
                </Button>
            </Grid>
        </Grid>
    )
}

export default DisplayPokemonInfo;