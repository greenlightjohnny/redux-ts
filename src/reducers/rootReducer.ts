import { combineReducers } from "redux"
import pokeReducer from "./PokeReducer"
const RootReducer = combineReducers({
  pokemon: pokeReducer,
})

export default RootReducer
