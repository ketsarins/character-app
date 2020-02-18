import axios from 'axios';

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