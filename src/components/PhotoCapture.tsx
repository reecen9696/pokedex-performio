1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48;
49;
50;
51;
52;
53;
54;
55;
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
      const canvas = await html2canvas(photoRef.current, { useCORS: true });
      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "photo_with_stickers.png"; // File name
      link.click();
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
