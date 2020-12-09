const API = 'https://rickandmortyapi.com/api';

export const getApi = async (url, params) => {
    try {
        return await fetch(`${API}${url}?` + new URLSearchParams(params))
            .then(res => res.json());

    } catch (error) {
        throw error;
    }
}

