import { HighlightCard } from "./CardHighlight";
import { Pokemon } from "../types/pokemon";
import { getImageUrl } from "../services/api";

interface CardProps {
  pokemon: Pokemon;
  isSelected: boolean;
  onClick: () => void;
  isShaking: boolean;
}

const PokemonCard = ({
  pokemon,
  isSelected,
  onClick,
  isShaking,
}: CardProps) => {
  return (
    <li
      className={`
        relative group rounded-2xl w-full mx-auto flex flex-col items-center pt-4 pb-4 px-2 
        ${
          isSelected
            ? "bg-ui-card-selected text-white"
            : "bg-ui-card-base text-black hover:bg-ui-card-hover hover:text-black"
        }
        ${isShaking ? "animate-shake" : ""}
      `}
      onClick={onClick}
    >
      <HighlightCard />

      <p className="absolute top-2 left-2 text-sm">#{pokemon.id}</p>

      <div
        className={`rounded-full w-[80%] aspect-square flex justify-center items-center ${
          isSelected ? "bg-ui-image-selected" : "bg-ui-image-base"
        }`}
      >
        <img
          src={getImageUrl(pokemon.id)}
          alt={`image of ${pokemon.name}`}
          className="w-20 h-20 object-contain"
        />
      </div>

      <div className="w-full text-center pt-8">
        <p className="font-bold">{pokemon.name}</p>
      </div>
    </li>
  );
};

export default PokemonCard;
