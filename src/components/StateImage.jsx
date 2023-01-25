import { useState } from "react";

function StateImage() {
  const [imagen, setImagen] = useState(
    "https://developero.io/_next/image?url=%2Fstatic%2Fimages%2Fprincipios-solid-react-js%2FPrincipios-SOLID-en-React-JS.png&w=1200&q=75"
  );

  const handleSubmitImage = (e) => {
    e.preventDefault();
    imagen ===
    "https://developero.io/_next/image?url=%2Fstatic%2Fimages%2Fprincipios-solid-react-js%2FPrincipios-SOLID-en-React-JS.png&w=1200&q=75"
      ? setImagen("https://cloud.panoimagen.com/static/img/BBTWINS-tagline.ico")
      : setImagen(
          "https://developero.io/_next/image?url=%2Fstatic%2Fimages%2Fprincipios-solid-react-js%2FPrincipios-SOLID-en-React-JS.png&w=1200&q=75"
        );
  };
  return (
    <>
      <form onSubmit={handleSubmitImage}>
        <img width="300" height="200" src={imagen}></img>
        <button onClick={() => setImagen(imagen)} className="button">
          CAMBIAR IMAGEN
        </button>
      </form>
    </>
  );
}

export default StateImage;
