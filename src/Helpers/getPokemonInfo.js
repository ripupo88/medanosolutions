import { Apifetch } from '../external/ApiFetch/Apifetch';

export const getPokemonInfo = async (pokemon) => {
    const pokemonData = await Apifetch.getPokemon(pokemon);
    let resp = {
        headers: ['stat', 'initial'],
        data: [],
        img: pokemonData.sprites.front_default,
    };
    pokemonData.stats.map((item) => {
        resp.data = [...resp.data, [item.stat.name, item.base_stat]];
        return;
    });

    return resp;
};
