import axios from 'axios';

const handleCustomerLogin = (phone) => {
    return axios.post('http://172.21.2.76:8080/api/login', phone);
};

export default handleCustomerLogin;
