import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./App.css"
import { RootStore } from "./store"
import { GetPokemon } from "./actions/PokeActions"

function App() {
  const [poke, setPoke] = useState("")
  const pokeState = useSelector((state: RootStore) => state.pokemon)

  const handleSubmit = () => GetPokemon(poke)

  return (
    <div className="App">
      <input type="text" onChange={(e) => setPoke(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
