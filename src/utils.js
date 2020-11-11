import Axios from 'axios';
let domain = 'https://455374c9490d.ngrok.io';
let source = Axios.CancelToken;
const http = Axios.create({
  baseURL: `${domain}/api`,
});

const authHttp = Axios.create({
  baseURL: `${domain}/api`,
});
authHttp.interceptors.request.use((config) => {
  let token = localStorage.getItem('access_token');
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});
export { authHttp, http };
