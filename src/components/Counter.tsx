interface CounterProps {
  selected: number[];
}

export const Counter = ({ selected }: CounterProps) => {
  return (
    <div className="fixed w-screen left-0 bottom-4 flex justify-center items-center">
      <aside className="bg-ui-pokemonCounter-background text-white px-4 py-2 rounded-xl shadow-lg outline outline-2 outline-ui-pokemonCounter-outline">
        Party: {selected.length} of 6
      </aside>
    </div>
  );
};
