import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [nombre, setName] = useState("");
  const [edad, setEdad] = useState(0);
  const [imagen, setImagen] = useState(
    "https://developero.io/_next/image?url=%2Fstatic%2Fimages%2Fprincipios-solid-react-js%2FPrincipios-SOLID-en-React-JS.png&w=1200&q=75"
  );
  var agefield = 0
  const handleSubmit = (e) => {
    var agefield = document.getElementById("agefield");
    e.preventDefault();
    setEdad(agefield.value);
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    imagen === "https://developero.io/_next/image?url=%2Fstatic%2Fimages%2Fprincipios-solid-react-js%2FPrincipios-SOLID-en-React-JS.png&w=1200&q=75"
      ? setImagen(
          "https://cloud.panoimagen.com/static/img/BBTWINS-tagline.ico"
        )
      : setImagen(
          "https://developero.io/_next/image?url=%2Fstatic%2Fimages%2Fprincipios-solid-react-js%2FPrincipios-SOLID-en-React-JS.png&w=1200&q=75"
        );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>REACT APP</h1>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
        <div>
          <p>Mi nombre es: {nombre}</p>
          <input
            onChange={(e) => setName(e.target.value)}
            id="inputfield"
          ></input>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Mi edad es: {edad}</p>
            <input id="agefield"></input>
            <button className="button" onClick={() => setEdad(agefield)}>
              NUEVA EDAD
            </button>
          </div>
        </form>
        <form onSubmit={handleSubmitImage}>
          <img width="300" height="200" src={imagen}></img>
          <button onClick={() => setImagen(imagen)} className="button">
            CAMBIAR IMAGEN
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
