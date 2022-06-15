import got from 'got';
import { GetPokemonResponse, PokemonEntity } from './types';

const BASE_URI = 'https://pokeapi.co/api/v2/';

// return pokemon by hitting pokeapi with the id provided as param
// https://pokeapi.co/
// if an id is not provided, generate a random one (must be >= 1)
// note there are 800-ish pokemons
export async function getAPokemon(pokemonId?: number): Promise<PokemonEntity> {
  pokemonId = pokemonId ? pokemonId : Math.floor(Math.random() * 800) + 1;
  let rawPokemon: GetPokemonResponse;
  try {
    const response = await got.get(`${BASE_URI}/pokemon/${pokemonId}`);
    rawPokemon = JSON.parse(response.body);
  } catch (err) {
    console.error('dang');
    throw err;
  }
  return rawPokemonToEntity(rawPokemon);
}

/* // converts a GetPokemonResponse to a PokemonEntity
function rawPokemonToEntity(rawPokemon: GetPokemonResponse): PokemonEntity {
  let type = '';
  for (const t of rawPokemon.types) {
    type += t.type.name + '/';
  }
  type = type.slice(0, type.length - 1);
  return {
    id: rawPokemon.id,
    name: rawPokemon.name,
    type,
  };
} */

function rawPokemonToEntity(rawPokemon: GetPokemonResponse): PokemonEntity {
/*     return {
        id: rawPokemon.id,
        name: rawPokemon.name,
        type: rawPokemon.types.map(({type}) => type.name).join('/')
    }; */
    return {
        ...rawPokemon,
        type: rawPokemon.types.map(({type}) => type.name).join('/')
    }
}
