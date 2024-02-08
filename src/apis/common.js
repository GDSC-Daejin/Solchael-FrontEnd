import axios from 'axios';

export const instance = axios.create({ baseURL: 'http://35.216.98.123:8080', timeout: 60000 });
