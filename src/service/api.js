import axios from 'axios';
const Api = axios.create({baseURL:"https://back-end-brandmonitor-production.up.railway.app",
});

export default Api;

