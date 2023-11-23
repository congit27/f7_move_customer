import axios from 'axios';

const handleCustomerLogin = (userName, password) => {
    return axios.post('https://f7movebackend-production.up.railway.app/api/login', userName, password);
};

const handleCustomerRegister = (email, fullName, password, userName, phone) => {
    return axios.post('https://f7movebackend-production.up.railway.app/api/register', {
        email,
        fullName,
        password,
        userName,
        phone,
    });
};

export default handleCustomerLogin;
export { handleCustomerRegister };
