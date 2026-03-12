import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CameraCapture from "../components/CameraCapture";
import SignatureCanvas from "../components/SignatureCanvas";
import { mergeImages } from "../utils/mergeImage";

export default function Details() {

  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);

  const merge = async () => {

    const merged =
      await mergeImages(photo, signature);

    localStorage.setItem("auditImage", merged);

    navigate("/result");
  };

  return (
    <div className="p-6 space-y-4">

      <CameraCapture setPhoto={setPhoto} />

      {photo &&
        <SignatureCanvas
          setSignature={setSignature}
        />
      }

      <button
        onClick={merge}
        className="bg-green-600 text-white p-2"
      >
        Merge
      </button>

    </div>
  );
}