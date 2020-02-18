import { FETCH_FLATS } from "../actions/flats";

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FLATS:
            return {
                items: action.payload,
            };
        default:
            return state;
    }
};
