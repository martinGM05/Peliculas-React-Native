import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '5bada804875e6b795db769678504b6cc',
        language: 'es-ES'
    }
});

export default movieDB;