export interface Pokemon {
  name: string;
  id: number;
}

export interface PokemonApiResponse {
  count: number;
  next: string;
  results: Pokemon[];
}
