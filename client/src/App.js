import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState({});

  async function getPokemon() {
    const API = `http://localhost:8080/pokemon`;
    const res = await axios.get(API);

    setPokemon(res.data);
  }

  return (
    <div className="App">
      <button onClick={getPokemon}>Who's that pokemon?!</button>
      <img src={pokemon} alt="pokemon" />
    </div>
  );
}

export default App;
