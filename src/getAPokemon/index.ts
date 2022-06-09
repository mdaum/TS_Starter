import got from 'got';
import { GetPokemonResponse, PokemonEntity } from './types';

export async function getAPokemon(pokemonId?: number): Promise<PokemonEntity> {
  pokemonId = pokemonId ? pokemonId : Math.floor(Math.random()) + 1;
  let rawPokemon: GetPokemonResponse;
  try {
    const response = await got.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    rawPokemon = JSON.parse(response.body);
  } catch (err) {
    console.error('uh oh! something bad happened');
    throw err;
  }
  return rawPokemonToEntity(rawPokemon);
}

function rawPokemonToEntity(rawPokemon: GetPokemonResponse): PokemonEntity {
  return {
    id: rawPokemon.id,
    name: rawPokemon.name,
    type: rawPokemon.types.map(({ type }) => type.name).join('/'),
  };
}
