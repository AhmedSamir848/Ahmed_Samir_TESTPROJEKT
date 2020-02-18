export const FETCH_FLATS = 'fetch_flats';

import Data from '../../Data/items';

export const fetchFlats = () => {
    return{
        type:FETCH_FLATS,
        payload:Data
    };
}