import { Dispatch } from "redux"
import { PokeDispatchTypes } from "./PokeActionTypes"
import * as pType from "./PokeActionTypes"
import axios from "axios"

export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokeDispatchTypes>
) => {
  try {
    dispatch({
      type: pType.POKE_LOADING,
    })

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    dispatch({
      type: pType.POKE_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: pType.POKE_FAIL,
    })
  }
}
