import "./App.css";
import { name, age, job } from "./namedexportmodul.js";
import poruka from "./defaultexportmodul.js";

function App() {
  return (
    <div>
      <p>
        {name} + ima + {age} + godina i radi kao + {job}
      </p>

      <p>{poruka()}</p>
    </div>
  );
}

export default App;
