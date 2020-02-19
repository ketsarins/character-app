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
    }
}