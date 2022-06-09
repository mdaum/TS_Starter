import got from 'got';
import { GetPokemonResponse, PokemonEntity } from './types';

// return pokemon by hitting pokeapi with the id provided as param
// https://pokeapi.co/
// if an id is not provided, generate a random one (must be >= 1)
export async function getAPokemon(pokemonId?: number): Promise<PokemonEntity> {
    //unimplemented
}

// converts a GetPokemonResponse to a PokemonEntity
function rawPokemonToEntity(rawPokemon: GetPokemonResponse): PokemonEntity {
    //unimplemented
}
