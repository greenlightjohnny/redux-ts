import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./App.css"
import { RootStore } from "./store"
import { GetPokemon } from "./actions/PokeActions"

function App() {
  const [poke, setPoke] = useState("")
  const pokeState = useSelector((state: RootStore) => state.pokemon)
  const dispatch = useDispatch()
  const handleSubmit = () => dispatch(GetPokemon(poke))
  console.log(poke)
  console.log("state", pokeState)
  return (
    <div className="App">
      <input type="text" onChange={(e) => setPoke(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      {pokeState.pokemon && (
        <div>
          <img src={pokeState.pokemon?.sprites.front_default} alt="test" />
          {pokeState.pokemon.abilities.map((a) => {
            return <p>{a.ability.name}</p>
          })}
          {pokeState.pokemon.stats.map((i) => {
            return (
              <p>
                {i.stat.name}:{i.base_stat}
              </p>
            )
          })}
        </div>
      )}
      <div></div>
    </div>
  )
}

export default App
