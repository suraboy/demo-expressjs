require('dotenv').config();
import axios from 'axios'
import curlAxios from './../helpers/curlAxios';
import dotenv from "dotenv";
dotenv.config();

/*Setup default data*/
const endpoint = `${process.env.GOOGLE_MAP_ENDPOINT}` + 'maps/api/directions/json';
const token = `${process.env.GOOGLE_MAP_TOKEN}`;

class googleApiService{
    async get(params) {
        params['token'] = token;
        return await axios.get(`${endpoint}`, {
            params: params
        })
            .then(function (response) {
                let res = {
                    'status': response.status,
                    'response': response.data
                };
                return res;
            })
            .catch(function (error) {
                console.log(error);
                let res = {
                    // 'status': error.response.status,
                    'response': error.response
                };
                return res;
            });
    }
}

export default new googleApiService();