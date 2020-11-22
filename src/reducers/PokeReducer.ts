import { PokeType, PokeDispatchTypes } from "../actions/PokeActionTypes"
import * as pTypes from "../actions/PokeActionTypes"
interface DefaultStateI {
  loading: boolean
  pokemon?: PokeType
}

const defaultState: DefaultStateI = {
  loading: false,
}

const pokeReducer = (
  state: DefaultStateI = defaultState,
  action: PokeDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case pTypes.POKE_LOADING:
      return {
        ...state,
        loading: true,
      }
    case pTypes.POKE_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      }
    case pTypes.POKE_FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default pokeReducer
