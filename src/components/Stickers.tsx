import React, { useState, RefObject } from "react";
import { Rnd } from "react-rnd";
import binIcon from "../assets/bin.svg";
import plusIcon from "../assets/plus.svg";
import heartSticker from "../assets/stickers/heart.png";
import starSticker from "../assets/stickers/star.png";
import smileSticker from "../assets/stickers/smile.png";

const availableStickers = [
  { id: "heart", src: heartSticker },
  { id: "star", src: starSticker },
  { id: "smile", src: smileSticker },
];

interface Sticker {
  id: string;
  src: string;
  x: number;
  y: number;
  key: string;
}

interface StickersProps {
  photo: string | null;
  photoRef: RefObject<HTMLDivElement>;
}

export const Stickers: React.FC<StickersProps> = ({ photo, photoRef }) => {
  const [addedStickers, setAddedStickers] = useState<Sticker[]>([]);
  const [isAddingSticker, setIsAddingSticker] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isOverBin, setIsOverBin] = useState(false);
  const binRef = React.useRef<HTMLDivElement>(null);

  const addSticker = (sticker: { id: string; src: string }) => {
    setAddedStickers((prev) => [
      ...prev,
      {
        ...sticker,
        x: window.innerWidth / 2 - 40,
        y: window.innerHeight / 2 - 40,
        key: crypto.randomUUID(),
      },
    ]);
    setIsAddingSticker(false);
  };

  const checkOverlapWithBin = (x: number, y: number) => {
    if (!binRef.current) return false;
    const binRect = binRef.current.getBoundingClientRect();
    return (
      x + 40 > binRect.left &&
      x + 40 < binRect.right &&
      y + 40 > binRect.top &&
      y + 40 < binRect.bottom
    );
  };

  const handleDragStop = (index: number, x: number, y: number) => {
    setIsDragging(false);
    if (checkOverlapWithBin(x, y)) {
      setAddedStickers((prev) => prev.filter((_, i) => i !== index));
    } else {
      setAddedStickers((prev) =>
        prev.map((sticker, i) => (i === index ? { ...sticker, x, y } : sticker))
      );
    }
    setIsOverBin(false);
  };

  return (
    <>
      {photo && (
        <>
          {/* Plus icon to add stickers */}
          <button
            onClick={() => setIsAddingSticker(!isAddingSticker)}
            className="fixed top-4 right-4 w-12 h-12 p-2 bg-white rounded-full z-50"
          >
            <img src={plusIcon} alt="Add Sticker" className="w-full h-full" />
          </button>

          {/* Sticker selection popup */}
          {isAddingSticker && (
            <div className="fixed top-20 right-4 bg-white rounded-lg p-4 z-50">
              <p className="text-sm font-semibold mb-2">Select a sticker:</p>
              <div className="flex gap-2">
                {availableStickers.map((sticker) => (
                  <button key={sticker.id} onClick={() => addSticker(sticker)}>
                    <img
                      src={sticker.src}
                      alt={sticker.id}
                      className="w-12 h-12"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stickers */}
          <div className="fixed inset-0 pointer-events-none z-50">
            {addedStickers.map((sticker, index) => (
              <Rnd
                key={sticker.key}
                default={{ x: sticker.x, y: sticker.y, width: 80, height: 80 }}
                bounds="window"
                enableUserSelectHack={false}
                onDragStart={() => {
                  setIsDragging(true);
                  setIsOverBin(false);
                }}
                onDrag={(e, d) => setIsOverBin(checkOverlapWithBin(d.x, d.y))}
                onDragStop={(e, d) => handleDragStop(index, d.x, d.y)}
                className="pointer-events-auto"
              >
                <img
                  src={sticker.src}
                  alt="Sticker"
                  className={`w-full h-full transition-opacity ${
                    isDragging ? "opacity-50" : "opacity-100"
                  }`}
                />
              </Rnd>
            ))}
          </div>

          {/* Bin appears only when dragging */}
          {isDragging && (
            <div
              ref={binRef}
              className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 p-3 rounded-full shadow-lg z-40 transition-transform ${
                isOverBin ? "scale-125" : "scale-100"
              }`}
            >
              <img src={binIcon} alt="Delete" className="w-10 h-10" />
            </div>
          )}
        </>
      )}
    </>
  );
};
