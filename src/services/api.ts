import axios from "axios";
import { PokemonApiResponse, Pokemon } from "../types/pokemon";

export async function fetchPokemonList(): Promise<Pokemon[]> {
  const response = await axios.get<PokemonApiResponse>(
    "https://pokeapi.co/api/v2/pokemon?limit=150"
  );

  const updatedList = response.data.results.map((p, i) => ({
    ...p,
    id: i + 1,
  }));

  return updatedList;
}
export function getImageUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
