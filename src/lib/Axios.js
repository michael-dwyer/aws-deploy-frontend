import axios from 'axios';

const Axios = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://http://ec2-3-83-30-240.compute-1.amazonaws.com/api' : '',
    timeout: 50000
})

export default Axios;