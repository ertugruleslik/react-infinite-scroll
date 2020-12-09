import { GET_CHARACTER_LIST, GET_CHARACTER, GET_CHARACTER_PENDING, GET_EPISODE } from './actions.type';

import { getApi } from '../../util/api';

export const getCharacterList = (param) => {
    return dispatch => {
        dispatch({ type:GET_CHARACTER_PENDING })
        return getApi('/character', param).then(response => {
            dispatch({
                type: GET_CHARACTER_LIST,
                payload: response
            });
        });
    };
}


export const getCharacter = (param) => {
    return dispatch => {
        return getApi(`/character/${param}`).then(response => {
            dispatch({
                type: GET_CHARACTER,
                payload: response
            });
            return response;
        });
    };
}


export function getEpisode(param) {
    return dispatch => {
        return getApi(`/episode/${param}`).then(response => {
            dispatch({
                type: GET_EPISODE,
                payload: response
            });
        });
    };
}
