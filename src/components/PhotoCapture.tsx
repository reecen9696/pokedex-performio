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
      try {
        // Convert the captured image + stickers into Base64
        const canvas = await html2canvas(photoRef.current, {
          useCORS: true,
          allowTaint: true,
        });
        const imageBase64 = canvas.toDataURL("image/png").split(",")[1]; // Remove data type prefix

        const fileName = `photo-${Date.now()}.png`;

        // Send to backend
        const response = await fetch(
          "https://zpg9th2oxe.execute-api.ap-southeast-2.amazonaws.com/Prod/upload",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fileName: fileName,
              fileContent: imageBase64,
            }),
          }
        );

        const result = await response.json();
        if (response.ok) {
          alert(`Upload successful! File: ${result.fileName}`);
          setPhoto(null); // ✅ Reset photo so user can take a new one
        } else {
          throw new Error(result.message || "Upload failed.");
        }
      } catch (error) {
        console.error("Upload error:", error);
        alert("Failed to upload the image.");
      }
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
          {/* Photo and Stickers Wrapper */}
          <div ref={photoRef} className="relative w-full max-w-sm z-10">
            <img src={photo} alt="Captured" className="rounded-lg w-full" />
            {/* Stickers Component */}
            <Stickers photo={photo} />
          </div>

          {/* Upload & Retake Buttons */}
          <SendButton handleUpload={handleUpload} setPhoto={setPhoto} />
        </div>
      )}
    </div>
  );
};

export default PhotoCapture;
