interface DefaultStateI {}

const defaultState: DefaultStateI = {}

const pokeReducer = (
  state: DefaultStateI = defaultState,
  action: any
): DefaultStateI => {
  return state
}

export default pokeReducer
