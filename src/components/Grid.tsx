import React from "react";
import { Pokemon } from "../types/pokemon";
import PokemonCard from "./Card";

interface GridProps {
  loading: boolean;
  pokemon: Pokemon[];
  selected: number[];
  toggleSelected: (id: number) => void;
  shakeId: number | null;
}

export const PokemonGrid = ({
  loading,
  pokemon,
  selected,
  toggleSelected,
  shakeId,
}: GridProps) => {
  return (
    <ul className="grid gap-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {loading ? (
        <li>Loading...</li>
      ) : (
        pokemon.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            isSelected={selected.includes(p.id)}
            onClick={() => toggleSelected(p.id)}
            isShaking={shakeId === p.id}
          />
        ))
      )}
    </ul>
  );
};
