import { useEffect, useState } from "react";
import { fetchPokemonList } from "../services/api";
import { Pokemon } from "../types/pokemon";
import { Counter } from "../components/Counter";
import { PokemonGrid } from "../components/Grid";

const Home = () => {
  const [pokemon, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<number[]>([]);
  const [shakeId, setShakeId] = useState<number | null>(null);

  useEffect(() => {
    fetchPokemonList()
      .then(setPokemonList)
      .catch((error) => {
        console.error("Failed to fetch Pokémon:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const triggerShake = (id: number) => {
    setShakeId(id);
    setTimeout(() => setShakeId(null), 500);
  };

  const toggleSelected = (id: number) => {
    setSelected((prev) => {
      const isSelected = prev.includes(id);
      const canSelectMore = prev.length < 6;

      if (isSelected) return prev.filter((pid) => pid !== id);
      if (canSelectMore) return [...prev, id];

      triggerShake(id);
      return prev;
    });
  };

  return (
    <div className="lg:px-44 px-12 md:px-14 pt-8 bg-ui-background">
      <PokemonGrid
        loading={loading}
        pokemon={pokemon}
        selected={selected}
        toggleSelected={toggleSelected}
        shakeId={shakeId}
      />
      <Counter selected={selected} />
    </div>
  );
};

export default Home;
