export interface PokemonEntity {
  id: number;
  type: string;
  name: string;
}

export interface GetPokemonResponse {
  types: PokemonType[];
  name: string;
  id: number;
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
