import "./App.css";
import { name, age, job } from "./namedexportmodul.js";
import message from "./defaultexportmodul.js";

function App() {
  return (
    <div>
      <p>
        {name} + "ima" + {age} + "godina i radi kao " + {job}
      </p>

      <p>{message}</p>
    </div>
  );
}

export default App;
