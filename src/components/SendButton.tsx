import React from "react";
import refreshIcon from "../assets/refresh.svg";
import nextIcon from "../assets/next.svg";

interface SendButtonProps {
  handleUpload: () => void;
  setPhoto: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SendButton: React.FC<SendButtonProps> = ({
  handleUpload,
  setPhoto,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between px-8 py-4 z-30">
      <button
        onClick={() => setPhoto(null)}
        className="p-4 w-16 h-16 rounded-full"
      >
        <img src={refreshIcon} alt="Retake" className="w-full h-full" />
      </button>
      <button onClick={handleUpload} className="p-4 w-16 h-16 rounded-full">
        <img src={nextIcon} alt="Upload" className="w-full h-full" />
      </button>
    </div>
  );
};
