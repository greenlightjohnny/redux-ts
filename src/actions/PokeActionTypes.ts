export const POKE_LOADING = "POKE_LOADING"
export const POKE_FAIL = "POKE_FAIL"
export const POKE_SUCCESS = "POKE_SUCCESS"

export type PokeType = {
  abilities: PokeAbility[]
  sprites: PokeSprites
  stats: PokeStats[]
}

export type PokeAbility = {
  ability: {
    name: string
    url: string
  }
}

export type PokeSprites = {
  front_default: string
}

export type PokeStats = {
  base_state: number
  stat: {
    name: string
  }
}

export interface PokeLoading {
  type: typeof POKE_LOADING
}

export interface PokeFail {
  type: typeof POKE_FAIL
}

export interface PokeSuccess {
  type: typeof POKE_SUCCESS
  payload: {
    abilities: PokeAbility[]
    sprites: PokeSprites
    stats: PokeStats[]
  }
}

export type PokeDispatchTypes = PokeLoading | PokeSuccess | PokeFail
