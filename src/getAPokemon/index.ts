import got from 'got';
import { GetPokemonResponse, PokemonEntity, EndpointResourceList } from './types';
import { error } from 'console';


// return pokemon by hitting pokeapi with the id provided as param
// https://pokeapi.co/
// if an id is not provided, generate a random one (must be >= 1)
export async function getAPokemon(pokemonId?: number): Promise<PokemonEntity> {
  const numPokemon = await getNumPokemon();
  pokemonId = pokemonId ? pokemonId : Math.floor(Math.random() * numPokemon) + 1;
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

async function getNumPokemon(): Promise<number> {
  try {
    const response = await got.get('https://pokeapi.co/api/v2/pokemon');
    const resourceList: EndpointResourceList = JSON.parse(response.body);
    return resourceList.count;
  } catch (err) {
    console.error(err);
    throw error;
  }
}


// converts a GetPokemonResponse to a PokemonEntity
function rawPokemonToEntity(rawPokemon: GetPokemonResponse): PokemonEntity {
  return {
    id: rawPokemon.id,
    name: rawPokemon.name,
    type: rawPokemon.types.map(({ type }) => type.name).join('/'),
  };
}
