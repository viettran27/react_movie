import axios from 'axios';
import qs from "qs";

export const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '133a5441ee6dbe42f03350cc463f9f0a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: {
        serialize: params => qs.stringify({ ...params, api_key: apiConfig.apiKey })
    }
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;