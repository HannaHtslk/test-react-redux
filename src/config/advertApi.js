import axios from 'axios';

const advertApi = axios.create({
  baseURL: 'https://66674861a2f8516ff7a701b3.mockapi.io',
});

export default advertApi;
