import { _fetch } from './_fetch';

export class Apifetch {
    static getInitial() {
        return _fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000');
    }
    static getPokemon(pokemon) {
        return _fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    }
}
