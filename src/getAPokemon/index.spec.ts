import { getAPokemon } from '.';

describe('getAPokemon', () => {
  test('gets expected Pokemon', async () => {
    // const pokemon = await getAPokemon(1);
    const pokemon = await getAPokemon(1);
    expect(pokemon.id).toEqual(1);
    expect(pokemon.name).toEqual('bulbasaur');
    expect(pokemon.type).toEqual('grass/poison');
  });
});
