import React from 'react';
import ReactDOM from 'react-dom';
import { catchAllPokemons } from './util/api_util';
import { receiveAllPokemons, requestAllPokemon } from './actions/pokemon_actions';
import { configureStore } from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  window.catchAllPokemons = catchAllPokemons;
  window.receiveAllPokemons = receiveAllPokemons;
  window.requestAllPokemon = requestAllPokemon;
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
