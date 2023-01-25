import { useState } from "react";

function StateAge() {
  const [edad, setEdad] = useState(0);
  var agefield = 0;
  const handleSubmit = (e) => {
    var agefield = document.getElementById("agefield");
    e.preventDefault();
    setEdad(agefield.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Mi edad es: {edad}</p>
        <input id="agefield"></input>
        <button className="button" onClick={() => setEdad(agefield)}>
          NUEVA EDAD
        </button>
      </div>
    </form>
  );
}

export default StateAge;
