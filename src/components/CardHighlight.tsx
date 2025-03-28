import cornerIcon from "../assets/corner.svg";

export const HighlightCard = () => {
  return (
    <div className="hidden group-hover:flex absolute -inset-[1px] z-30 justify-between flex-col pointer-events-none animate-pulse">
      <div className="flex justify-between">
        <img className="w-10" src={cornerIcon} alt="" />
        <img className="w-10 scale-x-[-1]" src={cornerIcon} alt="" />
      </div>
      <div className="flex justify-between">
        <img className="w-10 scale-y-[-1]" src={cornerIcon} alt="" />
        <img
          className="w-10 scale-x-[-1] scale-y-[-1]"
          src={cornerIcon}
          alt=""
        />
      </div>
    </div>
  );
};
