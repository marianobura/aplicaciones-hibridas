import { useState } from "react";
import BaseButton from "./BaseButton";

function App() {
  const images = ["/image1.png", "/image2.png", "/image3.png"];

  const [image, setImage] = useState(images[0]);
  const [alt, setAlt] = useState("Foto 1");

  function handleClick(index) {
    setImage(images[index]);
    setAlt(`Foto ${index + 1}`);
  }

  return (
    <>
      <div className="flex flex-col gap-2 bg-green-800 items-center justify-center">
        <h1 className="text-white font-semibold text-3xl">
          Actividad 09 - React: Renderizado
        </h1>
        <p className="text-neutral-200 text-xl">
          Mariano Buranits | Aplicaciones Híbridas | DWM4AP
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center mx-6 my-6">
        <img src={image} alt={alt} />
        <div className="flex gap-2">
          { 
            images.map((image, index) => (
              <BaseButton key={index} handleClick={handleClick} index={index} content={`Foto ${index + 1}`} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
