import * as APIUtil from '../util/api_util';
export const CATCH_ALL_POKEMONS = 'CATCH_ALL_POKEMONS';
export const CATCH_SINGLE_POKEMON = 'CATCH_SINGLE_POKEMON';


export const receiveAllPokemons = pokemon => {
  return {
    type: CATCH_ALL_POKEMONS,
    pokemon
  };
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.catchAllPokemons()
    .then(pokemon => dispatch(receiveAllPokemons(pokemon)))
);
