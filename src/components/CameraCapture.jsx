import { useRef } from "react";

export default function CameraCapture({ setPhoto }) {

  const videoRef = useRef();

  const startCamera = async () => {

    const stream =
      await navigator.mediaDevices.getUserMedia({
        video: true
      });

    videoRef.current.srcObject = stream;
  };

  const capture = () => {

    const video = videoRef.current;

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    const img = canvas.toDataURL("image/png");

    setPhoto(img);
  };

  return (
    <div className="space-y-2">

      <video ref={videoRef} autoPlay className="w-64" />

      <button
        onClick={startCamera}
        className="bg-blue-500 text-white p-2"
      >
        Start Camera
      </button>

      <button
        onClick={capture}
        className="bg-green-500 text-white p-2"
      >
        Capture
      </button>

    </div>
  );
}