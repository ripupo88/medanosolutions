import { types } from '../reducer/types';
import { Apifetch } from '../../external/ApiFetch/Apifetch';

export const firstLoad = async () => {
    let resp;
    resp = await Apifetch.getInitial();
    return { type: types.firstLoad, payload: resp };
};
