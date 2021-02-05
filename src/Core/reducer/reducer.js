import { types } from './types';
let defaultList = {};

export const reducer = (state = [], action) => {
    switch (action.type) {
        case types.firstLoad:
            defaultList = action.payload;
            return defaultList;

        case types.search:
            console.log(defaultList);
            let resp = defaultList.results.filter((pokemon) => {
                return pokemon.name.includes(action.payload);
            });
            return { ...state, results: [...resp] };

        default:
            return state;
    }
};
