import axios from 'axios';

const api = axios.create({
	baseURL: 'https://evaluator-backend.herokuapp.com/',
})

export default api;