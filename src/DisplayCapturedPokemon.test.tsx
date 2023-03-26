import { render, fireEvent } from '@testing-library/react';
import DisplayCapturedPokemon from "./DisplayCapturedPokemon";

const mockCapturedPokemon = [
    {
        "uniqueId": "e2772d05-45c7-419b-a1f3-4691c2f51445",
        "displayId": 25,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "name": "pikachu",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ],
        "hp": {
            "base_stat": 35,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        "attack": {
            "base_stat": 55,
            "effort": 0,
            "stat": {
                "name": "attack",
                "url": "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        "defense": {
            "base_stat": 40,
            "effort": 0,
            "stat": {
                "name": "defense",
                "url": "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        "speed": {
            "base_stat": 90,
            "effort": 2,
            "stat": {
                "name": "speed",
                "url": "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    },
    {
        "uniqueId": "c2c47218-414f-4bfd-b223-75341e49a519",
        "displayId": 485,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
        "name": "heatran",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ],
        "hp": {
            "base_stat": 91,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        "attack": {
            "base_stat": 90,
            "effort": 0,
            "stat": {
                "name": "attack",
                "url": "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        "defense": {
            "base_stat": 106,
            "effort": 0,
            "stat": {
                "name": "defense",
                "url": "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        "speed": {
            "base_stat": 77,
            "effort": 0,
            "stat": {
                "name": "speed",
                "url": "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    },
    {
        "uniqueId": "73b953f6-a6f7-4594-96cb-f6adc39cbcbd",
        "displayId": 383,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
        "name": "groudon",
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ],
        "hp": {
            "base_stat": 100,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        "attack": {
            "base_stat": 150,
            "effort": 3,
            "stat": {
                "name": "attack",
                "url": "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        "defense": {
            "base_stat": 140,
            "effort": 0,
            "stat": {
                "name": "defense",
                "url": "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        "speed": {
            "base_stat": 90,
            "effort": 0,
            "stat": {
                "name": "speed",
                "url": "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    }
];

const releasePokemon = jest.fn();

// would add a test for every component that the user can see/interact with if this was a production level application

describe('CapturedPokemon component', () => {
    it('should render the captured pokemon images', async() => {
      const { getByTestId } = render(
        <DisplayCapturedPokemon 
            capturedPokemon={mockCapturedPokemon}
            releasePokemon={releasePokemon}
        />
      );

      expect(getByTestId('captured-pokemon-0')).toHaveAttribute(
        'src',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      );
      expect(getByTestId('captured-pokemon-1')).toHaveAttribute(
        'src',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png'
      );
      expect(getByTestId('captured-pokemon-2')).toHaveAttribute(
        'src',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png'
      );
    });
    it('should release the captured pokemon when clicking', async() => {
        const { getByTestId } = render(
            <DisplayCapturedPokemon 
                capturedPokemon={mockCapturedPokemon}
                releasePokemon={releasePokemon}
            />
        );
        
        const pokemonToRelease = getByTestId('captured-pokemon-1');
        fireEvent.click(pokemonToRelease);
        expect(releasePokemon).toHaveBeenCalled();
      });
});