import axios from 'axios';

/**
 * Character service included functions to deal with the resource server of the Rick and Morty API.
 */
export default {

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
     * Filter characters
     * TODO:: Change params and url query parameters
     * @param {Query parameters.} params 
     */
    getCharactersWithFilters(params) {
        return axios.get(`/character/?status=${params}`)
        .then(response => {
            return response.data;
        })
    }
}