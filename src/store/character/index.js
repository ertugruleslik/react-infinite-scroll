import { GET_CHARACTER_LIST, GET_CHARACTER, GET_CHARACTER_PENDING, GET_EPISODE } from './actions.type';

const initialState = {
    data: [],
    info: {},
    episodes: [],
    loading: false
};

function getList(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTER_LIST:
            return {
                ...state,
                info: {},
                loading: false,
                data: [...state.data, ...action.payload.results]
            };
        case GET_CHARACTER:
            return { ...state, info: action.payload };
        case GET_CHARACTER_PENDING:
            return { ...state, loading: true };
        case GET_EPISODE:
            return { ...state, episodes: action.payload };
        default:
            return state;
    }
}

export default getList;
