import { useState } from "react";
import "../index.css";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Le bouton à été appuyé {count} fois !
    </button>
  );
}

export default Button;
