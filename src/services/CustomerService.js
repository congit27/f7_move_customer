import axios from 'axios';

const handleCustomerLogin = (userName, password) => {
    return axios.post('http://192.168.1.13:8080/api/login', userName, password);
};

const handleCustomerRegister = (email, fullName, password, userName, phone) => {
    return axios.post('http://192.168.1.13:8080/api/register', { email, fullName, password, userName, phone });
};

export default handleCustomerLogin;
export { handleCustomerRegister };
