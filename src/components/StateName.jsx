import { useState } from "react";

function StateName() {
  const [nombre, setName] = useState("");

  return (
    <div>
      <p>Mi nombre es: {nombre}</p>
      <input onChange={(e) => setName(e.target.value)} id="inputfield"></input>
    </div>
  );
}

export default StateName;
