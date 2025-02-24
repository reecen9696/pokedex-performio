import React, { useState, useRef } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import html2canvas from "html2canvas";
import { SendButton } from "./SendButton";
import { Stickers } from "./Stickers";

const PhotoCapture: React.FC = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const handleTakePhoto = (dataUri: string) => setPhoto(dataUri);

  const handleUpload = async () => {
    if (photoRef.current) {
      const canvas = await html2canvas(photoRef.current);
      const image = canvas.toDataURL("image/png");
      console.log("Captured Image with Stickers:", image); // Replace with upload logic
      alert("Image captured with stickers (check console)");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      {!photo ? (
        <>
          <Camera
            onTakePhoto={handleTakePhoto}
            idealFacingMode="environment"
            isFullscreen={true}
            isImageMirror={false}
          />
          <p className="mt-2 text-gray-600">Tap the screen to take a photo.</p>
        </>
      ) : (
        <div className="flex flex-col items-center w-full relative">
          {/* Photo */}
          <div ref={photoRef} className="relative w-full max-w-sm z-10">
            <img src={photo} alt="Captured" className="rounded-lg w-full" />
          </div>

          {/* Stickers Component */}
          <Stickers photo={photo} photoRef={photoRef} />

          {/* Upload & Retake Buttons */}
          <SendButton handleUpload={handleUpload} setPhoto={setPhoto} />
        </div>
      )}
    </div>
  );
};

export default PhotoCapture;
