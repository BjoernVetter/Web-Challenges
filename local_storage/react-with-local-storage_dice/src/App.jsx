import { useState } from "react";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import { getD6Roll } from "./utils"; 

export default function App() {
  const [rolls, setRolls] = useState([]);

  const handleRoll = (newRoll) => {
    setRolls([newRoll, ...rolls]); 
  };

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />  
      </aside>
    </div>
  );
}
