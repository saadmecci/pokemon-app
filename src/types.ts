type PokemonType = {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

type PokemonStat = {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

export type Pokemon = {
    uniqueId: string,
    displayId: number,
    image: string,
    name: string,
    types: PokemonType[],
    hp: PokemonStat,
    attack: PokemonStat,
    defense: PokemonStat,
    speed: PokemonStat
}

export type CapturedPokemon = {
    uniqueId: string,
    image: string,
}