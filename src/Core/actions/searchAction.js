import { types } from '../reducer/types';

export const searchAction = async (searchText) => {
    return { type: types.search, payload: searchText };
};
