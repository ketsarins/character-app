import axios from 'axios';

export default {
    
    /**
     * Get the character's last known location endpoint.
     * @param {*} url 
     */
    getLocation(url) {
        return axios(url)
            .then(response => {
                return response.data;
            })
    },
}