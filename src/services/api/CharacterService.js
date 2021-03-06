import axios from 'axios';

/**
 * Character service included functions to deal with the resource server of the Rick and Morty API.
 */
export default {
    /**
    * Build url query string
    * @param {Query string object} params 
    */
    buildQuery(params) {
        // If parameter is number or array
        if (typeof params === 'number' || Array.isArray(params)) {
            return `${params}`;
        }

        if (typeof params === 'object' && Object.keys(params).length > 0) {
            const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
            return `?${queryString}`
        }

        // Parames is not object, empty object, number or array then return empty string
        return '';
    },
    /**
     * To get all characts
     */
    getAllCharacters() {
        return axios.get('/character')
            .then(response => {
                return response.data;
            })
    },

    /**
     * 
     * @param {*} id 
     */
    getCharacterById(id) {
        return axios.get(`/character/${id}`)
            .then(response => {
                return response.data;
            })
    },

    getCharacterEpisodes(url) {
        return axios.get(url)
            .then(response => {
                return response.data;
            })
    },

    /**
     * Filter characters by query parameters.
     * 
     * @param {Opject of query parameters.} params 
     */
    getCharactersWithFilters(params) {
        const queryStr = this.buildQuery(params);
        return axios.get(`/character/${queryStr}`)
            .then(response => {
                return response.data;
            })
    },
}